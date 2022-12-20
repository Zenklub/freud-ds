import { FreudConfirmPopupComponent } from '@freud-ds/web-components';
import { Story } from '@storybook/angular';

const Template: Story<FreudConfirmPopupComponent> = (args: FreudConfirmPopupComponent) => ({
  template: `
    <freud-confirm-popup-example></freud-confirm-popup-example>
  `,
});

export const Default = Template.bind({});

