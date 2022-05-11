import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

type loaderSizes = 'sm' | 'lg';
type loaderThemes = 'light' | 'dark';

@Component({
  selector: 'freud-loader',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <img [src]="'/assets/icons/loader/loader-' + size + '-' + theme + '.svg'" alt="loader" />
  `,
  host: {
    class: 'freud-loader',
  }
})
export class FreudLoaderComponent {

  @Input() size: loaderSizes = 'sm';
  @Input() theme: loaderThemes = 'light';

}
