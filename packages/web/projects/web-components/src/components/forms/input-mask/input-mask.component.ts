import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'freud-input-mask',
  styleUrls: ['./input-mask.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="freud-field" [class.disabled]="disabled">
      <label for="{{id}}" class="freud-typography bodySemibold1-2 freud-label" *ngIf="label">{{label}}</label>
      <p-inputMask
        [id]="id"
        [class.ng-invalid]="invalid"
        [class.ng-dirty]="invalid"
        [(ngModel)]="value"
        [placeholder]="placeholder || ''"
        [disabled]="disabled"
        [required]="required"
        (onFocus)="onFocus.emit($event)"
        (onBlur)="onBlur.emit($event)"
        (onInput)="onInput.emit($event)"
        (onKeydown)="onKeydown.emit($event)"
      />
      <small
        [class.disabled]="disabled"
        *ngIf="helpText"
        class="help-text freud-typography bodyRegularAuto">{{helpText}}</small>
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
export class FreudInputMaskComponent {
  @Input() label: string = '';
  @Input() helpText: string = '';
  @Input() placeholder: string = '';
  @Input() invalid: boolean = false;
  @Input() bgColor = false;
  @Input() disabled = false;
  @Input() required: boolean = false;
  @Input() id: string = Math.random().toString(36).substring(2);

  @Output() onFocus: EventEmitter<any> = new EventEmitter();

  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  @Output() onInput: EventEmitter<any> = new EventEmitter();

  @Output() onKeydown: EventEmitter<any> = new EventEmitter();

  private _value!: string;

  public get value(){
    return this._value;
  }

  public set value(v){
    this._value = v;
    this.onChange(this._value);
    this.onTouched();
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
