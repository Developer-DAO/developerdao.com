import { extendTheme, ThemeConfig } from '@chakra-ui/react';

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading:
      '"Source Code Pro", Menlo, Monaco, Consolas, "Courier New", monospace',
    body: 'InterVariable, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  },
  fontSizes: {
    xs: '1.125rem',
    sm: '1.25rem',
    md: '1.5rem',
    lg: '1.875rem',
    xl: '2.25rem',
    '2xl': '3rem',
    '3xl': '3.75rem',
    '4xl': '4.5rem',
    '5xl': '6rem',
    '6xl': '8rem',
  },
  styles: {
    global: {
      body: {
        bg: 'black',
        color: 'white',
        fontSize: { base: 'sm', md: 'md' },
        py: 10,
        px: { base: 2, sm: 4, md: 8 },
      },
    },
  },
});
