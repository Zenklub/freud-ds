import { addons } from '@storybook/addons';
import yourTheme from '../../../.storybook/freudTheme';
import '!style-loader!css-loader!../src/theme/storybook-manager.scss';

addons.setConfig({
  theme: yourTheme,
});