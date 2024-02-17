export interface BaseResponse<T> {
  result: Result;
  data: T;
}

interface Result {
  message: string;
  ok: boolean;
  responseCode: string;
}

export interface BasePagination<T> {
  pageSize: number;
  pageNumber: number;
  totalRecord: number;
  totalPages: number;
  content: T
}
