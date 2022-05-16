import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { FreudButtonComponent } from './button.component';
import { FreudButtonModule } from './button.module';

export default {
  title: '@freud-ds/core-web/Button',
  component: FreudButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [FreudButtonModule],
    })
  ],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'Default',
      values: [
        { name: 'Default', value: '#FFFFFF' },
        { name: 'BgColor', value: '#6732D1' },
      ],
    }
  },
  argTypes: {
    label: {
      name: 'Texto',
    },
  },
} as Meta;


const Template: Story<FreudButtonComponent> = (args: FreudButtonComponent) => ({
  props: { ...args },
  template: `
    <button
      freud-button
      [size]="size"
      [color]="color"
      [bgColor]="bgColor"
      [loading]="loading"
      [attr.disabled] = "disabled ? 'disabled' : null"
    >{{ label }}</button>
  `,
});

export const Button = Template.bind({});
Button.args = {
  label: 'Button',
  disabled: false,
};
