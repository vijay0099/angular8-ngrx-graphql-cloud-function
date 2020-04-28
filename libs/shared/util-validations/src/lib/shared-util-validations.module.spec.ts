import { async, TestBed } from '@angular/core/testing';
import { SharedUtilValidationsModule } from './shared-util-validations.module';

describe('SharedUtilValidationsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUtilValidationsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUtilValidationsModule).toBeDefined();
  });
});
