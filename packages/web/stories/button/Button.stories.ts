import { Story, moduleMetadata } from '@storybook/angular';
import { FreudButtonComponent, FreudButtonModule } from '@freud-ds/web-components';

export const decorators = [
  moduleMetadata({
    imports: [FreudButtonModule],
  })
];


const Template: Story<FreudButtonComponent> = (args: FreudButtonComponent) => ({
  props: { ...args },
  template: `
    <freud-button [color]="color">
    Button {{color}}</freud-button>
  `,
});

export const Primary = Template.bind({});
Primary.decorators = decorators;
Primary.args = {
  color: 'primary',
};  

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary'
};

export const Ghost = Template.bind({});
Ghost.args = {
  color: 'ghost'
};