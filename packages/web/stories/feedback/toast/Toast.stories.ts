import { FreudToastComponent } from '@freud-ds/web-components';
import { Story } from '@storybook/angular';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';

const Template: Story<FreudToastComponent> = (args: FreudToastComponent) => ({
  props: { ...args },
  template: `
    <freud-toast-examples>
    </freud-toast-examples>
  `,
});

export const Default = Template.bind({});
Default.storyName = 'Theme';

export default {
  decorators: [
    moduleMetadata({
      imports: [BrowserModule, BrowserAnimationsModule],
    }),
  ],
};
