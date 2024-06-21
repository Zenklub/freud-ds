import { Story } from '@storybook/angular';
import {
  FreudSelectButtonComponent,
  FreudSelectButtonOption,
} from '@freud-ds/web-components';

const options: FreudSelectButtonOption[] = [
  { label: 'Item1' },
  { label: 'Item2' },
  { label: 'Item3' },
  { label: 'Item4' },
];

const optionsWithIcon: FreudSelectButtonOption[] = [
  { label: 'Item1', icon: 'calendar' },
  { label: 'Item2', icon: 'arrow-left' },
  { label: 'Item3', icon: 'arrow-right' },
  { label: 'Item4', icon: 'user' },
];

const templateHTML = `
    <freud-select-button
        [options]="options"
        [multiple]="multiple"
        [autoOverflow]="autoOverflow"
        [tabindex]="tabindex"
        [bgColor]="bgColor"
        [disabled]="disabled"
        [selectedOption]="selectedOption"
        [optionDisabled]="optionDisabled"
        [iconPosition]="iconPosition"
        [optionLabel]="optionLabel"></freud-select-button>
`;

const Template: Story<FreudSelectButtonComponent> = (
  args: FreudSelectButtonComponent,
) => ({
  props: { ...args },
  template: templateHTML,
});
export const Default = Template.bind({});
Default.args = {
  options: options,
  optionLabel: 'label',
  selectedOption: options[1],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  options: optionsWithIcon,
  optionLabel: 'label',
  selectedOption: optionsWithIcon[1],
  iconPosition: 'preppend',
};

export const IconAppendPreppend = Template.bind({});
IconAppendPreppend.args = {
  options: optionsWithIcon,
  optionLabel: 'label',
  selectedOption: optionsWithIcon[1],
  iconPosition: 'append',
};

const fixedWidthTemplate: Story<FreudSelectButtonComponent> = (
  args: FreudSelectButtonComponent,
) => ({
  props: { ...args },
  template: `<div class="resizable-div">${templateHTML}</div>`,
});

export const Overflow = fixedWidthTemplate.bind({});
Overflow.args = {
  options: optionsWithIcon,
  optionLabel: 'label',
  selectedOption: optionsWithIcon[1],
  iconPosition: 'append',
  autoOverflow: true,
};

export const BGColor = Template.bind({});
BGColor.args = {
  options: options,
  optionLabel: 'label',
  tabindex: 1,
  bgColor: true,
};
export const Disabled = Template.bind({});
const optionsDisabled = [
  { label: 'Item1', disabled: true },
  { label: 'Item2' },
  { label: 'Item3' },
  { label: 'Item4' },
];
Disabled.args = {
  options: optionsDisabled,
  optionLabel: 'label',
  tabindex: 1,
  disabled: true,
};

export const OptionDisabled = Template.bind({});
OptionDisabled.args = {
  options: optionsDisabled,
  optionLabel: 'label',
  tabindex: 1,
  optionDisabled: 'disabled',
};
