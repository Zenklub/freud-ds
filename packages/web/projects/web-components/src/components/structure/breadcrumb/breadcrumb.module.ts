import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudBreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbModule } from "primeng/breadcrumb";

@NgModule({
  imports: [CommonModule, BreadcrumbModule],
  declarations: [FreudBreadcrumbComponent],
  exports: [FreudBreadcrumbComponent]
})
export class FreudBreadcrumbModule { }
