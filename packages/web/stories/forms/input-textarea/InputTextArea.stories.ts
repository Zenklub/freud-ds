import { Story } from '@storybook/angular';
import { FreudInputTextAreaComponent } from '@freud-ds/web-components';

const templateHTML = `
    <freud-input-textarea
        [(ngModel)]="value"
        [disabled]="disabled"
        [label]="label"
        [rows]="rows"
        [cols]="cols"
        [autoResize]="autoResize"
        [placeholder]="placeholder"
        [helpText]="helpText"
        [invalid]="invalid"
        [bgColor]="bgColor">
    </freud-input-textarea>
`;

const Template: Story<FreudInputTextAreaComponent> = (args: FreudInputTextAreaComponent) => ({
  props: { ...args },
  template: templateHTML,
});
export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  value: '',
  placeholder: 'Placeholder',
  rows: 5,
  cols: 30,
  autoResize: false
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

export const AutoResize = Template.bind({});
AutoResize.args = {
  label: 'Label',
  autoResize: true,
  placeholder: 'Placeholder',
};

export const Invalid = Template.bind({});
Invalid.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  invalid: true,
};

