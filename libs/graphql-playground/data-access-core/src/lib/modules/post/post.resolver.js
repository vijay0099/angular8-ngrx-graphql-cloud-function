import * as tslib_1 from "tslib";
import { Args, Query, Resolver, ResolveField, Parent, Mutation } from '@nestjs/graphql';
// SERVICES
import { PostService } from './post.service';
// AUTO GENERATED TYPES
import { PostInput, PostUpdateInput } from '@monorepo/graphql-playground/data-access-models';
let PostResolver = class PostResolver {
    constructor(postService) {
        this.postService = postService;
    }
    // QUERIES ==========================================================
    getPostById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.postService.findPostById(id);
        });
    }
    getAllPosts() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.postService.findAllPosts();
        });
    }
    // MUTATIONS ========================================================
    createPost(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.postService.createPost(data);
        });
    }
    updatePost(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.postService.updatePost(data);
        });
    }
    deletePost(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.postService.deletePost(id);
        });
    }
    // RELATIONSHIPS [ONE-TO-MANY] ======================================
    // Post.comments > Post.id
    getChildComments({ id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.postService.filterCommentsByPostId({ id });
        });
    }
    createdBy({ createdBy }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.postService.createdBy({ createdBy });
        });
    }
};
tslib_1.__decorate([
    Query(),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], PostResolver.prototype, "getPostById", null);
tslib_1.__decorate([
    Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], PostResolver.prototype, "getAllPosts", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [PostInput]),
    tslib_1.__metadata("design:returntype", Promise)
], PostResolver.prototype, "createPost", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [PostUpdateInput]),
    tslib_1.__metadata("design:returntype", Promise)
], PostResolver.prototype, "updatePost", null);
tslib_1.__decorate([
    Mutation(),
    tslib_1.__param(0, Args('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostResolver.prototype, "deletePost", null);
tslib_1.__decorate([
    ResolveField('comments'),
    tslib_1.__param(0, Parent()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostResolver.prototype, "getChildComments", null);
tslib_1.__decorate([
    ResolveField('createdBy'),
    tslib_1.__param(0, Parent()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostResolver.prototype, "createdBy", null);
PostResolver = tslib_1.__decorate([
    Resolver('Post'),
    tslib_1.__metadata("design:paramtypes", [PostService])
], PostResolver);
export { PostResolver };
//# sourceMappingURL=post.resolver.js.map