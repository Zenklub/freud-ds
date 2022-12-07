import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudTooltipComponent } from './tooltip.component';

describe('FreudTooltipComponent', () => {
  let component: FreudTooltipComponent;
  let fixture: ComponentFixture<FreudTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreudTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
