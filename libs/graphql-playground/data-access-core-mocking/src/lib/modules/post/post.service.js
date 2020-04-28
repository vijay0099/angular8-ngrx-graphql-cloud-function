import * as tslib_1 from "tslib";
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { posts, comments } from '@monorepo/graphql-playground/data-access-data';
let PostService = class PostService {
    constructor() {
        this.posts = posts;
        this.comments = comments;
    }
    // QUERIES ========================================================
    findPostById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.posts.find(post => post.id === id);
        });
    }
    findAllPosts() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.posts;
        });
    }
    // MUTATIONS ========================================================
    createPost(post) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // const { name, gender, dob } = children;
            console.log('create new, passing data = ', post);
            const newPost = Object.assign({ id: uuidv4() }, post);
            console.log('created new post: ', Object.assign({}, newPost));
            this.posts.push(newPost);
            return newPost;
        });
    }
    // DELETE
    deletePost(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const index = this.posts.findIndex(post => post.id === id);
            if (index === -1) {
                throw new Error('Post not found.');
            }
            // DELETE CHILD
            const deletedPost = this.posts.splice(index, 1);
            let postComments;
            // DELETE POST COMMENTS
            postComments = this.comments.filter(comment => {
                const match = comment.postId === id;
                return !match;
            });
            return deletedPost[0];
        });
    }
    // RELATIONSHIPS [ONE-TO-MANY] ======================================
    filterCommentsByPostId({ id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.comments.filter(comment => comment.postId === id);
        });
    }
};
PostService = tslib_1.__decorate([
    Injectable()
], PostService);
export { PostService };
//# sourceMappingURL=post.service.js.map