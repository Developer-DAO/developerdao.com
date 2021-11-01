import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Text,
  HStack,
  chakra,
  VStack,
  WrapItem,
  Stack,
  Badge,
  Icon,
  Link,
  Tag,
  Button,
} from '@chakra-ui/react';
import {
  FaLockOpen,
  FaMoneyBill,
  FaRegNewspaper,
  FaVideo,
  FaQuestion,
} from 'react-icons/fa';

function KnowledgeCard(props) {
  const { t } = useTranslation();

  const kbRecord = props.data.fields;

  const getLevelBadge = (levelName: String) => {
    switch (levelName) {
      case 'Beginner':
        return <Badge colorScheme="green">{t('beginner')}</Badge>;
      case 'Intermediate':
        return <Badge colorScheme="orange">{t('intermediate')}</Badge>;
      case 'Advanced':
        return <Badge colorScheme="red">{t('advanced')}</Badge>;
      default:
        return <Badge>{levelName}</Badge>;
    }
  };

  const getAuthorName = (author: String) => {
    // TODO
    console.log('implement getAuthorName');
    return author;
  };

  const renderMediaType = (mediaType: String) => {
    // article video free course paid course
    switch (mediaType) {
      case 'Video':
        return <Icon as={FaVideo} />;
      case 'Article':
        return <Icon as={FaRegNewspaper} />;
      case 'Free Course':
        return <Icon as={FaLockOpen} />;
      case 'Paid Course':
        return <Icon as={FaMoneyBill} />;
      default:
        return <Icon as={FaQuestion} />;
    }
  };

  const getAppropriateText = (mediaType: String) => {
    switch (mediaType) {
      case 'Video':
        return t('watchVideo');
      case 'Article':
        return t('readArticle');
      case 'Free Course':
        return t('checkFreeCourse');
      case 'Paid Course':
        return t('checkPaidCourse');
      default:
        return t('unknownMediaText');
    }
  };

  const printFullRecord = () => {
    console.log(kbRecord);
  };

  return (
    <WrapItem>
      <VStack>
        <Text>{kbRecord.Title}</Text>
        <Text>{getAuthorName(kbRecord.Author)}</Text>
        {kbRecord.Category ? <Tag>{kbRecord.Category}</Tag> : null}
        {getLevelBadge(kbRecord.Level)}
        <Text>{t('tags')}</Text>
        <Stack direction="row">
          {kbRecord.Tags?.map((tag: string, index: number) => (
            <Badge key={`tag-${index}`}>{tag}</Badge>
          ))}
        </Stack>
        <HStack>
          {renderMediaType(kbRecord['Media Type'])}
          <Link href={kbRecord.Source}>
            {getAppropriateText(kbRecord['Media Type'])}
          </Link>
        </HStack>
        <Text>
          {t('blockchain')}: {kbRecord.Blockchain}
        </Text>
        <Text>{kbRecord['Date Added']}</Text>
        {!process.env.production ? (
          <Button onClick={printFullRecord}>Console Print Full Record</Button>
        ) : null}
      </VStack>
    </WrapItem>
  );
}

export default KnowledgeCard;
