import { theme } from '../index';

import { typography } from '../Tokens/index';

export const Text = {
  // Can pass also function, giving you access theming tools
  baseStyle: ({ colorMode }) => {
    return {
      color: colorMode === 'dark' ? theme.colors.neutral.white : theme.colors.neutral.dark.dark04,
      fontWeight: typography.fontWeights.medium,
    };
  },
  sizes: {
    '6xl': {
      fontSize: { base: typography.fontSizes['6xl'], md: 0 }, //7xl
      letterSpacing: -0.05,
      lineHeight: '1.5em',
    },
    '5xl': {
      fontSize: { base: typography.fontSizes['5xl'], md: 0 }, //7xl
      letterSpacing: -0.05,
      lineHeight: '1.5em',
    },
    '4xl': {
      fontSize: { base: typography.fontSizes['4xl'], md: 0 }, //7xl
      letterSpacing: -0.05,
      lineHeight: '1.5em',
    },
    '3xl': {
      fontSize: { base: typography.fontSizes['3xl'], md: 0 },
      letterSpacing: -0.05,
      lineHeight: '1.5em',
    },
    '2xl': {
      fontSize: { base: typography.fontSizes['2xl'], md: 0 },
      letterSpacing: 0,
      lineHeight: '1.5em',
    },
    xl: {
      fontSize: { base: 'xl', md: 0 },
      letterSpacing: 0,
      lineHeight: '1.5em',
    },
    lg: {
      fontSize: { base: 'lg', md: 0 },
      letterSpacing: 0,
      lineHeight: '1.5em',
    },
    md: {
      fontSize: { base: typography.fontSizes.md, md: 0 },
      letterSpacing: 0,
      lineHeight: '1.5em',
    },
    sm: {
      fontSize: { base: typography.fontSizes.sm, md: 0 },
      letterSpacing: 0,
      lineHeight: '1.5em',
    },
    xs: {
      fontSize: { base: typography.fontSizes.xs, md: 0 },
      letterSpacing: 0,
      lineHeight: '1.5em',
    },
    '2xs': {
      fontSize: { base: typography.fontSizes['2xs'], md: 0 },
      letterSpacing: 0,
      lineHeight: '1.5em',
    },
  },
  defaultProps: {
    size: 'xl',
  },
};
