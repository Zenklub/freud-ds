import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: FreudButtonComponent;
  let fixture: ComponentFixture<FreudButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
