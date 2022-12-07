import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FreudMenuItem } from "../../../api";

@Component({
  selector: 'freud-menubar',
  template: `
    Implementar menubar
  `,
  styleUrls: ['./menubar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-menubar',
    '[class.freud-bgcolor]': `bgColor`,
  }
})
export class FreudMenubarComponent {
  @Input() items!: FreudMenuItem[];
  @Input() home!: FreudMenuItem;
  @Input() bgColor: boolean = false;
  @Output() onItemClick: EventEmitter<any> = new EventEmitter();

}
