import { async, TestBed } from '@angular/core/testing';
import { MyPageComponent } from './my-page.component';
describe('MyPageComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MyPageComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(MyPageComponent);
        component = fixture.componentInstance;
        fixture.markForCheck();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=my-page.component.spec.js.map