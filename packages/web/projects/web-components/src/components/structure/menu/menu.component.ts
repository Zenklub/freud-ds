import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FreudMenuItem } from "../../../api/menu.interface";

@Component({
  selector: 'freud-menu',
  template: `
    <p-menu
      #pMenu
      [model]="items"
      [appendTo]="appendTo"
      [popup]="popup"
      (onHide)="onHide.emit($event)"
      (onShow)="onShow.emit($event)"
    ></p-menu>
  `,
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-menu',
  }
})
export class FreudMenuComponent {

  @Input() items!: FreudMenuItem[];
  @Input() popup: boolean = false;
  @Input() appendTo!: string;

  @Output() onShow: EventEmitter<any> = new EventEmitter<any>();
  @Output() onHide: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('pMenu') reference!: any;

}
