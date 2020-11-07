// 1. Import the extendTheme util - it will merge with the default theme.
import { extendTheme } from '@chakra-ui/core';

// 2. Extend the theme to include custom colors, fonts, etc.
const colors = {
  backgroundColor: '#FBFCFE',
  lime: {
    100: '#E0FFF6',
    200: '#C0FFED',
    300: '#A1FFE4',
    400: '#81FFDB',
    500: '#62FFD2',
    600: '#43FFC9',
    700: '#23FFC0',
    800: '#04FFB7',
    900: '#00E3A2',
  },
};

export default extendTheme({
  styles: {
    global: ({ theme }) => ({
      light: {
        color: theme.colors.gray[800],
        bg: theme.colors.backgroundColor,
        borderColor: theme.colors.gray[200],
        placeholderColor: theme.colors.gray[400],
      },
      dark: {
        color: theme.colors.whiteAlpha[900],
        bg: theme.colors.gray[800],
        borderColor: theme.colors.whiteAlpha[300],
        placeholderColor: theme.colors.whiteAlpha[400],
      },
    }),
  },
  colors,
  fonts: {
    body: 'Eczar, serif',
    heading: 'Eczar, serif',
    mono: 'Menlo, monospace',
  },
  radii: {
    none: '0',
    sm: '0.125rem',
    md: '0.25rem',
    lg: '40px',
    full: '9999px',
  },
});
