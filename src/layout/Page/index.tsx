import React from 'react';
import { Stack, Box } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';

function Page({ children }: { children?: object }) {
  const bg = useColorModeValue(
    'radial-gradient(26.46% 26.46% at 64.58% 8.69%, rgba(63, 70, 243, 0.18) 0%, rgba(63, 70, 243, 0) 100%), radial-gradient(43.06% 85.14% at 94.1% 7.91%, rgba(167, 170, 241, 0.03) 0%, rgba(238, 238, 252, 0.03) 100%), #FFFFFF',
    'radial-gradient(26.46% 26.46% at 64.58% 8.69%, rgba(63, 70, 243, 0.18) 0%, rgba(63, 70, 243, 0) 100%), radial-gradient(43.06% 85.14% at 94.1% 7.91%, rgba(167, 170, 241, 0.03) 0%, rgba(238, 238, 252, 0.03) 100%), #0F0F1A',
  );
  return (
    <Box height="100%" bg={bg}>
      <Stack spacing={10}>
        <Nav />
        {children}
        <Footer />
      </Stack>
    </Box>
  );
}

export default Page;
