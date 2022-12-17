import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'freud-radio-button',
  styleUrls: ['./radio-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <p-radioButton
      [id]="id"
      [(ngModel)]="value"
      [disabled]="disabled"
      [name]="name"
      [value]="radioValue"
      [label]="label"
      [inputId]="inputId"

      (focus)="onFocus.emit($event)"
      (blur)="onBlur.emit($event)">
    </p-radioButton>
  `,
  host: {
    class: 'freud-radio-button',
    '[class.freud-bgcolor]': `bgColor`,
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FreudRadioButtonComponent),
      multi: true
    }
  ]
})
export class FreudRadioButtonComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() bgColor: boolean = false;
  @Input() inputId!: string;
  @Input() name!: string;
  @Input() disabled = false;
  @Input() radioValue!: any;
  @Input() required: boolean = false;
  @Input() id: string = Math.random().toString(36).substring(2);

  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  private _value!: any;

  modelValueChange() {
    this.valueChange.emit(this.value);
  }

  onModelChange: any = (_: string) => { };

  onModelTouched: any = () => { };

  public get value(){
    return this._value;
  }

  public set value(v){
    this._value = v;
    this.onModelChange(this._value);
    this.onModelTouched();
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

  setDisabledState?(isDisabled: boolean): void {
  }

  onSomeEventOccured(newValue: string){
    this.value = newValue;
  }
}
