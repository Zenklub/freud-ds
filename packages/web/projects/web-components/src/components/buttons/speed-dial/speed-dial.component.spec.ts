import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudSpeedDialComponent } from './speed-dial.component';

describe('FreudSpeedDialComponent', () => {
  let component: FreudSpeedDialComponent;
  let fixture: ComponentFixture<FreudSpeedDialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreudSpeedDialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudSpeedDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
