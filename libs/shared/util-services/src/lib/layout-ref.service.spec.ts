import { TestBed } from '@angular/core/testing';

import { LayoutRefService } from './layout-ref.service';

describe('LayoutRefService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LayoutRefService = TestBed.get(LayoutRefService);
    expect(service).toBeTruthy();
  });
});
