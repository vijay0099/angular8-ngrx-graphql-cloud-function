import { TestBed } from '@angular/core/testing';
import { OrdersService } from './orders.service';
describe('OrdersService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(OrdersService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=orders.service.spec.js.map