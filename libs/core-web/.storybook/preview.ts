import { setCompodocJson } from '@storybook/addon-docs/angular';
import { addParameters, addDecorator } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';

import docJson from '../documentation.json';

addParameters({
  options: {
    showRoots: true,
  },
});

addDecorator(withA11y);
setCompodocJson(docJson);
