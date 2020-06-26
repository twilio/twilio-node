declare class Response<TPayload> {
  constructor(statusCode: number, body: TPayload, headers: any);
  toString(): string;
}

export = Response;
