import * as React from 'react';
import { Stack, Box, BoxProps, Link } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import NextLink from 'next/link';

import { NAVBARLINKS } from '@/constants';

export default function DesktopNav(props: BoxProps) {
  const { t } = useTranslation();
  return (
    <Stack direction={'row'} spacing={4} {...props}>
      {NAVBARLINKS.map((data) => (
        <Box key={data.transKey}>
          <NextLink href={`${data.href}`} passHref>
            <Link>{t(`${data.transKey}`)}</Link>
          </NextLink>
        </Box>
      ))}
    </Stack>
  );
}
