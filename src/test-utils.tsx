import { ThemeProvider } from '@chakra-ui/core';
import { render, RenderOptions } from '@testing-library/react';
import React from 'react';

import theme from './gatsby-plugin-chakra-ui/theme';

const AllTheProviders: React.FC<{}> = (props) => {
  return <ThemeProvider theme={theme} {...props} />;
};

const customRender = (ui: JSX.Element, options: RenderOptions = {}) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
