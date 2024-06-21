import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudStepsComponent } from './steps.component';

describe('FreudStepsComponent', () => {
  let component: FreudStepsComponent;
  let fixture: ComponentFixture<FreudStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudStepsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
