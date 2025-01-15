import { Meta, Story } from '@storybook/angular';
import { FreudCalendarComponent, FreudCalendarModule } from '@freud-ds/web-components';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

const Template: Story<FreudCalendarComponent> = (args: FreudCalendarComponent) => ({
  props: { ...args },
  template: `
    <freud-calendar
      [selectionMode]="selectionMode"
      [appendTo]="appendTo"
      [dateFormat]="dateFormat"
      [inline]="inline"
      [showOtherMonths]="showOtherMonths"
      [selectOtherMonths]="selectOtherMonths"
      [showWeek]="showWeek"
      [view]="view"
      [yearNavigator]="yearNavigator"
      [yearRange]="yearRange"
      [stepMinute]="stepMinute"
      [defaultDate]="defaultDate"
      [showTime]="showTime"
      [hourFormat]="hourFormat"
      [disabled]="disabled"
      [timeOnly]="timeOnly"
      [monthNavigator]="monthNavigator"
      [disabledDates]="disabledDates"
      [required]="required"
      [maxDate]="maxDate"
      [minDate]="minDate"
      [label]="label"
      >
    </freud-calendar>
  `,
});

export const Default = Template.bind({});
Default.args = {
  value: new Date(),
  yearRange: '2000:2030'
}



export const TimeOnly = Template.bind({});
TimeOnly.args = {
  value: new Date(),
  timeOnly: true,
  hourFormat: '12',
}

export const MinuteStep = Template.bind({});
MinuteStep.args = {
  value: new Date(),
  timeOnly: true,
  stepMinute: 10
}



export const Input = Template.bind({});
Input.args = {
  value: new Date(),
  inline: false,
  label: 'Data de nascimento',
  timeOnly: false,
  hourFormat: '12',
  showTime: false,
  yearRange: '2000:2030'
}

export const AppendTo = Template.bind({});
AppendTo.args = {
  value: new Date(),
  inline: false,
  label: 'Data de nascimento',
  timeOnly: false,
  hourFormat: '12',
  showTime: false,
  yearRange: '2000:2030'
}

export const MonthView = Template.bind({});
MonthView.args = {
  value: new Date(),
  timeOnly: false,
  showTime: false,
  hourFormat: '12',
  yearNavigator: false,
  view: 'month',
  yearRange: '2000:2030'
}

export const YearNavigator = Template.bind({});
YearNavigator.args = {
  value: new Date(),
  timeOnly: false,
  showTime: false,
  yearNavigator: true,
  yearRange: '2000:2030'
}
export const BGColor = Template.bind({});
BGColor.args = {
  value: new Date(),
}

export default {
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FreudCalendarModule
      ],
      declarations: []
    })
  ]
} as Meta;
