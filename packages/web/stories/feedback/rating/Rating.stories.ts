import { Story } from '@storybook/angular';
import { FreudRatingComponent } from '@freud-ds/web-components';

const Template: Story<FreudRatingComponent> = (
  args: FreudRatingComponent
) => ({
  props: { ...args },
  template: `
    <freud-rating
      [value]="value"
      [stars]="stars"
      [disabled]="disabled"
      [bgColor]="bgColor">
    </freud-rating>
  `,
});

export const Default = Template.bind({});
Default.args = {
  value: 2
}
export const Disabled = Template.bind({});
Disabled.args = {
  value: 2,
  disabled: true
};
export const BGColor = Template.bind({});
BGColor.args = {
  value: 2,
  bgColor: true,
};
