import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let AuthNoticeService = class AuthNoticeService {
    constructor() {
        this.onNoticeChanged$ = new BehaviorSubject(null);
    }
    setNotice(message, type) {
        const notice = {
            message,
            type
        };
        this.onNoticeChanged$.next(notice);
    }
};
AuthNoticeService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], AuthNoticeService);
export { AuthNoticeService };
//# sourceMappingURL=auth-notice.service.js.map