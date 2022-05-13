import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { FreudButtonModule } from '../button';
import { FreudTooltipComponent } from './tooltip.component';
import { FreudTooltipModule } from './tooltip.module';


export default {
  title: '@freud-ds/core-web/Tooltip',
  component: FreudTooltipComponent,
  decorators: [
    moduleMetadata({
      imports: [FreudTooltipModule, FreudButtonModule],
    })
  ],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'dark', value: '#6732D1' },
      ],
    }
  },
} as Meta;


const Template: Story<FreudTooltipComponent> = (args: FreudTooltipComponent) => ({
  props: { ...args },
  template: `
    <freud-tooltip [text]="text" [position]="position" [theme]="theme">
      <p style="margin: 2px 0" [style.color]="theme == 'light' ? '#212529' : '#DEDEDE'">
        Passe o mouse aqui para ver o Tooltip
      </p>
    </freud-tooltip>

  `,
});

export const Tooltip = Template.bind({});
Tooltip.args = {
  text: 'Tooltip',
  position: 'top',
  theme: 'light'
};
