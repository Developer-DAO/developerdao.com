import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Box, Flex, chakra, HStack } from '@chakra-ui/react';
import { IconGitHub } from '../Icons';
import Logo from '../Logo';

function Nav() {
  const { t } = useTranslation();

  return (
    <chakra.nav borderBottom="1px solid" borderColor="gray.200">
      <Flex
        justify="space-between"
        align="center"
        mx="auto"
        maxW="6xl"
        py={3}
        px={4}
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
        <Box>
          <chakra.a
            href="https://github.com/Developer-DAO/developer-dao"
            target="_blank"
            rel="noreferrer"
            title="Developer DAO GitHub repository"
          >
            <IconGitHub
              h={7}
              w={7}
              opacity={0.6}
              transition="opacity 300ms ease-in-out"
              _hover={{ opacity: 1 }}
            />
          </chakra.a>
        </Box>
      </Flex>
    </chakra.nav>
  );
}

export default Nav;
