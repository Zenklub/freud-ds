import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudSliderComponent } from './slider.component';
import {FormsModule} from "@angular/forms";
import { SliderModule } from "primeng/slider";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    imports: [CommonModule, SliderModule, FormsModule, BrowserModule, BrowserAnimationsModule],
  declarations: [FreudSliderComponent],
  exports: [FreudSliderComponent]
})
export class FreudSliderModule { }
