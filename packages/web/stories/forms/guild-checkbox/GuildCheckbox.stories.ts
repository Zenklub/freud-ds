import { Story } from '@storybook/angular';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { moduleMetadata } from '@storybook/angular';
import { GuildCheckboxComponent } from 'projects/web-components/src/components/forms/guild-checkbox';

const templateHTML = `
  <guild-checkbox [label]="label"></guild-checkbox>
`;

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

const Template: Story<GuildCheckboxComponent> = (args: GuildCheckboxComponent) => ({
  props: { ...args },
  template: templateHTML,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Label, click me!'
};


