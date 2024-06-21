import { Story, applicationConfig } from '@storybook/angular';
import { FreudRadioButtonComponent } from '@freud-ds/web-components';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

const templateHTML = `
        <freud-radio-button-example
            [(ngModel)]="value"
            [disabled]="disabled"
            [label]="label"
            [name]="'label'"
            [bgColor]="bgColor"
        ></freud-radio-button-example>
`;

const Template: Story<FreudRadioButtonComponent> = (
  args: FreudRadioButtonComponent,
) => ({
  props: { ...args },
  template: templateHTML,
  argTypes: {
    value: {
      name: 'ModelValue',
      type: { name: 'string' },
      defaultValue: 'Hello',
      description: 'demo description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Hello' },
      },
      control: {
        type: 'text',
      },
    },
  },
});
export const Default = Template.bind({});

export const BGColor = Template.bind({});
BGColor.args = {
  label: 'Label',
  bgColor: true,
};
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Label',
  disabled: true,
};

export const Label = Template.bind({});
Label.args = {
  label: 'Label',
};

export default {
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(BrowserAnimationsModule)],
    }),
  ],
};
