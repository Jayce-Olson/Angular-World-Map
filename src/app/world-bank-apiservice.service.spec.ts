import { TestBed } from '@angular/core/testing';

import { WorldBankAPIServiceService } from './world-bank-apiservice.service';

describe('WorldBankAPIServiceService', () => {
  let service: WorldBankAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldBankAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
