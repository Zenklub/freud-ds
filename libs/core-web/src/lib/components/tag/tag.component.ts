import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

type tagColors = 'highlight-1' | 'highlight-2' | 'negative' | 'positive' | 'warning' | 'neutral-1' | 'neutral-2' | 'neutral-3';

@Component({
  selector: 'freud-tag',
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-content></ng-content>
    <div>
      <span [innerHTML]="text"></span>
    </div>
  `,
  host: {
    class: 'freud-tag',
    '[class.freud-tag-color-highlight-1]': `type === 'highlight-1'`,
    '[class.freud-tag-color-highlight-2]': `type === 'highlight-2'`,
    '[class.freud-tag-color-negative]': `type === 'negative'`,
    '[class.freud-tag-color-positive]': `type === 'positive'`,
    '[class.freud-tag-color-warning]': `type === 'warning'`,
    '[class.freud-tag-color-neutral-1]': `type === 'neutral-1'`,
    '[class.freud-tag-color-neutral-2]': `type === 'neutral-2'`,
    '[class.freud-tag-color-neutral-3]': `type === 'neutral-3'`,

    '[class.freud-tag-bg-color-highlight-1]': `type === 'highlight-1'`,
    '[class.freud-tag-bg-color-highlight-2]': `type === 'highlight-2'`,
    '[class.freud-tag-bg-color-negative]': `type === 'negative'`,
    '[class.freud-tag-bg-color-positive]': `type === 'positive'`,
    '[class.freud-tag-bg-color-warning]': `type === 'warning'`,
    '[class.freud-tag-bg-color-neutral-1]': `type === 'neutral-1'`,
    '[class.freud-tag-bg-color-neutral-2]': `type === 'neutral-2'`,
    '[class.freud-tag-bg-color-neutral-3]': `type === 'neutral-3'`,
  }
})
export class FreudTagComponent {

  @Input() type: tagColors = 'highlight-1';
  @Input() text = '';

}
