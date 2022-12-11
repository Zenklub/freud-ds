import { Component, ContentChildren, EventEmitter, Input, Output, QueryList, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'freud-accordion-tab',
  template: `
    <p-accordionTab
      [disabled]="disabled"
      [selected]="selected"
      [tabindex]="tabindex"
      [header]="header"
      [style]="style">
    </p-accordionTab>
  `,
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-accordion-tab',
    '[class.freud-bgcolor]': `bgColor`,
  }
})

export class FreudAccordionTabComponent {
  @Input() disabled: boolean = false;
  @Input() tabindex: number = 0;
  @Input() selected: boolean = false;
  @Input() header!: string;
  @Input() style!: string;
  @Input() bgColor: boolean = false;

}

@Component({
  selector: 'freud-accordion',
  template: `
    <p-accordion
      [activeIndex]="activeIndex"
      [multiple]="multiple"
      [tabindex]="tabindex"
      [expandIcon]="expandIcon"
      [collapseIcon]="collapseIcon"
      [style]="style"
      (onOpen)="onOpen.emit($event)"
      (onClose)="onClose.emit($event)">
    </p-accordion>
  `,
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-accordion',
    '[class.freud-bgcolor]': `bgColor`,
  }
})

export class FreudAccordionComponent {
  @Input() style!: string;
  @Input() tabindex: number = 0;
  @Input() multiple: boolean = false;
  @Input() collapseIcon: string = 'freud-icon freud-icon-chevron-down';
  @Input() expandIcon: string = 'freud-icon freud-icon-chevron-right';
  @Input() activeIndex!: number;
  @Input() bgColor: boolean = false;
  @ContentChildren(FreudAccordionTabComponent) templates!: QueryList<any>;
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() onOpen: EventEmitter<any> = new EventEmitter<any>();

}
