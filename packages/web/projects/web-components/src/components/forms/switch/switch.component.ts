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
  selector: 'freud-input-switch',
  styleUrls: ['./switch.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <p-inputSwitch
      [id]="id"
      [class.ng-invalid]="invalid"
      [class.ng-dirty]="invalid"
      [(ngModel)]="value"
      [disabled]="disabled"
      [required]="required"
      [trueValue]="trueValue"
      [falseValue]="falseValue"
      [name]="name"
      (onChange)="onChange.emit($event)">
    </p-inputSwitch>
  `,
  host: {
    class: 'freud-input-switch',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FreudSwitchComponent),
      multi: true
    }
  ]
})
export class FreudSwitchComponent implements ControlValueAccessor {
  @Input() invalid: boolean = false;
  @Input() disabled = false;
  @Input() name: string = '';
  @Input() falseValue: any = false;
  @Input() trueValue: any = true;
  @Input() required: boolean = false;
  @Input() id: string = Math.random().toString(36).substring(2);
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  private _value!: boolean;

  onModelChange: any = (_: string) => { };

  onModelTouched: any = () => { };

  public get value(){
    return this._value;
  }

  public set value(v){
    this._value = v;
    this.onChange.emit(v);
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

  onSomeEventOccured(newValue: boolean){
    this.value = newValue;
  }
}
