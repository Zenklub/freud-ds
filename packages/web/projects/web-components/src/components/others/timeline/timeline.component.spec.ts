import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudScrollTopComponent } from './timeline.component';

describe('FreudScrollTopComponent', () => {
  let component: FreudScrollTopComponent;
  let fixture: ComponentFixture<FreudScrollTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreudScrollTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudScrollTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
