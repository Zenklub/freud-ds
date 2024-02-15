import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudBadgeComponent } from './badge.component';

describe('FreudBadgeComponent', () => {
  let component: FreudBadgeComponent;
  let fixture: ComponentFixture<FreudBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudBadgeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
