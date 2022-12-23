import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudFullCalendarComponent } from './full-calendar.component';
import {FormsModule} from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FullCalendarModule } from "@fullcalendar/angular";

@NgModule({
  imports: [CommonModule, FormsModule, FullCalendarModule, BrowserModule, BrowserAnimationsModule],
  declarations: [FreudFullCalendarComponent],
  exports: [FreudFullCalendarComponent]
})
export class FreudFullCalendarModule { }
