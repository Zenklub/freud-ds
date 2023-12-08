import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudCheckboxComponent } from './checkbox.component';

describe('FreudCheckboxComponent', () => {
  let component: FreudCheckboxComponent;
  let fixture: ComponentFixture<FreudCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudCheckboxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o compoenente', () => {
    expect(component).toBeTruthy();
  });
});
