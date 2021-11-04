import { NftMetadata } from 'use-nft';
import { useTranslation } from 'react-i18next';
import { Button } from '@chakra-ui/react';

import { DEVELOPER_DAO_CONSTANTS } from '@/constants';
import IconOpenSea from '@/components/icons/opensea';
const { OPENSEA_DIRECT_LINK_PREFIX } = DEVELOPER_DAO_CONSTANTS;
function DevName({
  nft,
  developerId,
}: {
  nft: NftMetadata;
  developerId: string;
}) {
  const { t } = useTranslation();
  if (nft.owner) {
    return (
      <Button
        as="a"
        href={`${OPENSEA_DIRECT_LINK_PREFIX}/${developerId}`}
        target="_blank"
        rel="noreferrer"
        title={t('viewNftOpenSea')}
        leftIcon={<IconOpenSea width="24" height="24" />}
        iconSpacing="3"
        fontSize={{ base: 'xs', sm: 'md' }}
      >
        {nft.name}
      </Button>
    );
  }

  return (
    <Button
      title={nft.owner}
      isDisabled={true}
      fontSize={{ base: 'xs', sm: 'md' }}
    >
      {nft.name}
    </Button>
  );
}

export default DevName;
