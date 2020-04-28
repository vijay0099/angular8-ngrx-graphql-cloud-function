import { async, TestBed } from '@angular/core/testing';
import { DataAccessCoreMockingModule } from './data-access-core-mocking.module';
describe('DataAccessCoreMockingModule', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [DataAccessCoreMockingModule]
        }).compileComponents();
    }));
    it('should create', () => {
        expect(DataAccessCoreMockingModule).toBeDefined();
    });
});
//# sourceMappingURL=data-access-core-mocking.spec.js.map