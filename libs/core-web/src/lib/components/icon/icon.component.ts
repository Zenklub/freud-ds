import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { iconNames } from './icon.interface';

type iconSize = '16px' | '24px' | '32px' | '40px' | '48px' | '56px';

@Component({
  selector: 'i[freud-icon]',
  exportAs: 'FreudIcon',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-container>
      <ng-content></ng-content>
    </ng-container>
  `,
  host: {
    class: 'freud-icon',
    '[class.freud-icon-16px]': `size === '16px'`,
    '[class.freud-icon-24px]': `size === '24px'`,
    '[class.freud-icon-32px]': `size === '32px'`,
    '[class.freud-icon-40px]': `size === '40px'`,
    '[class.freud-icon-48px]': `size === '48px'`,
    '[class.freud-icon-56px]': `size === '56px'`,
  },
})
export class FreudIconComponent {
  @Input() icon: iconNames = 'apps';
  @Input() size: iconSize = '32px';

  @HostBinding('class')
  get iconClass(): string | undefined {
    return `freud-icon-` + this.icon;
  }
}
