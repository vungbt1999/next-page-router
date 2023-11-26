import axiosClient from './axios-client';

const apiName = {
  files: '/files',
  signUploadUrl: '/files/sign-upload-url'
};

export const fileApis = {
  getSignUploadUrl: (name: string) => {
    return axiosClient.post<{ name: string }, string>(
      apiName.signUploadUrl,
      { name },
      { isAuth: false }
    );
  }
};
