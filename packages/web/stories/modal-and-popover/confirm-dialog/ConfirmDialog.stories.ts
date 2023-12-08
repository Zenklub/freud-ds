import { FreudConfirmDialogComponent } from '@freud-ds/web-components';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata, Story } from '@storybook/angular';

const Template: Story<FreudConfirmDialogComponent> = () => ({
  template: `
    <freud-confirm-dialog-example></freud-confirm-dialog-example>
  `,
});

export const Default = Template.bind({});

export default {
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule],
    }),
  ],
};
