import { Story } from '@storybook/angular';
import { FreudSwitchComponent } from '@freud-ds/web-components';


const templateHTML = `
      <freud-input-switch
        [(ngModel)]="value"
        [disabled]="disabled"
        [invalid]="invalid">
    </freud-input-switch>
`;

const Template: Story<FreudSwitchComponent> = (args: FreudSwitchComponent) => ({
  props: { ...args },
  template: templateHTML,
});
export const Default = Template.bind({});

export const BGColor = Template.bind({});
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
  invalid: true,
};
