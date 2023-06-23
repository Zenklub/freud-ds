import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'freud-paginator',
  template: `
    <p-paginator
      [totalRecords]="totalRecords"
      [rows]="rows"
      [first]="first"
      [alwaysShow]="alwaysShow"
      [showFirstLastIcon]="showFirstLastIcon"
      [pageLinkSize]="pageLinkSize"
      [currentPageReportTemplate]="currentPageReportTemplate"
      [showCurrentPageReport]="showCurrentPageReport"
      (onPageChange)="onPageChange.emit($event)">
    </p-paginator>
  `,
  styleUrls: ['./paginator.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-paginator',
    '[class.freud-bgcolor]': `bgColor`,
  }
})
export class FreudPaginatorComponent {

  @Input() totalRecords: number = 0;
  @Input() rows: number = 0;
  @Input() first: number = 0;
  @Input() pageLinkSize: number = 5;
  @Input() bgColor: boolean = false;
  @Input() showCurrentPageReport: boolean = false;
  @Input() currentPageReportTemplate: string = '({currentPage} de {totalPages})';
  @Input() showFirstLastIcon: boolean = true;
  @Input() alwaysShow: boolean = true;
  @Output() onPageChange = new EventEmitter();

}
