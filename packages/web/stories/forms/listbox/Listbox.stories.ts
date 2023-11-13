import { Story } from '@storybook/angular';
import { FreudListboxComponent } from '@freud-ds/web-components';
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
    <div style="height: 250px">
        <freud-listbox
          [(ngModel)]="value"
          [disabled]="disabled"
          [options]="options"
          [multiple]="multiple"
          [filter]="filter"
          [checkbox]="checkbox"
          [optionLabel]="optionLabel"
          [optionValue]="optionValue"
          [invalid]="invalid">
      </freud-listbox>
    </div>
`;

const Template: Story<FreudListboxComponent> = (args: FreudListboxComponent) => ({
  props: { ...args },
  template: templateHTML,
});
export const Default = Template.bind({});
Default.args = {
  value: '',
  options: items,
  optionLabel: 'name',
  optionValue: 'code'
};

export const Filter = Template.bind({});
Filter.args = {
  options: items,
  optionLabel: 'name',
  multiple: true,
  filter: true
};

export const BGColor = Template.bind({});
BGColor.args = {
  options: items,
  optionLabel: 'name',
  optionValue: 'code'
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  options: items,
  optionLabel: 'name',
  optionValue: 'code'
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  options: items,
  optionLabel: 'name',
  optionValue: 'code',
  checkbox: true,
  multiple: true
};

export const CheckboxAndFilter = Template.bind({});
CheckboxAndFilter.args = {
  options: items,
  optionLabel: 'name',
  optionValue: 'code',
  checkbox: true,
  multiple: true,
  filter: true
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
