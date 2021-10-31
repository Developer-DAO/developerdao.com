import React from 'react';
import { Stack, Box } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';

function Page({ children }: { children?: object }) {
  const bg = useColorModeValue('#fff', '#0F0F1A');
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
