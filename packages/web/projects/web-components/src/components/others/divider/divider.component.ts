import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'freud-divider',
  template: `
    <p-divider
      [type]="type"
      [layout]="layout"
      [align]="align"
      [style]="style">
      <ng-content></ng-content>
    </p-divider>
  `,
  styleUrls: ['./divider.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-divider',
    '[class.freud-bgcolor]': `bgColor`,
  }
})
export class FreudDividerComponent {

  @Input() type: "dashed" | "dotted" | 'solid' = 'solid';
  @Input() bgColor: boolean = false;
  @Input() style!: any;
  @Input() layout: 'horizontal' | 'vertical' = 'horizontal';
  @Input() align!: "left" | "center" | "right" | "top" | "bottom";

}
