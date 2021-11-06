import { useColorModeValue } from '@chakra-ui/color-mode';
import { chakra, HStack, Text, VStack, Flex } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  IconOpenSea,
  IconEtherscan,
  IconTwitter,
  IconDiscord,
  IconGitHub,
  IconDiscourse,
} from '../Icons';

function Footer() {
  const { t } = useTranslation();

  const color = useColorModeValue('gray.600', '#fff');

  return (
    <chakra.footer borderTop="1px solid" borderColor="gray.200" py={10}>
      <VStack color={color} mx="auto" maxW="7xl" px={4} spacing={5}>
        <Flex alignItems="center" justifyContent="space-between" w="100%">
          <Text fontSize="sm">{t('madeBy')}</Text>
          <HStack as="ul" direction="row" spacing={4} listStyleType="none">
            <li>
              <a
                title="OpenSea"
                className="mx-2 block"
                href="https://opensea.io/collection/devs-for-revolution"
                target="_blank"
                rel="noreferrer"
              >
                <IconOpenSea />
              </a>
            </li>
            <li>
              <a
                title="Etherscan"
                className="mx-2 block"
                href="https://etherscan.io/address/0x25ed58c027921e14d86380ea2646e3a1b5c55a8b"
                target="_blank"
                rel="noreferrer"
              >
                <IconEtherscan />
              </a>
            </li>
            <li>
              <a
                title="Twitter"
                className="mx-2 block"
                href="https://twitter.com/developer_dao"
                target="_blank"
                rel="noreferrer"
              >
                <IconTwitter />
              </a>
            </li>
            <li>
              <a
                title="Discord"
                className="mx-2 block"
                href="https://discord.gg/devdao"
                target="_blank"
                rel="noreferrer"
              >
                <IconDiscord />
              </a>
            </li>
            <li>
              <a
                title="GitHub"
                className="mx-2 block"
                href="https://github.com/Developer-DAO"
                target="_blank"
                rel="noreferrer"
              >
                <IconGitHub h={10} w={10} />
              </a>
            </li>
            <li>
              <a
                title="Discourse"
                className="mx-2 block"
                href="https://forum.developerdao.com/"
                target="_blank"
                rel="noreferrer"
              >
                <IconDiscourse />
              </a>
            </li>
          </HStack>
        </Flex>
        <VStack>
          <Text color={color} fontSize="sm">
            {t('hosting')}
          </Text>
          <chakra.a
            target="_blank"
            title="Vercel"
            rel="noopener noreferrer"
            href="https://vercel.com/?utm_source=developerdao&utm_campaign=oss"
          >
            <img
              alt="Powered by Vercel"
              height="32"
              src="https://raw.githubusercontent.com/nextauthjs/next-auth/canary/www/static/img/powered-by-vercel.svg"
            />
          </chakra.a>
        </VStack>
      </VStack>
    </chakra.footer>
  );
}

export default Footer;
