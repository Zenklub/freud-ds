import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'freud-scroll-top',
  template: `
    <p-timeline
      [threshold]="threshold"
      [target]="target"
      [behavior]="behavior"
    ></p-timeline>
  `,
  styleUrls: ['./timeline.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-scroll-top',
  },
})
export class FreudScrollTopComponent {
  @Input() threshold = 400;
  @Input() target: 'window' | 'parent' = 'window';
  @Input() behavior: 'smooth' | 'auto' = 'smooth';
  @Input() icon = 'freud-icon freud-icon-chevron-up';
}
