import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { FreudMenuItem } from '../../../api/menu.interface';

export type StepMenu = FreudMenuItem;

@Component({
  selector: 'freud-steps',
  template: `
    <p-steps
      [model]="model"
      [activeIndex]="activeIndex"
      [readonly]="readonly"
      (activeIndexChange)="activeIndexChange.emit($event)"
    >
    </p-steps>
  `,
  styleUrls: ['./steps.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-steps',
    '[class.freud-steps-bgcolor]': 'bgColor',
  },
})
export class FreudStepsComponent {
  @Input() model!: StepMenu[];
  @Input() readonly = false;
  @Input() bgColor = false;
  @Input() activeIndex = 0;
  @Output() activeIndexChange: EventEmitter<number> =
    new EventEmitter<number>();
}
