import * as tslib_1 from "tslib";
// ANGULAR
import { Pipe } from '@angular/core';
/**
 * Returns only first letter of string
 */
let FirstLetterPipe = class FirstLetterPipe {
    /**
     * Transform
     *
     * @param value: any
     * @param args: any
     */
    transform(value, args) {
        return value
            .split(' ')
            .map(n => n[0])
            .join('');
    }
};
FirstLetterPipe = tslib_1.__decorate([
    Pipe({
        name: 'firstLetter'
    })
], FirstLetterPipe);
export { FirstLetterPipe };
//# sourceMappingURL=first-letter.pipe.spec.js.map