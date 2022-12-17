import {
  AfterContentInit, AfterViewChecked, ChangeDetectorRef,
  Component,
  ContentChildren, ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  QueryList, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { Subscription } from "rxjs";
import { BlockableUI } from "primeng/api";
import { DomHandler } from "primeng/dom";
import { TabPanel } from "primeng/tabview";

@Component({
  selector: 'freud-tab-panel',
  template: `
    <p-tabPanel #ref [id]="id" [leftIcon]="leftIcon" [rightIcon]="" [disabled]="disabled" [header]="header" [selected]="selected" [closable]="closable">
        <ng-content></ng-content>
    </p-tabPanel>
  `,
  styleUrls: ['./tab-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-tab-panel',
    '[class.freud-bgcolor]': `bgColor`,
  }
})
export class FreudTabPanelComponent {

  @Input() header!: string;
  @Input() id!: string;
  @Input() leftIcon!: string;
  @Input() rightIcon!: string;
  @Input() disabled: boolean = false;
  @Input() closable: boolean = false;
  @Input() selected: boolean = false;

  @Input() bgColor: boolean = false;

  @ViewChild('ref') ref!: TabPanel;

}

@Component({
  selector: 'freud-tab-view',
  template: `
    <div [ngClass]="{ 'p-tabview p-component': true, 'p-tabview-scrollable': scrollable }" [ngStyle]="style" [class]="styleClass">
      <div class="p-tabview-nav-container">
        <button *ngIf="scrollable && !backwardIsDisabled" #prevBtn class="p-tabview-nav-prev p-tabview-nav-btn p-link" (click)="navBackward()" type="button" pRipple>
          <span class="pi pi-chevron-left"></span>
        </button>
        <div #content class="p-tabview-nav-content" (scroll)="onScroll($event)">
          <ul #navbar class="p-tabview-nav" role="tablist">
            <ng-template ngFor let-tab [ngForOf]="tabs">
              <li role="presentation" [ngClass]="{ 'p-highlight': tab.selected, 'p-disabled': tab.disabled }" [ngStyle]="tab.headerStyle" [class]="tab.headerStyleClass" *ngIf="!tab.closed">
                <a
                  role="tab"
                  class="p-tabview-nav-link"
                  [attr.id]="tab.id + '-label'"
                  [attr.aria-selected]="tab.selected"
                  [attr.aria-controls]="tab.id"
                  (click)="open($event, tab)"
                  (keydown.enter)="open($event, tab)"
                  pRipple
                  [attr.tabindex]="tab.disabled ? null : '0'"
                >
                  <span class="p-tabview-left-icon" [ngClass]="tab.leftIcon" *ngIf="tab.leftIcon"></span>
                  <span class="p-tabview-title">{{ tab.header }}</span>
                  <span class="p-tabview-right-icon" [ngClass]="tab.rightIcon" *ngIf="tab.rightIcon"></span>
<!--                  <ng-container *ngTemplateOutlet="tab.headerTemplate"></ng-container>-->
                  <span *ngIf="tab.closable" class="p-tabview-close pi pi-times" (click)="close($event, tab)"></span>
                </a>
              </li>
            </ng-template>
            <li #inkbar class="p-tabview-ink-bar"></li>
          </ul>
        </div>
        <button *ngIf="scrollable && !forwardIsDisabled" #nextBtn class="p-tabview-nav-next p-tabview-nav-btn p-link" (click)="navForward()" type="button" pRipple>
          <span class="pi pi-chevron-right"></span>
        </button>
      </div>
      <div class="p-tabview-panels">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./tab-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-tab-view p-element',
    '[class.freud-bgcolor]': `bgColor`,
  }
})
export class FreudTabViewComponent implements AfterContentInit, AfterViewChecked, OnDestroy, BlockableUI {
  @Input() orientation: string = 'top';

  @Input() style: any;

  @Input() styleClass!: string;

  @Input() controlClose!: boolean;
  @Input() bgColor: boolean = false;

  @Input() scrollable!: boolean;

  @ViewChild('content') content!: ElementRef;

  @ViewChild('navbar') navbar!: ElementRef;

  @ViewChild('prevBtn') prevBtn!: ElementRef;

  @ViewChild('nextBtn') nextBtn!: ElementRef;

  @ViewChild('inkbar') inkbar!: ElementRef;

  @ContentChildren(FreudTabPanelComponent) tabPanels!: QueryList<FreudTabPanelComponent>;

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  @Output() onClose: EventEmitter<any> = new EventEmitter();

  @Output() activeIndexChange: EventEmitter<number> = new EventEmitter();

  initialized!: boolean;

  tabs!: FreudTabPanelComponent[];

  _activeIndex!: number;

  preventActiveIndexPropagation!: boolean;

  tabChanged!: boolean;

  backwardIsDisabled: boolean = true;

  forwardIsDisabled: boolean = false;

  private tabChangesSubscription!: Subscription;

  constructor(public el: ElementRef, public cd: ChangeDetectorRef) {}

  ngAfterContentInit() {
    this.initTabs();

    this.tabChangesSubscription = this.tabPanels.changes.subscribe((_) => {
      this.initTabs();
    });
  }

  ngAfterViewChecked() {
    if (this.tabChanged) {
      this.updateInkBar();
      this.tabChanged = false;
    }
  }

  ngOnDestroy(): void {
    if (this.tabChangesSubscription) {
      this.tabChangesSubscription.unsubscribe();
    }
  }

  initTabs(): void {
    this.tabs = this.tabPanels.toArray();
    let selectedTab: FreudTabPanelComponent = this.findSelectedTab()!;
    if (!selectedTab && this.tabs.length) {
      if (this.activeIndex != null && this.tabs.length > this.activeIndex) this.tabs[this.activeIndex].selected = true;
      else this.tabs[0].selected = true;

      this.tabChanged = true;
    }

    this.cd.markForCheck();
  }

  open(event: Event, tab: FreudTabPanelComponent) {
    if (tab.disabled) {
      if (event) {
        event.preventDefault();
      }
      return;
    }

    if (!tab.selected) {
      let selectedTab: FreudTabPanelComponent = this.findSelectedTab()!;
      if (selectedTab) {
        selectedTab.selected = false;
      }

      this.tabChanged = true;
      tab.selected = true;
      let selectedTabIndex = this.findTabIndex(tab);
      this.preventActiveIndexPropagation = true;
      this.activeIndexChange.emit(selectedTabIndex);
      this.onChange.emit({ originalEvent: event, index: selectedTabIndex });

      this.updateScrollBar(selectedTabIndex);
    }

    if (event) {
      event.preventDefault();
    }
  }

  close(event: Event, tab: FreudTabPanelComponent) {
    if (this.controlClose) {
      this.onClose.emit({
        originalEvent: event,
        index: this.findTabIndex(tab),
        close: () => {
          this.closeTab(tab);
        }
      });
    } else {
      this.closeTab(tab);
      this.onClose.emit({
        originalEvent: event,
        index: this.findTabIndex(tab)
      });
    }

    event.stopPropagation();
  }

  closeTab(tab: FreudTabPanelComponent) {
    if (tab.disabled) {
      return;
    }
    if (tab.selected) {
      this.tabChanged = true;
      tab.selected = false;
      for (let i = 0; i < this.tabs.length; i++) {
        let tabPanel = this.tabs[i];
        if (!tabPanel.ref.closed && !tab.disabled) {
          tabPanel.selected = true;
          break;
        }
      }
    }

    tab.ref.closed = true;
  }

  findSelectedTab() {
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].selected) {
        return this.tabs[i];
      }
    }
    return null;
  }

  findTabIndex(tab: FreudTabPanelComponent) {
    let index = -1;
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i] == tab) {
        index = i;
        break;
      }
    }
    return index;
  }

  getBlockableElement(): HTMLElement {
    return this.el.nativeElement.children[0];
  }

  @Input() get activeIndex(): number {
    return this._activeIndex;
  }

  set activeIndex(val: number) {
    this._activeIndex = val;
    if (this.preventActiveIndexPropagation) {
      this.preventActiveIndexPropagation = false;
      return;
    }

    if (this.tabs && this.tabs.length && this._activeIndex != null && this.tabs.length > this._activeIndex) {
      this.findSelectedTab()!.selected = false;
      this.tabs[this._activeIndex].selected = true;
      this.tabChanged = true;

      this.updateScrollBar(val);
    }
  }

  updateInkBar() {
    if (this.navbar) {
      const tabHeader: HTMLElement | null = DomHandler.findSingle(this.navbar.nativeElement, 'li.p-highlight');

      if (!tabHeader) {
        return;
      }

      this.inkbar.nativeElement.style.width = DomHandler.getWidth(tabHeader) + 'px';
      this.inkbar.nativeElement.style.left = DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(this.navbar.nativeElement).left + 'px';
    }
  }

  updateScrollBar(index: number) {
    let tabHeader = this.navbar.nativeElement.children[index];
    tabHeader.scrollIntoView({ block: 'nearest' });
  }

  updateButtonState() {
    const content = this.content.nativeElement;
    const { scrollLeft, scrollWidth } = content;
    const width = DomHandler.getWidth(content);

    this.backwardIsDisabled = scrollLeft === 0;
    this.forwardIsDisabled = parseInt(scrollLeft) === scrollWidth - width;
  }

  onScroll(event: any) {
    this.scrollable && this.updateButtonState();

    event.preventDefault();
  }

  getVisibleButtonWidths() {
    return [this.prevBtn?.nativeElement, this.nextBtn?.nativeElement].reduce((acc, el) => (el ? acc + DomHandler.getWidth(el) : acc), 0);
  }

  navBackward() {
    const content = this.content.nativeElement;
    const width = DomHandler.getWidth(content) - this.getVisibleButtonWidths();
    const pos = content.scrollLeft - width;
    content.scrollLeft = pos <= 0 ? 0 : pos;
  }

  navForward() {
    const content = this.content.nativeElement;
    const width = DomHandler.getWidth(content) - this.getVisibleButtonWidths();
    const pos = content.scrollLeft + width;
    const lastPos = content.scrollWidth - width;

    content.scrollLeft = pos >= lastPos ? lastPos : pos;
  }
}
