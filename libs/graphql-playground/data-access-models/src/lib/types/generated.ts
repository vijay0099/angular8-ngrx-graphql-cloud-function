import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export class Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Object: any;
};

export class Activity {
   __typename?: 'Activity';
  id: Scalars['ID'];
  activityType: Scalars['String'];
  activity: Scalars['String'];
  description: Scalars['String'];
  isActive: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  /** JOINTS */
  createdBy: User;
};

export class ActivityInput {
  activityType?: Maybe<ActivityTypes>;
  activity: Scalars['String'];
  description: Scalars['String'];
  isActive: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  /** JOINTS */
  createdBy: Scalars['ID'];
};

export enum ActivityTypes {
  T1 = 'T1',
  T2 = 'T2'
}

export class ActivityUpdateInput {
  id: Scalars['ID'];
  activityType?: Maybe<ActivityTypes>;
  activity: Scalars['String'];
  description: Scalars['String'];
  isActive: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  /** JOINTS */
  createdBy: Scalars['ID'];
};

export class Address {
   __typename?: 'Address';
  addressLine1: Scalars['String'];
  addressLine2?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  city: Scalars['String'];
};

export class AddressInput {
  addressLine1: Scalars['String'];
  addressLine2?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  city: Scalars['String'];
};

export class AdminInput {
  role?: Maybe<Roles>;
  username?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  providerId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['String']>;
  photoUrl?: Maybe<Scalars['String']>;
  isNewUser?: Maybe<Scalars['Boolean']>;
  isSponsor?: Maybe<Scalars['Boolean']>;
  isSupporter?: Maybe<Scalars['Boolean']>;
  isVolunteer?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isOnline?: Maybe<Scalars['Boolean']>;
};

export class CarrierPrimary {
   __typename?: 'CarrierPrimary';
  firstName: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
};

export class CarrierPrimaryInput {
  firstName: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
};

export class CarrierSecondary {
   __typename?: 'CarrierSecondary';
  firstName: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
};

export class CarrierSecondaryInput {
  firstName: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
};

export class Category {
   __typename?: 'Category';
  id: Scalars['ID'];
  values: Array<Maybe<Scalars['String']>>;
  createdBy?: Maybe<User>;
};

export class CategoryInput {
  id: Scalars['ID'];
  values: Array<Maybe<Scalars['String']>>;
  createdBy?: Maybe<Scalars['ID']>;
};

export class CategoryUpdateInput {
  id: Scalars['ID'];
  values: Array<Maybe<Scalars['String']>>;
};

export class Child {
   __typename?: 'Child';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  gender: Genders;
  dob: Scalars['String'];
  childAge: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  avatarUrl?: Maybe<Scalars['String']>;
  extracurricular?: Maybe<Array<Maybe<Scalars['String']>>>;
  medicalConditions?: Maybe<Array<Maybe<Scalars['String']>>>;
  wishes?: Maybe<Array<Maybe<Scalars['String']>>>;
  seqNo?: Maybe<Scalars['Int']>;
  needsCount?: Maybe<Scalars['Int']>;
  /** JOINTS */
  measurements: Measurements;
  needs: Array<Need>;
  family: Family;
};

export class ChildInput {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  gender: Scalars['String'];
  dob: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  avatarUrl?: Maybe<Scalars['String']>;
  extracurricular?: Maybe<Array<Maybe<Scalars['String']>>>;
  medicalConditions?: Maybe<Array<Maybe<Scalars['String']>>>;
  wishes?: Maybe<Array<Maybe<Scalars['String']>>>;
  seqNo?: Maybe<Scalars['Int']>;
  measurements?: Maybe<MeasurementInput>;
  familyId: Scalars['ID'];
};

export class ChildUpdateInput {
  id?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  gender: Scalars['String'];
  dob: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  avatarUrl?: Maybe<Scalars['String']>;
  extracurricular?: Maybe<Array<Maybe<Scalars['String']>>>;
  medicalConditions?: Maybe<Array<Maybe<Scalars['String']>>>;
  wishes?: Maybe<Array<Maybe<Scalars['String']>>>;
  seqNo?: Maybe<Scalars['Int']>;
  measurements?: Maybe<MeasurementInput>;
  familyId: Scalars['ID'];
};

export class Comment {
   __typename?: 'Comment';
  id: Scalars['ID'];
  post: Post;
  user: User;
  comment: Scalars['String'];
  isDeleted?: Maybe<Scalars['Boolean']>;
};

export class CommentDeleteInput {
  id: Scalars['ID'];
  postId: Scalars['ID'];
};

export class CommentFindInput {
  id: Scalars['ID'];
  postId: Scalars['ID'];
};

export class CommentInput {
  postId: Scalars['ID'];
  userId: Scalars['ID'];
  comment: Scalars['String'];
  isDeleted?: Maybe<Scalars['Boolean']>;
};

export class CommentUpdateInput {
  id: Scalars['ID'];
  postId: Scalars['ID'];
  userId: Scalars['ID'];
  comment: Scalars['String'];
  isDeleted?: Maybe<Scalars['Boolean']>;
};

export class DeleteInput {
  id: Scalars['ID'];
  belongsTo: Scalars['ID'];
};

