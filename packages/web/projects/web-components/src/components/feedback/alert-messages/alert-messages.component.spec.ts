import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreudAlertMessagesComponent } from './alert-messages.component';

describe('FreudAlertMessagesComponent', () => {
  let component: FreudAlertMessagesComponent;
  let fixture: ComponentFixture<FreudAlertMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreudAlertMessagesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreudAlertMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
