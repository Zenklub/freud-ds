import { Story } from '@storybook/angular';
import { FreudButtonComponent } from '@freud-ds/web-components';

const templateHTML = `
    <freud-button
      [color]="color"
      [bgColor]="bgColor"
      [size]="size"
      [disabled]="disabled"
      [loading]="loading"
      freudBadge
      value="1"
      >{{label}}</freud-button>
`;

// Collors
const Template: Story<FreudButtonComponent> = (args: FreudButtonComponent) => ({
  props: { ...args },
  template: templateHTML.replace('{{label}}', 'Button {{color}}'),
});
export const Primary = Template.bind({});
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

// Background
export const PrimaryBackground = Template.bind({});
PrimaryBackground.args = {
  color: 'primary',
  bgColor: true,
};
export const SecondaryBackground = Template.bind({});
SecondaryBackground.args = {
  color: 'secondary',
  bgColor: true,
};
export const GhostBackground = Template.bind({});
GhostBackground.args = {
  color: 'ghost',
  bgColor: true,
};

// Disabled
const TemplateDisabled: Story<FreudButtonComponent> = (args: FreudButtonComponent) => ({
  props: { ...args },
  template: templateHTML.replace('{{label}}', 'Disabled'),
});
export const Disabled = TemplateDisabled.bind({});
Disabled.args = {
  disabled: true
}

// Loading
const TemplateLoading: Story<FreudButtonComponent> = (args: FreudButtonComponent) => ({
  props: { ...args },
  template: templateHTML.replace('{{label}}', 'Button'),
});
export const Loading = TemplateLoading.bind({});
Loading.args = {
  loading: true,
  bgColor: false
}

// Sizes
const TemplateSize: Story<FreudButtonComponent> = (args: FreudButtonComponent) => ({
  props: { ...args },
  template: templateHTML.replace('{{label}}', 'Button {{size}}'),
});
export const SizeSM = TemplateSize.bind({});
SizeSM.args = {
  size: 'sm',
};
export const SizeMD = TemplateSize.bind({});
SizeMD.args = {
  size: 'md',
};
export const SizeLG = TemplateSize.bind({});
SizeLG.args = {
  size: 'lg',
};
