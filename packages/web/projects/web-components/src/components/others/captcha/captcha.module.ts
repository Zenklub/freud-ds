import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreudCaptchaComponent } from './captcha.component';
import { CaptchaModule } from "primeng/captcha";

@NgModule({
  imports: [CommonModule, CaptchaModule],
  declarations: [FreudCaptchaComponent],
  exports: [FreudCaptchaComponent]
})
export class FreudCaptchaModule { }
