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
      [cancel]="cancel"
      [disabled]="disabled"
      [readonly]="readonly"
      [iconOnClass]="iconOnClass"
      [iconOffClass]="iconOffClass"
      [iconCancelClass]="iconCancelClass"
      [bgColor]="bgColor">
    </freud-rating>
  `,
});

export const Default = Template.bind({});
export const Disabled = Template.bind({});
Disabled.args = {
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

export const CancelButton = Template.bind({});
CancelButton.args = {
  value: 80,
  cancel: true
};
