import { Story } from '@storybook/angular';
import { FreudBadgeComponent } from '@freud-ds/web-components';
const Template: Story<FreudBadgeComponent> = (args: FreudBadgeComponent) => ({
  props: { ...args },
  template: `
    <freud-badge [size]="size" [color]="color" [value]="value"></freud-badge>
  `,
});

const TemplateBlank: Story<FreudBadgeComponent> = (args: FreudBadgeComponent) => ({
  props: { ...args },
  template: `
    <freud-badge [size]="size" [color]="color" [value]="value" style="position: relative;top: 6px;"></freud-badge>
  `,
});

const TemplateBgColor: Story<FreudBadgeComponent> = (args: FreudBadgeComponent) => ({
  props: { ...args },
  template: `
    <freud-badge style="margin-right: 8px;" [color]="'primary'" [value]="'1'"></freud-badge>
    <freud-badge style="margin-right: 8px;" [color]="'success'" [value]="'10'"></freud-badge>
    <freud-badge style="margin-right: 8px;" [color]="'info'" [value]="'5'"></freud-badge>
    <freud-badge style="margin-right: 8px;" [color]="'warning'" [value]="'99'"></freud-badge>
    <freud-badge style="margin-right: 8px;" [color]="'error'" [value]="'A'"></freud-badge>
    <freud-badge style="position: relative;top: 6px;" [color]="'actived'" [value]="''"></freud-badge>
  `,
});

// Sizes
export const Default = Template.bind({});
Default.args = {
  value: '1',
  size: 'default',
  color: 'primary'
};

export const Large = Template.bind({});
Large.args = {
  value: '1',
  size: 'large',
  color: 'primary'
};

// Colors
export const Primary = Template.bind({});
Primary.args = {
  value: '1',
  color: 'primary',
};
export const Success = Template.bind({});
Success.args = {
  value: '10',
  color: 'success'
};
export const Info = Template.bind({});
Info.args = {
  value: '5',
  color: 'info'
};
export const Warning = Template.bind({});
Warning.args = {
  value: '99',
  color: 'warning'
};
export const Error = Template.bind({});
Error.args = {
  value: 'A',
  color: 'error'
};
export const Actived = TemplateBlank.bind({});
Actived.args = {
  value: '',
  color: 'actived'
};


export const BGColor = TemplateBgColor.bind({});
