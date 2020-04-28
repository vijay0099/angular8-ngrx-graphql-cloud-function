import * as tslib_1 from "tslib";
import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
let CommentModule = class CommentModule {
};
CommentModule = tslib_1.__decorate([
    Module({
        providers: [CommentService]
    })
], CommentModule);
export { CommentModule };
//# sourceMappingURL=comment.module.js.map