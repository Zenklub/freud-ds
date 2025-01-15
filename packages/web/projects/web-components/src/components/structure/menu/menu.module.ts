import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudMenuComponent } from "./menu.component";
import { MenuModule } from "primeng/menu";


import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, MenuModule, RouterModule],
  declarations: [FreudMenuComponent],
  exports: [FreudMenuComponent]
})
export class FreudMenuModule { }