/** type Event implements EventInterface { */
export class Event {
   __typename?: 'Event';
  eventType: EventType;
  id: Scalars['ID'];
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  eventLogo: Scalars['String'];
  labor: Scalars['Boolean'];
  items: Scalars['Boolean'];
  money: Scalars['Boolean'];
  frequency?: Maybe<Scalars['String']>;
  needType: Scalars['String'];
  paymentFrequency: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  startDate: Scalars['String'];
  endDate: Scalars['String'];
  startTime: Scalars['String'];
  endTime: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  volunteerJob?: Maybe<Scalars['String']>;
  volunteerNumber?: Maybe<Scalars['Int']>;
  isActive: Scalars['Boolean'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  createdBy: User;
};

export enum EventType {
  SupporterEvent = 'SUPPORTER_EVENT',
  SponsorEvent = 'SPONSOR_EVENT',
  VolunteerEvent = 'VOLUNTEER_EVENT'
}

export class Expense {
   __typename?: 'Expense';
  id: Scalars['ID'];
  expenseType: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  isLabeled?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Float'];
  currency: Scalars['String'];
  expenseDate: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  /** JOINTS */
  createdBy: User;
};

export class ExpenseInput {
  expenseType?: Maybe<ExpenseTypes>;
  title: Scalars['String'];
  description: Scalars['String'];
  isLabeled?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Float'];
  currency: Scalars['String'];
  expenseDate: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  /** JOINTS */
  createdBy: Scalars['ID'];
};

export enum ExpenseTypes {
  Rent = 'RENT',
  Utilities = 'UTILITIES',
  Communications = 'COMMUNICATIONS',
  Postage = 'POSTAGE',
  Fuel = 'FUEL'
}

export class ExpenseUpdateInput {
  id: Scalars['ID'];
  expenseType?: Maybe<ExpenseTypes>;
  title: Scalars['String'];
  description: Scalars['String'];
  isLabeled?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Float'];
  currency: Scalars['String'];
  expenseDate: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
};

export class Family {
   __typename?: 'Family';
  id: Scalars['ID'];
  category: Scalars['String'];
  isFacebookMember: Scalars['Boolean'];
  isActive?: Maybe<Scalars['Boolean']>;
  /** JOINTS */
  carrierPrimary: CarrierPrimary;
  carrierSecondary: CarrierSecondary;
  address: Address;
  children?: Maybe<Array<Maybe<Child>>>;
  createdBy?: Maybe<User>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export class FamilyData {
   __typename?: 'FamilyData';
  totalData: Scalars['Int'];
  data: Family;
};

export class FamilyFilterInput {
  search?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export class FamilyInput {
  category: Scalars['String'];
  isFacebookMember: Scalars['Boolean'];
  isActive?: Maybe<Scalars['Boolean']>;
  /** JOINTS */
  carrierPrimary: CarrierPrimaryInput;
  carrierSecondary: CarrierSecondaryInput;
  address: AddressInput;
  createdBy?: Maybe<Scalars['ID']>;
};

export class FamilyUpdateInput {
  id: Scalars['ID'];
  category: Scalars['String'];
  isFacebookMember: Scalars['Boolean'];
  isActive?: Maybe<Scalars['Boolean']>;
  /** JOINTS */
  carrierPrimary: CarrierPrimaryInput;
  carrierSecondary: CarrierSecondaryInput;
  address: AddressInput;
  createdBy?: Maybe<Scalars['ID']>;
};

export class FindInput {
  id: Scalars['ID'];
  belongsTo: Scalars['ID'];
};

export class Gallery {
   __typename?: 'Gallery';
  /** COMMON */
  id: Scalars['ID'];
  galleryType?: Maybe<GalleryTypes>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  isActive: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  /** JOINTS */
  createdBy: User;
};

export class GalleryInput {
  galleryType?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  isActive: Scalars['Boolean'];
  /** JOINTS */
  createdBy: Scalars['ID'];
};

export enum GalleryTypes {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export class GalleryUpdateInput {
  id: Scalars['ID'];
  galleryType?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  isActive: Scalars['Boolean'];
  /** JOINTS */
  createdBy: Scalars['ID'];
};

export enum Genders {
  Female = 'FEMALE',
  Male = 'MALE',
  Between = 'BETWEEN'
}

export class MeasurementInput {
  footSize?: Maybe<Scalars['String']>;
  wardrobeSize?: Maybe<Scalars['String']>;
};

export class Measurements {
   __typename?: 'Measurements';
  footSize: Scalars['String'];
  wardrobeSize: Scalars['String'];
};

export class Mutation {
   __typename?: 'Mutation';
  createActivity: Activity;
  createAdmin: User;
  createCategory: Category;
  createChild: Child;
  createComment: Comment;
  createExpense: Expense;
  createFamily: Family;
  createGallery: Gallery;
  createNeed: Need;
  createNotification: Notification;
  createNotificationUser: NotificationUser;
  createPayment: Payment;
  createPost: Post;
  createReward: Reward;
  createSponsorEvent: Event;
  createStaff: User;
  createSupporterEvent: Event;
  createUser: User;
  createValorization: Valorization;
  createVolunteerEvent: Event;
  deleteActivity: Activity;
  deleteCategory: Category;
  deleteChild: Child;
  deleteCommentDoc: Comment;
  deleteEvent: Event;
  deleteExpense: Expense;
  deleteFamily: Family;
  deleteGallery: Gallery;
  deleteNeed: Need;
  deleteNotification: Notification;
  deleteNotificationUser: NotificationUser;
  deletePayment: Payment;
  deletePost: Post;
  deleteReward: Reward;
  deleteUser: User;
  deleteValorization: Valorization;
  updateActivity: Activity;
  updateCategory: Category;
  updateChild?: Maybe<Child>;
  updateComment: Comment;
  updateExpense: Expense;
  updateFamily: Family;
  updateGallery: Gallery;
  updateNeed: Need;
  updateNotification: Notification;
  updateNotificationUser: NotificationUser;
  updatePayment: Payment;
  updatePost: Post;
  updateReward: Reward;
  updateSponsorEvent: Event;
  updateSupporterEvent: Event;
  updateUser: User;
  updateValorization: Valorization;
  updateVolunteerEvent: Event;
};


export class MutationCreateActivityArgs {
  data: ActivityInput;
};


export class MutationCreateAdminArgs {
  data: AdminInput;
};


export class MutationCreateCategoryArgs {
  data?: Maybe<CategoryInput>;
};


export class MutationCreateChildArgs {
  data: ChildInput;
};


export class MutationCreateCommentArgs {
  data?: Maybe<CommentInput>;
};


export class MutationCreateExpenseArgs {
  data: ExpenseInput;
};


export class MutationCreateFamilyArgs {
  data: FamilyInput;
};


export class MutationCreateGalleryArgs {
  data: GalleryInput;
};


export class MutationCreateNeedArgs {
  data?: Maybe<NeedInput>;
};


export class MutationCreateNotificationArgs {
  data?: Maybe<NotificationInput>;
};


export class MutationCreateNotificationUserArgs {
  data?: Maybe<NotificationUserInput>;
};


export class MutationCreatePaymentArgs {
  data: PaymentInput;
};


export class MutationCreatePostArgs {
  data?: Maybe<PostInput>;
};


export class MutationCreateRewardArgs {
  data?: Maybe<RewardInput>;
};


export class MutationCreateSponsorEventArgs {
  data: SponsorInput;
};


export class MutationCreateStaffArgs {
  data: StaffInput;
};


export class MutationCreateSupporterEventArgs {
  data: SupporterInput;
};


export class MutationCreateUserArgs {
  data: UserInput;
};


export class MutationCreateValorizationArgs {
  data?: Maybe<ValorizationInput>;
};


export class MutationCreateVolunteerEventArgs {
  data: VolunteerInput;
};


export class MutationDeleteActivityArgs {
  id: Scalars['String'];
};


export class MutationDeleteCategoryArgs {
  id: Scalars['ID'];
};


export class MutationDeleteChildArgs {
  id: Scalars['ID'];
};


export class MutationDeleteCommentDocArgs {
  data?: Maybe<CommentDeleteInput>;
};


export class MutationDeleteEventArgs {
  id: Scalars['String'];
};


export class MutationDeleteExpenseArgs {
  id: Scalars['String'];
};


export class MutationDeleteFamilyArgs {
  id: Scalars['ID'];
};


export class MutationDeleteGalleryArgs {
  id: Scalars['ID'];
};


export class MutationDeleteNeedArgs {
  data?: Maybe<DeleteInput>;
};


export class MutationDeleteNotificationArgs {
  id: Scalars['ID'];
};


export class MutationDeleteNotificationUserArgs {
  id: Scalars['ID'];
};


export class MutationDeletePaymentArgs {
  id: Scalars['String'];
};


export class MutationDeletePostArgs {
  id: Scalars['ID'];
};


export class MutationDeleteRewardArgs {
  id: Scalars['ID'];
};


export class MutationDeleteUserArgs {
  id: Scalars['ID'];
};


export class MutationDeleteValorizationArgs {
  id: Scalars['ID'];
};


export class MutationUpdateActivityArgs {
  data?: Maybe<ActivityUpdateInput>;
};


export class MutationUpdateCategoryArgs {
  data?: Maybe<CategoryUpdateInput>;
};


export class MutationUpdateChildArgs {
  data?: Maybe<ChildUpdateInput>;
};


export class MutationUpdateCommentArgs {
  data?: Maybe<CommentUpdateInput>;
};


export class MutationUpdateExpenseArgs {
  data?: Maybe<ExpenseUpdateInput>;
};


export class MutationUpdateFamilyArgs {
  data?: Maybe<FamilyUpdateInput>;
};


export class MutationUpdateGalleryArgs {
  data: GalleryUpdateInput;
};


export class MutationUpdateNeedArgs {
  data?: Maybe<NeedUpdateInput>;
};


export class MutationUpdateNotificationArgs {
  data?: Maybe<NotificationUpdateInput>;
};


export class MutationUpdateNotificationUserArgs {
  data?: Maybe<NotificationUserUpdateInput>;
};


export class MutationUpdatePaymentArgs {
  data?: Maybe<PaymentUpdateInput>;
};


export class MutationUpdatePostArgs {
  data?: Maybe<PostUpdateInput>;
};


export class MutationUpdateRewardArgs {
  data?: Maybe<RewardUpdateInput>;
};


export class MutationUpdateSponsorEventArgs {
  data: SponsorUpdateInput;
};


export class MutationUpdateSupporterEventArgs {
  data: SupporterUpdateInput;
};


export class MutationUpdateUserArgs {
  data: UserUpdateInput;
};


export class MutationUpdateValorizationArgs {
  data?: Maybe<ValorizationUpdateInput>;
};


export class MutationUpdateVolunteerEventArgs {
  data: VolunteerUpdateInput;
};

export class Need {
   __typename?: 'Need';
  needType: NeedTypes;
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  isLongTermNeed?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  seqNo?: Maybe<Scalars['Boolean']>;
  testingError?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
  /** JOINTS */
  child: Child;
};

export class NeedInput {
  needType: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  isLongTermNeed?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  seqNo?: Maybe<Scalars['Boolean']>;
  /** JOINTS */
  belongsTo: Scalars['ID'];
};

export enum NeedTypes {
  Material = 'MATERIAL',
  Financial = 'FINANCIAL',
  Educational = 'EDUCATIONAL'
}

export class NeedUpdateInput {
  id: Scalars['ID'];
  needType?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isLongTermNeed?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  seqNo?: Maybe<Scalars['Boolean']>;
  /** JOINTS */
  belongsTo: Scalars['ID'];
};

export class Notification {
   __typename?: 'Notification';
  id: Scalars['ID'];
  notificationType: NotificationType;
  title: Scalars['String'];
  message: Scalars['String'];
  users: NotificationUser;
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
};

export class NotificationInput {
  notificationType: NotificationType;
  title: Scalars['String'];
  message: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  createdBy: Scalars['ID'];
};

export enum NotificationType {
  ChristmasGift = 'ChristmasGift',
  EasterGift = 'EasterGift',
  BackToSchool = 'BackToSchool'
}

export class NotificationUpdateInput {
  id: Scalars['ID'];
  notificationType: NotificationType;
  title: Scalars['String'];
  message: Scalars['String'];
  content?: Maybe<Scalars['String']>;
};

export class NotificationUser {
   __typename?: 'NotificationUser';
  id: Scalars['ID'];
  notification: Notification;
  user: User;
  createdBy?: Maybe<User>;
  isRead?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export class NotificationUserInput {
  notificationId: Scalars['ID'];
  userId: Scalars['ID'];
  createdBy: Scalars['ID'];
  isRead?: Maybe<Scalars['Boolean']>;
};

export class NotificationUserUpdateInput {
  id: Scalars['ID'];
  notificationId: Scalars['ID'];
  userId: Scalars['ID'];
  createdBy: Scalars['ID'];
  isRead?: Maybe<Scalars['Boolean']>;
};


export class Payment {
   __typename?: 'Payment';
  id: Scalars['ID'];
  paymentType: Scalars['String'];
  isLabeled: Scalars['Boolean'];
  amount: Scalars['Float'];
  currency: Scalars['String'];
  remarks: Scalars['String'];
  status: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  /** JOINTS */
  user: User;
  event: Event;
  createdBy: User;
};

export class PaymentInput {
  paymentType: PaymentTypes;
  isLabeled: Scalars['Boolean'];
  amount: Scalars['Float'];
  currency: Scalars['String'];
  remarks?: Maybe<Scalars['String']>;
  status: PaymentStatus;
  /** JOINTS */
  user: Scalars['ID'];
  eventId: Scalars['ID'];
  createdBy: Scalars['ID'];
};

export enum PaymentStatus {
  Pending = 'PENDING',
  Paid = 'PAID'
}

export enum PaymentTypes {
  P1 = 'P1',
  P2 = 'P2'
}

export class PaymentUpdateInput {
  id: Scalars['ID'];
  paymentType?: Maybe<PaymentTypes>;
  isLabeled: Scalars['Boolean'];
  amount: Scalars['Float'];
  currency: Scalars['String'];
  remarks?: Maybe<Scalars['String']>;
  status: PaymentStatus;
  /** JOINTS */
  user: Scalars['ID'];
  eventId: Scalars['ID'];
};

export enum PointTypes {
  Material = 'MATERIAL',
  Financial = 'FINANCIAL',
  Educational = 'EDUCATIONAL'
}

export class Post {
   __typename?: 'Post';
  id: Scalars['ID'];
  title: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  createdBy: User;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  comments: Array<Comment>;
};

export class PostInput {
  title: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy: Scalars['ID'];
};

export class PostUpdateInput {
  id: Scalars['ID'];
  title: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export class Query {
   __typename?: 'Query';
  getActivities: Array<Activity>;
  getActivity: Activity;
  getAllPosts: Array<Post>;
  getAllRewards: Array<Reward>;
  getCategories: Array<Category>;
  getCategory: Category;
  getChild: Child;
  getChildren: Array<Child>;
  getComment: Comment;
  getComments: Array<Comment>;
  getEvent: Event;
  getEvents: Array<Event>;
  getExpense: Expense;
  getExpenses: Array<Expense>;
  getFamilies: Array<Family>;
  getFamily: Family;
  getGalleries: Array<Gallery>;
  getGallery: Gallery;
  getNeed: Need;
  getNeedById: Need;
  getNeeds: Array<Need>;
  getNotification: Notification;
  getNotificationUserById: NotificationUser;
  getNotificationUsers: Array<NotificationUser>;
  getNotifications: Array<Notification>;
  getPayment: Payment;
  getPayments: Array<Payment>;
  getPostById: Post;
  getRewardById: Reward;
  getUser: User;
  getUsers: Array<User>;
  getValorization: Array<Valorization>;
  getValorizationById: Valorization;
  userLogin: User;
  validateUser: UserValidateOutput;
};


export class QueryGetActivityArgs {
  id: Scalars['String'];
};


export class QueryGetAllRewardsArgs {
  query?: Maybe<Scalars['String']>;
};


export class QueryGetCategoriesArgs {
  query?: Maybe<Scalars['String']>;
};


export class QueryGetCategoryArgs {
  id?: Maybe<Scalars['String']>;
};


export class QueryGetChildArgs {
  id: Scalars['String'];
};


export class QueryGetCommentArgs {
  query?: Maybe<CommentFindInput>;
};


export class QueryGetCommentsArgs {
  query?: Maybe<Scalars['String']>;
};


export class QueryGetEventArgs {
  id?: Maybe<Scalars['String']>;
};


export class QueryGetExpenseArgs {
  id: Scalars['String'];
};


export class QueryGetFamiliesArgs {
  query: FamilyFilterInput;
};


export class QueryGetFamilyArgs {
  id: Scalars['String'];
};


export class QueryGetGalleryArgs {
  id: Scalars['String'];
};


export class QueryGetNeedArgs {
  id: Scalars['String'];
};


export class QueryGetNeedByIdArgs {
  query?: Maybe<FindInput>;
};


export class QueryGetNeedsArgs {
  query?: Maybe<Scalars['String']>;
};


export class QueryGetNotificationArgs {
  id?: Maybe<Scalars['String']>;
};


export class QueryGetNotificationUserByIdArgs {
  id?: Maybe<Scalars['String']>;
};


export class QueryGetNotificationUsersArgs {
  query?: Maybe<Scalars['String']>;
};


export class QueryGetNotificationsArgs {
  query?: Maybe<Scalars['String']>;
};


export class QueryGetPaymentArgs {
  id: Scalars['String'];
};


export class QueryGetPostByIdArgs {
  id?: Maybe<Scalars['String']>;
};


export class QueryGetRewardByIdArgs {
  id?: Maybe<Scalars['String']>;
};


export class QueryGetUserArgs {
  id: Scalars['String'];
};


export class QueryGetUsersArgs {
  query: QueryFilterInput;
};


export class QueryGetValorizationArgs {
  query?: Maybe<Scalars['String']>;
};


export class QueryGetValorizationByIdArgs {
  id: Scalars['ID'];
};


export class QueryUserLoginArgs {
  query?: Maybe<UserLoginInput>;
};


export class QueryValidateUserArgs {
  query?: Maybe<UserValidateInput>;
};

export class QueryFilterInput {
  search?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['Object']>;
  sortOrder?: Maybe<SortOrder>;
  sortField?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export class Reward {
   __typename?: 'Reward';
  id: Scalars['ID'];
  lavel: RewardLavel;
  startPoint: Scalars['Int'];
  endPoint: Scalars['Int'];
  createdBy: User;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export class RewardInput {
  lavel: RewardLavel;
  startPoint: Scalars['Int'];
  endPoint: Scalars['Int'];
  createdBy: Scalars['ID'];
};

export enum RewardLavel {
  Bronze = 'BRONZE',
  Silver = 'SILVER',
  Gold = 'GOLD'
}

export class RewardUpdateInput {
  id: Scalars['ID'];
  lavel: RewardLavel;
  startPoint: Scalars['Int'];
  endPoint: Scalars['Int'];
};

/**
 * GraphQL allows you to define enumerations types (short enums), a language feature to express
 * the semantics of a type that has a fixed set of values
 */
export enum Roles {
  Admin = 'ADMIN',
  Staff = 'STAFF',
  User = 'USER'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export class SponsorInput {
  eventType?: Maybe<EventType>;
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  eventLogo: Scalars['String'];
  labor: Scalars['Boolean'];
  items: Scalars['Boolean'];
  money: Scalars['Boolean'];
  frequency?: Maybe<Scalars['String']>;
  needType: Scalars['String'];
  paymentFrequency: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  volunteerJob?: Maybe<Scalars['String']>;
  volunteerNumber?: Maybe<Scalars['Int']>;
  createdBy: Scalars['ID'];
};

export class SponsorUpdateInput {
  id: Scalars['ID'];
  eventType?: Maybe<EventType>;
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  eventLogo: Scalars['String'];
  labor: Scalars['Boolean'];
  items: Scalars['Boolean'];
  money: Scalars['Boolean'];
  frequency?: Maybe<Scalars['String']>;
  needType: Scalars['String'];
  paymentFrequency: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  volunteerJob?: Maybe<Scalars['String']>;
  volunteerNumber?: Maybe<Scalars['Int']>;
  createdBy: Scalars['ID'];
};

export class StaffInput {
  role?: Maybe<Roles>;
  username: Scalars['String'];
  fullName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export class SupporterInput {
  eventType?: Maybe<EventType>;
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  eventLogo: Scalars['String'];
  labor: Scalars['Boolean'];
  items: Scalars['Boolean'];
  money: Scalars['Boolean'];
  frequency?: Maybe<Scalars['String']>;
  needType: Scalars['String'];
  paymentFrequency: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  volunteerJob?: Maybe<Scalars['String']>;
  volunteerNumber?: Maybe<Scalars['Int']>;
  createdBy: Scalars['ID'];
};

export class SupporterUpdateInput {
  id: Scalars['ID'];
  eventType?: Maybe<EventType>;
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  eventLogo: Scalars['String'];
  labor: Scalars['Boolean'];
  items: Scalars['Boolean'];
  money: Scalars['Boolean'];
  frequency?: Maybe<Scalars['String']>;
  needType: Scalars['String'];
  paymentFrequency: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  volunteerJob?: Maybe<Scalars['String']>;
  volunteerNumber?: Maybe<Scalars['Int']>;
  createdBy: Scalars['ID'];
};

/** PRIVATE DATA = "UsersPrivate" root collection */
export class User {
   __typename?: 'User';
  /** COMMON */
  role: Roles;
  id: Scalars['ID'];
  username: Scalars['String'];
  fullName: Scalars['String'];
  providerId?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['String']>;
  photoUrl?: Maybe<Scalars['String']>;
  isNewUser?: Maybe<Scalars['Boolean']>;
  notifications?: Maybe<NotificationUser>;
  /** SPECIFIC */
  isSponsor?: Maybe<Scalars['Boolean']>;
  isVolunteer?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  hasDrivingLicence?: Maybe<Scalars['Boolean']>;
  hasVehicle?: Maybe<Scalars['Boolean']>;
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;
  comment?: Maybe<Scalars['String']>;
  activities?: Maybe<Array<Maybe<Scalars['String']>>>;
  tutolage?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export class UserFilterInput {
  search?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export class UserInput {
  id: Scalars['ID'];
  role?: Maybe<Roles>;
  username: Scalars['String'];
  fullName: Scalars['String'];
  providerId: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['String']>;
  photoUrl?: Maybe<Scalars['String']>;
  isNewUser?: Maybe<Scalars['Boolean']>;
  isSponsor?: Maybe<Scalars['Boolean']>;
  isSupporter?: Maybe<Scalars['Boolean']>;
  isVolunteer?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isOnline?: Maybe<Scalars['Boolean']>;
};

export class UserLoginInput {
  email: Scalars['String'];
  password: Scalars['String'];
};

export enum UserStatus {
  Volunteer = 'VOLUNTEER',
  Sponsor = 'SPONSOR'
}

export class UserUpdateInput {
  id: Scalars['ID'];
  role?: Maybe<Roles>;
  username?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  providerId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['String']>;
  photoUrl?: Maybe<Scalars['String']>;
  isNewUser?: Maybe<Scalars['Boolean']>;
  isSponsor?: Maybe<Scalars['Boolean']>;
  isSupporter?: Maybe<Scalars['Boolean']>;
  isVolunteer?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isOnline?: Maybe<Scalars['Boolean']>;
};

export class UserValidateInput {
  username?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export class UserValidateOutput {
   __typename?: 'UserValidateOutput';
  status: Scalars['Boolean'];
};

export class Valorization {
   __typename?: 'Valorization';
  id: Scalars['ID'];
  user: User;
  pointType: PointTypes;
  point: Scalars['Int'];
  createdBy?: Maybe<User>;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export class ValorizationInput {
  userId: Scalars['ID'];
  pointType: Scalars['String'];
  point: Scalars['Int'];
  createdBy: Scalars['ID'];
};

export class ValorizationUpdateInput {
  id: Scalars['ID'];
  userId: Scalars['ID'];
  pointType: Scalars['String'];
  point: Scalars['Int'];
  createdBy: Scalars['ID'];
};

export class VolunteerInput {
  eventType?: Maybe<EventType>;
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  eventLogo: Scalars['String'];
  labor: Scalars['Boolean'];
  items: Scalars['Boolean'];
  money: Scalars['Boolean'];
  frequency?: Maybe<Scalars['String']>;
  needType: Scalars['String'];
  paymentFrequency: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  startDate: Scalars['String'];
  endDate: Scalars['String'];
  startTime: Scalars['String'];
  endTime: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  volunteerJob?: Maybe<Scalars['String']>;
  volunteerNumber?: Maybe<Scalars['Int']>;
  createdBy: Scalars['ID'];
};

export class VolunteerUpdateInput {
  id: Scalars['ID'];
  eventType?: Maybe<EventType>;
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  eventLogo: Scalars['String'];
  labor: Scalars['Boolean'];
  items: Scalars['Boolean'];
  money: Scalars['Boolean'];
  frequency?: Maybe<Scalars['String']>;
  needType: Scalars['String'];
  paymentFrequency: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  startDate: Scalars['String'];
  endDate: Scalars['String'];
  startTime: Scalars['String'];
  endTime: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  volunteerJob?: Maybe<Scalars['String']>;
  volunteerNumber?: Maybe<Scalars['Int']>;
  createdBy: Scalars['ID'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  Activity: ResolverTypeWrapper<Activity>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  User: ResolverTypeWrapper<User>,
  Roles: Roles,
  NotificationUser: ResolverTypeWrapper<NotificationUser>,
  Notification: ResolverTypeWrapper<Notification>,
  NotificationType: NotificationType,
  Post: ResolverTypeWrapper<Post>,
  Comment: ResolverTypeWrapper<Comment>,
  Reward: ResolverTypeWrapper<Reward>,
  RewardLavel: RewardLavel,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Category: ResolverTypeWrapper<Category>,
  Child: ResolverTypeWrapper<Child>,
  Genders: Genders,
  Measurements: ResolverTypeWrapper<Measurements>,
  Need: ResolverTypeWrapper<Need>,
  needTypes: NeedTypes,
  Family: ResolverTypeWrapper<Family>,
  CarrierPrimary: ResolverTypeWrapper<CarrierPrimary>,
  CarrierSecondary: ResolverTypeWrapper<CarrierSecondary>,
  Address: ResolverTypeWrapper<Address>,
  CommentFindInput: CommentFindInput,
  Event: ResolverTypeWrapper<Event>,
  EventType: EventType,
  Expense: ResolverTypeWrapper<Expense>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  FamilyFilterInput: FamilyFilterInput,
  Gallery: ResolverTypeWrapper<Gallery>,
  GalleryTypes: GalleryTypes,
  FindInput: FindInput,
  Payment: ResolverTypeWrapper<Payment>,
  QueryFilterInput: QueryFilterInput,
  Object: ResolverTypeWrapper<Scalars['Object']>,
  SortOrder: SortOrder,
  Valorization: ResolverTypeWrapper<Valorization>,
  pointTypes: PointTypes,
  UserLoginInput: UserLoginInput,
  UserValidateInput: UserValidateInput,
  UserValidateOutput: ResolverTypeWrapper<UserValidateOutput>,
  Mutation: ResolverTypeWrapper<{}>,
  ActivityInput: ActivityInput,
  ActivityTypes: ActivityTypes,
  AdminInput: AdminInput,
  CategoryInput: CategoryInput,
  ChildInput: ChildInput,
  MeasurementInput: MeasurementInput,
  CommentInput: CommentInput,
  ExpenseInput: ExpenseInput,
  ExpenseTypes: ExpenseTypes,
  FamilyInput: FamilyInput,
  CarrierPrimaryInput: CarrierPrimaryInput,
  CarrierSecondaryInput: CarrierSecondaryInput,
  AddressInput: AddressInput,
  GalleryInput: GalleryInput,
  NeedInput: NeedInput,
  NotificationInput: NotificationInput,
  NotificationUserInput: NotificationUserInput,
  PaymentInput: PaymentInput,
  PaymentTypes: PaymentTypes,
  PaymentStatus: PaymentStatus,
  PostInput: PostInput,
  RewardInput: RewardInput,
  SponsorInput: SponsorInput,
  StaffInput: StaffInput,
  SupporterInput: SupporterInput,
  UserInput: UserInput,
  ValorizationInput: ValorizationInput,
  VolunteerInput: VolunteerInput,
  CommentDeleteInput: CommentDeleteInput,
  DeleteInput: DeleteInput,
  ActivityUpdateInput: ActivityUpdateInput,
  CategoryUpdateInput: CategoryUpdateInput,
  ChildUpdateInput: ChildUpdateInput,
  CommentUpdateInput: CommentUpdateInput,
  ExpenseUpdateInput: ExpenseUpdateInput,
  FamilyUpdateInput: FamilyUpdateInput,
  GalleryUpdateInput: GalleryUpdateInput,
  NeedUpdateInput: NeedUpdateInput,
  NotificationUpdateInput: NotificationUpdateInput,
  NotificationUserUpdateInput: NotificationUserUpdateInput,
  PaymentUpdateInput: PaymentUpdateInput,
  PostUpdateInput: PostUpdateInput,
  RewardUpdateInput: RewardUpdateInput,
  SponsorUpdateInput: SponsorUpdateInput,
  SupporterUpdateInput: SupporterUpdateInput,
  UserUpdateInput: UserUpdateInput,
  ValorizationUpdateInput: ValorizationUpdateInput,
  VolunteerUpdateInput: VolunteerUpdateInput,
  FamilyData: ResolverTypeWrapper<FamilyData>,
  UserFilterInput: UserFilterInput,
  UserStatus: UserStatus,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  Activity: Activity,
  ID: Scalars['ID'],
  String: Scalars['String'],
  Boolean: Scalars['Boolean'],
  User: User,
  Roles: Roles,
  NotificationUser: NotificationUser,
  Notification: Notification,
  NotificationType: NotificationType,
  Post: Post,
  Comment: Comment,
  Reward: Reward,
  RewardLavel: RewardLavel,
  Int: Scalars['Int'],
  Category: Category,
  Child: Child,
  Genders: Genders,
  Measurements: Measurements,
  Need: Need,
  needTypes: NeedTypes,
  Family: Family,
  CarrierPrimary: CarrierPrimary,
  CarrierSecondary: CarrierSecondary,
  Address: Address,
  CommentFindInput: CommentFindInput,
  Event: Event,
  EventType: EventType,
  Expense: Expense,
  Float: Scalars['Float'],
  FamilyFilterInput: FamilyFilterInput,
  Gallery: Gallery,
  GalleryTypes: GalleryTypes,
  FindInput: FindInput,
  Payment: Payment,
  QueryFilterInput: QueryFilterInput,
  Object: Scalars['Object'],
  SortOrder: SortOrder,
  Valorization: Valorization,
  pointTypes: PointTypes,
  UserLoginInput: UserLoginInput,
  UserValidateInput: UserValidateInput,
  UserValidateOutput: UserValidateOutput,
  Mutation: {},
  ActivityInput: ActivityInput,
  ActivityTypes: ActivityTypes,
  AdminInput: AdminInput,
  CategoryInput: CategoryInput,
  ChildInput: ChildInput,
  MeasurementInput: MeasurementInput,
  CommentInput: CommentInput,
  ExpenseInput: ExpenseInput,
  ExpenseTypes: ExpenseTypes,
  FamilyInput: FamilyInput,
  CarrierPrimaryInput: CarrierPrimaryInput,
  CarrierSecondaryInput: CarrierSecondaryInput,
  AddressInput: AddressInput,
  GalleryInput: GalleryInput,
  NeedInput: NeedInput,
  NotificationInput: NotificationInput,
  NotificationUserInput: NotificationUserInput,
  PaymentInput: PaymentInput,
  PaymentTypes: PaymentTypes,
  PaymentStatus: PaymentStatus,
  PostInput: PostInput,
  RewardInput: RewardInput,
  SponsorInput: SponsorInput,
  StaffInput: StaffInput,
  SupporterInput: SupporterInput,
  UserInput: UserInput,
  ValorizationInput: ValorizationInput,
  VolunteerInput: VolunteerInput,
  CommentDeleteInput: CommentDeleteInput,
  DeleteInput: DeleteInput,
  ActivityUpdateInput: ActivityUpdateInput,
  CategoryUpdateInput: CategoryUpdateInput,
  ChildUpdateInput: ChildUpdateInput,
  CommentUpdateInput: CommentUpdateInput,
  ExpenseUpdateInput: ExpenseUpdateInput,
  FamilyUpdateInput: FamilyUpdateInput,
  GalleryUpdateInput: GalleryUpdateInput,
  NeedUpdateInput: NeedUpdateInput,
  NotificationUpdateInput: NotificationUpdateInput,
  NotificationUserUpdateInput: NotificationUserUpdateInput,
  PaymentUpdateInput: PaymentUpdateInput,
  PostUpdateInput: PostUpdateInput,
  RewardUpdateInput: RewardUpdateInput,
  SponsorUpdateInput: SponsorUpdateInput,
  SupporterUpdateInput: SupporterUpdateInput,
  UserUpdateInput: UserUpdateInput,
  ValorizationUpdateInput: ValorizationUpdateInput,
  VolunteerUpdateInput: VolunteerUpdateInput,
  FamilyData: FamilyData,
  UserFilterInput: UserFilterInput,
  UserStatus: UserStatus,
};

export type ActivityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Activity'] = ResolversParentTypes['Activity']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  activityType?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  activity?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  addressLine1?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  addressLine2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  postalCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CarrierPrimaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['CarrierPrimary'] = ResolversParentTypes['CarrierPrimary']> = {
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  mobile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CarrierSecondaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['CarrierSecondary'] = ResolversParentTypes['CarrierSecondary']> = {
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  mobile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  values?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>,
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ChildResolvers<ContextType = any, ParentType extends ResolversParentTypes['Child'] = ResolversParentTypes['Child']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  gender?: Resolver<ResolversTypes['Genders'], ParentType, ContextType>,
  dob?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  childAge?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  extracurricular?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  medicalConditions?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  wishes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  seqNo?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  needsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  measurements?: Resolver<ResolversTypes['Measurements'], ParentType, ContextType>,
  needs?: Resolver<Array<ResolversTypes['Need']>, ParentType, ContextType>,
  family?: Resolver<ResolversTypes['Family'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType>,
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  eventType?: Resolver<ResolversTypes['EventType'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  eventLogo?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  labor?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  items?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  money?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  frequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  needType?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  paymentFrequency?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  shortDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  startDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  endDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  startTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  endTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  volunteerJob?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  volunteerNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ExpenseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Expense'] = ResolversParentTypes['Expense']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  expenseType?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isLabeled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  expenseDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  createdBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type FamilyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Family'] = ResolversParentTypes['Family']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isFacebookMember?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  carrierPrimary?: Resolver<ResolversTypes['CarrierPrimary'], ParentType, ContextType>,
  carrierSecondary?: Resolver<ResolversTypes['CarrierSecondary'], ParentType, ContextType>,
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>,
  children?: Resolver<Maybe<Array<Maybe<ResolversTypes['Child']>>>, ParentType, ContextType>,
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type FamilyDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['FamilyData'] = ResolversParentTypes['FamilyData']> = {
  totalData?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  data?: Resolver<ResolversTypes['Family'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type GalleryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Gallery'] = ResolversParentTypes['Gallery']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  galleryType?: Resolver<Maybe<ResolversTypes['GalleryTypes']>, ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MeasurementsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Measurements'] = ResolversParentTypes['Measurements']> = {
  footSize?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  wardrobeSize?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createActivity?: Resolver<ResolversTypes['Activity'], ParentType, ContextType, RequireFields<MutationCreateActivityArgs, 'data'>>,
  createAdmin?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateAdminArgs, 'data'>>,
  createCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, never>>,
  createChild?: Resolver<ResolversTypes['Child'], ParentType, ContextType, RequireFields<MutationCreateChildArgs, 'data'>>,
  createComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationCreateCommentArgs, never>>,
  createExpense?: Resolver<ResolversTypes['Expense'], ParentType, ContextType, RequireFields<MutationCreateExpenseArgs, 'data'>>,
  createFamily?: Resolver<ResolversTypes['Family'], ParentType, ContextType, RequireFields<MutationCreateFamilyArgs, 'data'>>,
  createGallery?: Resolver<ResolversTypes['Gallery'], ParentType, ContextType, RequireFields<MutationCreateGalleryArgs, 'data'>>,
  createNeed?: Resolver<ResolversTypes['Need'], ParentType, ContextType, RequireFields<MutationCreateNeedArgs, never>>,
  createNotification?: Resolver<ResolversTypes['Notification'], ParentType, ContextType, RequireFields<MutationCreateNotificationArgs, never>>,
  createNotificationUser?: Resolver<ResolversTypes['NotificationUser'], ParentType, ContextType, RequireFields<MutationCreateNotificationUserArgs, never>>,
  createPayment?: Resolver<ResolversTypes['Payment'], ParentType, ContextType, RequireFields<MutationCreatePaymentArgs, 'data'>>,
  createPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationCreatePostArgs, never>>,
  createReward?: Resolver<ResolversTypes['Reward'], ParentType, ContextType, RequireFields<MutationCreateRewardArgs, never>>,
  createSponsorEvent?: Resolver<ResolversTypes['Event'], ParentType, ContextType, RequireFields<MutationCreateSponsorEventArgs, 'data'>>,
  createStaff?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateStaffArgs, 'data'>>,
  createSupporterEvent?: Resolver<ResolversTypes['Event'], ParentType, ContextType, RequireFields<MutationCreateSupporterEventArgs, 'data'>>,
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'data'>>,
  createValorization?: Resolver<ResolversTypes['Valorization'], ParentType, ContextType, RequireFields<MutationCreateValorizationArgs, never>>,
  createVolunteerEvent?: Resolver<ResolversTypes['Event'], ParentType, ContextType, RequireFields<MutationCreateVolunteerEventArgs, 'data'>>,
  deleteActivity?: Resolver<ResolversTypes['Activity'], ParentType, ContextType, RequireFields<MutationDeleteActivityArgs, 'id'>>,
  deleteCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationDeleteCategoryArgs, 'id'>>,
  deleteChild?: Resolver<ResolversTypes['Child'], ParentType, ContextType, RequireFields<MutationDeleteChildArgs, 'id'>>,
  deleteCommentDoc?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationDeleteCommentDocArgs, never>>,
  deleteEvent?: Resolver<ResolversTypes['Event'], ParentType, ContextType, RequireFields<MutationDeleteEventArgs, 'id'>>,
  deleteExpense?: Resolver<ResolversTypes['Expense'], ParentType, ContextType, RequireFields<MutationDeleteExpenseArgs, 'id'>>,
  deleteFamily?: Resolver<ResolversTypes['Family'], ParentType, ContextType, RequireFields<MutationDeleteFamilyArgs, 'id'>>,
  deleteGallery?: Resolver<ResolversTypes['Gallery'], ParentType, ContextType, RequireFields<MutationDeleteGalleryArgs, 'id'>>,
  deleteNeed?: Resolver<ResolversTypes['Need'], ParentType, ContextType, RequireFields<MutationDeleteNeedArgs, never>>,
  deleteNotification?: Resolver<ResolversTypes['Notification'], ParentType, ContextType, RequireFields<MutationDeleteNotificationArgs, 'id'>>,
  deleteNotificationUser?: Resolver<ResolversTypes['NotificationUser'], ParentType, ContextType, RequireFields<MutationDeleteNotificationUserArgs, 'id'>>,
  deletePayment?: Resolver<ResolversTypes['Payment'], ParentType, ContextType, RequireFields<MutationDeletePaymentArgs, 'id'>>,
  deletePost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationDeletePostArgs, 'id'>>,
  deleteReward?: Resolver<ResolversTypes['Reward'], ParentType, ContextType, RequireFields<MutationDeleteRewardArgs, 'id'>>,
  deleteUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>,
  deleteValorization?: Resolver<ResolversTypes['Valorization'], ParentType, ContextType, RequireFields<MutationDeleteValorizationArgs, 'id'>>,
  updateActivity?: Resolver<ResolversTypes['Activity'], ParentType, ContextType, RequireFields<MutationUpdateActivityArgs, never>>,
  updateCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, never>>,
  updateChild?: Resolver<Maybe<ResolversTypes['Child']>, ParentType, ContextType, RequireFields<MutationUpdateChildArgs, never>>,
  updateComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationUpdateCommentArgs, never>>,
  updateExpense?: Resolver<ResolversTypes['Expense'], ParentType, ContextType, RequireFields<MutationUpdateExpenseArgs, never>>,
  updateFamily?: Resolver<ResolversTypes['Family'], ParentType, ContextType, RequireFields<MutationUpdateFamilyArgs, never>>,
  updateGallery?: Resolver<ResolversTypes['Gallery'], ParentType, ContextType, RequireFields<MutationUpdateGalleryArgs, 'data'>>,
  updateNeed?: Resolver<ResolversTypes['Need'], ParentType, ContextType, RequireFields<MutationUpdateNeedArgs, never>>,
  updateNotification?: Resolver<ResolversTypes['Notification'], ParentType, ContextType, RequireFields<MutationUpdateNotificationArgs, never>>,
  updateNotificationUser?: Resolver<ResolversTypes['NotificationUser'], ParentType, ContextType, RequireFields<MutationUpdateNotificationUserArgs, never>>,
  updatePayment?: Resolver<ResolversTypes['Payment'], ParentType, ContextType, RequireFields<MutationUpdatePaymentArgs, never>>,
  updatePost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationUpdatePostArgs, never>>,
  updateReward?: Resolver<ResolversTypes['Reward'], ParentType, ContextType, RequireFields<MutationUpdateRewardArgs, never>>,
  updateSponsorEvent?: Resolver<ResolversTypes['Event'], ParentType, ContextType, RequireFields<MutationUpdateSponsorEventArgs, 'data'>>,
  updateSupporterEvent?: Resolver<ResolversTypes['Event'], ParentType, ContextType, RequireFields<MutationUpdateSupporterEventArgs, 'data'>>,
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'data'>>,
  updateValorization?: Resolver<ResolversTypes['Valorization'], ParentType, ContextType, RequireFields<MutationUpdateValorizationArgs, never>>,
  updateVolunteerEvent?: Resolver<ResolversTypes['Event'], ParentType, ContextType, RequireFields<MutationUpdateVolunteerEventArgs, 'data'>>,
};

export type NeedResolvers<ContextType = any, ParentType extends ResolversParentTypes['Need'] = ResolversParentTypes['Need']> = {
  needType?: Resolver<ResolversTypes['needTypes'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isLongTermNeed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  seqNo?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  testingError?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  child?: Resolver<ResolversTypes['Child'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type NotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Notification'] = ResolversParentTypes['Notification']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  notificationType?: Resolver<ResolversTypes['NotificationType'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  users?: Resolver<ResolversTypes['NotificationUser'], ParentType, ContextType>,
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type NotificationUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationUser'] = ResolversParentTypes['NotificationUser']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  notification?: Resolver<ResolversTypes['Notification'], ParentType, ContextType>,
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  isRead?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export interface ObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Object'], any> {
  name: 'Object'
}

export type PaymentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Payment'] = ResolversParentTypes['Payment']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  paymentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isLabeled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  remarks?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  event?: Resolver<ResolversTypes['Event'], ParentType, ContextType>,
  createdBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  longDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  shortDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  createdBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  comments?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getActivities?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType>,
  getActivity?: Resolver<ResolversTypes['Activity'], ParentType, ContextType, RequireFields<QueryGetActivityArgs, 'id'>>,
  getAllPosts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>,
  getAllRewards?: Resolver<Array<ResolversTypes['Reward']>, ParentType, ContextType, RequireFields<QueryGetAllRewardsArgs, never>>,
  getCategories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryGetCategoriesArgs, never>>,
  getCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<QueryGetCategoryArgs, never>>,
  getChild?: Resolver<ResolversTypes['Child'], ParentType, ContextType, RequireFields<QueryGetChildArgs, 'id'>>,
  getChildren?: Resolver<Array<ResolversTypes['Child']>, ParentType, ContextType>,
  getComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<QueryGetCommentArgs, never>>,
  getComments?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<QueryGetCommentsArgs, never>>,
  getEvent?: Resolver<ResolversTypes['Event'], ParentType, ContextType, RequireFields<QueryGetEventArgs, never>>,
  getEvents?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType>,
  getExpense?: Resolver<ResolversTypes['Expense'], ParentType, ContextType, RequireFields<QueryGetExpenseArgs, 'id'>>,
  getExpenses?: Resolver<Array<ResolversTypes['Expense']>, ParentType, ContextType>,
  getFamilies?: Resolver<Array<ResolversTypes['Family']>, ParentType, ContextType, RequireFields<QueryGetFamiliesArgs, 'query'>>,
  getFamily?: Resolver<ResolversTypes['Family'], ParentType, ContextType, RequireFields<QueryGetFamilyArgs, 'id'>>,
  getGalleries?: Resolver<Array<ResolversTypes['Gallery']>, ParentType, ContextType>,
  getGallery?: Resolver<ResolversTypes['Gallery'], ParentType, ContextType, RequireFields<QueryGetGalleryArgs, 'id'>>,
  getNeed?: Resolver<ResolversTypes['Need'], ParentType, ContextType, RequireFields<QueryGetNeedArgs, 'id'>>,
  getNeedById?: Resolver<ResolversTypes['Need'], ParentType, ContextType, RequireFields<QueryGetNeedByIdArgs, never>>,
  getNeeds?: Resolver<Array<ResolversTypes['Need']>, ParentType, ContextType, RequireFields<QueryGetNeedsArgs, never>>,
  getNotification?: Resolver<ResolversTypes['Notification'], ParentType, ContextType, RequireFields<QueryGetNotificationArgs, never>>,
  getNotificationUserById?: Resolver<ResolversTypes['NotificationUser'], ParentType, ContextType, RequireFields<QueryGetNotificationUserByIdArgs, never>>,
  getNotificationUsers?: Resolver<Array<ResolversTypes['NotificationUser']>, ParentType, ContextType, RequireFields<QueryGetNotificationUsersArgs, never>>,
  getNotifications?: Resolver<Array<ResolversTypes['Notification']>, ParentType, ContextType, RequireFields<QueryGetNotificationsArgs, never>>,
  getPayment?: Resolver<ResolversTypes['Payment'], ParentType, ContextType, RequireFields<QueryGetPaymentArgs, 'id'>>,
  getPayments?: Resolver<Array<ResolversTypes['Payment']>, ParentType, ContextType>,
  getPostById?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<QueryGetPostByIdArgs, never>>,
  getRewardById?: Resolver<ResolversTypes['Reward'], ParentType, ContextType, RequireFields<QueryGetRewardByIdArgs, never>>,
  getUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserArgs, 'id'>>,
  getUsers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUsersArgs, 'query'>>,
  getValorization?: Resolver<Array<ResolversTypes['Valorization']>, ParentType, ContextType, RequireFields<QueryGetValorizationArgs, never>>,
  getValorizationById?: Resolver<ResolversTypes['Valorization'], ParentType, ContextType, RequireFields<QueryGetValorizationByIdArgs, 'id'>>,
  userLogin?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryUserLoginArgs, never>>,
  validateUser?: Resolver<ResolversTypes['UserValidateOutput'], ParentType, ContextType, RequireFields<QueryValidateUserArgs, never>>,
};

export type RewardResolvers<ContextType = any, ParentType extends ResolversParentTypes['Reward'] = ResolversParentTypes['Reward']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  lavel?: Resolver<ResolversTypes['RewardLavel'], ParentType, ContextType>,
  startPoint?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  endPoint?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  createdBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  role?: Resolver<ResolversTypes['Roles'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  providerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  dob?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  photoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  isNewUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  notifications?: Resolver<Maybe<ResolversTypes['NotificationUser']>, ParentType, ContextType>,
  isSponsor?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  isVolunteer?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  isVerified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  isOnline?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  hasDrivingLicence?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  hasVehicle?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  languages?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  activities?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  tutolage?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UserValidateOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserValidateOutput'] = ResolversParentTypes['UserValidateOutput']> = {
  status?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ValorizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Valorization'] = ResolversParentTypes['Valorization']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  pointType?: Resolver<ResolversTypes['pointTypes'], ParentType, ContextType>,
  point?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = any> = {
  Activity?: ActivityResolvers<ContextType>,
  Address?: AddressResolvers<ContextType>,
  CarrierPrimary?: CarrierPrimaryResolvers<ContextType>,
  CarrierSecondary?: CarrierSecondaryResolvers<ContextType>,
  Category?: CategoryResolvers<ContextType>,
  Child?: ChildResolvers<ContextType>,
  Comment?: CommentResolvers<ContextType>,
  Event?: EventResolvers<ContextType>,
  Expense?: ExpenseResolvers<ContextType>,
  Family?: FamilyResolvers<ContextType>,
  FamilyData?: FamilyDataResolvers<ContextType>,
  Gallery?: GalleryResolvers<ContextType>,
  Measurements?: MeasurementsResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Need?: NeedResolvers<ContextType>,
  Notification?: NotificationResolvers<ContextType>,
  NotificationUser?: NotificationUserResolvers<ContextType>,
  Object?: GraphQLScalarType,
  Payment?: PaymentResolvers<ContextType>,
  Post?: PostResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Reward?: RewardResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
  UserValidateOutput?: UserValidateOutputResolvers<ContextType>,
  Valorization?: ValorizationResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
