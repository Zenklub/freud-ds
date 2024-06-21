import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudRatingComponent } from './rating.component';

describe('FreudRatingComponent', () => {
  let component: FreudRatingComponent;
  let fixture: ComponentFixture<FreudRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudRatingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
