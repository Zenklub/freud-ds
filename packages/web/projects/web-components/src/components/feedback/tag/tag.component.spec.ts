import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudTagComponent } from './tag.component';

describe('FreudTagComponent', () => {
  let component: FreudTagComponent;
  let fixture: ComponentFixture<FreudTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudTagComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
