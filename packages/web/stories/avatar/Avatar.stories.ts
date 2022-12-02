import { FreudAvatarComponent } from '@freud-ds/web-components';
import { Story } from '@storybook/angular';

const Template: Story<FreudAvatarComponent> = (args: FreudAvatarComponent) => ({
  props: { ...args },
  template: `
    <freud-avatar [size]="size" [label]="label" [badge]="badge" [bgColor]="bgColor" [icon]="icon" [image]="image"></freud-avatar>
  `,
});

// Sizes
export const Small = Template.bind({});
Small.args = {
  label: 'A',
  size: 'sm',
};
export const Medium = Template.bind({});
Medium.args = {
  label: 'A',
  size: 'md',
};
export const Large = Template.bind({});
Large.args = {
  label: 'A',
  size: 'lg',
};


// BgColor
export const BgColor = Template.bind({});
BgColor.args = {
  label: 'BG',
  size: 'lg',
  bgColor: true
};

// Imagem
export const Imagem = Template.bind({});
Imagem.args = {
  label: 'BG',
  size: 'lg',
  image: 'assets/img/avatar.png'
};
export const ImagemEBadge = Template.bind({});
ImagemEBadge.args = {
  label: 'BG',
  size: 'lg',
  badge: '7',
  image: 'assets/img/avatar.png'
};

// Badge
export const BadgeSmall = Template.bind({});
BadgeSmall.args = {
  label: 'A',
  size: 'sm',
  badge: '2'
};
export const BadgeMedium = Template.bind({});
BadgeMedium.args = {
  label: 'A',
  size: 'md',
  badge: '5'
};
export const BadgeLarge = Template.bind({});
BadgeLarge.args = {
  label: 'A',
  size: 'lg',
  badge: '9'
};