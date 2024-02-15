import { NgModule, Directive, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
  selector: '[freudTemplate]',
  host: {},
})
export class FreudTemplate {
  @Input() type!: string;

  @Input('freudTemplate') name!: string;

  constructor(public template: TemplateRef<any>) {}

  getType(): string {
    return this.name;
  }
}

@NgModule({
  imports: [CommonModule],
  exports: [FreudTemplate],
  declarations: [FreudTemplate],
})
export class FreudTemplateModule {}
