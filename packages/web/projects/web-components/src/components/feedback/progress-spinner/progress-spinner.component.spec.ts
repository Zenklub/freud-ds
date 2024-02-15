import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudProgressSpinnerComponent } from './progress-spinner.component';

describe('FreudProgressSpinnerComponent', () => {
  let component: FreudProgressSpinnerComponent;
  let fixture: ComponentFixture<FreudProgressSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudProgressSpinnerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudProgressSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
