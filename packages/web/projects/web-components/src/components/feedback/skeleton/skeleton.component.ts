import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'freud-skeleton',
  template: `
    <p-skeleton
      [width]="width"
      [height]="height"
    ></p-skeleton>
  `,
  styleUrls: ['./skeleton.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-skeleton',
    '[class.freud-bgcolor]': `bgColor`,
  }
})
export class FreudSkeletonComponent {
  @Input() width: string = '100%';
  @Input() height: string = '100px';
  @Input() bgColor: boolean = false;

}
