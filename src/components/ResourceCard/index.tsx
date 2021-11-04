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
import { Resource } from '../../types/airtable';
import Logo from '../../components/Logo';

const LevelBadge = ({ levelName }: { levelName: string }) => {
  const { t } = useTranslation();

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

const Author = ({
  authors,
}: {
  authors?: { name: string; dev: boolean }[];
}) => {
  const { t } = useTranslation();

  if (!authors || authors.length === 0) return null;

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

const MediaIcon = ({ mediaType }: { mediaType: string }) => {
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

const MediaButton = ({ mediaType }: { mediaType: string }) => {
  const { t } = useTranslation();

  const getMediaText = (mediaType: String) => {
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

  let buttonText = getMediaText(mediaType);
  const buttonIcon = <MediaIcon mediaType={mediaType} />;

  return (
    <Button variant="solid" leftIcon={buttonIcon}>
      {buttonText}
    </Button>
  );
};

function KnowledgeCard(props: { data: Resource }) {
  const { t } = useTranslation();

  const kbRecord = props.data.fields;

  return (
    <WrapItem maxW={{ base: '100%', md: '800px' }}>
      <VStack>
        <Heading>{kbRecord.Title}</Heading>
        <Author authors={kbRecord.extendedAuthors} />
        <HStack>
          {kbRecord.Category ? <Tag>{kbRecord.Category}</Tag> : null}
          <LevelBadge levelName={kbRecord.Level} />
        </HStack>
        <Text>{t('tags')}</Text>
        <Stack direction="row">
          {kbRecord.Tags?.map((tag: string, index: number) => (
            <Badge key={`tag-${index}`}>{tag}</Badge>
          ))}
        </Stack>
        <HStack>
          <Link href={kbRecord.Source}>
            <MediaButton mediaType={kbRecord['Media Type']} />
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
