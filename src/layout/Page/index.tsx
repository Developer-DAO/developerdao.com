import React from 'react';
import { Box, Flex, Image, Stack, Text, useColorMode } from '@chakra-ui/react';
import Header from '../../Components/Header';
import Marquee from 'react-fast-marquee';

function Page({ children }: { children?: object }) {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Marquee
        style={{
          background: `${colorMode === 'dark' ? '#ffffff' : '#000000'}`,
          width: '100%',
          height: '44px',
          top: '0',
          left: '0',
          position: 'fixed',
          zIndex: 10,
        }}
        gradient={false}
        loop={0}
        speed={60}
      >
        <Flex>
          <Image
            src={`/Blur-img-${colorMode === 'dark' ? 'dark' : 'light'}.svg`}
            alt="Blur"
          />
          <Text
            ml={2}
            variant="medium"
            color={colorMode === 'light' ? '#ffffff' : '#000000'}
          >
            Current Status: Season 0
          </Text>
        </Flex>
      </Marquee>
      <Stack
        paddingY="2.06rem"
        paddingX={{ base: '16px', md: '4px', lg: '48px' }}
        spacing={10}
      >
        <Header />
        {children}
      </Stack>
      <Marquee
        style={{
          background: `${colorMode === 'light' ? '#ffffff' : '#000000'}`,
          width: '100%',
          height: '44px',
          bottom: '0',
          left: '0',
          position: 'fixed',
          zIndex: 10,
        }}
        gradient={false}
        loop={0}
        speed={60}
      >
        <Flex>
          <Image
            src={`/Blur-img-${colorMode === 'dark' ? 'light' : 'dark'}.svg`}
            alt="Blur"
          />
          <Text
            variant="medium"
            color={colorMode === 'dark' ? '#ffffff' : '#000000'}
            ml={2}
          >
            Current Status: Season 0
          </Text>
        </Flex>
      </Marquee>
    </Box>
  );
}

export default Page;
