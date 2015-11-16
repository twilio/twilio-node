'use strict';

require('rootpath')();
var process = require('process');
var RequestClient = require('lib/base/RequestClient');
var moduleinfo = require('package.json');

var Twilio = function(accountSid, authToken, httpClient, environment) {
  console.log('hi');
  var environment = environment || process.env;
  this.accountSid = accountSid || environment.TWILIO_ACCOUNT_SID;
  this.authToken = authToken || environment.TWILIO_AUTH_TOKEN;

  if (!this.accountSid || !this.authToken)
    throw "Credentials are required to create a Twilio client";

  this.auth = [this.accountSid, this.authToken];
  this.httpClient = httpClient || RequestClient;
  console.log('hl');
};

Twilio.prototype.request = function(method, url, params, data, headers, auth, timeout, allowRedirects) {
  auth = this.auth || auth;
  headers = headers || {};
  allowRedirects = allowRedirects || false;

  headers['User-Agent'] = 'twilio-node/' + moduleinfo.version;
  headers['Accept-Charset'] = 'utf-8';

  if (method == 'POST' && !headers['Content-Type'])
    headers['Content-Type'] = 'application/x-www-form-urlencoded';

  if (!headers['Accept'])
    headers['Accept'] = 'application/json';

  return this.httpClient.request(method, url, params, data, headers, auth, timeout, allowRedirects);
};

module.exports = Twilio;
