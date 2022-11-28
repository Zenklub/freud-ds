import { Story, moduleMetadata, Meta } from '@storybook/angular';
import { FreudBadgeComponent, FreudBadgeModule } from '@freud-ds/web-components';

export const decorators = [
  moduleMetadata({
    imports: [FreudBadgeModule],
  })
];

export default {
  title: '@freud-ds/web-components/Badge',
  component: FreudBadgeComponent,
  decorators: [
    moduleMetadata({
      imports: [FreudBadgeModule],
    })
  ],
} as Meta;


const Template: Story<FreudBadgeComponent> = (args: FreudBadgeComponent) => ({
  props: { ...args },
  template: `
    <freud-badge></freud-badge>
  `,
});

export const Default = Template.bind({});
Default.decorators = decorators;
Default.args = {
  value: '10',
};  

export const Secondary = Template.bind({});
Secondary.args = {
  value: '10',
};  

