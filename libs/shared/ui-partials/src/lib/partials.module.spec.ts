import { async, TestBed } from '@angular/core/testing';
import { PartialsModule } from './partials.module';

describe('PartialsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PartialsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PartialsModule).toBeDefined();
  });
});
