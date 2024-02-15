import { ViewEncapsulation } from '@angular/core';
import { Component, Input } from '@angular/core';

type TooltopPosition = 'top' | 'bottom' | 'left' | 'right';

@Component({
  selector: '[freud-tooltip], freud-tooltip',
  exportAs: 'freudTooltip',
  template: `
    <div
      [pTooltip]="tooltipLabel"
      [tooltipPosition]="tooltipPosition"
      [class.bgColor]="bgColor"
      [tooltipStyleClass]="
        bgColor ? 'freud-tooltip freud-bg-color' : 'freud-tooltip'
      "
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
  @Input() tooltipPosition: TooltopPosition = 'top';
  @Input() bgColor: boolean = false;
}
