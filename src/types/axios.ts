export enum ResponseCode {
  SUCCESS = 'SUCCESS',
  UNAUTHORIZED = 'UNAUTHORIZED',
  USER_ACTIVED = 'USER_ACTIVED'
}

export interface ResponseBase<T> {
  data: T;
  message?: ResponseCode;
  page: number;
  pageSize: number;
  totalPages: number;
  count: number;
}

export interface DataResponseError {
  error: string;
  message: string;
  status: number;
  path: string;
}
