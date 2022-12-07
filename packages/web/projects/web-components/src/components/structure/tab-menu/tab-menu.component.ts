import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'freud-tab-menu',
  template: `
    // Tabmenu
  `,
  styleUrls: ['./tab-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-tab-menu',
    '[class.freud-bgcolor]': `bgColor`,
  }
})
export class FreudTabMenuComponent {

  @Input() bgColor: boolean = false;

}
