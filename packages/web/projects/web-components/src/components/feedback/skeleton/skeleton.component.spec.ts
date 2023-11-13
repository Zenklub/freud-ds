import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudSkeletonComponent } from './skeleton.component';

describe('FreudSkeletonComponent', () => {
  let component: FreudSkeletonComponent;
  let fixture: ComponentFixture<FreudSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreudSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
