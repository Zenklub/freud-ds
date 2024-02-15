import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudKnobComponent } from './knob.component';

describe('FreudKnobComponent', () => {
  let component: FreudKnobComponent;
  let fixture: ComponentFixture<FreudKnobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudKnobComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudKnobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
