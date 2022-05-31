import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { FreudIconBaseComponent } from './icon-base.component';
import { FreudIconBaseModule } from './icon-base.module';

export default {
  title: '@freud-ds/core-web/IconBase',
  component: FreudIconBaseComponent,
  decorators: [
    moduleMetadata({
      imports: [FreudIconBaseModule, CommonModule],
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

const Template: Story<FreudIconBaseComponent> = (
  args: FreudIconBaseComponent
) => ({
  props: { ...args },
  template: `
    <i freud-icon-base [icon]="icon" [size]="size"></i>
  `,
});

export const IconBase = Template.bind({});
IconBase.args = {
  icon: 'apps',
  size: '32px',
};
