import { ICommonItem } from '.';

export enum EReportReason {
  Spam = 'spam',
  Inappropriate = 'inappropriate',
  Other = 'other'
}

export interface IReport extends ICommonItem {
  userId: string;
  postId: string;
  reason: EReportReason;
  details?: string;
}
