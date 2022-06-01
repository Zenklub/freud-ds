import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { FreudLinkComponent } from './link.component';
import { FreudLinkModule } from './link.module';

export default {
  title: '@freud-ds/core-web/Link',
  component: FreudLinkComponent,
  decorators: [
    moduleMetadata({
      imports: [FreudLinkModule],
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
    value: {
      name: 'Value',
    },
  },
} as Meta;

const Template: Story<FreudLinkComponent> = (args: FreudLinkComponent) => ({
  props: { ...args },
  template: `
    <a freud-link
      [size]="size"
      [bgColor]="bgColor"
      [attr.disabled] = "disabled ? 'disabled' : null"
      target="_blank"
      href="#"
    >{{ value }}</a>
  `,
});

export const Link = Template.bind({});
Link.args = {
  value: 'Link text',
  disabled: false,
};
