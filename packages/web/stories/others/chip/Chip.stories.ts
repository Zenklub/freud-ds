import { Story } from '@storybook/angular';
import { FreudChipComponent } from '@freud-ds/web-components';

const Template: Story<FreudChipComponent> = (args: FreudChipComponent) => ({
  props: { ...args },
  template: `
    <freud-chip
        [label]="'Action'"
        [removable]="removable">
    </freud-chip>
  `,
});
export const Default = Template.bind({});

export const Removable = Template.bind({});
Removable.args = {
  removable: true,
};
export const BGColor = Template.bind({});
BGColor.args = {
  removable: true,
};
