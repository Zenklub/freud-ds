import { Component, Input } from '@angular/core';

type colors = 'primary' | 'success' | 'info' | 'warning' | 'error';

@Component({
  selector: 'freud-tag',
  template: `
    <p-tag [value]="value" class="freud-tag-{{color}}"></p-tag>
  `,
  host: {
    class: 'freud-tag',
    '[class.outline]':  'outline'
  },
  styleUrls: ['./chip.component.scss']
})
export class FreudTagComponent {

  @Input() value!: string;
  @Input() color: colors = 'primary';
  @Input() outline: boolean = false;

}
