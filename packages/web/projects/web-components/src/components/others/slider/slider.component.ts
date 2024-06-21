import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'freud-slider',
  template: `
    <p-slider
      [(ngModel)]="value"
      [min]="min"
      [max]="max"
      [step]="step"
      [range]="range"
      [orientation]="orientation || 'horizontal'"
      [tabindex]="tabindex"
      [disabled]="disabled"
      (ngModelChange)="modelValueChange()"
      (onChange)="selectedOptionChange.emit($event)"
    >
    </p-slider>
  `,
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-slider',
    '[class.freud-bgcolor]': 'bgColor',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FreudSliderComponent),
      multi: true,
    },
  ],
})
export class FreudSliderComponent implements ControlValueAccessor {
  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;
  @Input() range = false;
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() disabled = false;
  @Input() bgColor = false;
  @Input() tabindex = 0;
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  @Output() selectedOptionChange: EventEmitter<any> = new EventEmitter<any>();

  private _value!: any;

  modelValueChange() {
    this.valueChange.emit(this.value);
  }

  onModelChange: any = (_: string) => {};

  onModelTouched: any = () => {};

  public get value() {
    return this._value;
  }

  public set value(v) {
    this._value = v;
    this.onModelChange(this._value);
    this.onModelTouched();
    this.modelValueChange();
  }

  writeValue(obj: any): void {
    this._value = obj;
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onModelTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}

  onSomeEventOccured(newValue: string) {
    this.value = newValue;
  }
}
