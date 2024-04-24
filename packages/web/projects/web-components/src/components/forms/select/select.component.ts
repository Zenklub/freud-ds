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
  selector: 'freud-select',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './select.component.html',
  host: {
    class: 'freud-select',
    '[class.freud-bgcolor]': `bgColor`,
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FreudSelectComponent),
      multi: true,
    },
  ],
})
export class FreudSelectComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() filter: boolean = false;
  @Input() lazy: boolean = false;
  @Input() options!: any[];
  @Input() helpText: string = '';
  @Input() placeholder: string = '';
  @Input() invalid: boolean = false;
  @Input() virtualScroll: boolean = false;
  @Input() itemSize!: number;
  @Input() emptyMessage: string = 'Sem resultados';
  @Input() dropdownIcon: string = 'freud-icon freud-icon-chevron-down';
  @Input() optionLabel: string = 'label';
  @Input() optionValue!: string;
  @Input() optionDisabled: string = 'disabled';
  @Input() optionGroupLabel: string = 'label';
  @Input() optionGroupChildren: string = 'items';
  @Input() characterPattern: string = '';
  @Input() autoClear: boolean = true;
  @Input() bgColor = false;
  @Input() disabled = false;
  @Input() required: boolean = false;
  @Input() id!: string;
  @Input() useItemTemplate = false;
  @Output() onFocus: EventEmitter<any> = new EventEmitter();

  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  @Output() onFilter: EventEmitter<any> = new EventEmitter();
  @Output() onShow: EventEmitter<any> = new EventEmitter();
  @Output() onHide: EventEmitter<any> = new EventEmitter();
  @Output() onClear: EventEmitter<any> = new EventEmitter();
  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  private _value!: string;

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

  onModelChange: any = () => {};

  onModelTouched: any = () => {};

  onSomeEventOccured(newValue: string) {
    this.value = newValue;
  }

  public get value() {
    return this._value;
  }

  public set value(v) {
    this._value = v;
    if (typeof this.onModelChange === 'function') {
      this.onModelChange(this._value);
    }

    if (typeof this.onModelTouched === 'function') {
      this.onModelTouched();
    }

    this.valueChange.emit(v);
  }
}
