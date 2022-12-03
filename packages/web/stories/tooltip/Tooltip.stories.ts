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
      [bgColor]="bgColor">Tooltip in span tag</span>
  `,
});

export const Top = Template.bind({});
Top.args = {
  tooltipLabel: 'Tooltip label top',
  tooltipPosition: 'top'
};
export const Bottom = Template.bind({});
Bottom.args = {
  tooltipLabel: 'Tooltip label bottom',
  tooltipPosition: 'bottom'
};
export const Right = Template.bind({});
Right.args = {
  tooltipLabel: 'Tooltip label right',
  tooltipPosition: 'right'
};
export const Left = Template.bind({});
Left.args = {
  tooltipLabel: 'Tooltip label left',
  tooltipPosition: 'left'
};

// BgColor
export const BgColor = Template.bind({});
BgColor.args = {
  tooltipLabel: 'Com bgColor',
  tooltipPosition: 'bottom',
  bgColor: true
};
