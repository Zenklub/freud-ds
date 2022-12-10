import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FreudMenuItem } from "../../../api";

@Component({
  selector: 'freud-slide-menu',
  template: `
    <p-slideMenu
      [model]="items"></p-slideMenu>
  `,
  styleUrls: ['./slide-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-slide-menu',
    '[class.freud-bgcolor]': `bgColor`,
  }
})
export class FreudSlideMenuComponent {

  @Input() items!: FreudMenuItem[];
  @Input() activeItem!: FreudMenuItem;
  @Input() bgColor: boolean = false;

}
