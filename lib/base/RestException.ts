import Response from "../http/response";

interface RestExceptionError {
  status: number;
  message: string;
  code: number;
  moreInfo: string;
  details: object;
}

export default class RestException extends Error implements RestExceptionError {
  status: number;
  message: string;
  code: number;
  moreInfo: string;
  details: object;

  constructor(response: Response<any>) {
    super("[HTTP " + response.statusCode + "] Failed to execute request");
    const isResponseBodyString = typeof response.body == "string";
    const body = isResponseBodyString
      ? parseResponseBody(response.body)
      : response.body;

    this.status = response.statusCode;
    if (body !== null) {
      this.message = body.message;
      this.code = body.code;
      this.moreInfo = body.more_info; /* jshint ignore:line */
      this.details = body.details;
    }
  }
}

function parseResponseBody(response_body: string): RestExceptionError | null {
  let body = null;
  try {
    body = JSON.parse(response_body);
  } catch (catchError) {
    body = null;
  }

  return body;
}
