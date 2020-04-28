import { async, TestBed } from '@angular/core/testing';
import { SharedMetronicUtilBuilderModule } from './shared-feature-builder.module';

describe('SharedMetronicUtilBuilderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedMetronicUtilBuilderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedMetronicUtilBuilderModule).toBeDefined();
  });
});
