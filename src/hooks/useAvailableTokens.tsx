import { useEffect, useState } from 'react';
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

export function useAvailableTokens() {
  const [tokens, setTokens] = useState<string[]>([]);
  const [isFetchingTokens, setIsFetchingTokens] = useState(false);

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
        const claimedTokens: { [key: number]: string } = {};

        const transferredTokens = await getTransferEvents(contract);
        transferredTokens.forEach((tx) => {
          const to: string = tx?.args?.to;
          const tokenId: number = tx?.args?.tokenId;
          claimedTokens[tokenId] = to;
        });
        let availableTokens = [];
        for (let i = MIN_TOKEN; i <= MAX_TOKEN; i++) {
          if (!claimedTokens[i]) {
            availableTokens.push(i.toString());
          }
        }

        setTokens(availableTokens);
      } catch (error) {
        console.log('Error getting available Tokenlist', error);
      } finally {
        setIsFetchingTokens(false);
      }
    };
    fetchTokens();
  }, []);

  return {
    availableTokens: tokens,
    isFetchingAvailableTokens: isFetchingTokens,
  };
}
