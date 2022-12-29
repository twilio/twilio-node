'use strict';

class RestException extends Error {
  constructor(response) {
    super('[HTTP ' + response.statusCode + '] Failed to execute request');
    const [body, err] = parseResponseBody(response.body);

    this.status = response.statusCode;
    if (body) {
      this.message = body.message;
      this.code = body.code;
      this.moreInfo = body.more_info; /* jshint ignore:line */
      this.details = body.details;
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
  } catch (err) {
    const isObject =
      Object.prototype.toString.call(response_body) === '[object Object]';
    body = isObject ? response_body : null;
    err = err;
  }
  return [body, err];
}
module.exports = RestException;
