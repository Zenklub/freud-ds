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

const getHost = () => {
  const host = {
    class: 'freud-typography',
  };

  types.forEach((type) => {
    host[`[class.freud-typography-type-${type}]`] = `type === '${type}'`;
  });
  return host;
};

@Component({
  selector: '[freud-typography]',
  exportAs: 'freudTypography',
  styleUrls: ['./typography.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `<ng-content></ng-content> `,
  host: getHost(),
})
export class FreudTypographyComponent {
  @Input() type: fontTypes = 'body-sm-regular';
}
