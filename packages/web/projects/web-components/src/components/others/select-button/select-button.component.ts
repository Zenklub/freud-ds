import { Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { FreudIconPosition, FreudSelectButtonOption } from './select-button.interface';

@Component({
  selector: 'freud-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-select-button',
    '[class.freud-select-bgcolor]': `bgColor`,
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FreudSelectButtonComponent),
      multi: true
    }
  ]
})

export class FreudSelectButtonComponent implements ControlValueAccessor {
  @Input() options!: FreudSelectButtonOption[];
  @Input() optionLabel!: string;
  @Input() iconPosition: FreudIconPosition = 'preppend'
  @Input() selectedOption!: FreudSelectButtonOption;
  @Input() multiple: boolean = false;
  @Input() disabled: boolean = false;
  @Input() bgColor: boolean = false;
  @Input() optionDisabled!: string;
  @Input() tabindex: number = 0;
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  @Output() selectedOptionChange: EventEmitter<any> = new EventEmitter<any>();

  private _value!: any;

  modelValueChange() {
    this.valueChange.emit(this.value);
  }

  onModelChange: any = (_: string) => { };

  onModelTouched: any = () => { };

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

  onSomeEventOccured(newValue: string) {
    this.value = newValue;
  }

}
