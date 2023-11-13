import { FreudAvatarComponent } from '@freud-ds/web-components';
import { Story } from '@storybook/angular';

const Template: Story<FreudAvatarComponent> = (args: FreudAvatarComponent) => ({
  props: { ...args },
  template: `
    <freud-avatar [size]="size" [label]="label" [badge]="badge" [bgColor]="bgColor" [withIcon]="withIcon" [image]="image"></freud-avatar>
  `,
});

//Teste
export const AvatarTest = Template.bind({});

// Icon
export const Icon = () => {
  return {
    template: `
      <freud-avatar></freud-avatar>
    `,
  };
};

// With Label
export const WithLabel = () => {
  return {
    template: `
      <freud-avatar label="A"></freud-avatar>
    `,
  };
};

// Imagem
export const Imagem = () => {
  return {
    template: `
      <freud-avatar image="assets/img/avatar.png"></freud-avatar>
    `,
  };
};

// Badge
export const WithBadge = () => {
  return {
    template: `
      <freud-avatar badge="7"></freud-avatar>
    `,
  };
};

// BgColor
export const BGColor = () => {
  return {
    template: `
      <freud-avatar bgColor="true" label="BG"></freud-avatar>
    `,
  };
};

// Sizes
export const SizeLG = () => {
  return {
    template: `
      <freud-avatar size="lg"></freud-avatar>
    `,
  };
};

export const SizeMD = () => {
  return {
    template: `
    <freud-avatar></freud-avatar> 
    `,
  };
}

export const SizeSM = () => {
  return {
    template: `
    <freud-avatar size="sm"></freud-avatar> 
    `,
  };
}
