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
  selector: 'freud-select',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="freud-field" [class.disabled]="disabled">
      <label for="{{id}}" class="freud-typography bodySemibold1-2 freud-label" *ngIf="label">{{label}}</label>
      <p-dropdown
        [id]="id"
        [class.ng-invalid]="invalid"
        [class.ng-dirty]="invalid"
        [(ngModel)]="value"
        [optionLabel]="optionLabel"
        [optionValue]="optionValue"
        [optionDisabled]="optionDisabled"
        [optionGroupLabel]="optionGroupLabel"
        [optionGroupChildren]="optionGroupChildren"
        [placeholder]="placeholder || ''"
        [virtualScroll]="virtualScroll"
        [dropdownIcon]="dropdownIcon"
        [emptyMessage]="emptyMessage"
        [itemSize]="itemSize"
        [disabled]="disabled"
        [required]="required"
        [options]="options"
        (onFocus)="onFocus.emit($event)"
        (onBlur)="onBlur.emit($event)"
        (onChange)="onChange.emit($event)"
        (onFilter)="onFilter.emit($event)"
        (onShow)="onShow.emit($event)"
        (onHide)="onHide.emit($event)"
        (onClear)="onClear.emit($event)"

      ></p-dropdown>
      <small
        [class.disabled]="disabled"
        *ngIf="helpText"
        class="help-text freud-typography bodyRegularAuto">{{helpText}}</small>
    </div>
  `,
  host: {
    class: 'freud-select',
    '[class.freud-bgcolor]': `bgColor`,
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FreudSelectComponent),
      multi: true
    }
  ]
})
export class FreudSelectComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() options!: any[];
  @Input() helpText: string = '';
  @Input() placeholder: string = '';
  @Input() invalid: boolean = false;
  @Input() virtualScroll: boolean = false;
  @Input() itemSize!: number;
  @Input() emptyMessage: string = 'Sem resultados';
  @Input() dropdownIcon: string = 'freud-icon freud-icon-chevron-down';
  @Input() optionLabel!: string;
  @Input() optionValue!: string;
  @Input() optionDisabled: string = 'disabled';
  @Input() optionGroupLabel: string = 'label';
  @Input() optionGroupChildren: string = 'items';
  @Input() characterPattern: string = '';
  @Input() autoClear: boolean = true;
  @Input() bgColor = false;
  @Input() disabled = false;
  @Input() required: boolean = false;
  @Input() id!: string;

  @Output() onFocus: EventEmitter<any> = new EventEmitter();

  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  @Output() onFilter: EventEmitter<any> = new EventEmitter();
  @Output() onShow: EventEmitter<any> = new EventEmitter();
  @Output() onHide: EventEmitter<any> = new EventEmitter();
  @Output() onClear: EventEmitter<any> = new EventEmitter();
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
    this.valueChange.emit(v);
  }

}
