"use strict";
import Response from "../http/response";

export default class RestException extends Error {
  status: number;
  message: string;
  code: number;
  moreInfo: string;
  details: object;

  constructor(response: Response<any>) {
    super("[HTTP " + response.statusCode + "] Failed to execute request");

    const body =
      typeof response.body === "string"
        ? JSON.parse(response.body)
        : response.body;
    this.status = response.statusCode;
    this.message = body.message;
    this.code = body.code;
    this.moreInfo = body.more_info; /* jshint ignore:line */
    this.details = body.details;
  }
}
