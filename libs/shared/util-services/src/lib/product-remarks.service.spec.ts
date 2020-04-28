import { TestBed } from '@angular/core/testing';

import { ProductRemarksService } from './product-remarks.service';

describe('ProductRemarksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductRemarksService = TestBed.get(ProductRemarksService);
    expect(service).toBeTruthy();
  });
});
