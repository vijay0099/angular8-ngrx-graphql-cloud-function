import { TestBed } from '@angular/core/testing';

import { TypesUtilsService } from './types-utils.service';

describe('TypesUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypesUtilsService = TestBed.get(TypesUtilsService);
    expect(service).toBeTruthy();
  });
});
