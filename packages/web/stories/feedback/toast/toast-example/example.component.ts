import { Component } from '@angular/core';
import { FreudMessageService } from '@freud-ds/web-components';

@Component({
  selector: 'freud-toast-examples',
  template: `
    <freud-toast></freud-toast>
    <div style="display: flex; gap: 12px">
      <freud-button (click)="confirm('success', 'Success')">Success</freud-button>
      <freud-button (click)="confirm('info', 'Info')">Info</freud-button>
      <freud-button (click)="confirm('warn', 'Warning')">Warning</freud-button>
      <freud-button (click)="confirm('error', 'Error')">Error</freud-button>
    </div>
  `,
  styleUrls: ['./example.component.scss']
})
export class FreudToastExampleComponent {

  constructor(private messageService: FreudMessageService) {}

  confirm(severity: string, summary: string) {
    this.messageService.add({severity:severity, summary:summary, detail:'Message Content', sticky: true, life: 2000});
  }
}
