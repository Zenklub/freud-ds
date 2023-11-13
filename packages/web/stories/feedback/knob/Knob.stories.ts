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

export const BGColor = Template.bind({});
BGColor.args = {
  value: 50,
  bgColor: true,
};


const TemplateSize: Story<FreudKnobComponent> = (
  args: FreudKnobComponent
) => ({
  props: { ...args },
  template: `
    <div style="display: flex; align-items: center;">
      <freud-knob style="margin-right: 20px"
        [value]="'50'"
        [size]="'default'">
      </freud-knob>

      <freud-knob
        [value]="'50'"
        [size]="'large'">
      </freud-knob>
    </div>
  `,
});
export const Size = TemplateSize.bind({});
