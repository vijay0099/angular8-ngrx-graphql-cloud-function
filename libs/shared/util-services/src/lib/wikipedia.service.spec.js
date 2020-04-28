import { TestBed } from '@angular/core/testing';
import { WikipediaService } from './wikipedia.service';
describe('WikipediaService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(WikipediaService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=wikipedia.service.spec.js.map