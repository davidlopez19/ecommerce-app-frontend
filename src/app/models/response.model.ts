export class ResponseModel<T> {
  statusCode: number;
  message: string;
  model: T | undefined;

  constructor() {
    (this.message = ''), (this.statusCode = 200);
  }
}
