import { FreudImageComponent } from '@freud-ds/web-components';
import { Story } from '@storybook/angular';

const Template: Story<FreudImageComponent> = (args: FreudImageComponent) => ({
  props: { ...args },
  template: `
    <freud-image [preview]="preview" [alt]="alt" [src]="src" [height]="height" [width]="width"></freud-image>
  `,
});

export const Default = Template.bind({});
Default.args = {
  src: '/assets/img/img.png',
  height: '300px',
  width: '300px',
  alt: 'Zenklub Image',
};

export const Preview = Template.bind({});
Preview.args = {
  src: '/assets/img/img.png',
  height: '300px',
  width: '300px',
  alt: 'Zenklub Image',
  preview: true
};

export const BGColor = Template.bind({});
BGColor.args = {
  src: '/assets/img/img.png',
  height: '300px',
  width: '300px',
  alt: 'Zenklub Image',
};
