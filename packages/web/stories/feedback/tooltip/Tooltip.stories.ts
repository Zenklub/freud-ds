import { Story } from '@storybook/angular';
import { FreudTooltipComponent } from '@freud-ds/web-components';

const Template: Story<FreudTooltipComponent> = (
  args: FreudTooltipComponent
) => ({
  props: { ...args },
  template: `
    <span freud-tooltip style="color:{{bgColor ? 'white' : 'black'}}"
      [tooltipLabel]="tooltipLabel"
      [tooltipPosition]="tooltipPosition"
      style="font-family: 'Source Sans Pro'"
      [bgColor]="bgColor">Passe o mouse aqui!</span>
  `,
});

//Teste
export const TooltipTest = Template.bind({});

// Position
export const Top = () => {
  return {
    template: `
      <span freud-tooltip tooltipLabel="Tooltip label top" tooltipPosition="top" style="font-family: 'Source Sans Pro'">Passe o mouse aqui!</span>
    `,
  };
};

export const Bottom = () => {
  return {
    template: `
      <span freud-tooltip tooltipLabel="Tooltip label bottom" tooltipPosition="bottom" style="font-family: 'Source Sans Pro'">Passe o mouse aqui!</span>
    `,
  };
};

export const Right = () => {
  return {
    template: `
      <span freud-tooltip tooltipLabel="Tooltip label right" tooltipPosition="right" style="font-family: 'Source Sans Pro'">Passe o mouse aqui!</span>
    `,
  };
};

export const Left = () => {
  return {
    template: `
      <span freud-tooltip tooltipLabel="Tooltip label left" tooltipPosition="left" style="font-family: 'Source Sans Pro'">Passe o mouse aqui!</span>
    `,
  };
};

// BgColor
export const BGColor = () => {
  return {
    template: `
      <span freud-tooltip tooltipLabel="Tooltip label com BGColor" tooltipPosition="bottom" bgColor="true" style="font-family: 'Source Sans Pro'; color: 'white'">Passe o mouse aqui!</span>
    `,
  };
};

// Disabled
export const Disabled = () => {
  return {
    template: `
      <span freud-tooltip tooltipLabel="" tooltipPosition="bottom" style="font-family: 'Source Sans Pro'">Passe o mouse aqui!</span>
    `,
  };
};
