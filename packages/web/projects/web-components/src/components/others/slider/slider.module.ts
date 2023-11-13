import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudSliderComponent } from './slider.component';
import {FormsModule} from "@angular/forms";
import { SliderModule } from "primeng/slider";



@NgModule({
    imports: [CommonModule, SliderModule, FormsModule],
  declarations: [FreudSliderComponent],
  exports: [FreudSliderComponent]
})
export class FreudSliderModule { }
