import { AfterContentInit, Component, ElementRef, EventEmitter, forwardRef, Input, NgZone, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { FreudIconPosition, FreudSelectButtonOption } from './select-button.interface';

@Component({
  selector: 'freud-select-button',
  templateUrl: './select-button.component.html',
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

export class FreudSelectButtonComponent implements ControlValueAccessor, AfterContentInit {
  @Input() options!: FreudSelectButtonOption[];
  @Input() optionLabel!: string;
  @Input() iconPosition: FreudIconPosition = 'preppend'
  @Input() selectedOption!: FreudSelectButtonOption;
  @Input() multiple: boolean = false;
  @Input() disabled: boolean = false;
  @Input() bgColor: boolean = false;
  @Input() optionDisabled!: string;
  @Input() tabindex: number = 0;
  @Input() autoOverflow = false
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  @Output() selectedOptionChange: EventEmitter<any> = new EventEmitter<any>();

  private _value!: any;
  public wrapper: null | HTMLElement = null;
  public parentDiv: null | HTMLElement = null;
  public isLoaded = false
  public isOverflowing = false
  public initialSize = 0
  constructor(public elementRef: ElementRef, public zone: NgZone) {
  }

  ngAfterContentInit(): void {
    if (this.autoOverflow) {
      this.setOverflowDetection()
    }
  }


  get overflowClass(): { [key: string]: boolean } {
    return {
      'has-overflow': this.isOverflowing,
      'no-overflow': !this.isOverflowing
    };
  }

  setOverflowDetection() {
    const localDom = this.elementRef.nativeElement;
    setTimeout(() => {
      this.parentDiv = localDom.parentElement
      this.wrapper = localDom.getElementsByClassName('p-selectbutton')[0]

      if (this.wrapper && this.parentDiv && this.parentDiv.clientWidth > 0) {
        this.initialSize = this.wrapper.clientWidth
        this.isOverflowing = this.parentDiv.clientWidth < this.wrapper.clientWidth
      }

      if (this.wrapper && this.parentDiv) {
        new ResizeObserver(() => {
          this.zone.run(() => {
            this.isOverflowing = this.parentDiv!.clientWidth < this.initialSize
          })
        }).observe(this.parentDiv as HTMLElement)
      }
    }, 500)
  }

  modelValueChange() {
    this.valueChange.emit(this.value);
  }

  onModelChange: any = (_: string) => { };

  onModelTouched: any = () => { };

  public get value() {
    return this._value;
  }

  public set value(v) {
    this._value = v;

    this.onModelChange?.(this._value);
    this.onModelTouched?.();
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

  onSomeEventOccured(newValue: string) {
    this.value = newValue;
  }

}
