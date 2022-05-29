import { NgModule } from '@angular/core';
import { FreudAvatarModule } from './avatar';
import { FreudButtonModule } from './button';
import { FreudTooltipModule } from './tooltip';
import { FreudTagModule } from './tag';
import { FreudTypographyModule } from './typography';
import { FreudIconModule } from './icon';

@NgModule({
  imports: [
    FreudAvatarModule,
    FreudButtonModule,
    FreudTooltipModule,
    FreudTagModule,
    FreudTypographyModule,
    FreudIconModule,
  ],
  exports: [
    FreudAvatarModule,
    FreudButtonModule,
    FreudTooltipModule,
    FreudTagModule,
    FreudTypographyModule,
    FreudIconModule,
  ],
})
export class ComponentsModule {}
