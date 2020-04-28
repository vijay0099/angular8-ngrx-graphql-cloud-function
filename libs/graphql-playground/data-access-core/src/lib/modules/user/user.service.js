import * as tslib_1 from "tslib";
const colors = require('colors');
colors.enable();
// NESTJS
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AuthenticationError } from 'apollo-server-express';
// FIRESTORE ADMIN SDK
import * as admin from 'firebase-admin';
// FIRESTORE CLIENT SDK
import * as client from 'firebase';
// FIELD VALUE EXAMPLE
// const FieldValue = admin.firestore.FieldValue
// HASHING
const bcrypt = require('bcrypt');
const saltRounds = 10;
let UserService = class UserService {
    // QUERIES ========================================================
    // async findUserById(id: string): Promise<User> {
    //   return this.users.find(user => user.id === id);
    // }
    validateUser(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const { username, id } = data;
                const usernameRef = yield client
                    .firestore()
                    .collection('users')
                    .where('username', '==', username)
                    .get();
                console.log('usernameRef', usernameRef);
                if (!usernameRef.empty) {
                    // throw new ApolloError('Username already exist.');
                    throw new AuthenticationError('Username already exist.');
                    // return { status: true };
                }
                else {
                    return { status: false };
                }
            }
            catch (err) {
                console.log('validateUser() errorsss =', err);
                const newErr = {
                    error: {
                        code: 400,
                        message: 'EMAIL_NOT_FOUND',
                        errors: [
                            {
                                message: 'EMAIL_NOT_FOUND',
                                domain: 'global',
                                reason: 'invalid'
                            }
                        ]
                    }
                };
                // LOGGING ERROR
                console.log(colors.brightRed(err.message));
                throw new AuthenticationError(err.message);
                // throw new HttpException(
                //   {
                //     status: HttpStatus.FORBIDDEN,
                //     error: err.message
                //   },
                //   HttpStatus.FORBIDDEN
                // );
            }
        });
    }
    findUsers() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // REFERENCE: https://github.com/arjunyel/firestore-apollo-graphql
            const allUsers = yield admin
                .firestore()
                .collection('users')
                .get();
            // console.log(colors.brightMagenta('Reading from Firestore'));
            return allUsers.docs.map(user => user.data());
        });
    }
    // async findPrivateUserById(id: string): Promise<UserPrivate> {
    //   return this.users.find(user => user.id === id);
    // }
    // async findUsersPrivateProfile(): Promise<UserPrivate[]> {
    //   return this.usersPrivate;
    // }
    // MUTATIONS ========================================================
    // // CREATE
    // async createNewAdmin(user: AdminInput): Promise<User> {
    //   const { email } = user;
    //   const emailTaken = users.some(u => u.email === email);
    //   if (emailTaken) {
    //     throw new Error('Email taken.');
    //   }
    //   const newUser: any = {
    //     id: uuidv4(),
    //     ...user
    //   };
    //   console.log('New admin created: ', { ...user });
    //   this.users.push(newUser);
    //   return newUser;
    // }
    // async createNewStaff(user: StaffInput): Promise<User> {
    //   const { email } = user;
    //   const emailTaken = users.some(u => u.email === email);
    //   if (emailTaken) {
    //     throw new Error('Email taken.');
    //   }
    //   const newUser: any = {
    //     id: uuidv4(),
    //     ...user
    //   };
    //   console.log('New staff created: ', { ...user });
    //   this.users.push(newUser);
    //   return newUser;
    // }
    // CREATE USER
    createUser(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = user;
                const newDoc = Object.assign({}, user);
                delete newDoc.id;
                yield admin
                    .firestore()
                    .collection('users')
                    .doc(id)
                    .set(newDoc);
                newDoc.id = id;
                console.log('newDoc', newDoc);
                return newDoc;
            }
            catch (error) {
                // LOGGING ERROR
                console.log(colors.brightRed(error.message));
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: error.message
                }, HttpStatus.FORBIDDEN);
            }
        });
    }
};
UserService = tslib_1.__decorate([
    Injectable()
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map