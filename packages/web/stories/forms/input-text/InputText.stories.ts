import { Story } from '@storybook/angular';
import { FreudInputTextComponent } from '@freud-ds/web-components';

const templateHTML = `
    <freud-input-text
        [(ngModel)]="value"
        [disabled]="disabled"
        [label]="label"
        [placeholder]="placeholder"
        [helpText]="helpText"
        [invalid]="invalid"
        [rightIcon]="rightIcon"
        [bgColor]="bgColor">
    </freud-input-text>
`;

const Template: Story<FreudInputTextComponent> = (args: FreudInputTextComponent) => ({
  props: { ...args },
  template: templateHTML,
});
export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  value: ''
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  value: ''
};

export const Icon = Template.bind({});
Icon.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  rightIcon: 'freud-icon freud-icon-box'
};

export const HelperText = Template.bind({});
HelperText.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  helpText: 'Helper Text',
};



export const BGColor = Template.bind({});
BGColor.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  bgColor: true,
  helpText: 'Helper Text',
};
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Label',
  disabled: true
};

export const Invalid = Template.bind({});
Invalid.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  invalid: true,
};

