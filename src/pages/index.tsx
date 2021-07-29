import { Flex, Text, Center, Divider } from '@chakra-ui/react';

import Header from '../components/Header';
import Swipper from '../components/Swipper';
import styles from './Home.module.scss';
export default function Home() {
  return (
    <>
      <Header />
      <Flex flexDirection="column">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          backgroundColor="blue"
          h="163"
          paddingX="4"
          paddingY="7"
          color="#F5F8FA"
        >
          <Text fontSize="xl" pb="2" fontWeight="500">
            5 Continentes, <br/> infinitas possibilidades.
          </Text>
          <Text fontSize="sm">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
        <Flex flexDir="column" px="12" py="9">
          <Flex justifyContent="space-between">
            <Flex flexDir="column">
              <Flex alignItems="baseline" mb={6}>
                <div className={ styles.elipse}></div>
                <Text size="4" fontWeight="500">vida noturna</Text>
              </Flex>
              <Flex alignItems="baseline">
                <div className={ styles.elipse}></div>
                <Text size="4" fontWeight="500">moderno</Text>
              </Flex>
            </Flex>
            <Flex flexDir="column" justifyContent="flex-end">
              <Flex alignItems="baseline" justifyContent= "flex-end" mb={6}>
                <div className={ styles.elipse}></div>
                <Text size="4" fontWeight="500">praia</Text>
              </Flex>
              <Flex alignItems="baseline" justifyContent= "flex-end">
                <div className={ styles.elipse}></div>
                <Text size="4" fontWeight="500">clássico</Text  >
              </Flex>
            </Flex>
          </Flex>
          <Flex alignItems="baseline" justifyContent= "center" mt="6">
            <div className={ styles.elipse}></div>
            <Text size="4" fontWeight="500">e mais</Text  >
          </Flex>  
        </Flex>
        <Center flex="1">
          <div className={ styles.divider}/>
        </Center>
        <Flex justifyContent="center" mb="5">
          <Text fontSize="2xl" pt="5" px="9">
            Vamos nessa?  Então escolha seu continente
          </Text>
        </Flex>
        <Flex flex="1" maxHeight="500px">
          <Swipper />
        </Flex>
      </Flex>
    </>
  );
}
