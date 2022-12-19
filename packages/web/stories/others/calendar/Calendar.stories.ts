import { Story } from '@storybook/angular';
import { FreudCalendarComponent } from '@freud-ds/web-components';

const Template: Story<FreudCalendarComponent> = (args: FreudCalendarComponent) => ({
  props: { ...args },
  template: `
    <freud-calendar [(ngModel)]="value">
    </freud-calendar>
  `,
});

export const Default = Template.bind({});
Default.args = {
  value: new Date()
}
export const BGColor = Template.bind({});
