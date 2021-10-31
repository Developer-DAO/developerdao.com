import { useTranslation } from 'next-i18next';
import {
  Text,
  Container,
  Box,
  Skeleton,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import { useAvailableTokens } from '../../hooks/useAvailableTokens';

interface TokenListProps {
  setSelectedToken: (token?: string) => void;
}

export function TokenList({ setSelectedToken }: TokenListProps) {
  const { t } = useTranslation();
  const { availableTokens, isFetchingAvailableTokens } = useAvailableTokens();

  const handleTokenClick = (token: string) => {
    setSelectedToken(token);
  };

  return (
    <Container maxW="container.lg">
      <Heading>{t('mintPageHeader')}</Heading>
      <Text fontSize="xl" mb={4}>
        {t('mintPagePickToken')}
      </Text>
      {!isFetchingAvailableTokens && availableTokens.length === 0 && (
        <Text fontSize="lg" mb={4}>
          {t('noTokensAvailable')}
        </Text>
      )}
      <SimpleGrid spacing="20px" minChildWidth="100px">
        {isFetchingAvailableTokens
          ? Array.from(Array(24)).map((_, i) => (
              <Box key={`skeleton-${i}`}>
                <Skeleton
                  height="40px"
                  speed={1.2}
                  fadeDuration={0.6}
                  data-testid="grid-loading-skeleton"
                />
              </Box>
            ))
          : availableTokens.map((token) => (
              <Box
                key={token}
                onClick={() => handleTokenClick(token)}
                as="button"
                _hover={{
                  background: 'white',
                }}
                height="40px"
                borderWidth="2px"
                borderRadius="md"
                fontWeight="semibold"
                letterSpacing="wide"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
              >
                {token}
              </Box>
            ))}
      </SimpleGrid>
    </Container>
  );
}
