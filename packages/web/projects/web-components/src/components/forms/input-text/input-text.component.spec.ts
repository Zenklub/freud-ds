import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudInputTextComponent } from './input-text.component';

describe('FreudInputTextComponent', () => {
  let component: FreudInputTextComponent;
  let fixture: ComponentFixture<FreudInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreudInputTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o compoenente', () => {
    expect(component).toBeTruthy();
  });
});
