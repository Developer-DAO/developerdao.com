import React, { ReactNode } from 'react';
import { appWithTranslation } from 'next-i18next';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/inter/variable-full.css';
import '@fontsource/source-code-pro/400.css';
import '@fontsource/source-code-pro/600.css';
import { AppProps } from 'next/app';
import { theme } from '../theme';
import PlausibleProvider from 'next-plausible';
import SEO from '../components/SEO';

const Plausible = ({ children }: { children: ReactNode }) => {
  return process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ? (
    <PlausibleProvider domain="developerdao.com">{children}</PlausibleProvider>
  ) : (
    <>{children}</>
  );
};

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <SEO />
    <Plausible>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Plausible>
  </>
);

export default appWithTranslation(App);
