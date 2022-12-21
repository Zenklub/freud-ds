import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudListboxComponent } from './listbox.component';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { ListboxModule } from "primeng/listbox";
import { FreudInputTextModule } from "../input-text";

@NgModule({
    imports: [CommonModule, FormsModule, ListboxModule, BrowserAnimationsModule, BrowserModule, FreudInputTextModule],
  declarations: [FreudListboxComponent],
  exports: [FreudListboxComponent]
})
export class FreudListboxModule { }
