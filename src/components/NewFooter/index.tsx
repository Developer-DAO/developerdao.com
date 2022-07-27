import {
  Flex,
  HStack,
  IconButton,
  Text,
  VisuallyHidden,
  VStack,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <VStack spacing={4}>
      <HStack as="footer" justify="center">
        <SocialIconLink
          href="https://twitter.com/developer_dao"
          label="Twitter"
        >
          <>
            <FaTwitter />
            <VisuallyHidden>
              {t('socialLinkLabel', { platform: 'Twitter' })}
            </VisuallyHidden>
          </>
        </SocialIconLink>
        <SocialIconLink href="https://discord.gg/devdao" label="Discord">
          <>
            <FaDiscord />
            <VisuallyHidden>
              {t('socialLinkLabel', { platform: 'Discord' })}
            </VisuallyHidden>
          </>
        </SocialIconLink>
        <SocialIconLink
          href="https://opensea.io/collection/devs-for-revolution"
          label="OpenSea"
        >
          <>
            <VisuallyHidden>
              {t('socialLinkLabel', { platform: 'OpenSea' })}
            </VisuallyHidden>
          </>
        </SocialIconLink>
        <SocialIconLink href="https://github.com/Developer-DAO" label="GitHub">
          <>
            <FaGithub />
            <VisuallyHidden>
              {t('socialLinkLabel', { platform: 'GitHub' })}
            </VisuallyHidden>
          </>
        </SocialIconLink>
      </HStack>

      <HStack
        as="a"
        href="https://vercel.com/?utm_source=developerdao&utm_campaign=oss"
        fontSize="sm"
      >
        <Text>Powered by</Text>
        <Flex align="center">
          <Image
            src="/vercel-logotype-light.svg"
            alt="Vercel"
            width="100px"
            height="22px"
          />
        </Flex>
      </HStack>
    </VStack>
  );
}

const SocialIconLink = ({
  children,
  href,
  label,
}: {
  children: ReactElement;
  href: string;
  label: string;
}) => {
  return (
    <IconButton
      as="a"
      aria-label={label}
      cursor="pointer"
      href={href}
      icon={children}
      size="lg"
      variant="ghost"
    />
  );
};

export default Footer;
