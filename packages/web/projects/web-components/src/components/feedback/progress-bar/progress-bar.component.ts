import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'freud-progress-bar',
  template: `
    <p-progressBar
      [value]="value"
      [showValue]="showValue"
      [unit]="unit"
      [mode]="mode"
    >
    </p-progressBar>
  `,
  styleUrls: ['./progress-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-progress-bar',
    '[class.freud-bgcolor]': 'bgColor',
  },
})
export class FreudProgressBarComponent {
  @Input() value = 0;
  @Input() showValue = true;
  @Input() mode: 'determinate' | 'indeterminate' = 'determinate';
  @Input() unit = '%';
  @Input() bgColor = false;
}
