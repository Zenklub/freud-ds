import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { FreudTypographyComponent, types } from './typography.component';
import { FreudTypographyModule } from './typography.module';

export default {
  title: '@freud-ds/core-web/Typography',

  component: FreudTypographyComponent,
  decorators: [
    moduleMetadata({
      imports: [FreudTypographyModule],
    }),
  ],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'Default',
      values: [
        { name: 'Default', value: '#FFFFFF' },
        { name: 'BgColor', value: '#6732D1' },
      ],
    },
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: types,
      },
    },
    label: {
      name: 'Texto',
    },
  },
} as Meta;

const Template: Story<FreudTypographyComponent> = (
  args: FreudTypographyComponent
) => ({
  props: { ...args },
  template: `
    <p freud-typography [type]="type">{{ label }}</p>
  `,
});

export const Typography = Template.bind({});

Typography.args = {
  label: 'Typography',
  type: 'display',
};
