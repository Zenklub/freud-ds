import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuildCheckboxComponent } from './guild-checkbox.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [GuildCheckboxComponent],
  exports: [GuildCheckboxComponent]
})
export class GuildCheckboxModule { }
