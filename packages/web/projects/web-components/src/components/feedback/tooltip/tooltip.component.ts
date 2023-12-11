import { ViewEncapsulation } from '@angular/core';
import { Component, Input } from '@angular/core';

type position = 'top' | 'bottom' | 'left' | 'right';

@Component({
  selector: '[freud-tooltip]',
  exportAs: 'freudTooltip',
  template: `
    <div
      (mouseenter)="handleMouseEnter()"
      [pTooltip]="tooltipLabel"
      [tooltipPosition]="tooltipPosition"
      [class.bgColor]="bgColor"
      [tooltipStyleClass]="bgColor ? 'freud-tooltip freud-bg-color' : 'freud-tooltip'"
      class="freud-tooltip-container"
    >
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./tooltip.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FreudTooltipComponent {
  @Input() tooltipLabel: string = '';
  @Input() tooltipPosition: position = 'top';
  @Input() bgColor: boolean = false;
  @Input() maxWidth: number = 690;

  handleMouseEnter() {
    setTimeout(() => {
      const tooltip = document.querySelector('.freud-tooltip');
      if (!tooltip) return;
      const tooltipMaxWidth = this.maxWidthLimiter(this.maxWidth, 690);
      (tooltip as HTMLElement).style.maxWidth = `${tooltipMaxWidth}px`;
    });
  }

  maxWidthLimiter(width: number, maxWidthLimit: number): number {
    if (width > maxWidthLimit) {
      console.warn('Tooltip: maxWidth exceeded');
    }
    return Math.min(width, maxWidthLimit);
  }
}
