import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudActionIconComponent } from './action-icon.component';

describe('FreudSelectButtonComponent', () => {
  let component: FreudActionIconComponent;
  let fixture: ComponentFixture<FreudActionIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudActionIconComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudActionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
