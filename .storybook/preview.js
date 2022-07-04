import React from 'react';
import { theme } from '../src/theme';
import * as NextImage from 'next/image';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { i18n } from './i18next.js';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  chakra: {
    theme,
  },
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  options: {
    storySort: { order: ['Introduction'] },
  },
  chakra: {
    theme,
  },
  i18n,
  locale: 'en',
  locales: {
    en: 'English',
    fr: 'French',
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
