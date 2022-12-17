import { FreudAlertMessagesComponent, FreudMessage } from '@freud-ds/web-components';
import { Story } from '@storybook/angular';

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

