import { addParameters, addDecorator } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';

addParameters({
  options: {
    showRoots: true,
  },
});

addDecorator(withA11y);
