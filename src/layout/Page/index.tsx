import React from 'react';
import { Stack } from '@chakra-ui/react';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';

function Page({ children }: { children?: object }) {
  return (
    <Stack spacing={10}>
      <Nav />
      {children}
      <Footer />
    </Stack>
  );
}

export default Page;
