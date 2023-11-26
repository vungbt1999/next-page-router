import { ICommonItem } from '.';

export interface IComment extends ICommonItem {
  userId: string;
  postId: string;
  content: string;
  parentId?: string;
}
