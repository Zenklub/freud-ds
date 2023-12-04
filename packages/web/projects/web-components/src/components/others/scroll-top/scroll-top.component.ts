import { AfterViewInit, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { ScrollTop } from "primeng/scrolltop";

@Component({
  selector: 'freud-scroll-top',
  template: `
    <p-scrollTop #element [threshold]="threshold"
                 [target]="target"
                 [icon]="icon"
                 styleClass="freud-scrolltop"
                 [behavior]="behavior"></p-scrollTop>
  `,
  styleUrls: ['./scroll-top.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-scroll-top',
    '[class.freud-bgcolor]': `bgColor`,
  }
})
export class FreudScrollTopComponent implements AfterViewInit {
  @Input() threshold: number = 400;
  @Input() target: 'window' | 'parent' = 'window';
  @Input() behavior: 'smooth' | 'auto' = 'smooth';
  @Input() bgColor: boolean = false;
  @Input() icon: string = 'freud-icon freud-icon-chevron-up';
  @ViewChild('element') element!: ScrollTop;

  ngAfterViewInit() {
    if (this.target === 'parent') {
      this.element.onClick = this.onClick.bind(this);
    }
  }

  onClick() {
    let scrollElement = this.target === 'window' ? window : this.element.el.nativeElement.parentElement.parentElement;
    scrollElement.scroll({
      top: 0,
      behavior: this.behavior
    });
  }

}
