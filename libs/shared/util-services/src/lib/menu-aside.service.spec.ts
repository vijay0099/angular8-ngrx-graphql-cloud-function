import { TestBed } from '@angular/core/testing';

import { MenuAsideService } from './menu-aside.service';

describe('MenuAsideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuAsideService = TestBed.get(MenuAsideService);
    expect(service).toBeTruthy();
  });
});
