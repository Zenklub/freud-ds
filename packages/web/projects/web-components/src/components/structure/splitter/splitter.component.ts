import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';
import { PrimeTemplate } from 'primeng/api';

@Component({
  selector: 'freud-splitter',
  template: `
    <p-splitter
      [panelSizes]="panelSizes || []"
      [style]="style || null"
      [layout]="layout || 'horizontal'"
      [minSizes]="minSizes || []"
      [panelStyleClass]="panelStyleClass || ''"
      [panelStyle]="panelStyle || {}"
      (onResizeEnd)="onResizeEnd.emit($event)"
      (onResizeStart)="onResizeStart.emit($event)"
    >
      <ng-container *ngIf="templates">
        <ng-template ngFor let-panel let-i="index" [ngForOf]="templates">
          <ng-template pTemplate>
            <ng-container *ngTemplateOutlet="panel.template"></ng-container>
          </ng-template>
        </ng-template>
      </ng-container>
    </p-splitter>
  `,
  styleUrls: ['./splitter.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-splitter',
  },
})
export class FreudSplitterComponent {
  @Input() panelSizes: number[] = [];
  @Input() minSizes: number[] = [];
  @Input() layout: 'horizontal' | 'vertical' = 'horizontal';
  @Input() panelStyleClass!: string;
  @Input() gutterSize = 4;
  @Input() panelStyle!: any;
  @Input() style!: any;
  @ContentChildren(PrimeTemplate) templates!: QueryList<any>;
  @Output() onResizeStart: EventEmitter<any> = new EventEmitter<any>();
  @Output() onResizeEnd: EventEmitter<any> = new EventEmitter<any>();
}
