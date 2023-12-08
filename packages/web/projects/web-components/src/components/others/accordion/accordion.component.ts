import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'freud-accordion-tab',
  template: `
    <div #ref>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-accordion-tab',
    '[class.freud-bgcolor]': 'bgColor',
  },
})
export class FreudAccordionTabComponent {
  @Input() disabled = false;
  @Input() tabindex = 0;
  @Input() selected = false;
  @Input() header!: string;
  @Input() style!: any;
  @Input() bgColor = false;
  @ViewChild('ref') ref!: any;
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
      (onClose)="onClose.emit($event)"
    >
      <ng-container *ngFor="let template of templates">
        <p-accordionTab
          [disabled]="template.disabled"
          [selected]="template.selected"
          [tabindex]="template.tabindex"
          [header]="template.header"
          [style]="template.style"
        >
          <div [innerHTML]="template.ref?.nativeElement?.innerHTML"></div>
        </p-accordionTab>
      </ng-container>
    </p-accordion>
  `,
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-accordion',
    '[class.freud-bgcolor]': 'bgColor',
  },
})
export class FreudAccordionComponent {
  @Input() style!: any;
  @Input() tabindex = 0;
  @Input() multiple = false;
  @Input() collapseIcon = 'freud-icon freud-icon-chevron-down';
  @Input() expandIcon = 'freud-icon freud-icon-chevron-right';
  @Input() activeIndex!: number;
  @Input() bgColor = false;
  @ContentChildren(FreudAccordionTabComponent)
  templates!: QueryList<FreudAccordionTabComponent>;
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() onOpen: EventEmitter<any> = new EventEmitter<any>();
}
