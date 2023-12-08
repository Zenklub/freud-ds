import { Component, Input, ViewEncapsulation } from '@angular/core';

type colors = 'primary' | 'success' | 'info' | 'warning' | 'error';

@Component({
  selector: 'freud-tag',
  template: `
    <p-tag
      [value]="value"
      class="freud-tag-{{ color || 'primary' }}"
      [rounded]="true"
    ></p-tag>
  `,
  host: {
    class: 'freud-tag freud-typography smallSemibold1-5',
    '[class.outline]': 'outline',
  },
  styleUrls: ['./tag.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FreudTagComponent {
  @Input() value!: string;
  @Input() color: colors = 'primary';
  @Input() outline = false;
}
