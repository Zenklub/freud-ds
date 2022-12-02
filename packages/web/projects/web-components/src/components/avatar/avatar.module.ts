import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';

import { FreudAvatarComponent } from './avatar.component';
import { FreudBadgeModule } from '../badge';

@NgModule({
  imports: [CommonModule, AvatarModule, FreudBadgeModule],
  declarations: [FreudAvatarComponent],
  exports: [FreudAvatarComponent]
})
export class FreudAvatarModule { }
