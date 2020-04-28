import { async, TestBed } from '@angular/core/testing';
import { DataAccessCoreModule } from './data-access-core.module';
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
//# sourceMappingURL=data-access-core.spec.js.map