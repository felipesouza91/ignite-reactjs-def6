import { Avatar, Flex, Image, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import React from 'react';
import City from '../../components/City';
import Header from '../../components/Header';
import { continents } from '../../datas';
import styles from './Country.module.scss';

interface ICity {
  cityImage: string;
  cityName: string;
  countryName: string;
  countryFlagImage: string;
}

interface ICountryProps {
  continent: {
    continentName: string;
    desciption: string;
    countrySize: number;
    lenguageSize: string;
    citiesSize: string;
    mainCities: ICity[];
  };
}

const Country: React.FC<ICountryProps> = ({ continent }) => {
  console.log(continent);
  return (
    <>
      <Header />
      <Flex flexDir="column" flex="1">
        <Flex
          h="430px"
          backgroundImage="https://images.unsplash.com/photo-1471623432079-b009d30b6729?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          backgroundSize="cover"
          justifyContent="center"
        >
          <Flex className={styles.container} alignItems="flex-end" p="14">
            <Text fontSize="5xl" color="#F5F8FA" fontWeight="600">
              {continent.continentName}
            </Text>
          </Flex>
        </Flex>
        <Flex justifyContent="center">
          <Flex
            flexDirection={['column', 'row']}
            justifyContent="space-between"
            alignContent="center"
            alignItems="center"
            className={styles.container}
            p="14"
          >
            <Flex maxW="600px">
              <Text fontSize="xl">{continent.desciption}</Text>
            </Flex>
            <Flex justifyContent="space-between" flex="1" maxW="490px">
              <Flex flexDir="column" alignItems="center">
                <Text color="#FFBA08" fontSize="5xl" fontWeight="600">
                  {continent.countrySize}
                </Text>
                <Text fontSize="xl" fontWeight="500">
                  países
                </Text>
              </Flex>
              <Flex flexDir="column" alignItems="center">
                <Text color="#FFBA08" fontSize="5xl" fontWeight="600">
                  {continent.lenguageSize}
                </Text>
                <Text fontSize="xl" fontWeight="500">
                  línguas
                </Text>
              </Flex>
              <Flex flexDir="column" alignItems="center">
                <Text color="#FFBA08" fontSize="5xl" fontWeight="600">
                  {continent.citiesSize}
                </Text>
                <Text fontSize="xl" fontWeight="500">
                  cidades +100
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex justifyContent="center">
          <Flex
            flexDirection="column"
            alignContent="center"
            alignItems="flex-start"
            className={styles.container}
            px="14"
            py="5"
          >
            <Text color="#47585B" fontSize="4xl" fontWeight="500" mb="10">
              Cidades +100
            </Text>

            <Flex flexWrap="wrap" justifyContent="space-between">
              {continent.mainCities.map((city, index) => (
                <City
                  key={index}
                  cityImage={city.cityImage}
                  cityName={city.cityName}
                  countryFlagImage={city.countryFlagImage}
                  countryName={city.countryName}
                />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;
  const continentFind = continents.find(item => item.id === slug);
  if (!continentFind) {
    return {
      redirect: {
        statusCode: '404',
        permanent: false,
      },
    };
  }
  const {
    continentName,
    desciption,
    countrySize,
    lenguageSize,
    citiesSize,
    mainCities,
  } = continentFind;
  return {
    props: {
      continent: {
        continentName,
        desciption,
        countrySize,
        lenguageSize,
        citiesSize,
        mainCities,
      },
    },
  };
};

export default Country;
