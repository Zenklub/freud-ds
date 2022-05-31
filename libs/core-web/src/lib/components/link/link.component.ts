import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

export type linkSizes = 'sm' | 'lg';

@Component({
  selector: 'a[freud-link]',
  exportAs: 'freudLink',
  styleUrls: ['./link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-container>
      <ng-content></ng-content>
    </ng-container>

    <i freud-icon [icon]="'arrow-right'" [size]="'16px'"></i>
  `,
  host: {
    class: 'freud-link',
    '[class.freud-link-bgcolor]': `bgColor`,

    '[class.freud-link-size-sm]': `size === 'sm'`,
    '[class.freud-link-size-lg]': `size === 'lg'`,
  },
})
export class FreudLinkComponent {
  @Input() size: linkSizes = 'lg';
  @Input() bgColor = false;
}
