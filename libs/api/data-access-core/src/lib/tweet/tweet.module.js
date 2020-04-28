import * as tslib_1 from "tslib";
import { Module } from '@nestjs/common';
import { TweetService } from './tweet.service';
let TweetModule = class TweetModule {
};
TweetModule = tslib_1.__decorate([
    Module({
        providers: [TweetService]
    })
], TweetModule);
export { TweetModule };
//# sourceMappingURL=tweet.module.js.map