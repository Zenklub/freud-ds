import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudPaginatorComponent } from './paginator.component';

describe('FreudPaginatorComponent', () => {
  let component: FreudPaginatorComponent;
  let fixture: ComponentFixture<FreudPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudPaginatorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
