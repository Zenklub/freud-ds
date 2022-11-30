import { Story } from '@storybook/angular';
import { FreudBadgeComponent } from '@freud-ds/web-components';


const Template: Story<FreudBadgeComponent> = (args: FreudBadgeComponent) => ({
  props: { ...args },
  template: `
    <freud-badge [size]="size" [color]="color" [value]="value"></freud-badge>
  `,
});

// Sizes
export const Small = Template.bind({});
Small.args = {
  value: '1',
  size: 'sm',
  color: 'primary'
};

// Colors
export const Primary = Template.bind({});
Primary.args = {
  value: '1',
  color: 'primary',
};
export const Success = Template.bind({});
Success.args = {
  value: '10',
  color: 'success'
};
export const Info = Template.bind({});
Info.args = {
  value: '5',
  color: 'info'
};
export const Warning = Template.bind({});
Warning.args = {
  value: '99',
  color: 'warning'
};
export const Error = Template.bind({});
Error.args = {
  value: 'A',
  color: 'error'
};
export const Actived = Template.bind({});
Actived.args = {
  value: 'B',
  color: 'actived'
};
