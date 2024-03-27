import { TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';

import { FreudMessageService } from './message.service';

describe('FreudMessageService', () => {
  let service: FreudMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FreudMessageService,
        {
          provide: MessageService,
          useValue: {
            messageSource: {
              asObservable: () => {},
              next: () => {},
            },
            clearSource: {
              asObservable: () => {},
              next: () => {},
            },
          },
        },
      ],
    });
    service = TestBed.inject(FreudMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
