/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import 'focus-visible/dist/focus-visible';

import { ChakraProvider, css, Global } from '@chakra-ui/core';
import React from 'react';

import theme from './src/gatsby-plugin-chakra-ui/theme';

const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */
  :focus:not([data-focus-visible-added]) {
    outline: none !important;
    box-shadow: none !important;
  }
`;

export const wrapRootElement = ({ element }) => (
  <ChakraProvider theme={theme}>
    <Global styles={GlobalStyles} />
    {element}
  </ChakraProvider>
);
