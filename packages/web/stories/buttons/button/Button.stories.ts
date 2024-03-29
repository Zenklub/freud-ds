import { Story } from '@storybook/angular';
import { FreudButtonComponent } from '@freud-ds/web-components';

// Button Test
const TemplateTest: Story<FreudButtonComponent> = (args: FreudButtonComponent) => ({
  props: { ...args },
  template: `<freud-button [color]="color" [bgColor]="bgColor" [size]="size" [disabled]="disabled" 
[loading]="loading" [icon]="icon" [label]="label" [iconPos]="iconPos"></freud-button>`,
});

export const ButtonTest = TemplateTest.bind({});
ButtonTest.args = {
  label: 'Teste'
};

// Theme
export const Primary = () => {
  return {
    template: `<freud-button label="Button primary"></freud-button>`,
  };
};

export const Secondary = () => {
  return {
    template: `<freud-button color="secondary" label="Button secondary"></freud-button>`,
  };
};

export const Ghost = () => {
  return {
    template: `<freud-button color="ghost" label="Button ghost"></freud-button>`,
  };
};

// Background
export const BGColorPrimary = () => {
  return {
    template: `<freud-button [bgColor]="true" label="ButtonBG primary"></freud-button>`,
  };
};

export const BGColorSecondary = () => {
  return {
    template: `<freud-button [bgColor]="true" color="secondary" label="ButtonBG secondary"></freud-button>`,
  };
};

export const BGColorGhost = () => {
  return {
    template: `<freud-button [bgColor]="true" color="ghost" label="ButtonBG ghost"></freud-button>`,
  };
};

// Disabled
export const Disabled = () => {
  return {
    template: `<freud-button [disabled]="true" label="Button disabled"></freud-button>`,
  };
};

// Loading
export const Loading = () => {
  return {
    template: `<freud-button [loading]="true" [bgColor]="false" label="Button loading" iconPos="right"></freud-button>`,
  };
};

// Sizes
export const SizeLg = () => {
  return {
    template: `<freud-button [bgColor]="bgColor" size="lg" label="Button large"></freud-button>`,
  };
};

export const SizeMd = () => {
  return {
    template: `<freud-button [bgColor]="bgColor" size="md" label="Button medium"></freud-button>`,
  };
};

export const SizeSm = () => {
  return {
    template: `<freud-button [bgColor]="bgColor" size="sm" label="Button small"></freud-button>`,
  };
};

// Full Width
export const FullWidth = () => {
  return {
    template: `<freud-button [bgColor]="bgColor" [fullWidth]="true" label="Button fullWidth"></freud-button>`,
  };
};

export const FullWidthIconLeft = () => {
  return {
    template: `<freud-button [bgColor]="bgColor" [fullWidth]="true" icon="freud-icon freud-icon-check" label="Button fullWidth"></freud-button>`,
  };
};

export const FullWidthIconRight = () => {
  return {
    template: `<freud-button [bgColor]="bgColor" [fullWidth]="true" icon="freud-icon freud-icon-check" iconPos="right" label="Button fullWidth"></freud-button>`,
  };
};

// With icon 
export const IconOnly = () => {
  return {
    template: `<freud-button icon="freud-icon freud-icon-check"></freud-button>`,
  };
};

export const WithIconRight = () => {
  return {
    template: `<freud-button icon="freud-icon freud-icon-check" label="Button right" iconPos="right"></freud-button>`,
  };
};

export const WithIconLeft = () => {
  return {
    template: `<freud-button icon="freud-icon freud-icon-check" label="Button left"></freud-button>`,
  };
};

// With ng-content
export const WithNGContent = () => {
  return {
    template: `<freud-button>Button sem label</freud-button>`,
  };
};
