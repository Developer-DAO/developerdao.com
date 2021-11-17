import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Button, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { useTranslation } from 'react-i18next';
import { FaDiscord, FaEthereum, FaMoon, FaSun } from 'react-icons/fa';
import JoinFuture from '../components/JoinFuture';
import SuperButton from '../components/SuperButton';
import Tweet from '../components/Tweet';
import PageLayout from '../layout/Page';

function Index() {
  const { t } = useTranslation();
  const { toggleColorMode } = useColorMode();

  const color = useColorModeValue('#000', '#fff');
  const tweetBackground = useColorModeValue('#fff', '#151718');
  const secondaryColor = useColorModeValue(
    'rgba(15, 15, 26, 0.48)',
    'rgba(255, 255, 255, 0.64)',
  );

  const tweetData = [
    {
      tweet:
        'I think netlify might just be the very best SaaS I have ever had the privilege to use. It is just *amazing*.',
      name: 'miralsuthar',
      userName: 'miral182000',
      profileImg:
        'https://pbs.twimg.com/profile_images/1410618356441391114/OzlL3qo7_400x400.jpg',
    },
    {
      tweet:
        'I think netlify might just be the very best SaaS I have ever had the privilege to use. It is just *amazing*.',
      name: 'miralsuthar',
      userName: 'miral182000',
      profileImg:
        'https://pbs.twimg.com/profile_images/1410618356441391114/OzlL3qo7_400x400.jpg',
    },
    {
      tweet:
        'I think netlify might just be the very best SaaS I have ever had the privilege to use. It is just *amazing*.',
      name: 'miralsuthar',
      userName: 'miral182000',
      profileImg:
        'https://pbs.twimg.com/profile_images/1410618356441391114/OzlL3qo7_400x400.jpg',
    },
    {
      tweet:
        'I think netlify might just be the very best SaaS I have ever had the privilege to use. It is just *amazing*.',
      name: 'miralsuthar',
      userName: 'miral182000',
      profileImg:
        'https://pbs.twimg.com/profile_images/1410618356441391114/OzlL3qo7_400x400.jpg',
    },
    {
      tweet:
        'I think netlify might just be the very best SaaS I have ever had the privilege to use. It is just *amazing*.',
      name: 'miralsuthar',
      userName: 'miral182000',
      profileImg:
        'https://pbs.twimg.com/profile_images/1410618356441391114/OzlL3qo7_400x400.jpg',
    },
  ];

  return (
    <>
      <Button
        zIndex={10}
        borderWidth={2}
        bottom="15"
        right="10"
        position="fixed"
        size="md"
        onClick={toggleColorMode}
      >
        {color === '#000' ? <FaMoon /> : <FaSun />}
      </Button>
      <PageLayout>
        <VStack as="main" spacing={24} pt={12}>
          <VStack
            spacing={5}
            color={color}
            mx="auto"
            textAlign="center"
            w="full"
            maxW="3xl"
          >
            <Stack spacing={7} align="center">
              <Text
                fontFamily="poppins"
                fontWeight="light"
                fontSize={{ base: '3xl', md: '6xl', lg: '6xl' }}
              >
                {t('heading')}
              </Text>
              <Text
                px={4}
                fontWeight="400"
                fontSize={{ base: '14px', md: '18px', lg: '18px' }}
                maxW={{ base: '90%', sm: '80%', md: '2xl' }}
              >
                {t('subHeading')}
              </Text>
            </Stack>
            <Stack
              direction={{ base: 'column', sm: 'row', md: 'row', lg: 'row' }}
              spacing={{ base: 6, sm: 30, md: 40, lg: 60 }}
            >
              <Stack spacing={5}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Text fontSize="4rem" fontFamily="poppins">
                    120<sup style={{ fontSize: '1rem', top: -30 }}>/800</sup>
                  </Text>
                  <Text fontSize="1rem" color={secondaryColor}>
                    {t('seats')}
                  </Text>
                </Box>
                <SuperButton
                  hoverColor="member.50"
                  title={t('becomeMember')}
                  background="member"
                  leftIcon={<FaEthereum />}
                />
              </Stack>
              <Stack spacing={5}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Text fontFamily="poppins" fontSize="4rem">
                    853
                  </Text>
                  <Text fontSize="1rem" color={secondaryColor}>
                    {t('devsBuilding')}
                  </Text>
                </Box>
                <SuperButton
                  hoverColor="discord.50"
                  title={t('joinDiscord')}
                  background="discord"
                  leftIcon={<FaDiscord />}
                />
              </Stack>
            </Stack>
          </VStack>
          <HStack w="full" background={tweetBackground} gridGap="4">
            <Marquee gradient={false} speed={60} pauseOnHover={true}>
              {tweetData.map((twetter, index) => (
                <Tweet
                  key={index}
                  tweet={twetter.tweet}
                  name={twetter.name}
                  userName={twetter.userName}
                  profileSrc={twetter.profileImg}
                />
              ))}
            </Marquee>
          </HStack>
          <JoinFuture />
        </VStack>
      </PageLayout>
    </>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Index;
