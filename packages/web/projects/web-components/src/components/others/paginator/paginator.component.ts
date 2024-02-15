import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

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
      (onPageChange)="onPageChange.emit($event)"
    >
    </p-paginator>
  `,
  styleUrls: ['./paginator.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-paginator',
    '[class.freud-bgcolor]': 'bgColor',
  },
})
export class FreudPaginatorComponent {
  @Input() totalRecords = 0;
  @Input() rows = 0;
  @Input() first = 0;
  @Input() pageLinkSize = 5;
  @Input() bgColor = false;
  @Input() showCurrentPageReport = false;
  @Input() currentPageReportTemplate = '({currentPage} de {totalPages})';
  @Input() showFirstLastIcon = true;
  @Input() alwaysShow = true;
  @Output() onPageChange = new EventEmitter();
}
