import { Component, Input, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'freud-progress-bar',
  template: `
    <p-progressBar
      [value]="value"
      [showValue]="showValue"
      [unit]="unit"
      [mode]="mode">
    </p-progressBar>
  `,
  styleUrls: ['./progress-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-progress-bar',
    '[class.freud-bgcolor]': `bgColor`,
  }
})
export class FreudProgressBarComponent {
  @Input() value: number = 0;
  @Input() showValue:	boolean	= true;
  @Input() mode: 'determinate' | 'indeterminate' = 'determinate';
  @Input() unit: string = '%';
  @Input() bgColor: boolean = false;

}
