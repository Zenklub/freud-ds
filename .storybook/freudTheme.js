import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#6732D1',
  colorSecondary: '#A484E3',

  appBg: '#6732D1',
  appContentBg: 'white',

  // barBg: '#6732D1',
  barSelectedColor: 'black',
  // barBg: 'white',

  textColor: 'black',


  //  // Form colors
  //  inputBg: 'white',
  //  inputBorder: 'silver',
  //  inputTextColor: 'black',
  //  inputBorderRadius: 4,
   
  textInverseColor: 'rgba(255,255,255,0.9)',

  fontBase: '"Fira Sans", sans-serif',

  brandTitle: 'Freud DS',
  brandUrl: 'https://zenklub.com.br',
  brandImage: 'assets/img/logo.svg',
});
