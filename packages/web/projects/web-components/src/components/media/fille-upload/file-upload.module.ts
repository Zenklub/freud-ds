import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudFileUploadComponent } from './file-upload.component';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { FileUploadModule } from "primeng/fileupload";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [CommonModule, FileUploadModule, BrowserModule, BrowserAnimationsModule, FormsModule, HttpClientModule],
  declarations: [FreudFileUploadComponent],
  exports: [FreudFileUploadComponent]
})
export class FreudFileUploadModule { }
