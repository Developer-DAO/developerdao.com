import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useState,
  useEffect,
} from 'react';
import {
  useToast,
  Button,
  Input,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  CircularProgress,
  Center,
  Link,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ethers } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3Modal from 'web3modal';
import { useTranslation } from 'next-i18next';
import { DEVELOPER_DAO_CONSTANTS } from '@/constants';

import MINT_CONTRACT from '@/artifacts/ddao.json';
let _provider: any = null;
let _signer: any = null;
let mint_contract: Partial<ethers.Contract>;

interface DirectMintProps {
  developerId?: string;
}

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
    },
  },
};
const {
  DEVELOPER_DAO_CONTRACT,
  ERROR_CODE_TX_REJECTED_BY_USER,
  MAINNET_NETWORK_ID,
  ETHERSCAN_TX_URL,
} = DEVELOPER_DAO_CONSTANTS;
const DirectMint = ({ developerId }: DirectMintProps) => {
  const { t } = useTranslation();

  const [userWallet, setUserWallet] = useState('');
  const [tokenID, setTokenID] = useState(developerId ? developerId : '');
  const [networkError, setNetworkError] = useState(false);
  const [web3Modal, setWeb3Modal] = useState<Web3Modal>();
  const [txInProgress, setTxInProgress] = useState(false);
  const [txReceipt, setTxReceipt] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  useEffect(() => {
    const web3Modal = new Web3Modal({
      network: 'mainnet',
      cacheProvider: false,
      providerOptions,
    });
    setWeb3Modal(web3Modal);
  }, []);

  const fetchAccountData = async () => {
    const _web3 = new ethers.providers.Web3Provider(_provider);
    _signer = _web3.getSigner();
    mint_contract = new ethers.Contract(
      DEVELOPER_DAO_CONTRACT,
      MINT_CONTRACT.abi,
      _signer,
    );

    const accounts = await _web3.listAccounts();
    const { chainId } = await _web3.getNetwork();

    const selectedAccount = accounts[0];

    setUserWallet(selectedAccount);
    _checkNetwork(chainId);
  };

  const _checkNetwork = (chainId: number) => {
    if (chainId === MAINNET_NETWORK_ID) {
      return true;
    }
    setNetworkError(true);
  };

  const connectWallet = async () => {
    web3Modal?.clearCachedProvider();

    try {
      _provider = await web3Modal?.connect();
    } catch (e) {
      console.log('Could not get a wallet connection', e);
      return;
    }

    _provider.on('accountsChanged', (accounts: string) => {
      fetchAccountData();
    });

    _provider.on('chainChanged', (chainId: string) => {
      fetchAccountData();
    });

    _provider.on('networkChanged', (networkId: string) => {
      setNetworkError(false);
      fetchAccountData();
    });

    _provider.on('disconnect', (error: { code: number; message: string }) => {
      web3Modal?.clearCachedProvider();
      setUserWallet('');
      setTxInProgress(false);
      setTxReceipt('');
    });

    await fetchAccountData();
  };

  const disconnectWallet = async () => {
    await web3Modal?.clearCachedProvider();
    setUserWallet('');
    setTxInProgress(false);
    setTxReceipt('');
  };

  const tokenNameHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTokenID(event.target.value);
  };

  const createTokenHandler: MouseEventHandler<HTMLButtonElement> = async (
    event,
  ) => {
    try {
      const tx = await mint_contract.claim(tokenID);
      setTxInProgress(true);
      onOpen();

      const receipt = await tx.wait();
      setTxReceipt(receipt.transactionHash);

      if (receipt.status === 0) {
        throw new Error('Transaction failed');
      }
    } catch (error: any) {
      setTxInProgress(false);
      if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
        toast({
          title: t('userCancelTransaction'),
          status: 'error',
          isClosable: true,
        });
        return;
      }

      toast({
        title: t('errorMinting'),
        description: t('tokenUnavailable'),
        status: 'error',
        isClosable: true,
      });
      setTokenID('');
      return;
    }
    setTokenID('');
  };

  const modalCloseHandler = () => {
    setTxInProgress(false);
    setTxReceipt('');
    onClose();
  };

  return (
    <>
      {!userWallet && (
        <Button
          w="100%"
          colorScheme="blue"
          onClick={connectWallet}
          mt="10"
          fontSize={{ base: 's', sm: 'xl' }}
        >
          {t('connectWalletText')}
        </Button>
      )}
      {userWallet && (
        <>
          <Input
            w="100%"
            size="md"
            value={tokenID}
            onChange={tokenNameHandler}
            type="text"
            placeholder={t('tokenIDPlaceholder')}
            mt="10"
          ></Input>

          <Button
            w="100%"
            colorScheme="green"
            onClick={createTokenHandler}
            disabled={networkError}
            mt="10"
            fontSize={{ base: 's', sm: 'xl' }}
          >
            {t('mintTokenText')}
          </Button>

          <Button
            w="100%"
            colorScheme="orange"
            onClick={disconnectWallet}
            mt="10"
            fontSize={{ base: 's', sm: 'xl' }}
          >
            {t('disconnectWallet')}
          </Button>
        </>
      )}

      {txInProgress && (
        <Modal
          isOpen={isOpen}
          onClose={modalCloseHandler}
          closeOnOverlayClick={false}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Processing transaction...</ModalHeader>
            {txReceipt && <ModalCloseButton />}
            <ModalBody>
              <Center h="160px">
                {!txReceipt && (
                  <CircularProgress
                    isIndeterminate
                    color="green.300"
                    size="100px"
                  />
                )}
                {txReceipt && (
                  <Link
                    fontSize="lg"
                    color="#3182ce"
                    href={`${ETHERSCAN_TX_URL}${txReceipt}`}
                    isExternal
                  >
                    {t('etherscanMessage')} <ExternalLinkIcon mx="2px" />
                  </Link>
                )}
              </Center>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}

      {networkError && <Text color="red">{t('ethereumNetworkPrompt')}</Text>}
    </>
  );
};

export default DirectMint;
