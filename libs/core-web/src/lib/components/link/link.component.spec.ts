import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudLinkComponent } from './link.component';

describe('LinkComponent', () => {
  let component: FreudLinkComponent;
  let fixture: ComponentFixture<FreudLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudLinkComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o compoenente', () => {
    expect(component).toBeTruthy();
  });
});
