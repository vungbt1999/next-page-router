import { ISignUpRes, ISignUpReq, ISignInRes, ISignInReq } from '@/types';
import axiosClient from './axios-client';

const apiName = {
  auth: '/auth',
  signUp: '/auth/sign-up',
  signIn: '/auth/sign-in'
};

export const authApi = {
  signUp: (body: ISignUpReq) => {
    return axiosClient.post<ISignUpReq, ISignUpRes>(apiName.signUp, body, { isAuth: false });
  },
  signIn: (body: ISignInReq) => {
    return axiosClient.post<ISignInReq, ISignInRes>(apiName.signIn, body, { isAuth: false });
  }
};
