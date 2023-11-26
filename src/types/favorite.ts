import { ICommonItem } from '.';

export interface IFavorite extends ICommonItem {
  userId: string;
  postId: string;
}
