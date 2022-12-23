import { Component, forwardRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { FullCalendarComponent } from "@fullcalendar/angular";
import { CalendarOptions } from "@fullcalendar/core";
import { CalendarOption } from "@fullcalendar/angular/private-types";

@Component({
  selector: 'freud-full-calendar',
  template: `
    <full-calendar
      #calendarRef
      [id]="id"
      [deepChangeDetection]="deepChangeDetection"
      [eventSources]="eventSources"
      [resources]="resources"
      [events]="events"
      [options]="options">
    </full-calendar>
  `,
  styleUrls: ['./full-calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'freud-full-calendar',
    '[class.freud-bgcolor]': `bgColor`,
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FreudFullCalendarComponent),
      multi: true
    }
  ]
})
export class FreudFullCalendarComponent {
  @Input() events!: CalendarOption<'events'> | null | undefined;
  @Input() options!: CalendarOptions;
  @Input() bgColor: boolean = false;
  @Input() deepChangeDetection?: boolean;
  @Input() eventSources?: CalendarOption<'eventSources'> | null | undefined;
  @Input() resources?: CalendarOption<'resources'> | null | undefined;
  @Input() id!: string;
  @ViewChild('calendarRef') calendarComponent!: FullCalendarComponent;

}
