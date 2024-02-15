import { FreudConfirmDialogComponent } from '@freud-ds/web-components';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { applicationConfig, Story } from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';

const Template: Story<FreudConfirmDialogComponent> = () => ({
  template: `
    <div style="min-height: 400px;">
      <freud-confirm-dialog-example></freud-confirm-dialog-example>
    </div>
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
