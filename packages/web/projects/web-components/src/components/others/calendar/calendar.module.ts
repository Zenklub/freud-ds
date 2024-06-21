import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudCalendarComponent } from './calendar.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  imports: [CommonModule, FormsModule, CalendarModule],
  declarations: [FreudCalendarComponent],
  exports: [FreudCalendarComponent],
})
export class FreudCalendarModule {}
