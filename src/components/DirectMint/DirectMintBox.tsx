import React from 'react';
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

interface DirectMintBoxProps {
  setSelectedToken: (token?: string) => void;
  selectedToken?: string;
}
// Layout for the Direct Mint Box
// used on the minting page
const DirectMintBox = ({
  setSelectedToken,
  selectedToken,
}: DirectMintBoxProps) => {
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
                onClick={() => setSelectedToken()}
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
