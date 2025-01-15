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
  selector: 'freud-cascade-select',
  styleUrls: ['./cascade-select.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="freud-field" [class.disabled]="disabled">
      <label for="{{id}}" class="freud-typography bodySemibold1-2 freud-label" *ngIf="label">{{label}}</label>
      <p-cascadeSelect
        [id]="id"
        [class.ng-invalid]="invalid"
        [class.ng-dirty]="invalid"
        [(ngModel)]="value"
        [optionLabel]="optionLabel"
        [optionValue]="optionValue"
        [dataKey]="dataKey"
        [optionGroupLabel]="optionGroupLabel"
        [optionGroupChildren]="optionGroupChildren"
        [placeholder]="placeholder || ''"
        [disabled]="disabled"
        [required]="required"
        [options]="options"
        (onGroupChange)="onGroupChange.emit($event)"
        (onBeforeShow)="onBeforeShow.emit($event)"
        (onBeforeHide)="onBeforeHide.emit($event)"
        (onChange)="onChange.emit($event)"
        (onShow)="onShow.emit($event)"

      ></p-cascadeSelect>
      <small
        [class.disabled]="disabled"
        *ngIf="helpText"
        class="help-text freud-typography bodyRegularAuto">{{helpText}}</small>
    </div>
  `,
  host: {
    class: 'freud-cascade-select',
    '[class.freud-bgcolor]': `bgColor`,
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FreudCascadeSelectComponent),
      multi: true
    }
  ]
})
export class FreudCascadeSelectComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() options!: any[];
  @Input() helpText: string = '';
  @Input() placeholder: string = '';
  @Input() invalid: boolean = false;
  @Input() optionLabel!: string;
  @Input() optionValue!: string;
  @Input() dataKey!: string;
  @Input() optionGroupLabel: string = 'label';
  @Input() optionGroupChildren!: string[];
  @Input() characterPattern: string = '';
  @Input() autoClear: boolean = true;
  @Input() bgColor = false;
  @Input() disabled = false;
  @Input() required: boolean = false;
  @Input() id: string = Math.random().toString(36).substring(2);

  @Output() onGroupChange: EventEmitter<any> = new EventEmitter();

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  @Output() onBeforeHide: EventEmitter<any> = new EventEmitter();
  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  @Output() onFilter: EventEmitter<any> = new EventEmitter();
  @Output() onShow: EventEmitter<any> = new EventEmitter();
  @Output() onBeforeShow: EventEmitter<any> = new EventEmitter();


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
    this.onModelTouched();
    this.valueChange.emit(v);
  }

}
