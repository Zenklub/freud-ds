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
  selector: 'freud-auto-complete',
  styleUrls: ['./auto-complete.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="freud-field" [class.disabled]="disabled">
      <label for="{{id}}" class="freud-typography bodySemibold1-2 freud-label" *ngIf="label">{{label}}</label>
      <p-autoComplete
        [id]="id"
        [class.ng-invalid]="invalid"
        [class.ng-dirty]="invalid"
        [(ngModel)]="value"
        [optionGroupLabel]="optionGroupLabel"
        [optionGroupChildren]="optionGroupChildren"
        [placeholder]="placeholder || ''"
        [virtualScroll]="virtualScroll"
        [dropdownIcon]="dropdownIcon"
        [dropdown]="dropdown"
        [dropdownMode]="dropdownMode"
        [field]="field"
        [multiple]="multiple"
        [emptyMessage]="emptyMessage"
        [itemSize]="itemSize"
        [disabled]="disabled"
        [required]="required"
        [suggestions]="suggestions"
        [forceSelection]="forceSelection"
        (onFocus)="onFocus.emit($event)"
        (onBlur)="onBlur.emit($event)"
        (completeMethod)="completeMethod.emit($event)"
        (onDropdownClick)="onDropdownClick.emit($event)"
        (onShow)="onShow.emit($event)"
        (onHide)="onHide.emit($event)"
        (onClear)="onClear.emit($event)"

      ></p-autoComplete>
      <small
        [class.disabled]="disabled"
        *ngIf="helpText"
        class="help-text freud-typography bodyRegularAuto">{{helpText}}</small>
    </div>
  `,
  host: {
    class: 'freud-auto-complete',
    '[class.freud-bgcolor]': `bgColor`,
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FreudAutoCompleteComponent),
      multi: true
    }
  ]
})
export class FreudAutoCompleteComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() suggestions!: any[];
  @Input() helpText: string = '';
  @Input() placeholder: string = '';
  @Input() invalid: boolean = false;
  @Input() multiple: boolean = false;
  @Input() dropdown: boolean = false;
  @Input() forceSelection: boolean = false;
  @Input() virtualScroll: boolean = false;
  @Input() itemSize!: number;
  @Input() field!: string;
  @Input() emptyMessage: string = 'Sem resultados';
  @Input() dropdownIcon: string = 'freud-icon freud-icon-chevron-down';
  @Input() optionGroupLabel: string = 'label';
  @Input() optionGroupChildren: string = 'items';
  @Input() dropdownMode: 'blank' | 'current' = 'blank';
  @Input() characterPattern: string = '';
  @Input() autoClear: boolean = true;
  @Input() bgColor = false;
  @Input() disabled = false;
  @Input() required: boolean = false;
  @Input() id: string = Math.random().toString(36).substring(2);

  @Output() onFocus: EventEmitter<any> = new EventEmitter();

  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  @Output() completeMethod: EventEmitter<any> = new EventEmitter();
  @Output() onDropdownClick: EventEmitter<any> = new EventEmitter();
  @Output() onShow: EventEmitter<any> = new EventEmitter();
  @Output() onHide: EventEmitter<any> = new EventEmitter();
  @Output() onClear: EventEmitter<any> = new EventEmitter();
  @Output() valueChange: EventEmitter<any> = new EventEmitter();


  private _value!: any;

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
    this.valueChange.emit(this._value);
    this.onModelTouched();
  }

}
