import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudIconComponent } from './icon.component';

describe('FreudIconComponent', () => {
  let component: FreudIconComponent;
  let fixture: ComponentFixture<FreudIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudIconComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
