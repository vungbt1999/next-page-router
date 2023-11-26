import { IUser } from '.';

export interface IJwtRes {
  accessToken: string;
  refreshToken: string;
  expires: string;
}

export interface ISignUpReq extends Pick<IUser, 'username' | 'password' | 'role'> {}

export interface ISignUpRes {
  user: IUser;
  jwt: IJwtRes;
}

export interface ISignInRes {
  user: IUser;
  jwt: IJwtRes;
}

export interface ISignInReq {
  username: string;
  password: string;
}
