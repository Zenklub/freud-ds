import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type listboxFilterMatchModes =
  | 'contains'
  | 'startsWith'
  | 'endsWith'
  | 'equals'
  | 'notEquals'
  | 'in'
  | 'lt'
  | 'lte'
  | 'gt'
  | 'gte';

@Component({
  selector: 'freud-listbox',
  styleUrls: ['./listbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="freud-field" [class.disabled]="disabled">
      <p-listbox
        [id]="id"
        [class.ng-invalid]="invalid"
        [class.ng-dirty]="invalid"
        [(ngModel)]="value"
        [checkbox]="checkbox"
        [filter]="filter"
        [optionLabel]="optionLabel"
        [optionValue]="optionValue"
        [optionDisabled]="optionDisabled"
        [optionGroupLabel]="optionGroupLabel"
        [optionGroupChildren]="optionGroupChildren"
        [group]="group"
        [multiple]="multiple"
        [emptyFilterMessage]="emptyFilterMessage"
        [emptyMessage]="emptyMessage"
        [showToggleAll]="showToggleAll"
        [disabled]="disabled"
        [required]="required"
        [options]="options"
        [filterPlaceHolder]="filterPlaceHolder"
        (onDblClick)="onDblClick.emit($event)"
        (onClick)="onClick.emit($event)"
        (onChange)="onChange.emit($event)"
      >
      </p-listbox>
    </div>
  `,
  host: {
    class: 'freud-listbox',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FreudListboxComponent),
      multi: true,
    },
  ],
})
export class FreudListboxComponent implements ControlValueAccessor {
  @Input() checkbox = false;
  @Input() options!: any[];
  @Input() showToggleAll = true;
  @Input() group!: boolean;
  @Input() filterPlaceHolder = 'Filtrar';
  @Input() filter = false;
  @Input() invalid = false;
  @Input() multiple = false;
  @Input() emptyFilterMessage = 'Sem resultados';
  @Input() emptyMessage = 'Sem resultados';
  @Input() filterMatchMode: listboxFilterMatchModes = 'contains';
  @Input() optionLabel!: string;
  @Input() optionValue!: string;
  @Input() optionDisabled = 'disabled';
  @Input() optionGroupLabel = 'label';
  @Input() optionGroupChildren = 'items';
  @Input() characterPattern = '';
  @Input() autoClear = true;
  @Input() disabled = false;
  @Input() required = false;
  @Input() id!: string;

  @Output() onDblClick: EventEmitter<any> = new EventEmitter();
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  filterValue = '';

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

  setDisabledState?(isDisabled: boolean): void {}

  onModelChange: any = () => {};

  onModelTouched: any = () => {};

  onSomeEventOccured(newValue: string) {
    this.value = newValue;
  }

  public get value() {
    return this._value;
  }

  public set value(v) {
    this._value = v;
    this.onModelChange(this._value);
    this.onModelTouched();
    this.valueChange.emit(v);
  }
}
