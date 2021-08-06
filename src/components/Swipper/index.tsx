import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Swipper.module.scss';

import { Flex, Image, Text } from '@chakra-ui/react';

const Swipper: React.FC = () => {
  return (
    <>
      <Swiper navigation={true} pagination={true} className={styles.mySwiper}>
        <SwiperSlide>
          <Flex className={styles.centered} flexDirection="column">
            <Text fontSize={['4xl', '7xl']} fontWeight="700">
              América do Norte
            </Text>
          </Flex>
          <Image src="https://images.unsplash.com/photo-1508693926297-1d61ee3df82a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
        </SwiperSlide>
        <SwiperSlide>
          <Flex className={styles.centered} flexDirection="column">
            <Text fontSize={['4xl', '7xl']} fontWeight="700">
              América do Sul
            </Text>
          </Flex>
          <Image src="https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" />
        </SwiperSlide>
        <SwiperSlide>
          <Flex>
            <Flex className={styles.centered} flexDirection="column">
              <Text fontSize={['4xl', '7xl']} fontWeight="700">
                Ásia
              </Text>
            </Flex>
          </Flex>
          <Image src="https://images.unsplash.com/photo-1522547902298-51566e4fb383?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80" />
        </SwiperSlide>
        <SwiperSlide>
          <Flex className={styles.centered} flexDirection="column">
            <Text fontSize={['4xl', '7xl']} fontWeight="700">
              África
            </Text>
          </Flex>
          <Image src="https://images.unsplash.com/photo-1489493887464-892be6d1daae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80" />
        </SwiperSlide>
        <SwiperSlide>
          <Flex className={styles.centered} flexDirection="column">
            <Text fontSize={['4xl', '7xl']} fontWeight="700">
              Europa
            </Text>
          </Flex>
          <Image src="https://images.unsplash.com/photo-1471623432079-b009d30b6729?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
        </SwiperSlide>
        <SwiperSlide>
          <Flex className={styles.centered} flexDirection="column">
            <Text fontSize={['4xl', '7xl']} fontWeight="700">
              Oceania
            </Text>
          </Flex>
          <Image src="https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=717&q=80" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Swipper;
