import * as tslib_1 from "tslib";
// ANGULAR
import { Pipe } from '@angular/core';
/**
 * Returns string from Array
 */
let JoinPipe = class JoinPipe {
    /**
     * Transform
     *
     * @param value: any
     * @param args: any
     */
    transform(value, args) {
        if (Array.isArray(value)) {
            return value.join(' ');
        }
        return value;
    }
};
JoinPipe = tslib_1.__decorate([
    Pipe({
        name: 'join'
    })
], JoinPipe);
export { JoinPipe };
//# sourceMappingURL=join.pipe.spec.js.map