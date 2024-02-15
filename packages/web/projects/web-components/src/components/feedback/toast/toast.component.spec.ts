import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudToastComponent } from './toast.component';

describe('FreudToastComponent', () => {
  let component: FreudToastComponent;
  let fixture: ComponentFixture<FreudToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudToastComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
