import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';


type sizes = 'sm' | 'md';
type colors = 'primary' | 'success' | 'info' | 'warning' | 'error' | 'actived';

@Component({
  selector: 'freud-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <p-badge [value]="value!" class="freud-color-{{color}}"></p-badge>
  `,
  styleUrls: ['./badge.component.scss'],
  host: {
    class: 'freud-badge',
    '[class.size-small]':  'size === "sm"'
  }
})
export class FreudBadgeComponent {

  @Input() value: string = '';
  @Input() size: sizes = 'md';
  @Input() color: colors = 'primary';
}
