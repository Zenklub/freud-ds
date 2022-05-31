import { NgModule } from '@angular/core';
import { FreudAvatarModule } from './avatar';
import { FreudButtonModule } from './button';
import { FreudTooltipModule } from './tooltip';
import { FreudTagModule } from './tag';
import { FreudTypographyModule } from './typography';
import { FreudIconBaseModule } from './icon-base';
import { FreudLinkModule } from './link';

@NgModule({
  imports: [
    FreudAvatarModule,
    FreudButtonModule,
    FreudTooltipModule,
    FreudTagModule,
    FreudTypographyModule,
    FreudIconBaseModule,
    FreudLinkModule,
  ],
  exports: [
    FreudAvatarModule,
    FreudButtonModule,
    FreudTooltipModule,
    FreudTagModule,
    FreudTypographyModule,
    FreudIconBaseModule,
    FreudLinkModule,
  ],
})
export class ComponentsModule {}
