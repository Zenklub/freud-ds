import { FreudSplitterComponent } from '@freud-ds/web-components';
import { Story } from '@storybook/angular';

const Template: Story<FreudSplitterComponent> = (args: FreudSplitterComponent) => ({
  props: { ...args },
  template: `
    <freud-splitter [panelSizes]="panelSizes" [style]="{'height': '300px'}" [layout]="layout">
      <ng-template pTemplate>
        <div style="display: flex;text-align: center;justify-content: center;width: 100%;flex-direction: column;">
          Panel 1
        </div>
      </ng-template>
    <ng-template pTemplate>
      <div style="display: flex;text-align: center;justify-content: center;width: 100%;flex-direction: column;">
        Panel 2
      </div>
    </ng-template>
</freud-splitter>
  `,
});

export const Default = Template.bind({});

export const Vertical = Template.bind({});
Vertical.args = {
  layout: 'vertical'
}

export const BgColor = Template.bind({});
