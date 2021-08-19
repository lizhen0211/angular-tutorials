import { TestBed } from '@angular/core/testing';

import { NormalService } from './normal.service';

describe('NormalService', () => {
  let service: NormalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NormalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
