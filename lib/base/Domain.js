'use strict';

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
Domain.prototype.absoluteUrl = function(uri) {
  const trim = (str, c = '\\s') => str.replace(new RegExp(`^([${c}]*)(.*?)([${c}]*)$`), '$2');
  const cleanUri = trim(uri, '/'), cleanBaseUrl = trim(this.baseUrl, '/');
  return cleanBaseUrl + '/' + cleanUri;
};

/**
 * Make request to this domain
 *
 * @param {object} opts request options
 * @return {Promise} request promise
 */
Domain.prototype.request = function(opts) {
  const uri = {
    uri: this.absoluteUrl(opts.uri),
  };
  return this.twilio.request(Object.assign(opts, uri));
};

module.exports = Domain;
