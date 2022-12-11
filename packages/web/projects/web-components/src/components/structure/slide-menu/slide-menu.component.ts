import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { FreudMenuItem } from "../../../api";
import { SlideMenu } from "primeng/slidemenu";

@Component({
  selector: 'freud-slide-menu',
  template: `
    <p-slideMenu #slideMenu [model]="items"></p-slideMenu>
  `,
  styleUrls: ['./slide-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-slide-menu',
  }
})
export class FreudSlideMenuComponent {

  @Input() items!: FreudMenuItem[];
  @ViewChild('slideMenu') slide!: SlideMenu;

}
