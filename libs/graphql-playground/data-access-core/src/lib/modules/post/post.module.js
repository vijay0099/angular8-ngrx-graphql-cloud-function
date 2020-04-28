import * as tslib_1 from "tslib";
import { Module } from '@nestjs/common';
import { PostService } from './post.service';
let PostModule = class PostModule {
};
PostModule = tslib_1.__decorate([
    Module({
        providers: [PostService]
    })
], PostModule);
export { PostModule };
//# sourceMappingURL=post.module.js.map