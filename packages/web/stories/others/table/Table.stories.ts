import { Story } from '@storybook/angular';
import { FreudTableComponent } from '@freud-ds/web-components';

const Template: Story<FreudTableComponent> = (args: FreudTableComponent) => ({
  props: { ...args },
  template: `
    <freud-table>
    </freud-table>
  `,
});
export const Default = Template.bind({});

export const BGColor = Template.bind({});
