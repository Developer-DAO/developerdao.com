import React from 'react';
import { chakra, Flex, HStack } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { IconGitHub } from '../Icons';
import Logo from '../Logo';

function Nav() {
  const { t } = useTranslation();
  const color = useColorModeValue('#000', '#fff');

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
            <Logo h={10} w={10} />
          </HStack>
        </Link>
        <HStack color={color} spacing={{ base: 3, sm: 10 }}>
          <Link href="/developers" passHref>
            {t('developers')}
          </Link>
          <Link href="/mint" passHref>
            {t('mintTokenText')}
          </Link>
          <Link href="/projects" passHref>
            {t('projects')}
          </Link>
        </HStack>
      </Flex>
    </chakra.nav>
  );
}

export default Nav;
