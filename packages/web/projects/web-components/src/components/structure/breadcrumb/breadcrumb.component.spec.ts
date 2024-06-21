import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudBreadcrumbComponent } from './breadcrumb.component';

describe('FreudBreadcrumbComponent', () => {
  let component: FreudBreadcrumbComponent;
  let fixture: ComponentFixture<FreudBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudBreadcrumbComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
