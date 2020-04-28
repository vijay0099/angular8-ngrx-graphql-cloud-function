import { TestBed } from '@angular/core/testing';

import { SubheaderService } from './subheader.service';

describe('SubheaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubheaderService = TestBed.get(SubheaderService);
    expect(service).toBeTruthy();
  });
});
