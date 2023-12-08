import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FreudMenuItem } from '../../../api/menu.interface';

@Component({
  selector: 'freud-breadcrumb',
  template: `
    <p-breadcrumb
      [model]="items"
      [home]="home"
      styleClass="freud-typography h6RegularAuto"
      (onItemClick)="onItemClick.emit($event)"
    ></p-breadcrumb>
  `,
  styleUrls: ['./breadcrumb.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-breadcrumb',
    '[class.freud-bgcolor]': 'bgColor',
  },
})
export class FreudBreadcrumbComponent {
  @Input() items!: FreudMenuItem[];
  @Input() home!: FreudMenuItem;
  @Input() bgColor = false;
  @Output() onItemClick: EventEmitter<any> = new EventEmitter();
}
