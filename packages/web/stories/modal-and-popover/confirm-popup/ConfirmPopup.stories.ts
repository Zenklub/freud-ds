import { FreudConfirmPopupComponent } from '@freud-ds/web-components';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { moduleMetadata, Story } from '@storybook/angular';

const Template: Story<FreudConfirmPopupComponent> = (args: FreudConfirmPopupComponent) => ({
  template: `
    <freud-confirm-popup-example></freud-confirm-popup-example>
  `,
});

export const Default = Template.bind({});

export default {
  decorators: [
    moduleMetadata({
      imports: [
        BrowserModule,
        BrowserAnimationsModule
      ]
    })
  ]
}
