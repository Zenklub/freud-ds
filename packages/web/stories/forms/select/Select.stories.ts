import { Story, applicationConfig } from '@storybook/angular';
import { FreudSelectComponent } from '@freud-ds/web-components';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

const items = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM', disabled: true },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
];

const templateHTML = `
    <div style="height: 250px">
        <freud-select
          [disabled]="disabled"
          [label]="label"
          [options]="options"
          [optionLabel]="optionLabel"
          [filter]="filter"
          [optionValue]="optionValue"
          [placeholder]="placeholder"
          [helpText]="helpText"
          [invalid]="invalid"
          [bgColor]="bgColor">
      </freud-select>
    </div>
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
  optionValue: 'code',
};

export const BGColor = Template.bind({});
BGColor.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  bgColor: true,
  helpText: 'Helper Text',
  options: items,
  optionLabel: 'name',
  optionValue: 'code',
};

export const Filter = Template.bind({});
Filter.args = {
  label: 'Label',
  filter: true,
  value: '',
  placeholder: 'Placeholder',
  options: items,
  optionLabel: 'name',
  optionValue: 'code',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Label',
  disabled: true,
  options: items,
  optionLabel: 'name',
  optionValue: 'code',
};

export const Invalid = Template.bind({});
Invalid.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  invalid: true,
  options: items,
  optionLabel: 'name',
  optionValue: 'code',
};

export default {
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(BrowserAnimationsModule)],
    }),
  ],
};
