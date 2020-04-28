import { async, TestBed } from '@angular/core/testing';
import { SharedMetronicEcommerceModule } from './shared-e-commerce.module';

describe('SharedMetronicEcommerceModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedMetronicEcommerceModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedMetronicEcommerceModule).toBeDefined();
  });
});
