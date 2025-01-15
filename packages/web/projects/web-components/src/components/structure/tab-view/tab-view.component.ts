import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor } from "@angular/forms";

@Component({
  selector: 'freud-tab-panel',
  template: `
    <div #ref>
        <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./tab-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-tab-panel',
    '[class.freud-bgcolor]': `bgColor`,
  }
})
export class FreudTabPanelComponent {

  @Input() header!: string;
  @Input() id!: string;
  @Input() leftIcon!: string;
  @Input() rightIcon!: string;
  @Input() disabled: boolean = false;
  @Input() closable: boolean = false;
  @Input() selected: boolean = false;

  @Input() bgColor: boolean = false;

  @ViewChild('ref') ref!: any;

}

@Component({
  selector: 'freud-tab-view',
  template: `
    <p-tabView
      [style]="style"
      [styleClass]="styleClass"
      [scrollable]="scrollable"
      [controlClose]="controlClose"
      [(activeIndex)]="activeIndex"
      (onChange)="onChange.emit($event)"
      (onClose)="onClose.emit($event)">
        <ng-container *ngFor="let template of templates">
          <p-tabPanel
            [id]="template.id"
            [leftIcon]="template.leftIcon"
            [rightIcon]="template.rightIcon"
            [disabled]="template.disabled"
            [header]="template.header"
            [selected]="template.selected"
            [closable]="template.closable">
            <div [innerHTML]="template.ref?.nativeElement?.innerHTML"></div>
          </p-tabPanel>
        </ng-container>
    </p-tabView>
  `,
  styleUrls: ['./tab-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-tab-view',
    '[class.freud-bgcolor]': `bgColor`,
  }
})
export class FreudTabViewComponent implements ControlValueAccessor {
  @Input() style: any;

  @Input() styleClass!: string;

  @Input() controlClose!: boolean;
  @Input() bgColor: boolean = false;

  @Input() scrollable: boolean = false;

  @ContentChildren(FreudTabPanelComponent) templates!: QueryList<FreudTabPanelComponent>;

  @Output() onClose: EventEmitter<any> = new EventEmitter();
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  @Output() activeIndexChange: EventEmitter<number> = new EventEmitter();

  private _activeIndex!: number;

  modelValueChange() {
    this.activeIndexChange.emit(this.activeIndex);
  }

  onModelChange: any = (_:number) => { };

  onModelTouched: any = () => { };

  @Input() get activeIndex(){
    return this._activeIndex;
  }

  public set activeIndex(v){
    this._activeIndex = v;
    this.onModelChange(this._activeIndex);
    this.modelValueChange();
    this.onModelTouched();
  }

  writeValue(obj: any): void {
    this._activeIndex = obj;
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onModelTouched = fn;
  }
}
