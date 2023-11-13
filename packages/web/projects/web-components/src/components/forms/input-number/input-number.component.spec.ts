import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudInputNumberComponent } from './input-number.component';

describe('FreudInputTextComponent', () => {
  let component: FreudInputNumberComponent;
  let fixture: ComponentFixture<FreudInputNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreudInputNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o compoenente', () => {
    expect(component).toBeTruthy();
  });
});
