import { Component } from '@angular/core';
import { FreudMessageService } from '@freud-ds/web-components';

@Component({
  selector: 'freud-toast-examples',
  template: `
    <freud-toast
      key="clickable"
      url="https://zenklub.com.br/faq/"
    ></freud-toast>
    <freud-toast key="default"></freud-toast>

    <p>Padrão:</p>
    <div style="display: flex; gap: 12px; margin-bottom: 2em">
      <freud-button (click)="confirm('success', 'Success')"
        >Success</freud-button
      >
      <freud-button (click)="confirm('info', 'Info')">Info</freud-button>
      <freud-button (click)="confirm('warn', 'Warning')">Warning</freud-button>
      <freud-button (click)="confirm('error', 'Error')">Error</freud-button>
    </div>

    <p>Clicável:</p>
    <div style="display: flex; gap: 12px">
      <freud-button (click)="confirm('success', 'Success', 'clickable')"
        >Success</freud-button
      >
      <freud-button (click)="confirm('info', 'Info', 'clickable')"
        >Info</freud-button
      >
      <freud-button (click)="confirm('warn', 'Warning', 'clickable')"
        >Warning</freud-button
      >
      <freud-button (click)="confirm('error', 'Error', 'clickable')"
        >Error</freud-button
      >
    </div>
  `,
  styleUrls: ['./example.component.scss'],
})
export class FreudToastExampleComponent {
  constructor(private messageService: FreudMessageService) {}

  confirm(severity: string, summary: string, key = 'default') {
    this.messageService.add({
      detail: 'Message Content',
      key,
      life: 2000,
      severity: severity,
      sticky: true,
      summary: summary,
    });
  }
}
