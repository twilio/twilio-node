"use strict";
const { trim } = require("./utility");

/**
 * Base domain object
 *
 * @constructor
 *
 * @param {Twilio} twilio - A Twilio Client
 * @param {string} baseUrl - Base url for this domain
 */
function Domain(twilio, baseUrl) {
  this.twilio = twilio;
  this.baseUrl = baseUrl;
}

/**
 * Turn a uri into an absolute url
 *
 * @param  {string} uri uri to transform
 * @return {string} absolute url
 */
Domain.prototype.absoluteUrl = function (uri) {
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
};

/**
 * Make request to this domain
 *
 * @param {object} opts request options
 * @return {Promise} request promise
 */
Domain.prototype.request = function (opts) {
  return this.twilio.request({
    ...opts,
    uri: this.absoluteUrl(opts.uri),
  });
};

module.exports = Domain;
