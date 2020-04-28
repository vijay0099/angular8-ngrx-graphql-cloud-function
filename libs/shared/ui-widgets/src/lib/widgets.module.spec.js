import { async, TestBed } from '@angular/core/testing';
import { WidgetModule } from './widget.module';
describe('WidgetModule', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [WidgetModule]
        }).compileComponents();
    }));
    it('should create', () => {
        expect(WidgetModule).toBeDefined();
    });
});
//# sourceMappingURL=widgets.module.spec.js.map