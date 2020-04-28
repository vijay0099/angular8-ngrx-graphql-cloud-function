import {
  children,
  needs,
  posts,
  comments,
  galleries,
  notifications,
  notificationUsers,
  users,
  usernames,
  families,
  categories
} from '../../../../../../libs/graphql-playground/data-access-data/src';

type Families = typeof families;
type Children = typeof children;
type Needs = typeof needs;
type Posts = typeof posts;
type Comments = typeof comments;
type Galleries = typeof galleries;
type Notifications = typeof notifications;
type NotificationUsers = typeof notificationUsers;
type Users = typeof users;
type Usernames = typeof usernames;
type Categories = typeof categories;

export type Data =
  | Families
  | Children
  | Needs
  | Posts
  | Comments
  | Galleries
  | Notifications
  | NotificationUsers
  | Users
  | Usernames
  | Categories;
