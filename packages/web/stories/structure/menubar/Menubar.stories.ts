import { FreudMenubarComponent, FreudMenuItem } from '@freud-ds/web-components';
import { Story } from '@storybook/angular';

const items: FreudMenuItem[] = [
  {
    label:'Users',
    icon:'freud-icon freud-icon-user',
    items:[
      {
        label:'New',
        icon:'freud-icon freud-icon-user-plus',

      },
      {
        label:'Delete',
        icon:'freud-icon freud-icon-user-minus',

      },
      {
        label:'Search',
        icon:'freud-icon freud-icon-users',
        items:[
          {
            label:'Filter',
            icon:'freud-icon freud-icon-filter',
            items:[
              {
                label:'Print',
                icon:'freud-icon freud-icon-print'
              }
            ]
          },
          {
            icon:'freud-icon freud-icon-bars',
            label:'List'
          }
        ]
      }
    ]
  },
  {
    label:'Events',
    icon:'freud-icon freud-icon-calendar',
    items:[
      {
        label:'Edit',
        icon:'freud-icon freud-icon-pencil',
      },
    ]
  },
  {
    label:'Quit',
    icon:'freud-icon freud-icon-power-off'
  }
]
const home: FreudMenuItem = {
  icon: 'freud-icon freud-icon-home'
}

const Template: Story<FreudMenubarComponent> = (args: FreudMenubarComponent) => ({
  props: { ...args },
  template: `
    <div style="height: 240px;width: 100%">
      <freud-menubar
          [startImgAlt]="'Home'"
          [startImgSrc]="startImgSrc"
          [startImgHref]="'https://zenklub.com.br'"
          [items]="items"
          [bgColor]="bgColor"
      ></freud-menubar>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  items: items,
  startImgSrc: 'assets/img/zenklub.svg'
};
export const BGColor = Template.bind({});
BGColor.args = {
  items: items,
  startImgSrc: 'assets/img/zenklub-white.svg',
  bgColor: true
};
