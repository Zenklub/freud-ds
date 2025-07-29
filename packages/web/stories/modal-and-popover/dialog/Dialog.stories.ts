import { Story } from '@storybook/angular';
import { FreudDialogExampleComponent } from "./dialog-example/example.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { moduleMetadata } from '@storybook/angular';

const Template: Story<FreudDialogExampleComponent> = (args: FreudDialogExampleComponent) => ({
  props: {...args},
  template: `
    <freud-dialog-example [view]="view"></freud-dialog-example>
  `,
});

export const Default = Template.bind({});
Default.args = {
  view: 'basic'
}
export const Modal = Template.bind({});
Modal.args = {
  view: 'modal'
}

export const Maximizable = Template.bind({});
Maximizable.args = {
  view: 'maximizable'
}

// Accessibility
const TemplateAccessibility: Story<FreudDialogExampleComponent> = (
  args: FreudDialogExampleComponent,
) => ({
  props: { ...args },
  template: `
    <div style="min-height: 400px;">
      <freud-dialog-example [view]="view"></freud-dialog-example>
    </div>
  `,
});

export const WithAccessibility = TemplateAccessibility.bind({});
WithAccessibility.storyName = 'Acessibilidade';
WithAccessibility.args = {
  view: 'basic',
};

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
