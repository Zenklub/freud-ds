import { Story } from '@storybook/angular';
import { FreudBlockExampleComponent } from "./block-example/example.component";


const Template: Story<FreudBlockExampleComponent> = (args: FreudBlockExampleComponent) => ({
  props: { ...args },
  template: `<freud-block-ui-example [withTarget]="withTarget"></freud-block-ui-example>`,
});
export const Default = Template.bind({});

export const Panel = Template.bind({});
Panel.args = {
  withTarget: true
}
