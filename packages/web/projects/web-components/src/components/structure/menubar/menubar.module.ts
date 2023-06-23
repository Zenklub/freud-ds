import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudMenubarComponent } from './menubar.component';
import { MenubarModule } from "primeng/menubar";
import { SharedModule } from "primeng/api";

@NgModule({
    imports: [CommonModule, MenubarModule, SharedModule],
  declarations: [FreudMenubarComponent],
  exports: [FreudMenubarComponent]
})
export class FreudMenubarModule { }
