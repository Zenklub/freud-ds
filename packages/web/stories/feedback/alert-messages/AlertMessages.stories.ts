import { FreudAlertMessagesComponent, FreudMessage } from '@freud-ds/web-components';
import { Story } from '@storybook/angular';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { moduleMetadata } from '@storybook/angular';

// Propriedades disponíveis no FreudAlertMessagesComponent:
// - messages: FreudMessage[] (obrigatório)
// - severity: 'success' | 'info' | 'warn' | 'error' (padrão: 'success')
// - text: string (obrigatório)
// - closable: boolean (padrão: true)
// - ariaLabelledBy?: string - Propriedade de acessibilidade
// - ariaLabel?: string - Propriedade de acessibilidade

const messages: FreudMessage[] = [
  {severity:'success', summary:'Success', detail:'Message content'},
  {severity:'info', summary:'Info', detail:'Message content'},
  {severity:'warn', summary:'Warning', detail:'Message content'},
  {severity:'error', summary:'Error', detail:'Message content'}
]

const Template: Story<FreudAlertMessagesComponent> = (args: FreudAlertMessagesComponent) => ({
  props: { ...args },
  template: `
    <freud-alert-messages
        [messages]="messages">
    </freud-alert-messages>
  `,
});

export const Default = Template.bind({});
Default.args = {
  messages: messages
}

const TemplateInline: Story<FreudAlertMessagesComponent> = (args: FreudAlertMessagesComponent) => ({
  props: { ...args },
  template: `
    <freud-alert-message [severity]="'success'" [text]="'Message Content'"></freud-alert-message><br><br>
    <freud-alert-message [severity]="'info'" [text]="'Message Content'"></freud-alert-message><br><br>
    <freud-alert-message [severity]="'warn'" [text]="'Message Content'"></freud-alert-message><br><br>
    <freud-alert-message [severity]="'error'" [text]="'Message Content'"></freud-alert-message><br><br>
  `,
});
export const Inline = TemplateInline.bind({});

export const BGColor = Template.bind({});
BGColor.args = {
  messages: messages
}

// Accessibility
const TemplateAccessibility: Story<FreudAlertMessagesComponent> = (
  args: FreudAlertMessagesComponent,
) => ({
  props: { ...args },
  template: `
    <freud-alert-messages
        [messages]="messages"
        [ariaLabel]="ariaLabel"
        [ariaLabelledBy]="ariaLabelledBy">
    </freud-alert-messages>
  `,
});

export const WithAccessibility = TemplateAccessibility.bind({});
WithAccessibility.args = {
  messages: messages,
  ariaLabel: 'Mensagens de alerta do sistema',
  ariaLabelledBy: 'alert-heading',
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
