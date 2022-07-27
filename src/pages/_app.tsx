

import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/inter/variable-full.css';
import '@fontsource/source-code-pro/400.css';
import '@fontsource/source-code-pro/600.css';
import { appWithTranslation} from 'next-i18next';
import { AppProps } from 'next/app';
import Page from '../layout';
import '../styles/globals.css';
import { theme } from '../theme';
import SEO from '../components/SEO';




const App = ({ Component, pageProps }: AppProps) => (
  <>
    <SEO />
    <ChakraProvider theme={theme}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ChakraProvider>
  </>
);

export default appWithTranslation(App);
