import { Component, HostListener, Input, OnDestroy, ViewEncapsulation } from '@angular/core';

type tooltipPositions = 'top' | 'bottom' | 'left' | 'right';
type tooltipThemes = 'light' | 'dark';

@Component({
  selector: 'freud-tooltip',
  styleUrls: ['./tooltip.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-content></ng-content>
    <div class="freud-tooltip-container" [class.freud-tooltip-open]="isOpen">
      <span class="freud-tooltip-text" [innerHTML]="text"></span>
    </div>
  `,
  host: {
    class: 'freud-tooltip',
    '[class.freud-tooltip-theme-dark]': `theme === 'dark'`,

    '[class.freud-tooltip-position-top]': `position === 'top'`,
    '[class.freud-tooltip-position-bottom]': `position === 'bottom'`,
    '[class.freud-tooltip-position-left]': `position === 'left'`,
    '[class.freud-tooltip-position-right]': `position === 'right'`,
  }
})
export class FreudTooltipComponent implements OnDestroy{

  @Input() theme: tooltipThemes = 'light';
  @Input() position: tooltipPositions = 'top';
  @Input() disabled = false;
  @Input() text = '';

  public isOpen = false;
  public hideTask: any;

  ngOnDestroy() {
    this.hide();
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.show();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hide();
  }

  private show() {
    if (this.hideTask) {
      clearTimeout(this.hideTask);
    }

    if (this.text && !this.disabled) {
      this.isOpen = true;
    }
  }

  private hide() {
    if (this.hideTask) {
      clearTimeout(this.hideTask);
    }

    this.hideTask = setTimeout(() => {
      this.isOpen = false;
    }, 200);
  }


}
