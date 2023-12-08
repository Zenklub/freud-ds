import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudListboxComponent } from './listbox.component';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { FreudInputTextModule } from '../input-text';

@NgModule({
  imports: [CommonModule, FormsModule, ListboxModule, FreudInputTextModule],
  declarations: [FreudListboxComponent],
  exports: [FreudListboxComponent],
})
export class FreudListboxModule {}
