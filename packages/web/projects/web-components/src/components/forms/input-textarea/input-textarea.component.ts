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
  selector: 'freud-input-textarea',
  styleUrls: ['./input-textarea.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="freud-field" [class.disabled]="disabled">
      <label for="{{id}}" class="freud-typography bodySemibold1-2 freud-label" *ngIf="label">{{label}}</label>
        <textarea
          [id]="id"
          type="text"
          [class.ng-invalid]="invalid"
          [class.ng-dirty]="invalid"
          [(ngModel)]="value"
          [rows]="rows"
          [cols]="cols"
          [autoResize]="autoResize"
          pInputTextarea
          [placeholder]="placeholder || ''"
          [disabled]="disabled"
          [required]="required"
          (focus)="onFocus.emit($event)"
          (blur)="onBlur.emit($event)"
          (input)="onInput.emit($event)"
          (keydown)="onKeydown.emit($event)"
        ></textarea>
      <small id="{{id}}-help"
             [class.disabled]="disabled"
             class="help-text freud-typography bodyRegularAuto">{{helpText ? helpText : ''}}</small>
    </div>
  `,
  host: {
    class: 'freud-input-textarea',
    '[class.freud-bgcolor]': `bgColor`,
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FreudInputTextAreaComponent),
      multi: true
    }
  ]
})
export class FreudInputTextAreaComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() helpText: string = '';
  @Input() placeholder: string = '';
  @Input() cols!: number;
  @Input() rows!: number;
  @Input() invalid: boolean = false;
  @Input() autoResize: boolean = false;
  @Input() bgColor = false;
  @Input() disabled = false;
  @Input() required: boolean = false;
  @Input() id!: string;

  @Output() onFocus: EventEmitter<any> = new EventEmitter();

  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  @Output() onInput: EventEmitter<any> = new EventEmitter();

  @Output() onKeydown: EventEmitter<any> = new EventEmitter();
  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  private _value!: string;

  public get value(){
    return this._value;
  }

  public set value(v){
    this._value = v;
    this.onChange(this._value);
    this.onTouched();
    this.valueChange.emit(v);
  }

  writeValue(obj: any): void {
    this._value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  onChange: any = () => { };

  onTouched: any = () => { };

  onSomeEventOccured(newValue: string){
    this.value = newValue;
  }
}
