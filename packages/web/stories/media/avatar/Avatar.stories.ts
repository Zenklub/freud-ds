import { FreudAvatarComponent } from '@freud-ds/web-components';
import { Story } from '@storybook/angular';

const Template: Story<FreudAvatarComponent> = (args: FreudAvatarComponent) => ({
  props: { ...args },
  template: `
    <freud-avatar [size]="size" [label]="label" [badge]="badge" [bgColor]="bgColor" [withIcon]="withIcon" [image]="image"></freud-avatar>
  `,
});

// With Label
export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'A',
};

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
// Badge
export const WithBadge = Template.bind({});
WithBadge.args = {
  label: 'BG',
  size: 'md',
  badge: '7',
  image: 'assets/img/avatar.png'
};

export const Icon = Template.bind({});
Icon.args = {
  label: '',
  size: 'md',
  badge: '5',
  withIcon: true
};
