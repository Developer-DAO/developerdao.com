import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

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
  components: {
    Text: {
      variants: {
        normal: {
          fontFamily: 'Inter',
          fontSize: '1.25rem',
          fontWeight: '500',
          fontStyle: 'normal',
          lineHeight: '1.81rem',
        },
        normalMobile: {
          fontFamily: 'Inter',
          fontSize: '1.125rem',
          fontWeight: '500',
          fontStyle: 'normal',
          lineHeight: '1.5rem',
        },
        large: {
          fontFamily: 'Inter',
          fontSize: '1.5rem',
          fontWeight: '700',
          fontStyle: 'normal',
          lineHeight: '2rem',
        },
        medium: {
          fontFamily: 'Inter',
          fontSize: '1rem',
          fontWeight: '500',
          fontStyle: 'normal',
          lineHeight: '1.21rem',
        },
      },
    },
    Heading: {
      variants: {
        large: {
          fontFamily: 'Inter',
          fontSize: '5.375rem',
          fontWeight: '800',
          fontStyle: 'normal',
          lineHeight: '6.5rem',
        },
        medium: {
          fontFamily: 'Inter',
          fontSize: '3.5625rem',
          fontWeight: '800',
          fontStyle: 'normal',
          lineHeight: '4.311rem',
        },
        mediumMobile: {
          fontFamily: 'Inter',
          fontSize: '1.875rem',
          fontWeight: '800',
          fontStyle: 'normal',
          lineHeight: '2.25rem',
        },
        normal: {
          fontFamily: 'Inter',
          fontSize: '3.375rem',
          fontWeight: '800',
          fontStyle: 'normal',
          lineHeight: '3.96rem',
        },
      },
    },
    Link: {
      variants: {
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: '1.375rem',
        fontStyle: 'normal',
        lineHeight: '1.66rem',
      },
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode('white', 'black')(props),
        color: mode('black', 'white')(props),
        fontSize: { base: 'sm', md: 'md' },
        py: 10,
        px: { base: 2, sm: 4, md: 8 },
      },
      '.box-border': {
        border: `1px solid ${mode('black', 'white')(props)}`,
        borderRadius: 10,
        padding: '1.5rem',
        margin: '0.75rem',
      },
    }),
  },
});
