import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { FreudIconComponent } from './icon.component';
import { FreudIconModule } from './icon.module';

export default {
  title: '@freud-ds/core-web/Icon',
  component: FreudIconComponent,
  decorators: [
    moduleMetadata({
      imports: [FreudIconModule, CommonModule],
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
} as Meta;

const Template: Story<FreudIconComponent> = (args: FreudIconComponent) => ({
  props: { ...args },
  template: `
    <i freud-icon [icon]="icon" [size]="size"></i>
  `,
});

export const Icon = Template.bind({});
Icon.args = {
  icon: 'apps',
  size: '32px',
};
