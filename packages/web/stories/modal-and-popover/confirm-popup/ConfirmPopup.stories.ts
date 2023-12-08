import { FreudConfirmPopupComponent } from '@freud-ds/web-components';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { applicationConfig, Story } from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';

const Template: Story<FreudConfirmPopupComponent> = () => ({
  template: `
    <freud-confirm-popup-example></freud-confirm-popup-example>
  `,
});

export const Default = Template.bind({});

export default {
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(BrowserAnimationsModule)],
    }),
  ],
};
