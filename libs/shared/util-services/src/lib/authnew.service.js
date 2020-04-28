import * as tslib_1 from "tslib";
var _a, _b;
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';
let AuthNewService = class AuthNewService {
    constructor(afAuth, db) {
        this.afAuth = afAuth;
        this.db = db;
    }
    register(email, password) {
        return from(this.afAuth.auth.createUserWithEmailAndPassword(email, password));
    }
    updateProfile(displayName, photoUrl) {
        const userProfile = this.afAuth.auth.currentUser;
        if (userProfile) {
            return from(userProfile.updateProfile({ displayName: displayName, photoURL: photoUrl }));
        }
    }
    login(email, password) {
        console.log(email);
        return from(this.afAuth.auth.signInWithEmailAndPassword(email, password));
    }
    socialLogin(authProvider) {
        console.log(authProvider);
        let provider;
        if (authProvider === 'google') {
            provider = new firebase.auth.GoogleAuthProvider();
        }
        if (authProvider === 'facebook') {
            provider = new firebase.auth.FacebookAuthProvider();
        }
        return from(this.afAuth.auth.signInWithPopup(provider));
    }
    logout(uid) {
        this.updateOnlineStatus(uid, false);
        return from(this.afAuth.auth.signOut());
    }
    saveUser(user) {
        const users = this.db.object('users/' + user.uid);
        return users.set(user);
    }
    updateOnlineStatus(uid, status) {
        if (status) {
            this.db.database.ref().child('users/' + uid).onDisconnect().update({ isOnline: false });
        }
        return from(this.db.object('users/' + uid).update({ isOnline: status }));
    }
    checkUserRole(uid) {
        return this.db.object('admins/' + uid).valueChanges();
    }
    getAuthState() {
        return this.afAuth.authState;
    }
    getCurrentUser() {
        return this.afAuth.auth.currentUser;
    }
};
AuthNewService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof AngularFireAuth !== "undefined" && AngularFireAuth) === "function" ? _a : Object, typeof (_b = typeof AngularFireDatabase !== "undefined" && AngularFireDatabase) === "function" ? _b : Object])
], AuthNewService);
export { AuthNewService };
//# sourceMappingURL=authnew.service.js.map