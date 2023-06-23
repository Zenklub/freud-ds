import { FreudAvatarComponent } from '@freud-ds/web-components';
import { Story } from '@storybook/angular';

const Template: Story<FreudAvatarComponent> = (args: FreudAvatarComponent) => ({
  props: { ...args },
  template: `
    <freud-avatar [size]="size" [label]="label" [badge]="badge" [bgColor]="bgColor" [withIcon]="withIcon" [image]="image"></freud-avatar>
  `,
});

const TemplateSize: Story<FreudAvatarComponent> = (args: FreudAvatarComponent) => ({
  props: { ...args },
  template: `
    <div style="display: flex; align-items: center">
        <freud-avatar style="margin-right: 16px;" [size]="'sm'" [label]="'A'"></freud-avatar>
        <freud-avatar style="margin-right: 16px;" [size]="'md'" [label]="'A'"></freud-avatar>
        <freud-avatar style="margin-right: 16px;" [size]="'lg'" [label]="'A'"></freud-avatar>
    </div>
  `,
});

// With Label
export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'A',
};

// Sizes
export const Size = TemplateSize.bind({});

// BgColor
export const BGColor = Template.bind({});
BGColor.args = {
  label: 'BG',
  size: 'md',
  bgColor: true
};

// Imagem
export const Imagem = Template.bind({});
Imagem.args = {
  label: 'BG',
  size: 'md',
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
