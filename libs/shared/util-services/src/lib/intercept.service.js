import * as tslib_1 from "tslib";
// ANGULAR
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
// import { debug } from 'util';
/**
 * More information there => https://medium.com/@MetonymyQT/angular-http-interceptors-what-are-they-and-how-to-use-them-52e060321088
 */
let InterceptService = class InterceptService {
    // intercept request and add token
    intercept(request, next) {
        // tslint:disable-next-line:no-debugger
        // modify request
        // request = request.clone({
        // 	setHeaders: {
        // 		Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        // 	}
        // });
        // console.log('----request----');
        // console.log(request);
        // console.log('--- end of request---');
        return next.handle(request).pipe(tap(event => {
            if (event instanceof HttpResponse) {
                // console.log('all looks good');
                // http response status code
                // console.log(event.status);
            }
        }, error => {
            // http response status code
            // console.log('----response----');
            // console.error('status code:');
            // tslint:disable-next-line:no-debugger
            console.error(error.status);
            console.error(error.message);
            // console.log('--- end of response---');
        }));
    }
};
InterceptService = tslib_1.__decorate([
    Injectable()
], InterceptService);
export { InterceptService };
//# sourceMappingURL=intercept.service.js.map