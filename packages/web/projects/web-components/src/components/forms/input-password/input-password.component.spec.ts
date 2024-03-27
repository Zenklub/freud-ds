import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudInputPasswordComponent } from './input-password.component';

describe('FreudInputTextComponent', () => {
  let component: FreudInputPasswordComponent;
  let fixture: ComponentFixture<FreudInputPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudInputPasswordComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudInputPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
