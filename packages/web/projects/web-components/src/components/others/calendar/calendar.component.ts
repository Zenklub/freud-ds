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
  selector: 'freud-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-calendar',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FreudCalendarComponent),
      multi: true,
    },
  ],
})
export class FreudCalendarComponent implements ControlValueAccessor {
  @Input() dateFormat = 'dd/mm/yy';
  @Input() showTime = true;
  @Input() hourFormat: '12' | '24' = '24';
  @Input() selectionMode: 'single' | 'multiple' | 'range' = 'single';
  @Input() view: 'date' | 'month' = 'date';
  @Input() inline = true;
  @Input() label = '';
  @Input() yearRange!: string;
  @Input() disabledDates!: Date[];
  @Input() disabledDays!: number[];
  @Input() yearNavigator = false;
  @Input() monthNavigator = false;
  @Input() timeOnly = false;
  @Input() showOtherMonths = true;
  @Input() selectOtherMonths = true;
  @Input() showWeek = false;
  @Input() disabled = false;
  @Input() required = false;
  @Input() appendTo = 'body';
  @Input() minDate!: Date;
  @Input() maxDate!: Date;
  @Input() defaultDate!: Date;
  @Input() stepMinute = 1;
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();
  @Output() onShow: EventEmitter<any> = new EventEmitter();
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  @Output() onTodayClick: EventEmitter<any> = new EventEmitter();
  @Output() onClearClick: EventEmitter<any> = new EventEmitter();

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
    if (typeof this.onModelChange === 'function') {
      this.onModelChange(this._value);
    }

    this.modelValueChange();

    if (typeof this.onModelTouched === 'function') {
      this.onModelTouched();
    }
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
