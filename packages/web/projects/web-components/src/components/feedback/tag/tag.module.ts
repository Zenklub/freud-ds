import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule  } from 'primeng/tag';

import { FreudTagComponent } from './tag.component';

@NgModule({
  imports: [CommonModule, TagModule],
  declarations: [FreudTagComponent],
  exports: [FreudTagComponent]
})
export class FreudTagModule { }
