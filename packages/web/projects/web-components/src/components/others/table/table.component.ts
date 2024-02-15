import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FreudTemplate } from '../../directive/template';
import { Table } from 'primeng/table';
import { Subscription } from 'rxjs';
import { DomHandler } from 'primeng/dom';

@Component({
  selector: 'freud-table',
  template: `
    <p-table #tableRef [value]="value" [columns]="columns" [style]="style">
      <ng-template pTemplate="caption">
        <ng-container *ngTemplateOutlet="captionTemplate"></ng-container>
      </ng-template>

      <ng-template pTemplate="header" let-columns>
        <ng-container
          *ngTemplateOutlet="headerTemplate; context: { columns: columns }"
        ></ng-container>
      </ng-template>
      <ng-content></ng-content>
      <ng-template pTemplate="body" let-rowData let-columns="columns">
        <ng-container
          *ngTemplateOutlet="
            bodyTemplate;
            context: { item: rowData, columns: columns }
          "
        ></ng-container>
      </ng-template>

      <ng-template pTemplate="summary">
        <ng-container *ngTemplateOutlet="summaryTemplate"></ng-container>
      </ng-template>
    </p-table>
  `,
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-table',
  },
})
export class FreudTableComponent implements AfterContentInit {
  @Input() value!: any[];
  @Input() style!: any;
  @Input() columns!: any[];
  headerTemplate!: TemplateRef<any>;
  headerGroupedTemplate!: TemplateRef<any>;
  bodyTemplate!: TemplateRef<any>;
  captionTemplate!: TemplateRef<any>;
  summaryTemplate!: TemplateRef<any>;
  @ContentChildren(FreudTemplate) templates!: QueryList<FreudTemplate>;
  @ViewChild('tableRef') tableRef!: Table;

  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case 'caption':
          this.captionTemplate = item.template;
          break;

        case 'header':
          this.headerTemplate = item.template;
          break;

        case 'headergrouped':
          this.headerGroupedTemplate = item.template;
          break;

        case 'body':
          this.bodyTemplate = item.template;
          break;
        case 'summary':
          this.summaryTemplate = item.template;
          break;
      }
    });
  }
}

@Directive({
  selector: '[freudSortableColumn]',
  host: {
    class: 'p-element',
    '[class.p-sortable-column]': 'isEnabled()',
    '[class.p-highlight]': 'sorted',
    '[attr.tabindex]': 'isEnabled() ? "0" : null',
    '[attr.role]': '"columnheader"',
    '[attr.aria-sort]': 'sortOrder',
  },
})
export class FreudSortableColumn implements AfterViewInit, OnDestroy {
  @Input('freudSortableColumn') field!: string;

  @Input() freudSortableColumnDisabled!: boolean;

  sorted!: boolean;

  sortOrder!: string;

  subscription!: Subscription;

  constructor(public dt: FreudTableComponent) {
    if (this.isEnabled()) {
      setTimeout(() => {
        this.subscription =
          this.dt.tableRef?.tableService.sortSource$.subscribe(() => {
            this.updateSortState();
          });
      }, 3000);
    }
  }

  ngAfterViewInit() {
    if (this.isEnabled()) {
      this.updateSortState();
    }
  }

  updateSortState() {
    this.sorted = this.dt.tableRef?.isSorted(this.field);
    this.sortOrder = this.sorted
      ? this.dt.tableRef.sortOrder === 1
        ? 'ascending'
        : 'descending'
      : 'none';
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if (this.isEnabled() && !this.isFilterElement(<HTMLElement>event.target)) {
      this.updateSortState();
      this.dt.tableRef.sort({
        originalEvent: event,
        field: this.field,
      });

      DomHandler.clearSelection();
    }
  }

  @HostListener('keydown.enter', ['$event'])
  onEnterKey(event: MouseEvent) {
    this.onClick(event);
  }

  isEnabled() {
    return !this.freudSortableColumnDisabled;
  }

  isFilterElement(element: HTMLElement) {
    return (
      DomHandler.hasClass(element, 'pi-filter-icon') ||
      DomHandler.hasClass(element, 'p-column-filter-menu-button')
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

@Component({
  selector: 'freud-sortIcon',
  template: `
    <i
      class="p-sortable-column-icon freud-icon freud-icon-fw"
      [ngClass]="{
        'freud-icon-sort-amount-up-alt': sortOrder === 1,
        'freud-icon-sort-amount-down': sortOrder === -1,
        'freud-icon-sort-alt': sortOrder === 0
      }"
    ></i>
    <span *ngIf="isMultiSorted()" class="p-sortable-column-badge">{{
      getBadgeValue()
    }}</span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'p-element',
  },
})
export class FreudSortIcon implements AfterViewInit, OnDestroy {
  @Input() field!: string;

  subscription!: Subscription;

  sortOrder = 0;

  constructor(public dt: FreudTableComponent, public cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cd.detectChanges();
    setTimeout(() => {
      this.subscription = this.dt.tableRef?.tableService.sortSource$.subscribe(
        () => {
          this.updateSortState();
        },
      );
    }, 3000);
    this.updateSortState();
  }

  onClick(event: any) {
    event.preventDefault();
  }

  updateSortState() {
    if (this.dt.tableRef?.sortMode === 'single') {
      this.sortOrder = this.dt.tableRef?.isSorted(this.field)
        ? this.dt.tableRef.sortOrder
        : 0;
    } else if (this.dt.tableRef?.sortMode === 'multiple') {
      const sortMeta = this.dt.tableRef.getSortMeta(this.field);
      this.sortOrder = sortMeta ? sortMeta.order : 0;
    }

    this.cd.markForCheck();
  }

  getMultiSortMetaIndex() {
    const multiSortMeta = this.dt.tableRef._multiSortMeta;
    let index = -1;

    if (
      multiSortMeta &&
      this.dt.tableRef.sortMode === 'multiple' &&
      (this.dt.tableRef.showInitialSortBadge || multiSortMeta.length > 1)
    ) {
      for (let i = 0; i < multiSortMeta.length; i++) {
        const meta = multiSortMeta[i];
        if (meta.field === this.field || meta.field === this.field) {
          index = i;
          break;
        }
      }
    }

    return index;
  }

  getBadgeValue() {
    const index = this.getMultiSortMetaIndex();

    return this.dt.tableRef.groupRowsBy && index > -1 ? index : index + 1;
  }

  isMultiSorted() {
    return (
      this.dt.tableRef?.sortMode === 'multiple' &&
      this.getMultiSortMetaIndex() > -1
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
