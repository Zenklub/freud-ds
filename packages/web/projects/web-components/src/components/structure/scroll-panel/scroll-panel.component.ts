import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FreudMenuItem } from "../../../api";

@Component({
  selector: 'freud-scroll-panel',
  template: `
    <p-scrollPanel
      [style]="style"></p-scrollPanel>
  `,
  styleUrls: ['./scroll-panel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-scroll-panel',
    '[class.freud-bgcolor]': `bgColor`,
  }
})
export class FreudScrollPanelComponent {

  @Input() items!: FreudMenuItem[];
  @Input() style!: any;
  @Input() bgColor: boolean = false;

}
