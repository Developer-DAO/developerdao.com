import React, { useState } from 'react';
import DirectMintBox from '../components/DirectMint/DirectMintBox';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import PageLayout from '../layout/Page';
import { chakra } from '@chakra-ui/react';
import { TokenList } from '../components/TokenList';

const Mint = () => {
  const { t } = useTranslation();
  const [selectedToken, setSelectedToken] = useState<string | undefined>();
  return (
    <>
      <PageLayout>
        <chakra.main>
          {selectedToken && (
            <DirectMintBox
              selectedToken={selectedToken}
              setSelectedToken={setSelectedToken}
            />
          )}
          {!selectedToken && <TokenList setSelectedToken={setSelectedToken} />}
        </chakra.main>
      </PageLayout>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Mint;
