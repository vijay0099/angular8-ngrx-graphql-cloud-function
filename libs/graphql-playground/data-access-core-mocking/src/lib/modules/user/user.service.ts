import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

// AUTO GENERATED TYPES
import {
  User,
  UserInput,
  AdminInput,
  StaffInput,
  NotificationUser
  // Post,
} from '@monorepo/graphql-playground/data-access-models';

// FAKE DATA
import {
  users,
  notificationUsers
  // posts,
  // comments
} from '@monorepo/graphql-playground/data-access-data';

@Injectable()
export class UserService {
  private readonly users: any[] = users;
  private readonly notificationUsers: any[] = notificationUsers;
  // private readonly usersPrivate: any[] = usersPrivate;
  // private readonly posts: any[] = posts;
  // private readonly comments: any[] = comments;

  // QUERIES ========================================================

  async findUserById(id: string): Promise<User> {
    return this.users.find(user => user.id === id);
  }

  async findUsers(): Promise<User[]> {
    console.log(this.users);
    return this.users;
  }

  // async findPrivateUserById(id: string): Promise<UserPrivate> {
  //   return this.users.find(user => user.id === id);
  // }

  // async findUsersPrivateProfile(): Promise<UserPrivate[]> {
  //   return this.usersPrivate;
  // }

  // MUTATIONS ========================================================

  // CREATE
  async createNewAdmin(user: AdminInput): Promise<User> {
    const { email } = user;
    const emailTaken = users.some(u => u.email === email);
    if (emailTaken) {
      throw new Error('Email taken.');
    }
    const newUser: any = {
      id: uuidv4(),
      ...user
    };
    console.log('New admin created: ', { ...user });
    this.users.push(newUser);
    return newUser;
  }

  async createNewStaff(user: StaffInput): Promise<User> {
    const { email } = user;
    const emailTaken = users.some(u => u.email === email);
    if (emailTaken) {
      throw new Error('Email taken.');
    }
    const newUser: any = {
      id: uuidv4(),
      ...user
    };
    console.log('New staff created: ', { ...user });

    this.users.push(newUser);
    return newUser;
  }

  async createNewUser(user: UserInput): Promise<User> {
    const { email } = user;
    const emailTaken = users.some(u => u.email === email);
    if (emailTaken) {
      throw new Error('Email taken.');
    }
    const newUser: any = {
      id: uuidv4(),
      ...user
    };
    console.log('New user created: ', { ...user });
    this.users.push(newUser);
    return newUser;
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

  
  async filterNotificationUserByUserId({ id }): Promise<NotificationUser[]> {
    return this.notificationUsers.filter(notificationUser => notificationUser.userId === id);
  }
  
  // async filterPostsByUserId({ id }): Promise<Post[]> {
  //   return this.posts.filter(post => post.author === id);
  // }

  // async filterCommentsByUserId({ id }): Promise<Comment[]> {
  //   return this.comments.filter(comment => comment.author === id);
  // }
}
