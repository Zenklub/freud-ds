import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudMenubarComponent } from './menubar.component';

describe('FreudMenubarComponent', () => {
  let component: FreudMenubarComponent;
  let fixture: ComponentFixture<FreudMenubarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudMenubarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
