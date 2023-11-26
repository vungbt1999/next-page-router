import { ICommonItem } from './common';

export interface IPost extends ICommonItem {
  title: string;
  content: string;
  userId: string;
  career: string;
  general: string;
  isAnonymously?: boolean;
  assetUrls?: string[];
  embedUrl?: string;
}

export interface IPostFindManyReq {
  q?: string;
}

export interface ICreatePostReq {
  title: string;
  content: string;
  userId: string;
  career: string;
  general: string;
}
