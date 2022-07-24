import { Divider, useColorMode, VStack } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// COMPONENTS
import Footer from '../Components/Footer';
import IntroComponent from '../Components/Intro';
import Partners from '../Components/Partners';
import Values from '../Components/Values';

export default function IndexPage({ partnerData }: Record<string, any>) {
  const { colorMode } = useColorMode();

  return (
    <VStack w="full" justify="center" spacing={4}>
      <IntroComponent />
      <Values />
      <Partners partnerData={partnerData} />
      <Divider
        w="full"
        size="1px"
        color={colorMode === 'dark' ? '#ffffff' : '#000000'}
      />
      <Footer />
    </VStack>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_API,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query HomePage {
        partners {
          data {
            attributes {
              website
              logo_dark {
                data {
                  attributes {
                    url
                  }
                }
              }
              logo_light {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      partnerData: data.partners.data,
    },
  };
};
