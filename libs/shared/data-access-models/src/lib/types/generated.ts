export type Maybe<T> = T | null;
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
