import { TestBed } from '@angular/core/testing';

import { MenuHorizontalService } from './menu-horizontal.service';

describe('MenuHorizontalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuHorizontalService = TestBed.get(MenuHorizontalService);
    expect(service).toBeTruthy();
  });
});
