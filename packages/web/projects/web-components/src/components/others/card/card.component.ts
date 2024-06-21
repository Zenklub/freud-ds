import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { Card } from 'primeng/card';

@Component({
  selector: 'freud-card',
  template: `
    <p-card
      #cardElement
      [header]="header"
      [subheader]="subheader"
      [style]="style"
    >
      <ng-template pTemplate="header">
        <ng-content select="[freudTemplateHeader]"></ng-content>
      </ng-template>
      <ng-content></ng-content>
      <ng-template pTemplate="footer">
        <ng-content select="[freudTemplatefooter]"></ng-content>
      </ng-template>
    </p-card>
  `,
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-card',
  },
})
export class FreudCardComponent {
  @Input() header!: string;
  @Input() subheader!: string;
  @Input() style!: any;
  @ViewChild('cardElement') cardElement!: Card;

  getBlockableElement() {
    return this.cardElement.getBlockableElement();
  }
}
