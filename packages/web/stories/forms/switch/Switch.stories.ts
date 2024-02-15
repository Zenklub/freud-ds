import { Story } from '@storybook/angular';
import { FreudSwitchComponent } from '@freud-ds/web-components';

const value = false;

const templateHTML = `
      <freud-input-switch
        [(ngModel)]="defaultValue"
        [disabled]="disabled"
        [invalid]="invalid"
        [custom]="custom">
    </freud-input-switch>
`;

const Template: Story<FreudSwitchComponent> = (args: FreudSwitchComponent) => ({
  props: { ...args },
  template: templateHTML,
});
export const Default = Template.bind({});
Default.args = {
  value: value,
};

export const BGColor = Template.bind({});
BGColor.args = {
  value: value,
};

export const Custom = Template.bind({});
Custom.args = {
  value: value,
  custom: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  value: value,
};
