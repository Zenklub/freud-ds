import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudAutoCompleteExampleComponent } from './example.component';
import { FreudAutoCompleteModule } from '@freud-ds/web-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FreudAutoCompleteModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [FreudAutoCompleteExampleComponent],
  exports: [FreudAutoCompleteExampleComponent],
})
export class FreudAutocompleteExampleModule {}
