import { FreudPanelMenuComponent, FreudMenuItem } from '@freud-ds/web-components';
import { Story } from '@storybook/angular';

const items: FreudMenuItem[] = [
  {
    label: 'File',
    items: [{
      label: 'New',
      icon: 'freud-icon freud-icon-fw freud-icon-plus',
      items: [
        {label: 'User', icon: 'freud-icon freud-icon-fw freud-icon-user-plus'},
        {label: 'Filter', icon: 'freud-icon freud-icon-fw freud-icon-filter'}
      ]
    },
      {label: 'Open', icon: 'freud-icon freud-icon-fw freud-icon-external-link'},
      {separator: true},
      {label: 'Quit', icon: 'freud-icon freud-icon-fw freud-icon-times'}
    ]
  },
  {
    label: 'Edit',
    icon: 'freud-icon freud-icon-fw freud-icon-pencil',
    items: [
      {label: 'Delete', icon: 'freud-icon freud-icon-fw freud-icon-trash'},
      {label: 'Refresh', icon: 'freud-icon freud-icon-fw freud-icon-refresh'}
    ]
  },
  {
    label: 'Help',
    icon: 'freud-icon freud-icon-fw freud-icon-question',
    items: [
      {
        label: 'Contents',
        icon: 'freud-icon freud-icon-freud-icon freud-icon-bars'
      },
      {
        label: 'Search',
        icon: 'freud-icon freud-icon-freud-icon freud-icon-search',
        items: [
          {
            label: 'Text',
            items: [
              {
                label: 'Workspace'
              }
            ]
          },
          {
            label: 'User',
            icon: 'freud-icon freud-icon-fw freud-icon-file',
          }
        ]}
    ]
  },
  {
    label: 'Actions',
    icon: 'freud-icon freud-icon-fw freud-icon-cog',
    items: [
      {
        label: 'Edit',
        icon: 'freud-icon freud-icon-fw freud-icon-pencil',
        items: [
          {label: 'Save', icon: 'freud-icon freud-icon-fw freud-icon-save'},
          {label: 'Update', icon: 'freud-icon freud-icon-fw freud-icon-save'},
        ]
      },
      {
        label: 'Other',
        icon: 'freud-icon freud-icon-fw freud-icon-tags',
        items: [
          {label: 'Delete', icon: 'freud-icon freud-icon-fw freud-icon-minus'}
        ]
      }
    ]
  }
]

const Template: Story<FreudPanelMenuComponent> = (args: FreudPanelMenuComponent) => ({
  props: { ...args },
  template: `
    <div style="width: 400px">
        <freud-panel-menu
          [items]="items"
        ></freud-panel-menu>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  items: items,
};
export const BGColor = Template.bind({});
BGColor.args = {
  items: items
};
