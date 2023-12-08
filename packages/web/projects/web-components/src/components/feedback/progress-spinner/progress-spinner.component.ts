import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'freud-progress-spinner',
  template: ` <p-progressSpinner animationDuration="1s"></p-progressSpinner> `,
  styleUrls: ['./progress-spinner.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-progress-spinner',
    '[class.freud-progress-spinner-bgcolor]': 'bgColor',
  },
})
export class FreudProgressSpinnerComponent {
  @Input() bgColor = false;
}
