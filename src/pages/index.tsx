import { Flex, Text } from '@chakra-ui/react';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <Flex flexDirection="row">
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
            5 Continentes, <p>infinitas possibilidades.</p>
          </Text>
          <Text fontSize="sm">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
