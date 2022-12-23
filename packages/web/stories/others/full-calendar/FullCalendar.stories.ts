import { Story } from '@storybook/angular';
import { FreudFullCalendarComponent } from '@freud-ds/web-components';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

const calendarOptions: CalendarOptions = {
  initialView: 'dayGridMonth',
  plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  },
  events: [
    { title: 'event 1', date: '2022-12-12' },
    { title: 'event 2', date: '2022-12-24' }
  ]
};

const Template: Story<FreudFullCalendarComponent> = (args: FreudFullCalendarComponent) => ({
  props: { ...args },
  template: `
    <freud-full-calendar [events]="events" [options]="options">
    </freud-full-calendar>
  `,
});

export const Default = Template.bind({});
Default.args = {
  options: {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events: [
      { title: 'event 1', date: '2022-12-12' },
      { title: 'event 2', date: '2022-12-24' }
    ]
  }
}


export const CustomHeader = Template.bind({});
CustomHeader.args = {
  options: calendarOptions
}
