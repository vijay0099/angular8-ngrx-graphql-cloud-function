import { async, TestBed } from '@angular/core/testing';
import { ApiDataAccessCoreModule } from './api-data-access-core.module';

describe('ApiDataAccessCoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ApiDataAccessCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ApiDataAccessCoreModule).toBeDefined();
  });
});
