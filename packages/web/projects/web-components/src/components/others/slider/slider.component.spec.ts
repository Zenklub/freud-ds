import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudSliderComponent } from './slider.component';

describe('FreudSliderComponent', () => {
  let component: FreudSliderComponent;
  let fixture: ComponentFixture<FreudSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudSliderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
