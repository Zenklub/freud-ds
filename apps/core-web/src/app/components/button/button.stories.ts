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
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'dark', value: '#6732D1' },
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
      [theme]="theme"
      [loading]="loading"
    >{{ label }}</button>
  `,
});

export const Button = Template.bind({});
Button.args = {
  label: 'Button',
};
