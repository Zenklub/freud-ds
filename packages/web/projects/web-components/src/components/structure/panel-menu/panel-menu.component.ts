import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FreudMenuItem } from "../../../api/menu.interface";

@Component({
  selector: 'freud-panel-menu',
  template: `
    <p-panelMenu
      [model]="items"
      [style]="styleParams">
    </p-panelMenu>
  `,
  styleUrls: ['./panel-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-panel-menu'
  }
})
export class FreudPanelMenuComponent {

  @Input() items!: FreudMenuItem[];
  @Input() styleParams!: any;

}
