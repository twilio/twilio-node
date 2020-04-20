declare class RestException extends Error {
  status: number;
  message: string;
  code: number;
  moreInfo: string;
  details: object;
}

export = RestException;
