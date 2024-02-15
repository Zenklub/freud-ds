import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'freud-skeleton',
  template: ` <p-skeleton [width]="width" [height]="height"></p-skeleton> `,
  styleUrls: ['./skeleton.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-skeleton',
    '[class.freud-bgcolor]': 'bgColor',
  },
})
export class FreudSkeletonComponent {
  @Input() width = '100%';
  @Input() height = '100px';
  @Input() bgColor = false;
}
