import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/inter/variable-full.css';
import '@fontsource/source-code-pro/400.css';
import '@fontsource/source-code-pro/600.css';
import { appWithTranslation, useTranslation } from 'next-i18next';
import PlausibleProvider from 'next-plausible';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { ReactNode } from 'react';
import Page from '../layout';
import '../styles/globals.css';
import { theme } from '../theme';
import { DEVELOPER_DAO_WEBSITE } from '../utils/DeveloperDaoConstants';

const socialBanner = `${DEVELOPER_DAO_WEBSITE}/social-banner.png`;

const Plausible = ({ children }: { children: ReactNode }) => {
  return process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ? (
    <PlausibleProvider domain="developerdao.com">{children}</PlausibleProvider>
  ) : (
    <>{children}</>
  );
};

function SEO() {
  const { t } = useTranslation();

  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="DeveloperDaoFavicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      {/* Primary Meta Tags */}
      <title>{t('title')}</title>
      <meta name="title" content={t('title')} />
      <meta name="description" content={t('description')} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.developerdao.com/" />
      <meta property="og:title" content={t('title')} />
      <meta property="og:description" content={t('description')} />
      <meta property="og:image" content={socialBanner} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.developerdao.com/" />
      <meta property="twitter:title" content={t('title')} />
      <meta property="twitter:description" content={t('description')} />
      <meta property="twitter:image" content={socialBanner} />
      {/* Favicon Images */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicon-16x16.png"
      />
      <link rel="manifest" href="site.webmanifest" />
      <link rel="mask-icon" href="safari-pinned-tab.svg" color="#000000" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      {/*
site.webmanifest provides metadata used when your web app is installed on a
user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    */}
      <link rel="manifest" href="site.webmanifest" />
    </Head>
  );
}

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <SEO />
    <Plausible>
      <ChakraProvider theme={theme}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ChakraProvider>
    </Plausible>
  </>
);

export default appWithTranslation(App);
