import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

type avatarSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type avatarThemes = 'light' | 'dark';

@Component({
  selector: 'freud-avatar',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="freud-avatar-container">
      <span *ngIf="letter && !imgSrc">{{ letter }}</span>
      <img *ngIf="imgSrc" [src]="imgSrc" alt="avatar" />
    </div>
  `,
  host: {
    class: 'freud-avatar',
    '[class.freud-avatar-theme-dark]': `theme === 'dark'`,
    '[class.freud-avatar-size-xsmall]': `size === 'xs'`,
    '[class.freud-avatar-size-small]': `size === 'sm'`,
    '[class.freud-avatar-size-medium]': `size === 'md'`,
    '[class.freud-avatar-size-large]': `size === 'lg'`,
    '[class.freud-avatar-size-xlarge]': `size === 'xl'`,
  }
})
export class FreudAvatarComponent {

  @Input() imgSrc = '';
  @Input() letter = '';
  @Input() size: avatarSizes = 'md';
  @Input() theme: avatarThemes = 'light';

}
