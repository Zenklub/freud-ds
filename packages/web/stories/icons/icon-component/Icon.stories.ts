import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { FreudIconComponent } from '@freud-ds/web-components';
import { AllIconsComponent } from '../all-icons/all-icons.component';

export default {
  title: 'Icons',
  decorators: [
    moduleMetadata({
      declarations: [AllIconsComponent],
    }),
  ],
} as Meta;

const Template: Story<FreudIconComponent> = (args: FreudIconComponent) => ({
  props: { ...args },
  template: '<freud-icon [icon]="icon" [size]="size"></freud-icon>',
});

export const AllIcons = () => {
  return {
    template: `
      <all-icons copyMode="component"></all-icons>
     `,
  };
};

export const Icon = () => {
  return {
    template: '<freud-icon icon="award"></freud-icon>',
  };
};

export const IconSmall = () => {
  return {
    template: '<freud-icon icon="award" size="sm"></freud-icon>',
  };
};

export const IconTest = Template.bind({});
IconTest.args = {
  icon: 'award',
};
