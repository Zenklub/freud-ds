import { Story } from '@storybook/angular';
import { FreudCheckboxComponent } from '@freud-ds/web-components';


const templateHTML = `
      <freud-checkbox
        [(ngModel)]="value"
        [disabled]="disabled"
        [label]="label"
        [invalid]="invalid">
    </freud-checkbox>
`;

const Template: Story<FreudCheckboxComponent> = (args: FreudCheckboxComponent) => ({
  props: { ...args },
  template: templateHTML,
});
export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  value: '',
};

export const BGColor = Template.bind({});
BGColor.args = {
  label: 'Label',
};
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Label',
  disabled: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
  label: 'Label',
};

