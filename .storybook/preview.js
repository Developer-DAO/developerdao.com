import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../src/theme';
import * as NextImage from 'next/image';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { i18n } from './i18next.js';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

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
    storySort: { order: ['Introduction'] },
  },
  i18n,
  locale: 'en',
  locales: {
    en: 'English',
  },
  chakra: {
    theme,
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
