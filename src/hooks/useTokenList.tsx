import { useEffect, useMemo, useState } from 'react';
import {
  FallbackProvider,
  AlchemyProvider,
  InfuraProvider,
} from '@ethersproject/providers';
import { ethers } from 'ethers';
import {
  DEVELOPER_DAO_CONTRACT,
  DEVELOPER_DAO_CONTRACT_ABI,
} from '../utils/DeveloperDaoConstants';

const MIN_TOKEN = 1;
const MAX_TOKEN = 8000;

async function getTransferEvents(contract: Partial<ethers.Contract>) {
  const transferFilter = contract?.filters?.Transfer();
  if (contract?.queryFilter && transferFilter) {
    const transferredTokens = await contract.queryFilter(
      transferFilter,
      0,
      'latest',
    );
    return transferredTokens;
  }
  return [];
}

type TokenData = {
  [key: string]: TokenTraits & TokenInfo;
};

type TokenMetaData = {
  [key: string]: TokenTraits;
};

type TokenInfo = {
  to: string | null;
  isClaimed: boolean;
};

type TokenTraits = {
  os: string;
  textEditor: string;
  clothing: string;
  language: string;
  industry: string;
  location: string;
  mind: string;
  vibe: string;
};

const tokenTraits = [
  'os',
  'textEditor',
  'clothing',
  'language',
  'industry',
  'location',
  'mind',
  'vibe',
];

type GroupedOptions = {
  label: string;
  options: { label: string; value: string }[];
}[];

interface Props {
  filter: string[];
  showOnlyAvailable: boolean;
}

export function useTokenList({ filter, showOnlyAvailable = false }: Props) {
  const [tokens, setTokens] = useState<{ [key: string]: TokenData }>({});
  const [isFetchingTokens, setIsFetchingTokens] = useState(false);
  const [tokenMetaData, setTokenMetaData] = useState<TokenMetaData>({});

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const provider = new FallbackProvider([
          { provider: new InfuraProvider() },
          { provider: new AlchemyProvider() },
        ]);

        let contract: Partial<ethers.Contract> = new ethers.Contract(
          DEVELOPER_DAO_CONTRACT,
          DEVELOPER_DAO_CONTRACT_ABI,
          provider,
        );
        setIsFetchingTokens(true);
        const response = await fetch('/developers.json');
        const metaData = await response.json();
        setTokenMetaData(metaData);
        const tokenList: { [key: string]: TokenData } = {};

        const events = await getTransferEvents(contract);

        // claimed tokens
        events.forEach((tx) => {
          const to: string = tx?.args?.to;
          const tokenId: string = tx?.args?.tokenId;
          tokenList[tokenId] = {
            to,
            isClaimed: true,
            ...metaData[tokenId],
          };
        });

        // unclaimed tokens
        for (let i = MIN_TOKEN; i <= MAX_TOKEN; i++) {
          if (!tokenList[i]) {
            tokenList[i] = { to: null, isClaimed: false, ...metaData[i] };
          }
        }

        setTokens(tokenList);
      } catch (error) {
        console.log('Error getting available Tokenlist', error);
      } finally {
        setIsFetchingTokens(false);
      }
    };
    fetchTokens();
  }, []);

  const availableTokens = useMemo(() => {
    let available: { [key: string]: TokenData } = {};
    Object.keys(tokens).forEach((tokenId) => {
      if (!tokens[tokenId].isClaimed) {
        available[tokenId] = tokens[tokenId];
      }
    });
    return available;
  }, [tokens]);

  const filteredTokens = useMemo(() => {
    const tokenList = showOnlyAvailable ? availableTokens : tokens;
    if (filter.length > 0) {
      const filtered: { [key: string]: TokenData } = {};

      Object.keys(tokenList).forEach((tokenId: any) => {
        const token = tokenList[tokenId];
        let numMatches = 0;
        tokenTraits.forEach((trait) => {
          const value = token[trait] as any;
          if (filter.includes(value)) {
            numMatches++;
          }
        });
        if (numMatches === filter.length) {
          filtered[tokenId] = token;
        }
      });
      return filtered;
    }
    return tokenList;
  }, [tokens, filter, availableTokens, showOnlyAvailable]);

  const groupedOptions = useMemo(() => {
    let groups: GroupedOptions = [];
    Object.keys(tokenMetaData).map((key) => {
      const meta = tokenMetaData[key];
      return Object.keys(meta).map((metaKey) => {
        const metaValue = meta[metaKey as keyof TokenTraits];
        if (!groups.find((group) => group.label === metaKey)) {
          groups.push({
            label: metaKey,
            options: [
              {
                label: metaValue,
                value: metaValue,
              },
            ],
          });
        } else {
          const group = groups.find((group) => group.label === metaKey);
          if (
            group &&
            !group.options.find((option) => option.value === metaValue)
          ) {
            group.options.push({
              label: metaValue,
              value: metaValue,
            });
          }
        }
      });
    });

    return groups;
  }, [tokenMetaData]);

  return {
    tokens: filteredTokens,
    groupedOptions,
    isFetchingTokens,
  };
}
