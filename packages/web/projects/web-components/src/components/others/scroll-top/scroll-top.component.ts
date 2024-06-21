import {
  AfterViewInit,
  Component,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ScrollTop } from 'primeng/scrolltop';

@Component({
  selector: 'freud-scroll-top',
  template: `
    <p-scrollTop
      #element
      [threshold]="threshold"
      [target]="target"
      [icon]="icon"
      styleClass="freud-scrolltop"
      [behavior]="behavior"
    ></p-scrollTop>
  `,
  styleUrls: ['./scroll-top.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-scroll-top',
    '[class.freud-bgcolor]': 'bgColor',
  },
})
export class FreudScrollTopComponent implements AfterViewInit {
  @Input() threshold = 400;
  @Input() target: 'window' | 'parent' = 'window';
  @Input() behavior: 'smooth' | 'auto' = 'smooth';
  @Input() bgColor = false;
  @Input() icon = 'freud-icon freud-icon-chevron-up';
  @ViewChild('element') element!: ScrollTop;

  scrollListener: any;

  ngAfterViewInit() {
    if (this.target === 'parent') {
      this.element.bindParentScrollListener =
        this.bindParentScrollListener.bind(this);
      this.element.unbindParentScrollListener =
        this.unbindParentScrollListener.bind(this);
      this.element.onClick = this.onClick.bind(this);
      this.element.bindParentScrollListener();
    }
  }

  bindParentScrollListener() {
    this.scrollListener = () => {
      this.element.checkVisibility(
        this.element.el.nativeElement.parentElement.parentElement.scrollTop,
      );
    };

    this.element.el.nativeElement.parentElement.parentElement.addEventListener(
      'scroll',
      this.scrollListener,
    );
  }

  onClick() {
    const scrollElement =
      this.target === 'window'
        ? window
        : this.element.el.nativeElement.parentElement.parentElement;
    scrollElement.scroll({
      top: 0,
      behavior: this.behavior,
    });
  }

  unbindParentScrollListener() {
    if (this.scrollListener) {
      this.element.el.nativeElement.parentElement.parentElement.removeEventListener(
        'scroll',
        this.scrollListener,
      );
      this.scrollListener = null;
    }
  }
}
