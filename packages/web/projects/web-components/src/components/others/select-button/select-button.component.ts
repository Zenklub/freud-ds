import { Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'freud-select-button',
  template: `
    <p-selectButton
      [options]="options"
      [(ngModel)]="selectedOption"
      [multiple]="multiple"
      [tabindex]="tabindex"
      [optionDisabled]="optionDisabled"
      [optionLabel]="optionLabel"
      [disabled]="disabled"
      (onChange)="selectedOptionChange.emit($event)">
    </p-selectButton>
  `,
  styleUrls: ['./select-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-select-button',
    '[class.freud-select-bgcolor]': `bgColor`,
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FreudSelectButtonComponent),
      multi: true
    }
  ]
})
export class FreudSelectButtonComponent implements ControlValueAccessor {

  @Input() options!: any[];
  @Input() optionLabel!: string;
  @Input() selectedOption!: any;
  @Input() multiple: boolean = false;
  @Input() disabled: boolean = false;
  @Input() bgColor: boolean = false;
  @Input() optionDisabled!: string;
  @Input() tabindex: number = 0;
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  @Output() selectedOptionChange: EventEmitter<any> = new EventEmitter<any>();

  private _value!: any;

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
