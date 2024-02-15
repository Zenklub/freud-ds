import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'freud-action-icon',
  template: `
    <button type="button">
      <span class="freud-icon freud-icon-times"></span>
    </button>
  `,
  styleUrls: ['./action-icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-action-icon',
    '[class.freud-bgcolor]': 'bgColor',
  },
})
export class FreudActionIconComponent {
  @Input() bgColor = false;
}
