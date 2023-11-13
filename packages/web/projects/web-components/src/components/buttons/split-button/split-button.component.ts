import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FreudMenuItem } from "../../../api/menu.interface";

@Component({
  selector: 'freud-split-button',
  template: `
    <p-splitButton
      [label]="label"
      [disabled]="disabled"
      [model]="items"
      (onDropdownClick)="onDropdownClick.emit($event)"
      (onClick)="onClick.emit($event)">
    </p-splitButton>
  `,
  styleUrls: ['./split-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-split-button',
    '[class.freud-split-bgcolor]': `bgColor`,
  }
})
export class FreudSplitButtonComponent {

  @Input() label!: string;
  @Input() disabled: boolean = false;
  @Input() items!: FreudMenuItem[];
  @Input() bgColor: boolean = false;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() onDropdownClick: EventEmitter<any> = new EventEmitter<any>();

}
