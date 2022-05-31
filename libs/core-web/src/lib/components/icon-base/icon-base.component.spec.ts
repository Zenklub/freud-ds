import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudIconBaseComponent } from './icon-base.component';

describe('FreudIconComponent', () => {
  let component: FreudIconBaseComponent;
  let fixture: ComponentFixture<FreudIconBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudIconBaseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudIconBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
