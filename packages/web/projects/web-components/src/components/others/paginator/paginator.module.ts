import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudPaginatorComponent } from './paginator.component';
import { PaginatorModule } from "primeng/paginator";

@NgModule({
  imports: [CommonModule, PaginatorModule],
  declarations: [FreudPaginatorComponent],
  exports: [FreudPaginatorComponent]
})
export class FreudPaginatorModule { }
