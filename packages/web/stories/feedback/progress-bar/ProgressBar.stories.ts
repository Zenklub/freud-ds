import { Story } from '@storybook/angular';
import { FreudProgressBarComponent } from '@freud-ds/web-components';

const Template: Story<FreudProgressBarComponent> = (
  args: FreudProgressBarComponent
) => ({
  props: { ...args },
  template: `
      <freud-progress-bar [bgColor]="bgColor" [value]="50" [mode]="mode">
      </freud-progress-bar>
  `,
});

export const Default = Template.bind({});
Default.args = {
  bgColor: false
}

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  bgColor: false,
  mode: 'indeterminate'
}
export const BGColor = Template.bind({});
BGColor.args = {
  bgColor: true
}
