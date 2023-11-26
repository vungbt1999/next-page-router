import { ICreatePostReq, IPost, IPostFindManyReq } from '@/types';
import axiosClient from './axios-client';

const apiName = {
  posts: '/posts'
};

export const postApis = {
  create: (body: ICreatePostReq) => {
    return axiosClient.post<ICreatePostReq, IPost>(apiName.posts, body, { isAuth: false });
  },
  findMany: () => {
    return axiosClient.get<IPostFindManyReq, IPost>(apiName.posts, undefined, { isAuth: false });
  }
};
