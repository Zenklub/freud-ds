import { Story, applicationConfig } from '@storybook/angular';
import { FreudDialogExampleComponent } from './dialog-example/example.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

const Template: Story<FreudDialogExampleComponent> = (
  args: FreudDialogExampleComponent,
) => ({
  props: { ...args },
  template: `
    <div style="min-height: 400px;">
      <freud-dialog-example [view]="view"></freud-dialog-example>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  view: 'basic',
};
export const Modal = Template.bind({});
Modal.args = {
  view: 'modal',
};

export const Maximizable = Template.bind({});
Maximizable.args = {
  view: 'maximizable',
};

export default {
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(BrowserAnimationsModule)],
    }),
  ],
};
