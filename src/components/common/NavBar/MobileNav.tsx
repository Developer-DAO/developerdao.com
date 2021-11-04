import * as React from 'react';
import { Flex, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useTranslation } from 'react-i18next';
import { NAVBARLINKS } from '@/constants';
export interface IMobileNavProps {
  isOpen: boolean;
}

export default function MobileNav({ isOpen }: IMobileNavProps) {
  const { t } = useTranslation();
  const color = useColorModeValue('gray.600', 'gray.200');
  const bg = useColorModeValue(
    'rgba(255, 255, 255, 0.8)',
    'rgba(26, 32, 44, 0.8)',
  );
  if (!isOpen) return null;
  return (
    <Stack
      p={4}
      display={{ md: 'none' }}
      zIndex={9999}
      pos="fixed"
      top="60px"
      w={'full'}
      bg={'white'}
      minH={'calc(100vh - 60px)'}
      css={{
        backdropFilter: 'saturate(180%) blur(5px)',
        backgroundColor: bg,
      }}
    >
      {NAVBARLINKS.map(({ transKey, href }) => (
        <Stack spacing={4} key={transKey}>
          <NextLink href={`${href}`} passHref>
            <Flex
              py={2}
              as={Link}
              justify={'space-between'}
              align={'center'}
              _hover={{
                textDecoration: 'none',
              }}
            >
              <Text fontWeight={600} color={color}>
                {t(`${transKey}`)}
              </Text>
            </Flex>
          </NextLink>
        </Stack>
      ))}
    </Stack>
  );
}
