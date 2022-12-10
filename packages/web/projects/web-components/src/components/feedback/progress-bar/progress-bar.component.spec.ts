import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudProgressBarComponent } from './progress-bar.component';

describe('FreudProgressBarComponent', () => {
  let component: FreudProgressBarComponent;
  let fixture: ComponentFixture<FreudProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreudProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
