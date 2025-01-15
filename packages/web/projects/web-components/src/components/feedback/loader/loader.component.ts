import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

type loaderSizes = 'sm' | 'lg';

@Component({
  selector: 'freud-loader',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="spinner">
      <div></div>
    </div>
  `,
  host: {
    class: 'freud-loader',
    '[class.freud-loader-size-small]': `size === 'sm'`,
    '[class.freud-loader-size-large]': `size === 'lg'`,
    '[class.freud-loader-bgcolor]': `bgColor`,
  }
})
export class FreudLoaderComponent {

  @Input() size: loaderSizes = 'sm';
  @Input() bgColor = false;

}
