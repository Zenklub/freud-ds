import { ChangeDetectionStrategy, Component, forwardRef, Input, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'freud-input-text',
  styleUrls: ['./input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="freud-field" [class.disabled]="disabled">
      <label for="{{id}}" class="freud-typography bodySemibold1-2 freud-label" *ngIf="label">{{label}}</label>
        <span [class.p-input-icon-right]="rightIcon">
          <i class="{{rightIcon}}" *ngIf="rightIcon"></i>
          <input
            [id]="id"
            type="text"
            [class.ng-invalid]="invalid"
            [class.ng-dirty]="invalid"
            aria-describedby="{{id}}-help"
            pInputText [(ngModel)]="value"
            [placeholder]="placeholder || ''"
            [disabled]="disabled"
          />
        </span>
      <small id="{{id}}-help"
             [class.disabled]="disabled"
             class="help-text freud-typography bodyRegularAuto">{{helpText ? helpText : ''}}</small>
    </div>
  `,
  host: {
    class: 'freud-input-text',
    '[class.freud-bgcolor]': `bgColor`,
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FreudInputTextComponent),
      multi: true
    }
  ]
})
export class FreudInputTextComponent {
  @Input() label: string = '';
  @Input() helpText: string = '';
  @Input() placeholder: string = '';
  @Input() rightIcon!: string;
  @Input() invalid: boolean = false;
  @Input() bgColor = false;
  @Input() disabled = false;
  @Input() id: string = Math.random().toString(36).substring(2);

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
