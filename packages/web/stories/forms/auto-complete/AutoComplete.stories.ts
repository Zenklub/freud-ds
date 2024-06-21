import { Story, applicationConfig } from '@storybook/angular';
import { FreudAutoCompleteComponent } from '@freud-ds/web-components';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

const templateHTML = `
    <div style="height: 150px">
        <freud-auto-complete-example
          [disabled]="disabled"
          [dropdown]="dropdown"
          [multiple]="multiple"
          [invalid]="invalid"
          [bgColor]="bgColor">
        </freud-auto-complete-example>
    </div>
`;

const templateDropdown = `
    <div style="height: 250px">
        <freud-auto-complete-example
          [disabled]="disabled"
          [dropdown]="dropdown"
          [multiple]="multiple"
          [invalid]="invalid"
          [bgColor]="bgColor">
        </freud-auto-complete-example>
    </div>
`;

const TemplateDropdown: Story<FreudAutoCompleteComponent> = (
  args: FreudAutoCompleteComponent,
) => ({
  props: { ...args },
  template: templateDropdown,
});

const Template: Story<FreudAutoCompleteComponent> = (
  args: FreudAutoCompleteComponent,
) => ({
  props: { ...args },
  template: templateHTML,
});
export const Default = Template.bind({});

export const BGColor = Template.bind({});
BGColor.args = {
  bgColor: true,
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
  invalid: true,
};

export const Multiple = Template.bind({});
Multiple.args = {
  multiple: true,
};

export const Dropdown = TemplateDropdown.bind({});
Dropdown.args = {
  dropdown: true,
};

export default {
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(BrowserAnimationsModule)],
    }),
  ],
};
