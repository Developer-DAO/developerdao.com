import { extendTheme, ThemeConfig } from '@chakra-ui/react';

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
};

export const theme = extendTheme({
  colors: {
    member: {
      50: '#5E62CB',
      200: '#2128CA',
    },
    discord: {
      50: '#878bf7',
      200: '#3F46F3',
    },
  },
  fonts: {
    heading:
      'Poppins, InterVariable, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    body: 'InterVariable, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    code: '"Source Code Pro", Menlo, Monaco, Consolas, "Courier New", monospace',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
      },
    },
  },
  config,
});

// theme.ts

// 1. import `extendTheme` function

// 3. extend the theme

export default theme;
