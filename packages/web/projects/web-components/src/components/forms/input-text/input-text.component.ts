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
  selector: 'freud-input-text',
  styleUrls: ['./input-text.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="freud-field" [class.disabled]="disabled">
      <label
        for="{{ id }}"
        class="freud-typography bodySemibold1-2 freud-label"
        *ngIf="label"
        >{{ label }}</label
      >
      <span [class.p-input-icon-right]="rightIcon">
        <i class="{{ rightIcon }}" *ngIf="rightIcon"></i>
        <input
          [id]="id"
          type="text"
          [class.ng-invalid]="invalid"
          [class.ng-dirty]="invalid"
          pInputText
          [(ngModel)]="value"
          [placeholder]="placeholder || ''"
          [disabled]="disabled"
          [required]="required"
          (ngModelChange)="modelValueChange()"
          (focus)="onFocus.emit($event)"
          (blur)="onBlur.emit($event)"
          (input)="onInput.emit($event)"
          (keydown)="onKeydown.emit($event)"
        />
      </span>
      <small
        [class.disabled]="disabled"
        class="help-text freud-typography bodyRegularAuto"
        >{{ helpText ? helpText : '' }}</small
      >
    </div>
  `,
  host: {
    class: 'freud-input-text',
    '[class.freud-bgcolor]': 'bgColor',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FreudInputTextComponent),
      multi: true,
    },
  ],
})
export class FreudInputTextComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() helpText = '';
  @Input() placeholder = '';
  @Input() rightIcon!: string;
  @Input() invalid = false;
  @Input() bgColor = false;
  @Input() disabled = false;
  @Input() required = false;
  @Input() id: string = Math.random().toString(36).substring(2);

  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();
  @Output() onInput: EventEmitter<any> = new EventEmitter();

  @Output() onKeydown: EventEmitter<any> = new EventEmitter();

  private _value!: string;

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

  setDisabledState?(isDisabled: boolean): void {}

  onSomeEventOccured(newValue: string) {
    this.value = newValue;
  }
}
