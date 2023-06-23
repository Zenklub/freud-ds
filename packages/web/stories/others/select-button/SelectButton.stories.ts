import { Story } from '@storybook/angular';
import { FreudSelectButtonComponent } from '@freud-ds/web-components';

const options = [
  {label: 'Item1'},
  {label: 'Item2'},
  {label: 'Item3'},
  {label: 'Item4'}
]

const templateHTML = `
    <freud-select-button
        [options]="options"
        [multiple]="multiple"
        [tabindex]="tabindex"
        [bgColor]="bgColor"
        [disabled]="disabled"
        [selectedOption]="selectedOption"
        [optionDisabled]="optionDisabled"
        [optionLabel]="optionLabel"></freud-select-button>
`;

const Template: Story<FreudSelectButtonComponent> = (args: FreudSelectButtonComponent) => ({
  props: { ...args },
  template: templateHTML,
});
export const Default = Template.bind({});
Default.args = {
  options: options,
  optionLabel: 'label',
  selectedOption: options[1]
};

export const BGColor = Template.bind({});
BGColor.args = {
  options: options,
  optionLabel: 'label',
  tabindex: 1,
  bgColor: true
};
export const Disabled = Template.bind({});
const optionsDisabled = [
  {label: 'Item1', disabled: true},
  {label: 'Item2'},
  {label: 'Item3'},
  {label: 'Item4'}
]
Disabled.args = {
  options: optionsDisabled,
  optionLabel: 'label',
  tabindex: 1,
  disabled: true
};

export const OptionDisabled = Template.bind({});
OptionDisabled.args = {
  options: optionsDisabled,
  optionLabel: 'label',
  tabindex: 1,
  optionDisabled: 'disabled'
};
