import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

export const types = [
  'display',
  'heading-xl',
  'heading-lg',
  'heading-md',
  'heading-sm',
  'subtitle-lg',
  'subtitle-md',
  'subtitle-sm',
  'body-lg-bold',
  'body-lg-regular',
  'body-sm-bold',
  'body-sm-regular',
  'caption',
  'title-highlight',
] as const;
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
    '[class.freud-typography-type-display]': 'type === "display"',
    '[class.freud-typography-type-heading-xl]': 'type === "heading-xl"',
    '[class.freud-typography-type-heading-lg]': 'type === "heading-lg"',
    '[class.freud-typography-type-heading-md]': 'type === "heading-md"',
    '[class.freud-typography-type-heading-sm]': 'type === "heading-sm"',
    '[class.freud-typography-type-subtitle-lg]': 'type === "subtitle-lg"',
    '[class.freud-typography-type-subtitle-md]': 'type === "subtitle-md"',
    '[class.freud-typography-type-subtitle-sm]': 'type === "subtitle-sm"',
    '[class.freud-typography-type-body-lg-bold]': 'type === "body-lg-bold"',
    '[class.freud-typography-type-body-lg-regular]':
      'type === "body-lg-regular"',
    '[class.freud-typography-type-body-sm-bold]': 'type === "body-sm-bold"',
    '[class.freud-typography-type-body-sm-regular]':
      'type === "body-sm-regular"',
    '[class.freud-typography-type-caption]': 'type === "caption"',
    '[class.freud-typography-type-title-highlight]':
      'type === "title-highlight"',
  },
})
export class FreudTypographyComponent {
  @Input() type: fontTypes = 'body-sm-regular';
}
