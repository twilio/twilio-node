"use strict";

import { BaseTwilio, RequestOpts } from "./BaseTwilio";
import { trim } from "./utility";

/**
 * Base domain object
 *
 * @constructor
 *
 * @param {Twilio} twilio - A Twilio Client
 * @param {string} baseUrl - Base url for this domain
 */
export default class Domain {

  /**
   * Base domain object
   *
   * @constructor
   *
   * @param {Twilio} twilio - A Twilio Client
   * @param {string} baseUrl - Base url for this domain
   */
  constructor(public twilio: BaseTwilio, public baseUrl: string) {}

  /**
   * Turn a uri into an absolute url
   *
   * @param  {string} uri uri to transform
   * @return {string} absolute url
   */
  absoluteUrl(uri: string): string {
    var result = "";
    if (typeof this.baseUrl === "string") {
      const cleanBaseUrl = trim(this.baseUrl, "/");
      result += cleanBaseUrl;
      result += "/";
    }
    if (typeof uri === "string") {
      uri = trim(uri, "/");
      if (result === "") {
        result += "/";
      }
      result += uri;
    }
    return result;
  }

  /**
   * Make request to this domain
   *
   * @param {object} opts request options
   * @return {Promise} request promise
   */
  request(opts?: RequestOpts): Promise<any> {
    return this.twilio.request({
      ...opts,
      uri: this.absoluteUrl(opts.uri),
    });
  }
}
