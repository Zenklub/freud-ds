import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudMenubarComponent } from './menubar.component';
import { MenubarModule } from "primeng/menubar";

@NgModule({
  imports: [CommonModule, MenubarModule],
  declarations: [FreudMenubarComponent],
  exports: [FreudMenubarComponent]
})
export class FreudMenubarModule { }
