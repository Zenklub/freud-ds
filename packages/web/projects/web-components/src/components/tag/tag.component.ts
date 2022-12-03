import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

type colors = 'primary' | 'success' | 'info' | 'warning' | 'error';

@Component({
  selector: 'freud-tag',
  template: `
    <p-tag [value]="value" class="freud-tag-{{color || 'primary'}}" [rounded]="true"></p-tag>
  `,
  host: {
    class: 'freud-tag',
    '[class.outline]':  'outline'
  },
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FreudTagComponent {

  @Input() value!: string;
  @Input() color: colors = 'primary';
  @Input() outline: boolean = false;

}
