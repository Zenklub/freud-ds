import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#6732D1',
  colorSecondary: '#6732D1',

  // UI
  appBg: '#F0F2F5',
  appBorderRadius: 16,

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barSelectedColor: 'black',
  barBg: '#F7F9FA',

  fontBase: '"Fira Sans", sans-serif',
  brandTitle: 'Freud DS',
  brandUrl: 'https://zenklub.com.br',
  brandImage: 'assets/img/logo-freud.svg',
});
