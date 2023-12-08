import { FreudToastComponent } from '@freud-ds/web-components';
import { Story, applicationConfig } from '@storybook/angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

const Template: Story<FreudToastComponent> = (args: FreudToastComponent) => ({
  props: { ...args },
  template: `
    <freud-toast-examples>
    </freud-toast-examples>
  `,
});

export const Default = Template.bind({});
Default.storyName = 'Theme';

export default {
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(BrowserAnimationsModule)],
    }),
  ],
};
