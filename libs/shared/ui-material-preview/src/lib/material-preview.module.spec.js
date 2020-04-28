import { async, TestBed } from '@angular/core/testing';
import { MaterialPreviewModule } from './material-preview.module';
describe('MaterialPreviewModule', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MaterialPreviewModule]
        }).compileComponents();
    }));
    it('should create', () => {
        expect(MaterialPreviewModule).toBeDefined();
    });
});
//# sourceMappingURL=material-preview.module.spec.js.map