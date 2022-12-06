import { Story } from '@storybook/angular';
import { FreudTagComponent } from '@freud-ds/web-components';

const Template: Story<FreudTagComponent> = (args: FreudTagComponent) => ({
  props: { ...args },
  template: `
    <freud-tag [outline]="outline" [color]="color" [value]="value"></freud-tag>
  `,
});

// Colors
export const Primary = Template.bind({});
Primary.args = {
  value: 'Default',
  color: 'primary'
};
export const Success = Template.bind({});
Success.args = {
  value: 'Success',
  color: 'success'
};
export const Info = Template.bind({});
Info.args = {
  value: 'Info',
  color: 'info'
};
export const Warning = Template.bind({});
Warning.args = {
  value: 'Warning',
  color: 'warning'
};
export const Error = Template.bind({});
Error.args = {
  value: 'Error',
  color: 'error'
};

// outline
export const OutlinePrimary = Template.bind({});
OutlinePrimary.args = {
  value: 'Primary',
  outline: true
};
export const OutlineSuccess = Template.bind({});
OutlineSuccess.args = {
  value: 'Success',
  color: 'success',
  outline: true
};
export const OutlineInfo = Template.bind({});
OutlineInfo.args = {
  value: 'Info',
  color: 'info',
  outline: true
};
export const OutlineWarning = Template.bind({});
OutlineWarning.args = {
  value: 'Warning',
  color: 'warning',
  outline: true
};
export const OutlineError = Template.bind({});
OutlineError.args = {
  value: 'Error',
  color: 'error',
  outline: true
};


const TemplateBgColor: Story<FreudTagComponent> = (args: FreudTagComponent) => ({
  props: { ...args },
  template: `
    <freud-tag style="margin-right: 8px" [outline]="outline" [value]="'Primary'"></freud-tag>
    <freud-tag style="margin-right: 8px" [outline]="outline" [color]="'success'" [value]="'Success'"></freud-tag>
    <freud-tag style="margin-right: 8px" [outline]="outline" [color]="'info'" [value]="'Info'"></freud-tag>
    <freud-tag style="margin-right: 8px" [outline]="outline" [color]="'warning'" [value]="'Warning'"></freud-tag>
    <freud-tag style="margin-right: 8px" [outline]="outline" [color]="'error'" [value]="'Error'"></freud-tag>
  `,
});

export const BgColor = TemplateBgColor.bind({});
BgColor.args = {
  outline: false
};

export const BgColorOutLine = TemplateBgColor.bind({});
BgColorOutLine.args = {
  outline: true
};
