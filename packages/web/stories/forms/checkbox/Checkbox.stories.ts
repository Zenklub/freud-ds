import { Story } from '@storybook/angular';
import { FreudCheckboxComponent } from '@freud-ds/web-components';


const templateHTML = `
      <freud-checkbox
        [(ngModel)]="value"
        [disabled]="disabled"
        [label]="label"
        [bgColor]="bgColor"
        [invalid]="invalid">
    </freud-checkbox>
`;

const Template: Story<FreudCheckboxComponent> = (args: FreudCheckboxComponent) => ({
  props: { ...args },
  template: templateHTML,
});
export const Default = Template.bind({});
Default.args = {
  value: false,
};

export const BGColor = Template.bind({});
BGColor.args = {
  label: 'Label',
  bgColor: true
};
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Label',
  disabled: true,
};

export const Label = Template.bind({});
Label.args = {
  label: 'Label',
};

