import { Story } from '@storybook/angular';
import { FreudMultiSelectComponent } from '@freud-ds/web-components';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { moduleMetadata } from '@storybook/angular';

const items = [
  {name: 'New York', code: 'NY'},
  {name: 'Rome', code: 'RM', disabled: true},
  {name: 'London', code: 'LDN'},
  {name: 'Istanbul', code: 'IST'},
];

const templateHTML = `
    <div style="height: 300px">
        <freud-multi-select
          [(ngModel)]="value"
          [disabled]="disabled"
          [label]="label"
          [options]="options"
          [optionLabel]="optionLabel"
          [optionValue]="optionValue"
          [placeholder]="placeholder"
          [display]="display"
          [helpText]="helpText"
          [invalid]="invalid"
          [bgColor]="bgColor">
      </freud-multi-select>
    </div>
`;

const Template: Story<FreudMultiSelectComponent> = (args: FreudMultiSelectComponent) => ({
  props: { ...args },
  template: templateHTML,
});
export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  value: [],
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

export const Chip = Template.bind({});
Chip.args = {
  label: 'Label',
  options: items,
  optionLabel: 'name',
  optionValue: 'code',
  display: 'chip'
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

export default {
  decorators: [
    moduleMetadata({
      imports: [
        BrowserModule,
        BrowserAnimationsModule
      ]
    })
  ]
}
