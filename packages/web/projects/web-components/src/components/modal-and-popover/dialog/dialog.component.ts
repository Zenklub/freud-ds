import { Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

type positions = "center" | "top" | "bottom" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right";
@Component({
  selector: 'freud-dialog',
  template: `
    <p-dialog
      [(visible)]="visible"
      [modal]="modal"
      [draggable]="draggable"
      [closable]="closable"
      [showHeader]="showHeader"
      [position]="position"
      [resizable]="resizable"
      [closeIcon]="closeIcon"
      [minimizeIcon]="minimizeIcon"
      [maximizeIcon]="maximizeIcon"
      [maximizable]="maximizable"
      [header]="header">
      <ng-content></ng-content>
      <ng-template pTemplate="footer">
        <ng-content select="[freudTemplatefooter]"></ng-content>
      </ng-template>
    </p-dialog>
  `,
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-dialog'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FreudDialogComponent),
      multi: true
    }
  ]
})
export class FreudDialogComponent implements ControlValueAccessor {

  @Input() header!: string;
  @Input() modal: boolean = false;
  @Input() draggable: boolean = true;
  @Input() resizable: boolean = false;
  @Input() showHeader: boolean = true;
  @Input() maximizable: boolean = false;
  @Input() closable: boolean = true;
  @Input() position:	positions	= 'center';
  @Input() closeIcon: string = 'freud-icon freud-icon-times';
  @Input() minimizeIcon: string = 'freud-icon freud-icon-window-minimize';
  @Input() maximizeIcon: string = 'freud-icon freud-icon-window-maximize';
  @Output() visibleChange: EventEmitter<any> = new EventEmitter();
  private _visible!: boolean;

  modelValueChange() {
    this.visibleChange.emit(this.visible);
  }

  onChange: any = (_: string) => { };

  onModelTouched: any = () => { };

  @Input() get visible(){
    return this._visible;
  }

  public set visible(v){
    this._visible = v;
    this.onChange(this._visible);
    this.modelValueChange();
    this.onModelTouched();
  }

  writeValue(obj: any): void {
    this._visible = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onModelTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
  }
}
