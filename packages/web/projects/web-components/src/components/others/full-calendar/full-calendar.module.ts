import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudFullCalendarComponent } from './full-calendar.component';
import {FormsModule} from "@angular/forms";


import { FullCalendarModule } from "@fullcalendar/angular";

@NgModule({
  imports: [CommonModule, FormsModule, FullCalendarModule],
  declarations: [FreudFullCalendarComponent],
  exports: [FreudFullCalendarComponent]
})
export class FreudFullCalendarModule { }
