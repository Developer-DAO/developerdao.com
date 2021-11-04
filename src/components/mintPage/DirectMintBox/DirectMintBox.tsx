import DirectMint from '@/components/mintPage/DirectMintBox/DirectMint';
import { Logo } from '@/components/common';
import { Box, Container, Heading, Stack, Text, Link } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { DEVELOPER_DAO_CONSTANTS } from '@/constants';
const { TOKEN_FINDER_URL } = DEVELOPER_DAO_CONSTANTS;
// Layout for the Direct Mint Box
// used on the minting page
const DirectMintBox = () => {
  const { t } = useTranslation();
  return (
    <Box as="section" pt={40} pb={{ base: 20, md: 36 }}>
      <Container maxW="container.md" centerContent>
        <Box
          borderWidth="4px"
          borderRadius="lg"
          w={{ base: '75%', s: '90%' }}
          padding="20"
        >
          <Stack spacing={6} align="center">
            <Logo w={52} h={52} />
            <Heading fontSize={{ base: '1.25rem', sm: '2rem' }}>
              {t('mintPageHeader')}
            </Heading>
            <Text fontSize={{ base: 'xs', sm: 'xl' }}>
              {t('availableTokensText')}{' '}
              <Link color="#3182ce" href={TOKEN_FINDER_URL} isExternal>
                {t('here')}
              </Link>
            </Text>
            <DirectMint />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default DirectMintBox;
