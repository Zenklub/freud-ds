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
    <freud-badge [size]="size" [color]="color" [value]="value" style="position: relative;top: 4px;"></freud-badge>
  `,
});

const TemplateBgColor: Story<FreudBadgeComponent> = (args: FreudBadgeComponent) => ({
  props: { ...args },
  template: `
    <freud-badge style="margin-right: 16px;" [color]="'primary'" [value]="'1'"></freud-badge>
    <freud-badge style="margin-right: 16px;" [color]="'success'" [value]="'10'"></freud-badge>
    <freud-badge style="margin-right: 16px;" [color]="'info'" [value]="'5'"></freud-badge>
    <freud-badge style="margin-right: 16px;" [color]="'warning'" [value]="'99'"></freud-badge>
    <freud-badge style="margin-right: 16px;" [color]="'error'" [value]="'A'"></freud-badge>
    <freud-badge style="position: relative;top: 4px;" [color]="'actived'" [value]="''"></freud-badge>
  `,
});

const TemplateSizes: Story<FreudBadgeComponent> = (args: FreudBadgeComponent) => ({
  props: { ...args },
  template: `
    <freud-badge style="margin-right: 16px;" [size]="'default'" [color]="'primary'" [value]="'1'"></freud-badge>
    <freud-badge [size]="'large'" [color]="'primary'" [value]="'1'"></freud-badge>
  `,
});

// Sizes
export const Size = TemplateSizes.bind({});

// Colors
export const Default = Template.bind({});
Default.args = {
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
