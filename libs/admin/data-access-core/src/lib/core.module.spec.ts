import { async, TestBed } from '@angular/core/testing';
import { DataAccessCoreModule } from './core.module';

describe('DataAccessCoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataAccessCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DataAccessCoreModule).toBeDefined();
  });
});
