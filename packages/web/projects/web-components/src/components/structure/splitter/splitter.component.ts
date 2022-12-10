import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FreudMenuItem } from "../../../api";

@Component({
  selector: 'freud-splitter',
  template: `
    <p-splitter></p-splitter>
  `,
  styleUrls: ['./splitter.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-splitter',
    '[class.freud-bgcolor]': `bgColor`,
  }
})
export class FreudSplitterComponent {

  @Input() items!: FreudMenuItem[];
  @Input() activeItem!: FreudMenuItem;
  @Input() bgColor: boolean = false;

}
