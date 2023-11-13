import { Story } from '@storybook/angular';
import { FreudActionIconComponent } from "@freud-ds/web-components";

const Template: Story<FreudActionIconComponent> = (args: FreudActionIconComponent) => ({
  props: { ...args },
  template: `<freud-action-icon [bgColor]="bgColor"></freud-action-icon>`,
});
export const Default = Template.bind({});

export const BGColor = Template.bind({});
BGColor.args = {
  bgColor: true
}
