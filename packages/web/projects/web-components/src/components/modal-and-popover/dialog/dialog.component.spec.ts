import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudDialogComponent } from './dialog.component';

describe('FreudDialogComponent', () => {
  let component: FreudDialogComponent;
  let fixture: ComponentFixture<FreudDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreudDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
