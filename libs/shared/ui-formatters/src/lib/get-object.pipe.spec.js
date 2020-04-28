import * as tslib_1 from "tslib";
// ANGULAR
import { Pipe } from '@angular/core';
// OBJECT-PATH
import * as objectPath from 'object-path';
/**
 * Returns object from parent object
 */
let GetObjectPipe = class GetObjectPipe {
    /**
     * Transform
     *
     * @param value: any
     * @param args: any
     */
    transform(value, args) {
        return objectPath.get(value, args);
    }
};
GetObjectPipe = tslib_1.__decorate([
    Pipe({
        name: 'getObject'
    })
], GetObjectPipe);
export { GetObjectPipe };
//# sourceMappingURL=get-object.pipe.spec.js.map