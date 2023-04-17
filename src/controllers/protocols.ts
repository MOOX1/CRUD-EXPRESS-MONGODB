export interface IHttpResponse<T> {
  status: number;
  body: T | string;
}
