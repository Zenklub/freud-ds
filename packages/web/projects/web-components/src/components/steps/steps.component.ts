import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

export interface StepMenu extends MenuItem {};

@Component({
  selector: 'freud-steps',
  template: `
    <p-steps
      [model]="model"
      [activeIndex]="activeIndex"
      [readonly]="readonly"
      (activeIndexChange)="activeIndexChange.emit($event)">
    </p-steps>
  `,
  styleUrls: ['./steps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-steps',
    '[class.freud-steps-bgcolor]': `bgColor`,
  }
})
export class FreudStepsComponent {

  @Input() model!: StepMenu[];
  @Input() readonly: boolean = false;
  @Input() bgColor: boolean = false;
  @Input() activeIndex: number = 0;
  @Output() activeIndexChange: EventEmitter<number> = new EventEmitter<number>();

}
