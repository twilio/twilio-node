"use strict";

export default class RestException extends Error {
  status: number;
  message: string;
  code: number;
  moreInfo: string;
  details: object;

  constructor(response) {
    super("[HTTP " + response.statusCode + "] Failed to execute request");
    const [body, bodyParseError] = parseResponseBody(response.body);

    this.status = response.statusCode;
    if (body) {
      this.message = body.message;
      this.code = body.code;
      this.moreInfo = body.more_info; /* jshint ignore:line */
      this.details = body.details;
    }
    if (body === null) {
      this.message = "Failed to parse response body";
      this.code = 12100;
      this.moreInfo = "https://www.twilio.com/docs/api/errors/12100";
      this.details = { error: bodyParseError };
    }
  }
}
/**
 * @param {serialized object | object} response_body
 * @desc returns a tuple containing the reponse_body in object form or null
 * and an json parse error.
 * @returns {[responseBody: object | null , err]} err is the json parse error
 */
function parseResponseBody(response_body) {
  let body = {};
  let err = null;
  try {
    body = JSON.parse(response_body);
  } catch (catchError) {
    const isObject =
      Object.prototype.toString.call(response_body) === "[object Object]";
    body = isObject ? response_body : null;
    err = catchError;
  }
  return [body, err];
}
