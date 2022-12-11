import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'freud-card',
  template: `
    <p-card
      [header]="header"
      [subheader]="subheader"
      [style]="style">
    </p-card>
  `,
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-card',
  }
})
export class FreudCardComponent {

  @Input() header!: string;
  @Input() subheader!: string;
  @Input() style!: string;

}
