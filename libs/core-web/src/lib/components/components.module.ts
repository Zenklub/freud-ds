import { NgModule } from '@angular/core';
import { FreudAvatarModule } from './avatar';
import { FreudButtonModule } from './button';
import { FreudTooltipModule } from './tooltip';

@NgModule({
  imports: [
    FreudAvatarModule,
    FreudButtonModule,
    FreudTooltipModule,
  ],
  exports: [
    FreudAvatarModule,
    FreudButtonModule,
    FreudTooltipModule,
  ]
})
export class ComponentsModule { }
