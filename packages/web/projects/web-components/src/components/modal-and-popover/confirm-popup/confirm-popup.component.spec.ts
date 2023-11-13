import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudConfirmPopupComponent } from './confirm-popup.component';

describe('FreudConfirmDialogComponent', () => {
  let component: FreudConfirmPopupComponent;
  let fixture: ComponentFixture<FreudConfirmPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreudConfirmPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudConfirmPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
