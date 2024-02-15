import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'freud-reactive-form-example',
  template: `
    <form [formGroup]="formParams" (ngSubmit)="onSubmit()">
      <freud-input-text label="Name" formControlName="name"></freud-input-text>
      <freud-input-text
        label="email"
        formControlName="email"
      ></freud-input-text>
      <button type="submit">Enviar</button>
      <div>
        <p>FormValid: {{ formParams.valid }}</p>
        <p>FormParams: {{ formParams.value | json }}</p>
      </div>
    </form>
    <freud-input-text
      label="ngModel"
      [(ngModel)]="nameNgModel"
    ></freud-input-text>
    <p>Value NgModel {{ nameNgModel }}</p>
  `,
  styleUrls: ['./example.component.scss'],
})
export class FreudReactiveFormExampleComponent implements OnInit {
  formParams!: FormGroup;
  nameNgModel = '';
  constructor() {}

  ngOnInit() {
    this.formParams = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.email]),
    });
  }

  onSubmit() {
    this.formParams.markAsUntouched();
    console.log('formParams', this.formParams);
    console.log('formParams >>> Value', this.formParams.value);
  }
}
