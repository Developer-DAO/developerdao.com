import { Footer, NavBar } from '@/components/common';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useColorModeValue, Box, chakra } from '@chakra-ui/react';
export interface IAppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: IAppLayoutProps) {
  const darkGradient =
    'radial-gradient(circle at 70% 2%, hsl(252 40.1% 22.5%), rgba(255, 255, 255, 0) 40%)';
  const lightGradient =
    'radial-gradient(circle at 70% 2%, hsl(252 85.1% 93.0%), rgba(255, 255, 255, 0) 40%)';
  const background = useColorModeValue(lightGradient, darkGradient);
  const router = useRouter();
  const currentPath = router.asPath;
  const isLandingPage = currentPath === '/';
  return (
    <>
      {isLandingPage ? (
        <Box
          inset={0}
          position="absolute"
          zIndex={-1}
          background={background}
        />
      ) : null}

      <NavBar />
      <chakra.main>{children}</chakra.main>
      <Footer />
    </>
  );
}
