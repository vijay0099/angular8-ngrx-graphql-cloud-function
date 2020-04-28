import { TestBed } from '@angular/core/testing';
import { CustomersService } from './customers.service';
describe('CustomersService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(CustomersService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=customers.service.spec.js.map