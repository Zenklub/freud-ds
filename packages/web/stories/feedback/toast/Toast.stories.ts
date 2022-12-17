import { FreudToastComponent, FreudMessage } from '@freud-ds/web-components';
import { Story } from '@storybook/angular';
import { HeadingBGColor } from "../../typography/typography.stories";

const Template: Story<FreudToastComponent> = (args: FreudToastComponent) => ({
  props: { ...args },
  template: `
    <freud-toast-examples>
    </freud-toast-examples>
  `,
});

export const Default = Template.bind({});
Default.storyName = 'Theme'
