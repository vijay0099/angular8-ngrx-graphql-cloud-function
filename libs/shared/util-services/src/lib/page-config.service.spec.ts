import { TestBed } from '@angular/core/testing';

import { PageConfigService } from './page-config.service';

describe('PageConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageConfigService = TestBed.get(PageConfigService);
    expect(service).toBeTruthy();
  });
});
