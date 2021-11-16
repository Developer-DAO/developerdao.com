import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Badge,
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Link,
  Tag,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import {
  FaChalkboard,
  FaBook,
  FaRegNewspaper,
  FaVideo,
  FaQuestion,
  FaTwitter,
} from 'react-icons/fa';
import { Resource, ResourceFields } from '../../types/airtable';
import Logo from '../../components/Logo';
import { LinkPreview } from '@dhaiwat10/react-link-preview';

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
  authors?: { name: string; dev: boolean; twitter?: string }[];
}) => {
  const { t } = useTranslation();

  if (!authors || authors.length === 0) return null;

  return (
    <VStack>
      {authors.map((author) => (
        <Flex key={author.name} align="center" justify="space-between">
          {author.twitter ? (
            <Link
              href={`https://twitter.com/${author.twitter}`}
              isExternal={true}
            >
              {author.name} <Icon as={FaTwitter} />
            </Link>
          ) : (
            author.name
          )}
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

const FallBackImage = () => (
  <VStack>
    <Text>Image Unavailable</Text>
    <Logo />
  </VStack>
);

const renderResourceDetails = (kbRecord: ResourceFields) => {
  // a crude way of seing how much text we're looking to render for all of the details text
  const renderCount =
    kbRecord.Category?.join(' ').length +
    kbRecord.Tags?.join(' ').length +
    kbRecord.Level?.length;
  // allot 8px per character -> 300px buys 37.5. lose 2 to padding, round down
  // trim a few more to look ok
  if (renderCount > 32) {
    // do it vertically
    return (
      <VStack>
        <Wrap maxW={{ base: '100%', sm: '300px' }} align="center">
          {kbRecord.Category?.map((category: string, index: number) => (
            <WrapItem key={`category-item-${index}`}>
              <Tag key={`category-${index}`}>{category}</Tag>
            </WrapItem>
          ))}
        </Wrap>
        <Wrap>
          {kbRecord.Tags?.map((tag: string, index: number) => (
            <WrapItem key={`tag-${index}`}>
              <Badge key={`tag-${index}`}>{tag}</Badge>
            </WrapItem>
          ))}
        </Wrap>
        <LevelBadge levelName={kbRecord.Level} />
      </VStack>
    );
  } else {
    return (
      <HStack maxW={{ base: '100%', md: '300px' }}>
        {kbRecord.Category?.map((category: string, index: number) => (
          <Tag key={`category-${index}`}>{category}</Tag>
        ))}
        {kbRecord.Tags?.map((tag: string, index: number) => (
          <Badge key={`tag-${index}`}>{tag}</Badge>
        ))}
        <LevelBadge levelName={kbRecord.Level} />
      </HStack>
    );
  }
};

function ResourceCard(props: { data: Resource }) {
  const { t } = useTranslation();

  const kbRecord = props.data.fields;
  const kbDetails = renderResourceDetails(kbRecord);
  const fallbackImage = FallBackImage();

  return (
    <WrapItem
      maxW={{ base: '100%', sm: '300px' }}
      paddingInline={{ base: '1em', sm: 0 }}
    >
      <VStack w={{ base: '100%', sm: '300px' }}>
        <LinkPreview
          url={kbRecord.Source}
          width="inherit"
          height="500px"
          descriptionLength={250}
          fallback={fallbackImage}
        />
        <Author authors={kbRecord.extendedAuthors} />
        {kbDetails}
      </VStack>
    </WrapItem>
  );
}

export default ResourceCard;
