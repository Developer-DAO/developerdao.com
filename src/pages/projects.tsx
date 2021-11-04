import { Box, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();

  return (
    <Box mb={20}>
      <Box as="section" pt={40} pb={{ base: 20, md: 36 }}>
        <Box mx="auto" maxW="6xl" py={3} px={4}>
          <Text fontSize="xl">{t('projects')}</Text>
          <Text my={2} color="gray.600">
            {t('projectsList')}
          </Text>
          <UnorderedList spacing="1">
            <ListItem>
              <Link
                href="https://ddao.ibby.dev/"
                textDecoration="underline"
                isExternal
                mr={1}
              >
                {t('ddaoTokenSearch')}
              </Link>
              - {t('by')}
              <Link
                href="https://github.com/Ibby-devv"
                textDecoration="underline"
                isExternal
                ml={1}
              >
                Brian Eter
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://developerdao.vercel.app/"
                textDecoration="underline"
                isExternal
                mr={1}
              >
                {t('ddaoUnofficalFrontend')}
              </Link>
              - {t('by')}
              <Link
                href="https://github.com/fmoliveira"
                textDecoration="underline"
                isExternal
                ml={1}
              >
                fmoliveira
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://devdao.raz.works"
                textDecoration="underline"
                isExternal
                mr={1}
              >
                {t('ddaoTokenVisualizer')}
              </Link>
              - {t('by')}
              <Link
                href="https://github.com/RazorSiM"
                textDecoration="underline"
                isExternal
                ml={1}
              >
                Raz
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Projects;
