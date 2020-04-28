import { async, TestBed } from '@angular/core/testing';
import { AccordionControlModule } from './accordion-control.module';
describe('AccordionControlModule', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AccordionControlModule]
        }).compileComponents();
    }));
    it('should create', () => {
        expect(AccordionControlModule).toBeDefined();
    });
});
//# sourceMappingURL=accordion-control.module.spec.js.map