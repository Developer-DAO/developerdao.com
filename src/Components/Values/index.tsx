import {
  Flex,
  Box,
  Heading,
  Text,
  OrderedList,
  ListItem,
  LinkBox,
  LinkOverlay,
  Icon,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { DEVELOPER_DAO_WIKI } from '../../utils/DeveloperDaoConstants';
import { BsArrowUpRight } from 'react-icons/bs';

const Values = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const { t } = useTranslation();
  const valuesListStyle = {
    counterReset: 'values',
    marginLeft: '2.3rem',
    'li::marker': {
      content: 'counter(values) "   "',
    },
    li: {
      counterIncrement: 'values',
      margin: '2rem 0',
    },
  };
  const goalsListStyle = {
    counterReset: 'goals',
    marginLeft: '2.3rem',
    'li::marker': {
      content: 'counter(goals) " - "',
    },
    li: {
      counterIncrement: 'goals',
      margin: '1rem 0',
    },
  };

  const capitalized = (body: String) => {
    return body
      .toLowerCase()
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.substring(1))
      .join(' ');
  };

  const ValuesItem = (title: String, body: String) => {
    return (
      <Box flexDir="column">
        <Text
          variant={isMobile ? 'normal' : 'large'}
          fontWeight="bold"
          mb="1rem"
        >
          {title}
        </Text>
        <Text variant={isMobile ? 'normalMobile' : 'normal'}>
          {capitalized(body)}
        </Text>
      </Box>
    );
  };

  const transparency = ValuesItem(
    t('values.transparency.title'),
    t('values.transparency.body'),
  );
  const diversity = ValuesItem(
    t('values.diversity.title'),
    t('values.diversity.body'),
  );
  const responsibility = ValuesItem(
    t('values.responsibility.title'),
    t('values.responsibility.body'),
  );
  const kindness = ValuesItem(
    t('values.kindness.title'),
    t('values.kindness.body'),
  );

  return (
    <Flex justify="center" wrap="wrap-reverse" w={isMobile ? '95vw' : 'auto'}>
      <Box className="box-border" flex="3" minW={isMobile ? '100%' : '20rem'}>
        <Heading variant={isMobile ? 'mediumMobile' : 'medium'}>
          {t('values.title')}
        </Heading>
        <OrderedList sx={valuesListStyle}>
          <ListItem>{transparency}</ListItem>
          <ListItem>{diversity}</ListItem>
          <ListItem>{responsibility}</ListItem>
          <ListItem>{kindness}</ListItem>
        </OrderedList>
      </Box>
      <Flex
        className="box-border"
        flex="2"
        justifyContent="space-between"
        alignItems="center"
        flexDir="column"
        minW={isMobile ? '100%' : '20rem'}
      >
        <Box>
          <Box mb="4.4rem">
            <Text
              variant="normal"
              fontSize={isMobile ? 'md' : 'lg'}
              fontWeight="bold"
              mb="0.9rem"
            >
              {t('mission.title')}
            </Text>
            <Text variant={isMobile ? 'normalMobile' : 'normal'}>
              {t('mission.body')}
            </Text>
          </Box>
          <Box mb="3.4rem">
            <Text variant="large" fontWeight="bold" mb="1rem">
              {t('goals.title')}
            </Text>
            <OrderedList sx={goalsListStyle}>
              <ListItem>
                <Text variant={isMobile ? 'normalMobile' : 'normal'}>
                  {t('goals.body1')}
                </Text>
              </ListItem>
              <ListItem>
                <Text variant={isMobile ? 'normalMobile' : 'normal'}>
                  {t('goals.body2')}
                </Text>
              </ListItem>
            </OrderedList>
          </Box>
        </Box>
        <LinkBox
          as="article"
          rounded="10"
          border="1px solid black"
          backgroundColor={useColorModeValue('black', 'white')}
          width="100%"
          maxWidth="30rem"
          height="18rem"
          padding="1rem"
        >
          <LinkOverlay href={DEVELOPER_DAO_WIKI} target="_blank">
            <Icon
              as={BsArrowUpRight}
              position="absolute"
              right="1rem"
              color={useColorModeValue('white', 'black')}
            />
            <Box position="absolute" bottom="0.2rem" padding="1rem 0.5rem">
              <Text variant="large" color={useColorModeValue('white', 'black')}>
                {t('callToAction.wiki.title')}
              </Text>
              <Text
                variant="normal"
                fontSize="xs"
                color={useColorModeValue('white', 'black')}
              >
                {t('callToAction.wiki.body')}
              </Text>
            </Box>
          </LinkOverlay>
        </LinkBox>
      </Flex>
    </Flex>
  );
};
export default Values;
