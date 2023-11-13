import { Component, Input, ViewEncapsulation } from '@angular/core';

type avatarSizes = 'sm' | 'md' | 'lg';
@Component({
  selector: 'freud-avatar',
  encapsulation: ViewEncapsulation.None,
  template: `
    <p-avatar
      [label]="(image || withIcon) ? '' : label"
      [icon]="(withIcon || (!label && !image)) ? 'freud-icon freud-icon-user' : ''"
      shape="circle"
      [image]="image">
      <freud-badge *ngIf="badge" [value]="badge" color="error"></freud-badge>
    </p-avatar>
  `,
  styleUrls: ['./avatar.component.scss'],
  host: {
    class: 'freud-avatar',
    '[class.freud-avatar-bgcolor]': `bgColor`,

    '[class.freud-avatar-size-small]': `size === 'sm'`,
    '[class.freud-avatar-size-medium]': `size === 'md'`,
    '[class.freud-avatar-size-large]': `size === 'lg'`,
  }
})
export class FreudAvatarComponent {

  @Input() size: avatarSizes = 'md';
  @Input() label: string = '';
  @Input() withIcon: boolean = false;
  @Input() bgColor: boolean = false;
  @Input() badge: string = '';
  @Input() image: string = '';

}
