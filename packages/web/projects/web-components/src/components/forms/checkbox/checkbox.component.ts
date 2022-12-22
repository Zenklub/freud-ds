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
  selector: 'freud-checkbox',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <p-checkbox
      [id]="id"
      [class.ng-invalid]="invalid"
      [class.ng-dirty]="invalid"
      [(ngModel)]="value"
      [disabled]="disabled"
      [required]="required"
      [trueValue]="trueValue"
      [falseValue]="falseValue"
      [name]="name"
      [binary]="binary"
      [label]="label"
      [checkboxIcon]="checkboxIcon"
      [inputId]="inputId"
      (onChange)="onChange.emit($event)">
    </p-checkbox>
  `,
  host: {
    class: 'freud-checkbox',
    '[class.freud-bgcolor]': `bgColor`,
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FreudCheckboxComponent),
      multi: true
    }
  ]
})
export class FreudCheckboxComponent implements ControlValueAccessor {
  @Input() invalid: boolean = false;
  @Input() binary: boolean = true;
  @Input() disabled = false;
  @Input() label!: string;
  @Input() bgColor: boolean = false;
  @Input() name!: string;
  @Input() falseValue: any = false;
  @Input() trueValue: any = true;

  @Input() checkboxIcon: string = 'freud-icon freud-icon-check';
  @Input() inputId!: string;
  @Input() required: boolean = false;
  @Input() id: string = Math.random().toString(36).substring(2);

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() valueChange: EventEmitter<any> = new EventEmitter();

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

  setDisabledState?(isDisabled: boolean): void {
  }

  onSomeEventOccured(newValue: string){
    this.value = newValue;
  }
}
