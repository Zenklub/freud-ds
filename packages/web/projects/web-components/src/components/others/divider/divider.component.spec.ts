import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudDividerComponent } from './divider.component';

describe('FreudDividerComponent', () => {
  let component: FreudDividerComponent;
  let fixture: ComponentFixture<FreudDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreudDividerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
