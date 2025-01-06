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
  selector: 'freud-input-mask',
  styleUrls: ['./input-mask.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="freud-field" [class.disabled]="disabled">
      <label for="{{id}}" class="freud-typography bodySemibold1-2 freud-label" *ngIf="label">{{label}}</label>
      <p-inputMask
        [id]="id"
        [class.ng-invalid]="invalid"
        [class.ng-dirty]="invalid"
        [(ngModel)]="value"
        [mask]="mask"
        [unmask]="unmask"
        [slotChar]="slotChar"
        [characterPattern]="characterPattern"
        [placeholder]="placeholder || ''"
        [disabled]="disabled"
        [required]="required"
        [autoClear]="false"
        (onFocus)="onFocus.emit($event)"
        (onBlur)="onBlur.emit($event)"
        (onInput)="onInput.emit($event)"
        (onComplete)="onComplete.emit($event)"
        (onKeydown)="onKeydown.emit($event)"
      ></p-inputMask>
      <small
        [class.disabled]="disabled"
        *ngIf="helpText"
        class="help-text freud-typography bodyRegularAuto"
      >{{helpText}}</small>
      <small
        [class.disabled]="disabled"
        *ngIf="errorText"
        class="error-text freud-typography bodyRegularAuto"
      >{{errorText}}</small>
    </div>
  `,
  host: {
    class: 'freud-input-mask',
    '[class.freud-bgcolor]': `bgColor`,
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FreudInputMaskComponent),
      multi: true
    }
  ]
})
export class FreudInputMaskComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() helpText: string = '';
  @Input() errorText: string = '';
  @Input() placeholder: string = '';
  @Input() invalid: boolean = false;
  @Input() mask: string = '';
  @Input() unmask: boolean = false;
  @Input() slotChar: string = '';
  @Input() characterPattern: string = '';
  @Input() autoClear: boolean = true;
  @Input() bgColor = false;
  @Input() disabled = false;
  @Input() required: boolean = false;
  @Input() id: string = Math.random().toString(36).substring(2);

  @Output() onFocus: EventEmitter<any> = new EventEmitter();

  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  @Output() onInput: EventEmitter<any> = new EventEmitter();

  @Output() onKeydown: EventEmitter<any> = new EventEmitter();
  @Output() onComplete: EventEmitter<any> = new EventEmitter();
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

  setDisabledState?(isDisabled: boolean): void {
  }

  onModelChange: any = () => { };

  onModelTouched: any = () => { };

  onSomeEventOccured(newValue: string){
    this.value = newValue;
  }

  public get value(){
    return this._value;
  }

  public set value(v){
    this._value = v;
    this.onModelChange(this._value);
    this.onModelTouched();
    this.valueChange.emit(this._value);
  }

}
