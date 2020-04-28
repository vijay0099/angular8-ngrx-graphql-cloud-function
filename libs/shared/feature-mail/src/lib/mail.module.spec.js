import { async, TestBed } from '@angular/core/testing';
import { MailModule } from './mail.module';
describe('MailModule', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MailModule]
        }).compileComponents();
    }));
    it('should create', () => {
        expect(MailModule).toBeDefined();
    });
});
//# sourceMappingURL=mail.module.spec.js.map