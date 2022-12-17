import { ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Component, Input } from '@angular/core';
import { FreudMessage } from "../../../api";

type severities = 'success' | 'info' | 'warn' | 'error';

@Component({
  selector: 'freud-alert-messages',
  template: `
    <p-messages [(value)]="messages" [closable]="closable"></p-messages>
  `,
  styleUrls: ['./alert-messages.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-alert-messages'
  }
})
export class FreudAlertMessagesComponent {
  @Input() messages!: FreudMessage[];

  @Input() severity: severities = 'success';
  @Input() text!: string;
  @Input() closable: boolean = true;

}

@Component({
  selector: 'freud-alert-message',
  template: `
    <p-message [severity]="severity" [text]="text"></p-message>
  `,
  styleUrls: ['./alert-messages.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-alert-messages'
  }
})
export class FreudAlertMessageComponent {

  @Input() severity: severities = 'success';
  @Input() text!: string;

}
