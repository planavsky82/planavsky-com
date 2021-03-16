import { UserModel } from '@api-models/user';

export interface User extends UserModel {
  loggedIn: boolean;
}
