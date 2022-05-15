import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudTooltipComponent } from './tooltip.component';

describe('TooltipComponent', () => {
  let component: FreudTooltipComponent;
  let fixture: ComponentFixture<FreudTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreudTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve declarar o componente', () => {
    expect(component).toBeTruthy();
  });
});
