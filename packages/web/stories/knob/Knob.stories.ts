import { Story } from '@storybook/angular';
import { FreudKnobComponent } from '@freud-ds/web-components';

const Template: Story<FreudKnobComponent> = (
  args: FreudKnobComponent
) => ({
  props: { ...args },
  template: `
    <freud-knob
      [value]="value"
      [min]="min"
      [max]="max"
      [step]="step"
      [size]="size"
      [readonly]="readonly"
      [disabled]="disabled"
      [bgColor]="bgColor">
    </freud-knob>
  `,
});

export const Default = Template.bind({});
Default.args = {
  value: 50
};
export const Disabled = Template.bind({});
Disabled.args = {
  value: 50,
  disabled: true
};
export const Readonly = Template.bind({});
Readonly.args = {
  value: 50,
  readonly: true
};

export const BgColor = Template.bind({});
BgColor.args = {
  value: 80,
  bgColor: true,
};

export const BgColorDisabled = Template.bind({});
BgColorDisabled.args = {
  value: 80,
  bgColor: true,
  disabled: true
};