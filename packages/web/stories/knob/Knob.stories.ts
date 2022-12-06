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

export const BgColor = Template.bind({});
BgColor.args = {
  value: 50,
  bgColor: true,
};

export const BgColorDisabled = Template.bind({});
BgColorDisabled.args = {
  value: 50,
  bgColor: true,
  disabled: true
};


export const SizeDefault = Template.bind({});
SizeDefault.args = {
  value: 50,
  size: 'default'
};

export const SizeLarge = Template.bind({});
SizeLarge .args = {
  value: 50,
  size: 'large'
};
