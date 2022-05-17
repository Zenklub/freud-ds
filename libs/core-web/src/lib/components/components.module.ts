import { NgModule } from '@angular/core';
import { FreudAvatarModule } from './avatar';
import { FreudButtonModule } from './button';
import { FreudTooltipModule } from './tooltip';
import { FreudTagModule } from './tag';

@NgModule({
  imports: [
    FreudAvatarModule,
    FreudButtonModule,
    FreudTooltipModule,
    FreudTagModule,
  ],
  exports: [
    FreudAvatarModule,
    FreudButtonModule,
    FreudTooltipModule,
    FreudTagModule,
  ]
})
export class ComponentsModule { }
