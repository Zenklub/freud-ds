import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

type avatarSizes = 'sm' | 'md' | 'lg';
@Component({
  selector: 'freud-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <p-avatar
      [label]="image ? '' : label"
      shape="circle"
      [att.pBadge]="!!badge"
      [value]="badge"
      [image]="image">
    </p-avatar>
  `,
  styleUrls: ['./avatar.component.scss'],
  host: {
    class: 'freud-avatar',
    '[class.freud-avatar-color-primary]': `!['secondary', 'ghost'].includes(color)`,
    '[class.freud-avatar-color-secondary]': `color === 'secondary'`,
    '[class.freud-avatar-color-ghost]': `color === 'ghost'`,

    '[class.freud-avatar-bgcolor]': `bgColor`,

    '[class.freud-avatar-size-small]': `size === 'sm'`,
    '[class.freud-avatar-size-medium]': `size === 'md'`,
    '[class.freud-avatar-size-large]': `size === 'lg'`,
  }
})
export class FreudAvatarComponent {

  @Input() size: avatarSizes = 'md';
  @Input() label: string = '';
  @Input() iconName: string = '';
  @Input() bgColor: boolean = false;
  @Input() badge: string = ''; 
  @Input() image: string = '';

}
