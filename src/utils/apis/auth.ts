import axiosClient from './axios-client';

const apiName = {
  auth: '/auth'
};

export const authApi = {
  signUp: () => {
    return axiosClient.post(apiName.auth, undefined, { isAuth: false });
  },
  signIn: () => {
    return axiosClient.post(apiName.auth, undefined, { isAuth: false });
  }
};
