import { EUserRole, ISignInRes, IUser } from '@/types';

export interface Token {
  accessToken: string;
  accessTokenExpires: string;
}

declare module 'next-auth/jwt' {
  interface JWT extends Token {}
}

declare module 'next-auth' {
  interface Session {
    token?: Token;
    user?: IUser;
    role?: EUserRole;
    expires: string;
  }

  interface User extends ISignInRes {
    id: string;
  }
}
