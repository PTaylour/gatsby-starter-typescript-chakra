/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import 'focus-visible/dist/focus-visible';

import { css, CSSReset, ThemeProvider } from '@chakra-ui/core';
import { Global } from '@emotion/core';
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
  <ThemeProvider theme={theme}>
    <CSSReset
      config={(_theme) => ({
        light: {
          color: _theme.colors.gray[800],
          bg: _theme.colors.backgroundColor,
          borderColor: _theme.colors.gray[200],
          placeholderColor: _theme.colors.gray[400],
        },
        dark: {
          color: _theme.colors.whiteAlpha[900],
          bg: _theme.colors.gray[800],
          borderColor: _theme.colors.whiteAlpha[300],
          placeholderColor: _theme.colors.whiteAlpha[400],
        },
      })}
    />
    <Global styles={GlobalStyles} />
    {element}
  </ThemeProvider>
);
