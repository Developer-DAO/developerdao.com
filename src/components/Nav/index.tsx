import React from 'react';

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  HStack,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import Logo from '../Logo';
import { IconGitHub } from '../Icons';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Nav() {
  const bg = useColorModeValue('white', 'gray.800');
  const mobileNav = useDisclosure();
  const { t } = useTranslation();

  return (
    <chakra.nav borderBottom="1px solid" borderColor="gray.200">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
        maxW="7xl"
        py={3}
        px={5}
      >
        <Link href="/" passHref>
          <HStack as="a" title={t('title')} display="flex" alignItems="center">
            <Logo h={7} w={7} />
            <chakra.span
              fontWeight="bold"
              fontSize="sm"
              transition="color 300ms ease-in-out"
              _hover={{ color: 'black' }}
            >
              {t('title')}
            </chakra.span>
          </HStack>
        </Link>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack
            spacing={{ base: 3, sm: 10 }}
            display={{ base: 'none', md: 'inline-flex' }}
          >
            <Link href="/" passHref>
              <a>{t('home')}</a>
            </Link>
            <Link href="/mint" passHref>
              <a>{t('mintTokenText')}</a>
            </Link>
            <Link href="/projects" passHref>
              <a>{t('projects')}</a>
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

          <Box display={{ base: 'inline-flex', md: 'none' }}>
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              aria-label="Open menu"
              fontSize="20px"
              color={useColorModeValue('grey.800', 'inherit')}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />

            <VStack
              pos="absolute"
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? 'flex' : 'none'}
              flexDirection="column"
              pt={7}
              pb={7}
              m={0}
              bg={bg}
              spacing={3}
              rounded="sm"
              shadow="sm"
            >
              <CloseButton
                aria-label="Close menu"
                onClick={mobileNav.onClose}
              />

              <Link href="/" passHref>
                <a>{t('home')}</a>
              </Link>

              <Link href="/mint" passHref>
                <a>{t('mintTokenText')}</a>
              </Link>

              <Link href="/projects" passHref>
                <a>{t('projects')}</a>
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
            </VStack>
          </Box>
        </HStack>
      </Flex>
    </chakra.nav>
  );
}
