import { Story } from '@storybook/angular';
import { FreudMenuItem, FreudSpeedDialComponent } from '@freud-ds/web-components';

const itemsWithLabel: FreudMenuItem[] = [
  {icon: 'freud-icon freud-icon-refresh', command: () => {
      console.log('Evento update')
    }
  },
  {
    icon: 'freud-icon freud-icon-close', command: () => {
      console.log('Evento delete')
    },
  },
  {icon: 'freud-icon freud-icon-check'}
]

const Template: Story<FreudSpeedDialComponent> = (
  args: FreudSpeedDialComponent
) => ({
  props: { ...args },
  template: `
  <div style="height: 250px; width: 120px">
      <freud-speed-dial
        [id]="id"
        [visible]="visible"
        [mask]="mask"
        [disabled]="disabled"
        [showIcon]="showIcon"
        [hideIcon]="hideIcon"
        [type]="type"
        [direction]="direction"
        [items]="items"
        [bgColor]="bgColor">
      </freud-speed-dial>
  </div>
  `,
});

const TemplateCircle: Story<FreudSpeedDialComponent> = (
  args: FreudSpeedDialComponent
) => ({
  props: { ...args },
  template: `
  <div style="height: 80px; width: 80px; margin: 50px">
      <freud-speed-dial
        [id]="id"
        [visible]="visible"
        [mask]="mask"
        [disabled]="disabled"
        [showIcon]="showIcon"
        [hideIcon]="hideIcon"
        [type]="type"
        [direction]="direction"
        [items]="items"
        [bgColor]="bgColor">
      </freud-speed-dial>
  </div>
  `,
});

export const DirectionDown = Template.bind({});
DirectionDown.args = {
  items: itemsWithLabel,
  direction: 'down'
};
export const DirectionLeft = Template.bind({});
DirectionLeft.args = {
  items: itemsWithLabel,
  direction: 'left'
};
export const TypeQuarterDownRight = TemplateCircle.bind({});
TypeQuarterDownRight.args = {
  items: itemsWithLabel,
  type: 'quarter-circle',
  direction: 'down-right'
};
export const TypeCircle = TemplateCircle.bind({});
TypeCircle.args = {
  items: itemsWithLabel,
  type: 'circle'
};
export const TypeQuarterCircle = TemplateCircle.bind({});
TypeQuarterCircle.args = {
  items: itemsWithLabel,
  type: 'quarter-circle',
  direction: 'up-right'
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: itemsWithLabel,
  disabled: true,
  direction: 'down'
};
export const BGColor = Template.bind({});
BGColor.args = {
  items: itemsWithLabel,
  direction: 'down',
  bgColor: true
};
export const Mask = Template.bind({});
Mask.args = {
  items: itemsWithLabel,
  mask: true,
  direction: 'down',
};
