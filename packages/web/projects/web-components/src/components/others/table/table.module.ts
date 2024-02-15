import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FreudSortableColumn,
  FreudSortIcon,
  FreudTableComponent,
} from './table.component';
import { CardModule } from 'primeng/card';
import { TableModule, TableService } from 'primeng/table';
import { FreudTemplateModule } from '../../directive/template';

@NgModule({
  imports: [CommonModule, CardModule, TableModule, FreudTemplateModule],
  declarations: [FreudTableComponent, FreudSortableColumn, FreudSortIcon],
  exports: [FreudTableComponent, FreudSortableColumn, FreudSortIcon],
  providers: [TableService],
})
export class FreudTableModule {}
