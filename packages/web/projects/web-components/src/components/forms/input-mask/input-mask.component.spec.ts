import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudInputMaskComponent } from './input-mask.component';

describe('FreudInputMaskComponent', () => {
  let component: FreudInputMaskComponent;
  let fixture: ComponentFixture<FreudInputMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreudInputMaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudInputMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o compoenente', () => {
    expect(component).toBeTruthy();
  });
});
