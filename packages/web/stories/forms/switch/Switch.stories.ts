import { Story } from '@storybook/angular';
import { FreudSwitchComponent } from '@freud-ds/web-components';

let value: boolean = false;

const templateHTML = `
      <freud-input-switch
        [(ngModel)]="defaultValue"
        [disabled]="disabled"
        [invalid]="invalid">
    </freud-input-switch>
`;

const Template: Story<FreudSwitchComponent> = (args: FreudSwitchComponent) => ({
  props: { ...args },
  template: templateHTML,
});
export const Default = Template.bind({});
Default.args = {
  value: value
};

export const BGColor = Template.bind({});
BGColor.args = {
  value: value
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  value: value
};
