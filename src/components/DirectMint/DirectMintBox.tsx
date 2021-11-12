import React from 'react';
import { useRouter } from 'next/router';
import DirectMint from './DirectMint';
import Logo from '../../components/Logo';
import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Link,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { TOKEN_FINDER_URL } from '../../utils/DeveloperDaoConstants';

// Layout for the Direct Mint Box
// used on the minting page
const DirectMintBox = () => {
  const router = useRouter();
  const selectedToken = router?.query?.token as string | undefined;

  const { t } = useTranslation();
  return (
    <>
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
            <DirectMint selectedToken={selectedToken} />
            <Flex align="center">
              <ArrowBackIcon w={5} h={5} mr={1} />
              <Box
                as="a"
                href="#"
                fontWeight="bold"
                onClick={() => router.back()}
              >
                {t('backTokenList')}
              </Box>
            </Flex>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default DirectMintBox;
