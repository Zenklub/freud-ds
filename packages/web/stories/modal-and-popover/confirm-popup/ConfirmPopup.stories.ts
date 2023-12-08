import { FreudConfirmPopupComponent } from '@freud-ds/web-components';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata, Story } from '@storybook/angular';

const Template: Story<FreudConfirmPopupComponent> = () => ({
  template: `
    <freud-confirm-popup-example></freud-confirm-popup-example>
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
