import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudRadioButtonComponent } from './radio-button.component';

describe('FreudInputTextComponent', () => {
  let component: FreudRadioButtonComponent;
  let fixture: ComponentFixture<FreudRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudRadioButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o compoenente', () => {
    expect(component).toBeTruthy();
  });
});
