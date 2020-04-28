import * as tslib_1 from "tslib";
import { Args, Query, Resolver, ResolveField, Parent, Mutation } from '@nestjs/graphql';
// SERVICES
import { CommentService } from './comment.service';
// AUTO GENERATED TYPES
import { CommentInput, CommentUpdateInput, CommentFindInput, CommentDeleteInput } from '@monorepo/graphql-playground/data-access-models';
let CommentResolver = class CommentResolver {
    constructor(commentService) {
        this.commentService = commentService;
    }
    // QUERIES ==========================================================
    getComment(query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('comment(), @Args', query);
            return this.commentService.findCommentById(query);
        });
    }
    getComments() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.commentService.findAllComments();
        });
    }
    // MUTATIONS ========================================================
    createComment(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.commentService.createComment(data);
        });
    }
    updateComment(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.commentService.updateComment(data);
        });
    }
    deleteCommentDoc(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.commentService.deleteComment(data);
        });
    }
    // RELATIONSHIPS [ONE-TO-MANY] ======================================
    // Comment.postId > Post.id
    getPost({ postId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.commentService.findPost({ postId });
        });
    }
    // Comment.userId > User.id
    getUser({ userId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.commentService.findUser({ userId });
        });
    }
};
tslib_1.__decorate([
    Query(),
    tslib_1.__param(0, Args('query')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CommentFindInput]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentResolver.prototype, "getComment", null);
tslib_1.__decorate([
    Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], CommentResolver.prototype, "getComments", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CommentInput]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentResolver.prototype, "createComment", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CommentUpdateInput]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentResolver.prototype, "updateComment", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CommentDeleteInput]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentResolver.prototype, "deleteCommentDoc", null);
tslib_1.__decorate([
    ResolveField('post'),
    tslib_1.__param(0, Parent()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentResolver.prototype, "getPost", null);
tslib_1.__decorate([
    ResolveField('user'),
    tslib_1.__param(0, Parent()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentResolver.prototype, "getUser", null);
CommentResolver = tslib_1.__decorate([
    Resolver('Comment'),
    tslib_1.__metadata("design:paramtypes", [CommentService])
], CommentResolver);
export { CommentResolver };
//# sourceMappingURL=comment.resolver.js.map