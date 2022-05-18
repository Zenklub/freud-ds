import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { FreudTagComponent } from './tag.component';

export default {
  title: '@freud-ds/core-web/Tag',
  component: FreudTagComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    })
  ],
  parameters: {
    layout: 'centered',
  },
} as Meta;


const Template: Story<FreudTagComponent> = (args: FreudTagComponent) => ({
  props: { ...args },
  template: `
    <freud-tag [text]="text" [type]="type"></freud-tag>
  `,
});

export const Tag = Template.bind({});
Tag.args = {
  text: 'Tag Label',
  type: 'highlight-1',
};
