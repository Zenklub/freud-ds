import { FreudTabMenuComponent, FreudMenuItem } from '@freud-ds/web-components';
import { Story } from '@storybook/angular';

const items: FreudMenuItem[] = [
  {label: 'Home', command: () => console.log('menuClicked')},
  {label: 'Calendar', command: () => console.log('menuClicked')},
  {label: 'Edit', command: () => console.log('menuClicked')},
  {label: 'Documentation', command: () => console.log('menuClicked')},
  {label: 'Settings', command: () => console.log('menuClicked')}
]

const Template: Story<FreudTabMenuComponent> = (args: FreudTabMenuComponent) => ({
  props: { ...args },
  template: `
    <freud-tab-menu
      [items]="items"
      [activeItem]="activeItem"
      [bgColor]="bgColor"
    ></freud-tab-menu>
  `,
});

export const Default = Template.bind({});
Default.args = {
  items: items,
  activeItem: items[0]
};
export const BGColor = Template.bind({});
BGColor.args = {
  items: items,
  activeItem: items[0],
  bgColor: true
};
