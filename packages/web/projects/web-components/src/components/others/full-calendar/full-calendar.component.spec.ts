import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudFullCalendarComponent } from './full-calendar.component';

describe('FreudCalendarComponent', () => {
  let component: FreudFullCalendarComponent;
  let fixture: ComponentFixture<FreudFullCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreudFullCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudFullCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
