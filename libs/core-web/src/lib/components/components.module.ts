import { NgModule } from '@angular/core';
import { FreudAvatarModule } from './avatar';
import { FreudButtonModule } from './button';
import { FreudTooltipModule } from './tooltip';
import { FreudTagModule } from './tag';
import { FreudTypographyModule } from './typography';

@NgModule({
  imports: [
    FreudAvatarModule,
    FreudButtonModule,
    FreudTooltipModule,
    FreudTagModule,
    FreudTypographyModule
  ],
  exports: [
    FreudAvatarModule,
    FreudButtonModule,
    FreudTooltipModule,
    FreudTagModule,
    FreudTypographyModule
  ],
})
export class ComponentsModule {}
