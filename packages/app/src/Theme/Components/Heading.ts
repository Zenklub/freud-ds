import { theme } from '../index';

import { typography } from '../Tokens/index';

export const Heading = {
  // Can pass also function, giving you access theming tools
  baseStyle: ({ colorMode }) => {
    return {
      color: colorMode === 'dark' ? theme.colors.neutral.white : theme.colors.neutral.dark.dark04,
      backgroundColor:
        colorMode === 'dark' ? theme.colors.brand.brandColor06 : theme.colors.neutral.white,
      fontWeight: typography.fontWeights.bold,
    };
  },
  sizes: {
    '4xl': {
      fontSize: { base: typography.fontSizes['6xl'], md: 0 }, //7xl
      letterSpacing: -0.05,
      lineHeight: '1.25em',
    },
    '3xl': {
      fontSize: { base: typography.fontSizes['5xl'], md: 0 },
      letterSpacing: -0.05,
      lineHeight: '1.25em',
    },
    '2xl': {
      fontSize: { base: typography.fontSizes['4xl'], md: 0 },
      letterSpacing: 0,
      lineHeight: '1.25em',
    },
    xl: {
      fontSize: { base: '3xl', md: 0 },
      letterSpacing: 0,
      lineHeight: '1.25em',
    },
    lg: {
      fontSize: { base: '2xl', md: 0 },
      letterSpacing: 0,
      lineHeight: '1.25em',
    },
    md: {
      fontSize: { base: typography.fontSizes.xl, md: 0 },
      letterSpacing: 0,
      lineHeight: '1.25em',
    },
    sm: {
      fontSize: { base: typography.fontSizes.md, md: 0 },
      letterSpacing: 0,
      lineHeight: '1.25em',
    },
    xs: {
      fontSize: { base: typography.fontSizes.sm, md: 0 },
      letterSpacing: 0,
      lineHeight: '1.25em',
    },
  },
  defaultProps: {
    size: 'xl',
  },
};
