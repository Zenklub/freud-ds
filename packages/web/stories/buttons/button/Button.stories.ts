import { Story } from '@storybook/angular';
import { FreudButtonComponent } from '@freud-ds/web-components';

const templateHTML = `
    <freud-button
      [color]="color"
      [bgColor]="bgColor"
      [size]="size"
      [disabled]="disabled"
      [loading]="loading"
      [icon]="icon"
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

const templateHTMLSize = `
    <div style="display: flex;gap: 16px;align-items: center">
      <freud-button [bgColor]="bgColor" [color]="color" [size]="'sm'">Button sm</freud-button>
      <freud-button [bgColor]="bgColor" [size]="'md'">Button md</freud-button>
      <freud-button [bgColor]="bgColor" [size]="'lg'">Button lg</freud-button>
    </div>
`;
const TemplateSize: Story<FreudButtonComponent> = (args: FreudButtonComponent) => ({
  props: { ...args },
  template: templateHTMLSize,
});
export const Size = TemplateSize.bind({});

// Background
const templateHTMLBgColor = `
    <div style="display: flex;gap: 16px;align-items: center">
      <freud-button [bgColor]="true" [color]="'primary'">Button primary</freud-button>
      <freud-button [bgColor]="true" [color]="'secondary'">Button secondary</freud-button>
      <freud-button [bgColor]="true" [color]="'ghost'">Button ghost</freud-button>
    </div>
`;
const TemplateBGColor: Story<FreudButtonComponent> = (args: FreudButtonComponent) => ({
  props: { ...args },
  template: templateHTMLBgColor,
});
export const BGColor = TemplateBGColor.bind({});

const TemplateIcon: Story<FreudButtonComponent> = (args: FreudButtonComponent) => ({
  props: { ...args },
  template: templateHTML.replace(
    '{{label}}',
    ''
  ),
});
export const IconOnly = TemplateIcon.bind({});
IconOnly.args = {
  icon: 'freud-icon freud-icon-check'
}
export const WithIconRight = TemplateLoading .bind({});
WithIconRight.args = {
  icon: 'freud-icon freud-icon-check'
}
