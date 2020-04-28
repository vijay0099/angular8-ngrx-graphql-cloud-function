import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';
describe('ProductsService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(ProductsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=products.service.spec.js.map