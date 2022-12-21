import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudCalendarComponent } from './calendar.component';
import {FormsModule} from "@angular/forms";
import { CalendarModule } from "primeng/calendar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [CommonModule, FormsModule, CalendarModule, BrowserModule, BrowserAnimationsModule],
  declarations: [FreudCalendarComponent],
  exports: [FreudCalendarComponent]
})
export class FreudCalendarModule { }
