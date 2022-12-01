import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';

import { FreudAvatarComponent } from './avatar.component';

@NgModule({
  imports: [CommonModule, AvatarModule],
  declarations: [FreudAvatarComponent],
  exports: [FreudAvatarComponent]
})
export class FreudAvatarModule { }
