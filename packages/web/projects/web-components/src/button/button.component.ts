import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

type buttonSizes = 'sm' | 'md' | 'lg';
type buttonColors = 'primary' | 'secondary' | 'ghost';

@Component({
  selector: 'freud-button',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <p-button label="small">
      <ng-content></ng-content>
    </p-button>
  `,
  host: {
    class: 'freud-btn',
    '[class.freud-btn-color-primary]': `color === 'primary'`,
    '[class.freud-btn-color-secondary]': `color === 'secondary'`,

    '[class.freud-btn-bgcolor]': `bgColor`,
    '[class.freud-btn-loading]': `loading`,

    '[class.freud-btn-size-small]': `size === 'sm'`,
    '[class.freud-btn-size-medium]': `size === 'md'`,
  }
})
export class FreudButtonComponent {

  @Input() size: buttonSizes = 'md';
  @Input() color: buttonColors = 'primary';
  @Input() bgColor = false;
  @Input() loading = false;

}
