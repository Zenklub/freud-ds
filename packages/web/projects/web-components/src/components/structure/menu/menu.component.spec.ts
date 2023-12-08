import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudMenuComponent } from './menu.component';

describe('FreudMenuComponent', () => {
  let component: FreudMenuComponent;
  let fixture: ComponentFixture<FreudMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudMenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
