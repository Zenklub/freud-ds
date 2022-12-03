import { Story } from '@storybook/angular';
import { FreudTagComponent } from '@freud-ds/web-components';

const Template: Story<FreudTagComponent> = (args: FreudTagComponent) => ({
  props: { ...args },
  template: `
    <freud-tag [outline]="outline" [color]="color" [value]="value"></freud-tag>
  `,
});

// Colors
export const Primary = Template.bind({});
Primary.args = {
  value: 'Primary(Default)',
  color: 'primary'
};
export const Success = Template.bind({});
Success.args = {
  value: 'Success',
  color: 'success'
};
export const Info = Template.bind({});
Info.args = {
  value: 'info',
  color: 'info'
};
export const Warning = Template.bind({});
Warning.args = {
  value: 'warning',
  color: 'warning'
};
export const Error = Template.bind({});
Error.args = {
  value: 'error',
  color: 'error'
};

// outline
export const Outline = Template.bind({});
Outline.args = {
  value: 'Outline',
  outline: true
};
