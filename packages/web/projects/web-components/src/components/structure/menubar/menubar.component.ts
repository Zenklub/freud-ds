import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FreudMenuItem } from "../../../api";

@Component({
  selector: 'freud-menubar',
  template: `
    <p-menubar [model]="items" [autoDisplay]="autoDisplay">
      <ng-template pTemplate="start">
        <a class="menubar-home-logo" [href]="startImgHref">
          <img [src]="startImgSrc" height="32" class="mr-2" [alt]="startImgAlt">
        </a>
      </ng-template>
    </p-menubar>
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
  @Input() startImgSrc!: string;
  @Input() startImgAlt!: string;
  @Input() startImgHref!: string;
  @Input() bgColor: boolean = false;
  @Input() autoDisplay: boolean = false;
  @Output() onItemClick: EventEmitter<any> = new EventEmitter();

}
