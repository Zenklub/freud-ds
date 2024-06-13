import { Component, Input, ViewEncapsulation } from '@angular/core';
import { GalleryPhoto } from '../../../api/gallery-photo.interface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
        <div class="gallery-item">
          <div *ngIf="item.type === 'image'" class="image-container">
            <img [src]="item.previewImageSrc" [alt]="item.alt"/>
          </div>
          <div *ngIf="item.type === 'video'" class="video-container">
            <iframe [src]="item.previewImageSrc | safe" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </ng-template>
      <ng-template pTemplate="thumbnail" let-item>
        <div class="p-grid p-nogutter p-justify-center">
          <img [src]="getThumbnailUrl(item)" [alt]="item.alt" style="width: 80px;height: 60px"/>
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

  constructor(private sanitizer: DomSanitizer) {}

  getThumbnailUrl(item: GalleryPhoto): SafeResourceUrl {
    if (item.type === 'video') {
      const videoId = this.extractVideoId(item.thumbnailImageSrc);
      return this.sanitizer.bypassSecurityTrustResourceUrl(`https://img.youtube.com/vi/${videoId}/0.jpg`);
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(item.thumbnailImageSrc);
  }

  extractVideoId(url: string): string {
    const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return videoIdMatch ? videoIdMatch[1] : '';
  }

}
