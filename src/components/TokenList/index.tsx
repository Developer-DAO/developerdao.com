import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import {
  Text,
  Container,
  Box,
  Skeleton,
  Heading,
  SimpleGrid,
  Button,
  Checkbox,
  Flex,
} from '@chakra-ui/react';
import { useTokenList } from '../../hooks/useTokenList';
import { useState } from 'react';
import Select, { OnChangeValue } from 'react-select';

const TOKENS_PER_PAGE = 100;

export function TokenList() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<string[]>([]);
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);
  const { tokens, isFetchingTokens, groupedOptions } = useTokenList({
    filter,
    showOnlyAvailable,
  });

  const [currentPage, setCurrentPage] = useState(1);

  const handleSelect = (selected: OnChangeValue<{ value: string }, true>) => {
    setFilter(selected.map((option) => option.value));
  };

  const maxToken = currentPage * TOKENS_PER_PAGE;
  const tokenList = Object.keys(tokens);
  const tokensVisible =
    tokenList.length < maxToken ? tokenList.length : maxToken;
  const hasNextPage = maxToken < tokenList.length;
  return (
    <Container maxW="container.lg">
      <Heading>{t('mintPageHeader')}</Heading>
      <Text fontSize="xl" mb={4}>
        {t('mintPagePickToken')}
      </Text>
      {!isFetchingTokens && tokenList.length === 0 && (
        <Text fontSize="lg" mb={4}>
          {t('noTokensAvailable')}
        </Text>
      )}
      <Box marginBottom={2}>
        <Select
          defaultValue={[]}
          isMulti
          name="colors"
          // @ts-ignore
          options={groupedOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          isSearchable
          onChange={handleSelect}
        />
      </Box>
      <Flex marginBottom={8} justify="space-between">
        <Box>
          Showing {tokensVisible} of {tokenList.length} tokens (8000 total)
        </Box>
        <Checkbox
          size="md"
          isChecked={showOnlyAvailable}
          onChange={() => setShowOnlyAvailable((state) => !state)}
        >
          Show only available tokens
        </Checkbox>
      </Flex>

      <SimpleGrid spacingX="20px" spacingY="30" minChildWidth="150px">
        {isFetchingTokens
          ? Array.from(Array(25)).map((_, i) => (
              <Box key={`skeleton-${i}`}>
                <Skeleton
                  height="100px"
                  speed={1.2}
                  fadeDuration={0.6}
                  data-testid="grid-loading-skeleton"
                />
              </Box>
            ))
          : tokenList.slice(0, maxToken).map((tokenId) => (
              <Link href={`/mint?token=${tokenId}`} key={tokenId} passHref>
                <Box
                  as="button"
                  _hover={{
                    background: 'white',
                  }}
                  background="white"
                  height="175px"
                  borderWidth="2px"
                  borderRadius="md"
                  fontWeight="semibold"
                  cursor="pointer"
                  fontSize="12px"
                  position="relative"
                >
                  <Box mt="-40px" mb="10px" fontSize={14}>
                    <strong>Dev #{tokenId}</strong>
                  </Box>
                  <div>{tokens[tokenId].os}</div>
                  <div>{tokens[tokenId].textEditor}</div>
                  <div>{tokens[tokenId].clothing}</div>
                  <div>{tokens[tokenId].language}</div>
                  <div>{tokens[tokenId].industry}</div>
                  <div>{tokens[tokenId].location}</div>
                  <div>{tokens[tokenId].mind}</div>
                  <div>{tokens[tokenId].vibe}</div>
                </Box>
              </Link>
            ))}
      </SimpleGrid>
      {!isFetchingTokens && tokenList.length > 0 && (
        <Button
          onClick={() => setCurrentPage((state) => state + 1)}
          disabled={!hasNextPage}
          width="100%"
          mt={4}
        >
          Load more
        </Button>
      )}
    </Container>
  );
}
