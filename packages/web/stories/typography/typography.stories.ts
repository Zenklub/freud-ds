import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { FreudTypographyComponent, types } from '@freud-ds/web-components';
import { FreudTypographyModule } from '@freud-ds/web-components';

export default {
  title: '@freud-ds/web-components/Typography (Modelo antigo)',

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
  args: {
    label: 'Typography'
  }
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
  type: 'display',
};
