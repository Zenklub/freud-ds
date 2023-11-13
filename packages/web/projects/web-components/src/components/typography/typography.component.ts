import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { bodyTypes, headingTypes } from './typrography.type';

export const types = headingTypes.concat(bodyTypes);

type fontTypes = typeof types[number];

@Component({
  selector: '[freud-typography]',
  exportAs: 'freudTypography',
  styleUrls: ['./typography.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `<ng-content></ng-content> `,
  host: {
    class: 'freud-typography',
    '[class.typography-bg-color]': `fontBgColor`,
  },
})
export class FreudTypographyComponent {
  @HostBinding('class') @Input() fontType: fontTypes = 'bodyRegular1-5';
  @Input() fontBgColor: boolean = false;
}
