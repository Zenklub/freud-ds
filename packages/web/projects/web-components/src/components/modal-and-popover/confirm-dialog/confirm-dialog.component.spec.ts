import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudConfirmDialogComponent } from './confirm-dialog.component';

describe('FreudConfirmDialogComponent', () => {
  let component: FreudConfirmDialogComponent;
  let fixture: ComponentFixture<FreudConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreudConfirmDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
