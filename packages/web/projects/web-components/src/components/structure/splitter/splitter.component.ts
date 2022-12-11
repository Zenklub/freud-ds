import {
  AfterContentInit,
  Component,
  ContentChildren, EventEmitter,
  Input,
  Output,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import { PrimeTemplate } from "primeng/api";

@Component({
  selector: 'freud-splitter',
  template: `
    <p-splitter
      [panelSizes]="panelSizes"
      [style]="style"
      [layout]="layout || 'horizontal'"
      [minSizes]="minSizes"
      [panelStyleClass]="panelStyleClass"
      [panelStyle]="panelStyle"
      (onResizeEnd)="onResizeEnd.emit($event)"
      (onResizeStart)="onResizeStart.emit($event)">
      <ng-template ngFor let-panel let-i="index" [ngForOf]="panels">
        <ng-template pTemplate>
          <ng-container *ngTemplateOutlet="panel"></ng-container>
        </ng-template>
      </ng-template>
    </p-splitter>
  `,
  styleUrls: ['./splitter.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-splitter',
  }
})
export class FreudSplitterComponent implements AfterContentInit {

  @Input() panelSizes!: number[];
  @Input() minSizes!: number[];
  @Input() layout: "horizontal" | "vertical" = 'horizontal';
  @Input() panelStyleClass!: string;
  @Input() gutterSize: number = 4;
  @Input() panelStyle!: Object;
  @Input() style!: any;
  panels: any[] = [];
  @ContentChildren(PrimeTemplate) templates!: QueryList<any>;
  @Output() onResizeStart: EventEmitter<any> = new EventEmitter<any>();
  @Output() onResizeEnd: EventEmitter<any> = new EventEmitter<any>();

  ngAfterContentInit() {
    this.templates.forEach((item) => {
      this.panels.push(item.template);
    });
  }

}
