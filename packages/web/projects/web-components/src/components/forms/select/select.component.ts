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
    '[class.freud-bgcolor]': 'bgColor',
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
  @Input() label = '';
  @Input() filter = false;
  @Input() lazy = false;
  @Input() options!: any[];
  @Input() helpText = '';
  @Input() placeholder = '';
  @Input() invalid = false;
  @Input() virtualScroll = false;
  @Input() itemSize!: number;
  @Input() emptyMessage = 'Sem resultados';
  @Input() dropdownIcon = 'freud-icon freud-icon-chevron-down';
  @Input() optionLabel: string = 'label';
  @Input() optionValue: string = 'value';
  @Input() optionDisabled = 'disabled';
  @Input() optionGroupLabel = 'label';
  @Input() optionGroupChildren = 'items';
  @Input() characterPattern = '';
  @Input() autoClear = true;
  @Input() bgColor = false;
  @Input() disabled = false;
  @Input() required = false;
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
