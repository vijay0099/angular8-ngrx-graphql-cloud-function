import { async, TestBed } from '@angular/core/testing';
import { NgbootstrapModule } from './ngbootstrap.module';

describe('NgbootstrapModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbootstrapModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgbootstrapModule).toBeDefined();
  });
});
