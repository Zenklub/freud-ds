import { TestBed } from '@angular/core/testing';
import { ConfirmationService } from 'primeng/api';

import { FreudConfirmationService } from './confirmation.service';

describe('FreudConfirmationService', () => {
  let service: FreudConfirmationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FreudConfirmationService,
        {
          provide: ConfirmationService,
          useValue: {
            requireConfirmationSource: {
              asObservable: () => {},
              next: () => {},
            },
            acceptConfirmationSource: {
              asObservable: () => {},
              next: () => {},
            },
          },
        },
      ],
    });
    service = TestBed.inject(FreudConfirmationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
