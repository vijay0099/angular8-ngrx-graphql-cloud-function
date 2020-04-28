import { TestBed } from '@angular/core/testing';

import { DataTableService } from './datatable.service';

describe('DatatableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataTableService = TestBed.get(DataTableService);
    expect(service).toBeTruthy();
  });
});
