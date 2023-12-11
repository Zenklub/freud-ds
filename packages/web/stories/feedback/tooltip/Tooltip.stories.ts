import { Story } from '@storybook/angular';
import { FreudTooltipComponent } from '@freud-ds/web-components';

const Template: Story<FreudTooltipComponent> = (
  args: FreudTooltipComponent,
) => ({
  props: { ...args },
  template: `
    <span freud-tooltip
      [tooltipLabel]="tooltipLabel"
      [tooltipPosition]="tooltipPosition"
      [bgColor]="bgColor"
      [maxWidth]="maxWidth">
      <span style="color:{{bgColor ? 'white' : 'black'}}; font-family: 'Source Sans Pro'">Passe o mouse aqui!</span>
    </span>
  `,
});

//Teste
export const TooltipTest = Template.bind({});

// MaxWidth
export const MaxWidthSmall = () => {
  return {
    template: `
      <span freud-tooltip tooltipLabel="Tooltip label teste de maxWidth | Tooltip label teste de maxWidth | Tooltip label teste de maxWidth" tooltipPosition="bottom" maxWidth="100">
        <span style="font-family: 'Source Sans Pro'">Passe o mouse aqui!</span>
      </span>
    `,
  };
};

export const MaxWidthDefault = () => {
  return {
    template: `
      <span freud-tooltip tooltipLabel="Tooltip label teste de maxWidth | Tooltip label teste de maxWidth | Tooltip label teste de maxWidth" tooltipPosition="bottom">
        <span style="font-family: 'Source Sans Pro'">Passe o mouse aqui!</span>
      </span>
    `,
  };
};

export const MaxWidthLarge = () => {
  return {
    template: `
      <span freud-tooltip tooltipLabel="Tooltip label teste de maxWidth | Tooltip label teste de maxWidth | Tooltip label teste de maxWidth" tooltipPosition="bottom" maxWidth="800">
        <span style="font-family: 'Source Sans Pro'">Passe o mouse aqui!</span>
      </span>
    `,
  };
};

// Position
export const Top = () => {
  return {
    template: `
      <span freud-tooltip tooltipLabel="Tooltip label top" tooltipPosition="top">
        <span style="font-family: 'Source Sans Pro'">Passe o mouse aqui!</span>
      </span>
    `,
  };
};

export const Bottom = () => {
  return {
    template: `
      <span freud-tooltip tooltipLabel="Tooltip label bottom" tooltipPosition="bottom">
        <span style="font-family: 'Source Sans Pro'">Passe o mouse aqui!</span>
      </span>
    `,
  };
};

export const Right = () => {
  return {
    template: `
      <span freud-tooltip tooltipLabel="Tooltip label right" tooltipPosition="right">
        <span style="font-family: 'Source Sans Pro'">Passe o mouse aqui!</span>
      </span>
    `,
  };
};

export const Left = () => {
  return {
    template: `
      <span freud-tooltip tooltipLabel="Tooltip label left" tooltipPosition="left">
        <span style="font-family: 'Source Sans Pro'">Passe o mouse aqui!</span>
      </span>
    `,
  };
};

// BgColor
export const BGColor = () => {
  return {
    template: `
      <span freud-tooltip tooltipLabel="Tooltip label com BGColor" tooltipPosition="bottom" bgColor="true">
        <span style="font-family: 'Source Sans Pro'; color: 'white'">Passe o mouse aqui!</span>
      </span>
    `,
  };
};

// Disabled
export const Disabled = () => {
  return {
    template: `
      <span freud-tooltip tooltipLabel="" tooltipPosition="bottom">
        <span style="font-family: 'Source Sans Pro'">Passe o mouse aqui!</span>
      </span>
    `,
  };
};
