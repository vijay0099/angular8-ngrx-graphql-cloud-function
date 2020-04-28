import * as tslib_1 from "tslib";
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
// FAKE DATA
import { users, notificationUsers
// posts,
// comments
 } from '@monorepo/graphql-playground/data-access-data';
let UserService = class UserService {
    constructor() {
        this.users = users;
        this.notificationUsers = notificationUsers;
        // async filterPostsByUserId({ id }): Promise<Post[]> {
        //   return this.posts.filter(post => post.author === id);
        // }
        // async filterCommentsByUserId({ id }): Promise<Comment[]> {
        //   return this.comments.filter(comment => comment.author === id);
        // }
    }
    // private readonly usersPrivate: any[] = usersPrivate;
    // private readonly posts: any[] = posts;
    // private readonly comments: any[] = comments;
    // QUERIES ========================================================
    findUserById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.users.find(user => user.id === id);
        });
    }
    findUsers() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(this.users);
            return this.users;
        });
    }
    // async findPrivateUserById(id: string): Promise<UserPrivate> {
    //   return this.users.find(user => user.id === id);
    // }
    // async findUsersPrivateProfile(): Promise<UserPrivate[]> {
    //   return this.usersPrivate;
    // }
    // MUTATIONS ========================================================
    // CREATE
    createNewAdmin(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { email } = user;
            const emailTaken = users.some(u => u.email === email);
            if (emailTaken) {
                throw new Error('Email taken.');
            }
            const newUser = Object.assign({ id: uuidv4() }, user);
            console.log('New admin created: ', Object.assign({}, user));
            this.users.push(newUser);
            return newUser;
        });
    }
    createNewStaff(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { email } = user;
            const emailTaken = users.some(u => u.email === email);
            if (emailTaken) {
                throw new Error('Email taken.');
            }
            const newUser = Object.assign({ id: uuidv4() }, user);
            console.log('New staff created: ', Object.assign({}, user));
            this.users.push(newUser);
            return newUser;
        });
    }
    createNewUser(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { email } = user;
            const emailTaken = users.some(u => u.email === email);
            if (emailTaken) {
                throw new Error('Email taken.');
            }
            const newUser = Object.assign({ id: uuidv4() }, user);
            console.log('New user created: ', Object.assign({}, user));
            this.users.push(newUser);
            return newUser;
        });
    }
    // DELETE
    // async deleteUser(id: string): Promise<any> {
    //   const userIndex = users.findIndex(user => user.id === id);
    //   if (userIndex === -1) {
    //     throw new Error('User not found.');
    //   }
    //   // DELETE USER
    //   const deletedUsers = users.splice(userIndex, 1);
    //   let userPosts;
    //   let userComments;
    //   // DELETE USER'S POSTS
    //   userPosts = posts.filter(post => {
    //     const match = post.author === id;
    //     if (match) {
    //       userComments = comments.filter(comment => comment.post !== post.id);
    //     }
    //     return !match;
    //   });
    //   userComments = comments.filter(comment => comment.author !== id);
    //   return deletedUsers[0];
    // }
    // RELATIONSHIPS [ONE-TO-MANY] ======================================
    filterNotificationUserByUserId({ id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.notificationUsers.filter(notificationUser => notificationUser.userId === id);
        });
    }
};
UserService = tslib_1.__decorate([
    Injectable()
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map