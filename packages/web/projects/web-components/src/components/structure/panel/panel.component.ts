import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'freud-panel',
  template: `
    <p-panel
      [header]="header"
      [collapsed]="collapsed"
      [expandIcon]="expandIcon"
      [showHeader]="showHeader"
      [toggler]="toggler"
      [style]="style"
      [collapseIcon]="collapseIcon"
      [toggleable]="toggleable"
      (onBeforeToggle)="onBeforeToggle.emit($event)"
      (onAfterToggle)="onAfterToggle.emit($event)"
      >
      <ng-template pTemplate="icons">
        <ng-content select="[freudTemplateIcons]"></ng-content>
      </ng-template>

      <ng-template pTemplate="header">
        <ng-content select="[freudTemplateHeader]"></ng-content>
      </ng-template>
      <ng-content></ng-content>
      <ng-template pTemplate="footer">
        <ng-content select="[freudTemplatefooter]"></ng-content>
      </ng-template>
    </p-panel>
  `,
  styleUrls: ['./panel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-panel',
  }
})
export class FreudPanelComponent {

  @Input() header!: string;
  @Input() toggleable: boolean = false;
  @Input() collapsed: boolean = false;
  @Input() showHeader: boolean = true;
  @Input() toggler: 'icon' | 'header' = 'icon';
  @Input() style!: any;
  @Input() expandIcon: string = 'freud-icon freud-icon-plus';
  @Input() collapseIcon: string = 'freud-icon freud-icon-minus';
  @Output() onBeforeToggle = new EventEmitter();
  @Output() onAfterToggle = new EventEmitter();

}
