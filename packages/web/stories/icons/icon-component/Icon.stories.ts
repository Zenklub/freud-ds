import { Story } from '@storybook/angular';
import { FreudIconComponent } from '@freud-ds/web-components'; 

const Template: Story<FreudIconComponent> = (args: FreudIconComponent) => ({
  props: { ...args },
  template: `
  <freud-icon [icon]="icon" [size]="size"></freud-icon>  `,
});

export const Icon = Template.bind({});
Icon.args = {
  icon: 'accessible',
};

export const IconSmall = Template.bind({});
IconSmall.args = {
  icon: 'accessible',
    size: 'sm',
};
