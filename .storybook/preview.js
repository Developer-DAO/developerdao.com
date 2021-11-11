import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../src/theme';
import { i18n } from './i18next.js';
import { RouterContext } from 'next/dist/shared/lib/router-context';

const withChakra = (StoryFn) => {
  return (
    <ChakraProvider theme={theme}>
      <StoryFn />
    </ChakraProvider>
  );
};

export const decorators = [withChakra];

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  locale: 'en',
  // locales: {
  //   en: "English",
  //   fr: "Français",
  // },
  chakra: {
    theme,
  },
  i18n,
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
