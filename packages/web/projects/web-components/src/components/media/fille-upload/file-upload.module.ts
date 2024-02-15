import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudFileUploadComponent } from './file-upload.component';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, FileUploadModule, FormsModule, HttpClientModule],
  declarations: [FreudFileUploadComponent],
  exports: [FreudFileUploadComponent],
})
export class FreudFileUploadModule {}
