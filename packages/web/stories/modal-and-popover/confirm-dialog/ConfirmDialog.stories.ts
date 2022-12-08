import { FreudConfirmDialogComponent } from '@freud-ds/web-components';
import { Story } from '@storybook/angular';

const Template: Story<FreudConfirmDialogComponent> = (args: FreudConfirmDialogComponent) => ({
  template: `
    <freud-confirm-dialog-example></freud-confirm-dialog-example>
  `,
});

export const Default = Template.bind({});

