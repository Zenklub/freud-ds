import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudAvatarComponent } from './avatar.component';

describe('AvatarComponent', () => {
  let component: FreudAvatarComponent;
  let fixture: ComponentFixture<FreudAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreudAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve declarar o componente', () => {
    expect(component).toBeTruthy();
  });
});
