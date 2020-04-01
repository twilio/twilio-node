'use strict';

class RestException extends Error {
  constructor(response) {
    super('[HTTP ' + response.statusCode + '] Failed to execute request');

    const body = response.body === 'string' ? JSON.parse(response.body) : response.body;
    this.status = response.statusCode;
    this.message = body.message;
    this.code = body.code;
    this.moreInfo = body.more_info; /* jshint ignore:line */
    this.detail = body.detail;
  }
}

module.exports = RestException;
