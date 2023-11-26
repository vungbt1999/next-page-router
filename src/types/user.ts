import { ICommonItem } from '.';

export enum EUserRole {
  Admin = 'admin',
  Employee = 'employee',
  Employer = 'employer'
}

export interface IUser extends ICommonItem {
  username: string;
  password: string;
  avatarUrl?: string;
  role?: EUserRole;
}
