import { Component, Input, ViewEncapsulation } from '@angular/core';
import { GalleryPhoto } from '../../../api/gallery-photo.interface';

@Component({
  selector: 'freud-gallery',
  template: `
    <p-galleria
      [value]="images"
      [numVisible]="10"
      [responsiveOptions]="responsiveOptions"
      [showThumbnails]="showThumbnails"
      [showIndicators]="!showThumbnails"
    >
      <ng-template pTemplate="item" let-item>
        <img [src]="item.previewImageSrc" style="width: 100%;" />
      </ng-template>
      <ng-template pTemplate="thumbnail" let-item>
        <div class="p-grid p-nogutter p-justify-center">
          <img
            [src]="item.thumbnailImageSrc"
            style="width: 80px;height: 60px"
          />
        </div>
      </ng-template>
    </p-galleria>
  `,
  styleUrls: ['./gallery.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-gallery',
    '[class.freud-bgcolor]': 'bgColor',
  },
})
export class FreudGalleryComponent {
  @Input() images: GalleryPhoto[] = [];
  @Input() bgColor = false;
  @Input() showThumbnails = true;

  @Input() responsiveOptions = [
    {
      breakpoint: '1366px',
      numVisible: 9,
    },
    {
      breakpoint: '1024px',
      numVisible: 8,
    },
    {
      breakpoint: '960px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 4,
    },
    {
      breakpoint: '560px',
      numVisible: 2,
    },
  ];
}
