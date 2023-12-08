import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudSplitterComponent } from './splitter.component';

describe('FreudSplitterComponent', () => {
  let component: FreudSplitterComponent;
  let fixture: ComponentFixture<FreudSplitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudSplitterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudSplitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
