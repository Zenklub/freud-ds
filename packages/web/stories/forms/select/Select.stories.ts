import { Story } from '@storybook/angular';
import { FreudSelectComponent } from '@freud-ds/web-components';

const items = [
  {name: 'New York', code: 'NY'},
  {name: 'Rome', code: 'RM', disabled: true},
  {name: 'London', code: 'LDN'},
  {name: 'Istanbul', code: 'IST'},
  {name: 'Paris', code: 'PRS'}
];

const templateHTML = `
    <freud-select
        [(ngModel)]="value"
        [disabled]="disabled"
        [label]="label"
        [options]="options"
        [optionLabel]="optionLabel"
        [optionValue]="optionValue"
        [placeholder]="placeholder"
        [helpText]="helpText"
        [invalid]="invalid"
        [bgColor]="bgColor">
    </freud-select>
`;

const Template: Story<FreudSelectComponent> = (args: FreudSelectComponent) => ({
  props: { ...args },
  template: templateHTML,
});
export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  value: '',
  placeholder: 'Placeholder',
  options: items,
  optionLabel: 'name',
  optionValue: 'code'
};

export const BGColor = Template.bind({});
BGColor.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  bgColor: true,
  helpText: 'Helper Text',
  options: items,
  optionLabel: 'name',
  optionValue: 'code'
};
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Label',
  disabled: true,
  options: items,
  optionLabel: 'name',
  optionValue: 'code'
};

export const AutoResize = Template.bind({});
AutoResize.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  options: items,
  optionLabel: 'name',
  optionValue: 'code'
};

export const Invalid = Template.bind({});
Invalid.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  invalid: true,
  options: items,
  optionLabel: 'name',
  optionValue: 'code'
};

