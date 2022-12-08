import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FreudMenuItem } from "../../../api";

@Component({
  selector: 'freud-tab-menu',
  template: `
    <p-tabMenu
      [model]="items"
      [styleClass]="'freud-typography bodyBoldAuto'"
      [activeItem]="activeItem"></p-tabMenu>
  `,
  styleUrls: ['./tab-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-tab-menu',
    '[class.freud-bgcolor]': `bgColor`,
  }
})
export class FreudTabMenuComponent {

  @Input() items!: FreudMenuItem[];
  @Input() activeItem!: FreudMenuItem;
  @Input() bgColor: boolean = false;

}
