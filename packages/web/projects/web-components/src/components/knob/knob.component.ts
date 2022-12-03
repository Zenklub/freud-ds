import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'freud-knob',
  template: `
    <p-knob
      [(ngModel)]="value"
      (onChange)="onChangeValue($event)"
      [min]="min"
      [max]="max"
      [size]="size"
      [step]="step"
      [readonly]="readonly"
      [valueColor]="bgColor ? 'white' : '#6732D1'"
      [rangeColor]="bgColor ? '#5127A4' : '#F0F2F5'"
      [textColor]="bgColor ? 'white' : '#6B7280'"
      [disabled]="disabled"></p-knob>
  `,
  styleUrls: ['./knob.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-knob',
    '[class.freud-knob-bgcolor]': `bgColor`,
  }
})
export class FreudKnobComponent {

  @Input() value: number = 0;
  @Input() max: number = 100;
  @Input() min: number = 0;
  @Input() step: number = 1;
  @Input() size: number = 100;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() bgColor: boolean = false;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();

  onChangeValue(value: number) {
    this.value = value;
    this.valueChange.emit(this.value);
  }

}
