import * as tslib_1 from "tslib";
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { comments, posts, users } from '@monorepo/graphql-playground/data-access-data';
let CommentService = class CommentService {
    constructor() {
        this.comments = comments;
        this.posts = posts;
        this.users = users;
    }
    // QUERIES ========================================================
    findCommentById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.comments.find(post => post.id === id);
        });
    }
    findAllComments() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.comments;
        });
    }
    // MUTATIONS ========================================================
    createComment(comment) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('create new, passing data = ', comment);
            const newComment = Object.assign({ id: uuidv4() }, comment);
            console.log('created new user: ', Object.assign({}, newComment));
            this.comments.push(newComment);
            return newComment;
        });
    }
    // DELETE
    deleteComment(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const index = this.comments.findIndex(comment => comment.id === id);
            if (index === -1) {
                throw new Error('User not found.');
            }
            const deletedComment = this.comments.splice(index, 1);
            return deletedComment[0];
        });
    }
    // RELATIONSHIPS [ONE-TO-MANY] ======================================
    findPost({ postId: postId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.posts.find(post => post.id === postId);
        });
    }
    findUser({ userId: userId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.users.find(user => user.id === userId);
        });
    }
};
CommentService = tslib_1.__decorate([
    Injectable()
], CommentService);
export { CommentService };
//# sourceMappingURL=comment.service.js.map