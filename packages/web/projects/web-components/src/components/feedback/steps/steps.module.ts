import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsModule } from 'primeng/steps';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FreudStepsComponent } from './steps.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, StepsModule, RouterModule, BrowserAnimationsModule],
  declarations: [FreudStepsComponent],
  exports: [FreudStepsComponent]
})
export class FreudStepsModule { }
