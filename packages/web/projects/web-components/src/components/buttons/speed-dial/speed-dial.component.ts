import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FreudMenuItem } from '../../../api/menu.interface';

type directions =
  | 'up'
  | 'down'
  | 'left'
  | 'right'
  | 'up-left'
  | 'up-right'
  | 'down-left'
  | 'down-right';
type types = 'linear' | 'circle' | 'semi-circle' | 'quarter-circle';
@Component({
  selector: 'freud-speed-dial',
  template: `
    <p-speedDial
      [id]="id"
      [visible]="visible"
      [mask]="mask"
      [disabled]="disabled"
      [showIcon]="showIcon"
      [hideIcon]="hideIcon"
      [type]="type"
      [direction]="direction"
      [model]="items"
      (onShow)="onShow.emit()"
      (onHide)="onHide.emit()"
      (onVisibleChange)="onVisibleChange.emit()"
    >
    </p-speedDial>
  `,
  styleUrls: ['./speed-dial.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-speed-dial',
    '[class.freud-speed-dial-bgcolor]': 'bgColor',
  },
})
export class FreudSpeedDialComponent {
  @Input() id = '';
  @Input() visible = false;
  @Input() mask = false;
  @Input() items!: FreudMenuItem[];
  @Input() disabled = false;
  @Input() bgColor = false;
  @Input() showIcon = 'freud-icon freud-icon-plus';
  @Input() hideIcon = '';
  @Input() type: types = 'linear';
  @Input() direction: directions = 'up';
  @Output() onVisibleChange: EventEmitter<void> = new EventEmitter<void>();
  @Output() onShow: EventEmitter<void> = new EventEmitter<void>();
  @Output() onHide: EventEmitter<void> = new EventEmitter<void>();
}
