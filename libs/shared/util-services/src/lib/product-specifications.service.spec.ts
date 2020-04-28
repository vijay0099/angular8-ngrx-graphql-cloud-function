import { TestBed } from '@angular/core/testing';

import { ProductSpecificationsService } from './product-specifications.service';

describe('ProductSpecificationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductSpecificationsService = TestBed.get(ProductSpecificationsService);
    expect(service).toBeTruthy();
  });
});
