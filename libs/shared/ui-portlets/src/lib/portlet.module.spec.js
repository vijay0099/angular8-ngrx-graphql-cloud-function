import { async, TestBed } from '@angular/core/testing';
import { PortletModule } from './portlet.module';
describe('PortletModule', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [PortletModule]
        }).compileComponents();
    }));
    it('should create', () => {
        expect(PortletModule).toBeDefined();
    });
});
//# sourceMappingURL=portlet.module.spec.js.map