import { Flex, Image } from '@chakra-ui/react';

import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <Flex w="1440" h="50" justifyContent="center" alignItems="center">
      <Image src="/Logo.png" w="20" h="5"/>
    </Flex>
  );
};

export default Header;
