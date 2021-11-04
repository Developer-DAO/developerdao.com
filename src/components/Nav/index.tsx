import React from 'react';
import { chakra, Flex, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { IconGitHub } from '@/components/icons';
import Logo from '@/components/Logo';

function Nav() {
  const { t } = useTranslation();

  return (
    <chakra.nav borderBottom="1px solid" borderColor="gray.200">
      <Flex
        justify="space-between"
        align="center"
        mx="auto"
        maxW="7xl"
        minW="xl"
        py={3}
        px={5}
      >
        <Link href="/" passHref>
          <HStack as="a" title={t('title')} display="flex" alignItems="center">
            <Logo h={7} w={7} />
            <chakra.span
              fontWeight="bold"
              fontSize="sm"
              color="gray.600"
              transition="color 300ms ease-in-out"
              _hover={{ color: 'black' }}
            >
              {t('title')}
            </chakra.span>
          </HStack>
        </Link>
        <HStack spacing={{ base: 3, sm: 10 }}>
          <Link href="/" passHref>
            {t('home')}
          </Link>
          <Link href="/mint" passHref>
            {t('mintTokenText')}
          </Link>
          <Link href="/projects" passHref>
            {t('projects')}
          </Link>
          <chakra.a
            href="https://github.com/Developer-DAO/developer-dao"
            target="_blank"
            rel="noreferrer"
            title={t('daoGithubRepo')}
          >
            <IconGitHub
              h={7}
              w={7}
              opacity={0.6}
              transition="opacity 300ms ease-in-out"
              _hover={{ opacity: 1 }}
            />
          </chakra.a>
        </HStack>
      </Flex>
    </chakra.nav>
  );
}

export default Nav;
