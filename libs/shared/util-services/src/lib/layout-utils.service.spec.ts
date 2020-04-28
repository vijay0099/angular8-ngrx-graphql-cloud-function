import { TestBed } from '@angular/core/testing';

import { LayoutUtilsService } from './layout-utils.service';

describe('LayoutUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LayoutUtilsService = TestBed.get(LayoutUtilsService);
    expect(service).toBeTruthy();
  });
});
