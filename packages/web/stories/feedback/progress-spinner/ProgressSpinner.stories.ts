import { Story } from '@storybook/angular';
import { FreudProgressSpinnerComponent } from '@freud-ds/web-components';

const Template: Story<FreudProgressSpinnerComponent> = (
  args: FreudProgressSpinnerComponent
) => ({
  props: { ...args },
  template: `
  <div style="width: 350px">
      <freud-progress-spinner [bgColor]="bgColor">
      </freud-progress-spinner>
  </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  bgColor: false
}
export const BgColor = Template.bind({});
BgColor.args = {
  bgColor: true
}
