import * as tslib_1 from "tslib";
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
/** All built-in and custom scalars, mapped to their actual values */
export class Scalars {
}
;
export class Activity {
}
;
export class ActivityInput {
}
;
export var ActivityTypes;
(function (ActivityTypes) {
    ActivityTypes["T1"] = "T1";
    ActivityTypes["T2"] = "T2";
})(ActivityTypes || (ActivityTypes = {}));
export class ActivityUpdateInput {
}
;
export class Address {
}
;
export class AddressInput {
}
;
export class AdminInput {
}
;
export class CarrierPrimary {
}
;
export class CarrierPrimaryInput {
}
;
export class CarrierSecondary {
}
;
export class CarrierSecondaryInput {
}
;
export var Categories;
(function (Categories) {
    Categories["Newborn"] = "NEWBORN";
    Categories["Infant"] = "INFANT";
    Categories["Toddler"] = "TODDLER";
    Categories["Prescooler"] = "PRESCOOLER";
    Categories["Student"] = "STUDENT";
    Categories["Adolescent"] = "ADOLESCENT";
})(Categories || (Categories = {}));
export class Child {
}
;
export var ChildAges;
(function (ChildAges) {
    ChildAges["Newborn"] = "NEWBORN";
    ChildAges["Infant"] = "INFANT";
    ChildAges["Toddler"] = "TODDLER";
    ChildAges["Prescooler"] = "PRESCOOLER";
    ChildAges["Student"] = "STUDENT";
    ChildAges["Adolescent"] = "ADOLESCENT";
})(ChildAges || (ChildAges = {}));
export class ChildInput {
}
;
export class ChildUpdateInput {
}
;
export class Comment {
}
;
export class CommentDeleteInput {
}
;
export class CommentFindInput {
}
;
export class CommentInput {
}
;
export class CommentUpdateInput {
}
;
export class DeleteInput {
}
;
export class Event {
}
;
export var EventType;
(function (EventType) {
    EventType["SupporterEvent"] = "SUPPORTER_EVENT";
    EventType["SponsorEvent"] = "SPONSOR_EVENT";
    EventType["VolunteerEvent"] = "VOLUNTEER_EVENT";
})(EventType || (EventType = {}));
export class Expense {
}
;
export class ExpenseInput {
}
;
export var ExpenseTypes;
(function (ExpenseTypes) {
    ExpenseTypes["Rent"] = "RENT";
    ExpenseTypes["Utilities"] = "UTILITIES";
    ExpenseTypes["Communications"] = "COMMUNICATIONS";
    ExpenseTypes["Postage"] = "POSTAGE";
    ExpenseTypes["Fuel"] = "FUEL";
})(ExpenseTypes || (ExpenseTypes = {}));
export class ExpenseUpdateInput {
}
;
export class Family {
}
;
export class FamilyData {
}
;
export class FamilyFilterInput {
}
;
export class FamilyInput {
}
;
export class FamilyUpdateInput {
}
;
export class FindInput {
}
;
export class Gallery {
}
;
export class GalleryInput {
}
;
export var GalleryTypes;
(function (GalleryTypes) {
    GalleryTypes["Private"] = "PRIVATE";
    GalleryTypes["Public"] = "PUBLIC";
})(GalleryTypes || (GalleryTypes = {}));
export class GalleryUpdateInput {
}
;
export var Genders;
(function (Genders) {
    Genders["Female"] = "FEMALE";
    Genders["Male"] = "MALE";
    Genders["Between"] = "BETWEEN";
})(Genders || (Genders = {}));
export class MeasurementInput {
}
;
export class Measurements {
}
;
export class Mutation {
}
;
export class MutationCreateActivityArgs {
}
;
export class MutationCreateAdminArgs {
}
;
export class MutationCreateChildArgs {
}
;
export class MutationCreateCommentArgs {
}
;
export class MutationCreateExpenseArgs {
}
;
export class MutationCreateFamilyArgs {
}
;
export class MutationCreateGalleryArgs {
}
;
export class MutationCreateNeedArgs {
}
;
export class MutationCreateNotificationArgs {
}
;
export class MutationCreateNotificationUserArgs {
}
;
export class MutationCreatePaymentArgs {
}
;
export class MutationCreatePostArgs {
}
;
export class MutationCreateRewardArgs {
}
;
export class MutationCreateSponsorEventArgs {
}
;
export class MutationCreateStaffArgs {
}
;
export class MutationCreateSupporterEventArgs {
}
;
export class MutationCreateUserArgs {
}
;
export class MutationCreateValorizationArgs {
}
;
export class MutationCreateVolunteerEventArgs {
}
;
export class MutationDeleteActivityArgs {
}
;
export class MutationDeleteChildArgs {
}
;
export class MutationDeleteCommentDocArgs {
}
;
export class MutationDeleteEventArgs {
}
;
export class MutationDeleteExpenseArgs {
}
;
export class MutationDeleteFamilyArgs {
}
;
export class MutationDeleteGalleryArgs {
}
;
export class MutationDeleteNeedArgs {
}
;
export class MutationDeleteNotificationArgs {
}
;
export class MutationDeleteNotificationUserArgs {
}
;
export class MutationDeletePaymentArgs {
}
;
export class MutationDeletePostArgs {
}
;
export class MutationDeleteRewardArgs {
}
;
export class MutationDeleteUserArgs {
}
;
export class MutationDeleteValorizationArgs {
}
;
export class MutationUpdateActivityArgs {
}
;
export class MutationUpdateChildArgs {
}
;
export class MutationUpdateCommentArgs {
}
;
export class MutationUpdateExpenseArgs {
}
;
export class MutationUpdateFamilyArgs {
}
;
export class MutationUpdateGalleryArgs {
}
;
export class MutationUpdateNeedArgs {
}
;
export class MutationUpdateNotificationArgs {
}
;
export class MutationUpdateNotificationUserArgs {
}
;
export class MutationUpdatePaymentArgs {
}
;
export class MutationUpdatePostArgs {
}
;
export class MutationUpdateRewardArgs {
}
;
export class MutationUpdateSponsorEventArgs {
}
;
export class MutationUpdateSupporterEventArgs {
}
;
export class MutationUpdateValorizationArgs {
}
;
export class MutationUpdateVolunteerEventArgs {
}
;
export class Need {
}
;
export class NeedInput {
}
;
export var NeedTypes;
(function (NeedTypes) {
    NeedTypes["Material"] = "MATERIAL";
    NeedTypes["Financial"] = "FINANCIAL";
    NeedTypes["Educational"] = "EDUCATIONAL";
})(NeedTypes || (NeedTypes = {}));
export class NeedUpdateInput {
}
;
export class Notification {
}
;
export class NotificationInput {
}
;
export var NotificationType;
(function (NotificationType) {
    NotificationType["ChristmasGift"] = "ChristmasGift";
    NotificationType["EasterGift"] = "EasterGift";
    NotificationType["BackToSchool"] = "BackToSchool";
})(NotificationType || (NotificationType = {}));
export class NotificationUpdateInput {
}
;
export class NotificationUser {
}
;
export class NotificationUserInput {
}
;
export class NotificationUserUpdateInput {
}
;
export class Payment {
}
;
export class PaymentInput {
}
;
export var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Pending"] = "PENDING";
    PaymentStatus["Paid"] = "PAID";
})(PaymentStatus || (PaymentStatus = {}));
export var PaymentTypes;
(function (PaymentTypes) {
    PaymentTypes["P1"] = "P1";
    PaymentTypes["P2"] = "P2";
})(PaymentTypes || (PaymentTypes = {}));
export class PaymentUpdateInput {
}
;
export var PointTypes;
(function (PointTypes) {
    PointTypes["Material"] = "MATERIAL";
    PointTypes["Financial"] = "FINANCIAL";
    PointTypes["Educational"] = "EDUCATIONAL";
})(PointTypes || (PointTypes = {}));
export class Post {
}
;
export class PostInput {
}
;
export class PostUpdateInput {
}
;
export class Query {
}
;
export class QueryGetActivityArgs {
}
;
export class QueryGetAllRewardsArgs {
}
;
export class QueryGetChildArgs {
}
;
export class QueryGetCommentArgs {
}
;
export class QueryGetCommentsArgs {
}
;
export class QueryGetEventArgs {
}
;
export class QueryGetExpenseArgs {
}
;
export class QueryGetFamiliesArgs {
}
;
export class QueryGetFamilyArgs {
}
;
export class QueryGetGalleryArgs {
}
;
export class QueryGetNeedArgs {
}
;
export class QueryGetNeedByIdArgs {
}
;
export class QueryGetNeedsArgs {
}
;
export class QueryGetNotificationArgs {
}
;
export class QueryGetNotificationUserByIdArgs {
}
;
export class QueryGetNotificationUsersArgs {
}
;
export class QueryGetNotificationsArgs {
}
;
export class QueryGetPaymentArgs {
}
;
export class QueryGetPostByIdArgs {
}
;
export class QueryGetRewardByIdArgs {
}
;
export class QueryGetUserArgs {
}
;
export class QueryGetValorizationArgs {
}
;
export class QueryGetValorizationByIdArgs {
}
;
export class QueryUserLoginArgs {
}
;
export class QueryValidateUserArgs {
}
;
export class Reward {
}
;
export class RewardInput {
}
;
export var RewardLavel;
(function (RewardLavel) {
    RewardLavel["Bronze"] = "BRONZE";
    RewardLavel["Silver"] = "SILVER";
    RewardLavel["Gold"] = "GOLD";
})(RewardLavel || (RewardLavel = {}));
export class RewardUpdateInput {
}
;
export var Roles;
(function (Roles) {
    Roles["Admin"] = "ADMIN";
    Roles["Staff"] = "STAFF";
    Roles["User"] = "USER";
})(Roles || (Roles = {}));
export class SponsorInput {
}
;
export class SponsorUpdateInput {
}
;
export class StaffInput {
}
;
export class SupporterInput {
}
;
export class SupporterUpdateInput {
}
;
export class User {
}
;
export class UserInput {
}
;
export class UserLoginInput {
}
;
export var UserStatus;
(function (UserStatus) {
    UserStatus["Volunteer"] = "VOLUNTEER";
    UserStatus["Sponsor"] = "SPONSOR";
})(UserStatus || (UserStatus = {}));
export class UserValidateInput {
}
;
export class UserValidateOutput {
}
;
export class Valorization {
}
;
export class ValorizationInput {
}
;
export class ValorizationUpdateInput {
}
;
export class VolunteerInput {
}
;
export class VolunteerUpdateInput {
}
;
export const CreateUserDocument = gql `
    mutation createUser($input: UserInput!) {
  createUser(data: $input) {
    id
    username
    fullName
    email
    phoneNumber
    role
    providerId
    photoUrl
    isNewUser
  }
}
    `;
let CreateUserGQL = class CreateUserGQL extends Apollo.Mutation {
    constructor() {
        super(...arguments);
        this.document = CreateUserDocument;
    }
};
CreateUserGQL = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], CreateUserGQL);
export { CreateUserGQL };
export const ValidateUserDocument = gql `
    query validateUser($query: UserValidateInput!) {
  validateUser(query: $query) {
    status
  }
}
    `;
let ValidateUserGQL = class ValidateUserGQL extends Apollo.Query {
    constructor() {
        super(...arguments);
        this.document = ValidateUserDocument;
    }
};
ValidateUserGQL = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ValidateUserGQL);
export { ValidateUserGQL };
//# sourceMappingURL=generated.js.map