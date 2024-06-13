import { FreudGalleryComponent, GalleryPhoto } from '@freud-ds/web-components';
import { Story, applicationConfig } from '@storybook/angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

const images: GalleryPhoto[] = [
  {
    type: "image",
    previewImageSrc: 'assets/img/gallery/galleria1.jpg',
    thumbnailImageSrc: 'assets/img/gallery/galleria1.jpg',
    alt: "Description for Image 1",
    title: "Title 1"
  },
  {
    type: "image",
    previewImageSrc: "assets/img/gallery/galleria2.jpg",
    thumbnailImageSrc: "assets/img/gallery/galleria2.jpg",
    alt: "Description for Image 2",
    title: "Title 2"
  },
  {
    type: "image",
    previewImageSrc: "assets/img/gallery/galleria3.jpg",
    thumbnailImageSrc: "assets/img/gallery/galleria3.jpg",
    alt: "Description for Image 3",
    title: "Title 3"
  },
  {
    type: "image",
    previewImageSrc: "assets/img/gallery/galleria4.jpg",
    thumbnailImageSrc: "assets/img/gallery/galleria4.jpg",
    alt: "Description for Image 4",
    title: "Title 4"
  },
  {
    type: "image",
    previewImageSrc: "assets/img/gallery/galleria5.jpg",
    thumbnailImageSrc: "assets/img/gallery/galleria5.jpg",
    alt: "Description for Image 5",
    title: "Title 5"
  },
  {
    type: "image",
    previewImageSrc: "assets/img/gallery/galleria6.jpg",
    thumbnailImageSrc: "assets/img/gallery/galleria6.jpg",
    alt: "Description for Image 6",
    title: "Title 6"
  },
  {
    type: "image",
    previewImageSrc: "assets/img/gallery/galleria7.jpg",
    thumbnailImageSrc: "assets/img/gallery/galleria7.jpg",
    alt: "Description for Image 7",
    title: "Title 7"
  },
  {
    type: "image",
    previewImageSrc: "assets/img/gallery/galleria8.jpg",
    thumbnailImageSrc: "assets/img/gallery/galleria8.jpg",
    alt: "Description for Image 8",
    title: "Title 8"
  },
  {
    type: "image",
    previewImageSrc: "assets/img/gallery/galleria9.jpg",
    thumbnailImageSrc: "assets/img/gallery/galleria9.jpg",
    alt: "Description for Image 9",
    title: "Title 9"
  },
  {
    type: "image",
    previewImageSrc: "assets/img/gallery/galleria10.jpg",
    thumbnailImageSrc: "assets/img/gallery/galleria10.jpg",
    alt: "Description for Image 10",
    title: "Title 10"
  }
];

const videos: GalleryPhoto[] = [
  {
    type: "video",
    previewImageSrc: "https://www.youtube.com/embed/AurVL6n56wg",
    thumbnailImageSrc: "https://www.youtube.com/embed/AurVL6n56wg",
    alt: "Description for Image 1",
    title: "Title 1"
  },
  {
    type: "image",
    previewImageSrc: "assets/img/gallery/galleria2.jpg",
    thumbnailImageSrc: "assets/img/gallery/galleria2.jpg",
    alt: "Description for Image 2",
    title: "Title 2"
  },
];

const Template: Story<FreudGalleryComponent> = (
  args: FreudGalleryComponent,
) => ({
  props: { ...args },
  template: `
    <freud-gallery
        [images]="images"
        [showThumbnails]="showThumbnails"
        [bgColor]="bgColor">
    </freud-gallery>
  `,
});

export const Default = Template.bind({});
Default.args = {
  images: images,
  showThumbnails: true,
};

export const Videos = Template.bind({});
Videos.args = {
  images: videos,
  showThumbnails: true,
};

export const WithoutThumbnail = Template.bind({});
WithoutThumbnail.args = {
  images: images,
  showThumbnails: false,
};

export const BGColor = Template.bind({});
BGColor.args = {
  images: images,
  showThumbnails: false,
  bgColor: true,
};

export default {
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(BrowserAnimationsModule)],
    }),
  ],
};
