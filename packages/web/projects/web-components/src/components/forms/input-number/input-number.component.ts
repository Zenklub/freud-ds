import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'freud-input-number',
  styleUrls: ['./input-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="freud-field" [class.disabled]="disabled">
      <label for="{{id}}" class="freud-typography bodySemibold1-2 freud-label" *ngIf="label">{{label}}</label>
          <p-inputNumber
            [id]="id"
            [inputId]="id"
            type="text"
            [class.ng-invalid]="invalid"
            [class.ng-dirty]="invalid"
            [(ngModel)]="value"
            [placeholder]="placeholder || ''"
            [disabled]="disabled"
            [required]="required"

            [format]="format"
            [buttonLayout]="buttonLayout"
            [incrementButtonIcon]="incrementButtonIcon"
            [decrementButtonIcon]="decrementButtonIcon"
            [showButtons]="showButtons"
            [locale]="locale"
            [localeMatcher]="localeMatcher"
            [mode]="mode"

            [prefix]="prefix"
            [useGrouping]="useGrouping"
            [suffix]="suffix"
            [currency]="currency"
            [currencyDisplay]="currencyDisplay"

            [minFractionDigits]="minFractionDigits"
            [maxFractionDigits]="maxFractionDigits"

            [min]="min"
            [max]="max"

            [step]="step"
            [allowEmpty]="allowEmpty"

            (ngModelChange)="modelValueChange()"
            (focus)="onFocus.emit($event)"
            (blur)="onBlur.emit($event)"
            (input)="onInput.emit($event)"
            (keydown)="onKeydown.emit($event)"
          ></p-inputNumber>
    </div>
  `,
  host: {
    class: 'freud-input-number',
    '[class.freud-bgcolor]': `bgColor`,
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FreudInputNumberComponent),
      multi: true
    }
  ]
})

export class FreudInputNumberComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() format: boolean = true;
  @Input() allowEmpty: boolean = true;
  @Input() useGrouping: boolean = true;
  @Input() showButtons: boolean = false;
  @Input() buttonLayout: 'stacked' | 'horizontal' | 'vertical' = 'stacked';
  @Input() incrementButtonIcon: string = 'freud-icon freud-icon-chevron-up';
  @Input() decrementButtonIcon: string = 'freud-icon freud-icon-chevron-down';
  @Input() locale!: string;
  @Input() localeMatcher: "lookup" | "best fit" = 'best fit';
  @Input() mode: "decimal" | "currency" = "decimal";
  @Input() currencyDisplay: string = "symbol";
  @Input() currency!: string;
  @Input() prefix!: string;
  @Input() suffix!: string;
  @Input() minFractionDigits!: number;
  @Input() maxFractionDigits!: number;
  @Input() min!: number;
  @Input() max!: number;
  @Input() step: number = 1;

  @Input() placeholder: string = '';
  @Input() invalid: boolean = false;
  @Input() bgColor = false;
  @Input() disabled = false;
  @Input() required: boolean = false;
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
