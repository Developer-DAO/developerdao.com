import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  Tag,
  Text,
  VStack,
  WrapItem,
} from '@chakra-ui/react';
import {
  FaChalkboard,
  FaBook,
  FaRegNewspaper,
  FaVideo,
  FaQuestion,
} from 'react-icons/fa';
import { Resource } from '../../utils/AirtableResourceClasses';
import Logo from '../../components/Logo';

function KnowledgeCard(props: { data: Resource }) {
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

  const getAuthor = (authors: undefined | { name: string; dev: boolean }[]) => {
    if (!authors || authors.length === 0) return;
    return (
      <VStack>
        {authors.map((author) => (
          <Flex key={author.name} align="center" justify="space-between">
            {author.name}
            {author.dev ? (
              <Box title={t('daoMember')}>
                <Logo ml={1} h={7} w={7} />
              </Box>
            ) : null}
          </Flex>
        ))}
      </VStack>
    );
  };

  const renderMediaType = (mediaType: String) => {
    switch (mediaType) {
      case 'Video':
        return <Icon as={FaVideo} />;
      case 'Article':
        return <Icon as={FaRegNewspaper} />;
      case 'Course':
        return <Icon as={FaChalkboard} />;
      case 'Book':
        return <Icon as={FaBook} />;
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
      case 'Course':
        return t('checkCourse');
      case 'Book':
        return t('checkBook');
      default:
        return t('unknownMediaText');
    }
  };

  return (
    <WrapItem maxW={{ base: '100%', md: '800px' }}>
      <VStack>
        <Heading>{kbRecord.Title}</Heading>
        <Box>{getAuthor(kbRecord.extendedAuthors)}</Box>
        <HStack>
          {kbRecord.Category ? <Tag>{kbRecord.Category}</Tag> : null}
          {getLevelBadge(kbRecord.Level)}
        </HStack>
        <Text>{t('tags')}</Text>
        <Stack direction="row">
          {kbRecord.Tags?.map((tag: string, index: number) => (
            <Badge key={`tag-${index}`}>{tag}</Badge>
          ))}
        </Stack>
        <HStack>
          <Link href={kbRecord.Source} _hover={undefined}>
            <Button
              variant="solid"
              leftIcon={renderMediaType(kbRecord['Media Type'])}
            >
              {getAppropriateText(kbRecord['Media Type'])}
            </Button>
          </Link>
        </HStack>
        <Text>
          {t('blockchain')}: {kbRecord.Blockchain}
        </Text>
        <Text>{kbRecord['Date Added']}</Text>
      </VStack>
    </WrapItem>
  );
}

export default KnowledgeCard;
