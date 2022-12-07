import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from "primeng/rating";

import { FreudRatingComponent } from './rating.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, RatingModule, FormsModule],
  declarations: [FreudRatingComponent],
  exports: [FreudRatingComponent]
})
export class FreudRatingModule { }
