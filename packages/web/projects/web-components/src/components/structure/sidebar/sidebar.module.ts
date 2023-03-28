import { NgModule } from '@angular/core';

import { SidebarModule } from 'primeng/sidebar';
import { FreudSidebarComponent } from './sidebar.component';

@NgModule({
    imports: [SidebarModule],
    declarations: [FreudSidebarComponent],
    exports: [FreudSidebarComponent],
})

export class FreudSidebarModule {}