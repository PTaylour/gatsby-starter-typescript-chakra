import { theme } from '@chakra-ui/core';

export default {
  ...theme,
  fonts: {
    body: 'Eczar, serif',
    heading: 'Eczar, serif',
    mono: 'Menlo, monospace',
  },
  colors: {
    ...theme.colors,
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
  },
  radii: {
    none: '0',
    sm: '0.125rem',
    md: '0.25rem',
    lg: '40px',
    full: '9999px',
  },
};
