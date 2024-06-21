import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudCalendarComponent } from './calendar.component';

describe('FreudCalendarComponent', () => {
  let component: FreudCalendarComponent;
  let fixture: ComponentFixture<FreudCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudCalendarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
