'use strict';

var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

/**
 * Initialize the ApplicationContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique Application Sid
 *
 * @returns {ApplicationContext}
 */
function ApplicationContext(version, accountSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/Applications/<% sid %>.json', this._solution);
}

/**
 * Deletes the ApplicationInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
ApplicationContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

/**
 * Fetch a ApplicationInstance
 *
 * @returns Fetched ApplicationInstance
 */
ApplicationContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return ApplicationInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Update the ApplicationInstance
 *
 * @param string [opts.friendlyName] - Human readable description of this resource
 * @param string [opts.apiVersion] - The API version to use
 * @param string [opts.voiceUrl] - URL Twilio will make requests to when relieving a call
 * @param string [opts.voiceMethod] - HTTP method to use with the URL
 * @param string [opts.voiceFallbackUrl] - Fallback URL
 * @param string [opts.voiceFallbackMethod] - HTTP method to use with the fallback url
 * @param string [opts.statusCallback] - URL to hit with status updates
 * @param string [opts.statusCallbackMethod] - HTTP method to use with the status callback
 * @param string [opts.voiceCallerIdLookup] - True or False
 * @param string [opts.smsUrl] - URL Twilio will request when receiving an SMS
 * @param string [opts.smsMethod] - HTTP method to use with sms_url
 * @param string [opts.smsFallbackUrl] - Fallback URL if there's an error parsing TwiML
 * @param string [opts.smsFallbackMethod] - HTTP method to use with sms_fallback_method
 * @param string [opts.smsStatusCallback] - URL Twilio with request with status updates
 * @param string [opts.messageStatusCallback] - URL to make requests to with status updates
 *
 * @returns Updated ApplicationInstance
 */
ApplicationContext.prototype.update = function update(self, opts) {
  var data = values.of({
    'Friendlyname': friendlyName,
    'Apiversion': apiVersion,
    'Voiceurl': voiceUrl,
    'Voicemethod': voiceMethod,
    'Voicefallbackurl': voiceFallbackUrl,
    'Voicefallbackmethod': voiceFallbackMethod,
    'Statuscallback': statusCallback,
    'Statuscallbackmethod': statusCallbackMethod,
    'Voicecalleridlookup': voiceCallerIdLookup,
    'Smsurl': smsUrl,
    'Smsmethod': smsMethod,
    'Smsfallbackurl': smsFallbackUrl,
    'Smsfallbackmethod': smsFallbackMethod,
    'Smsstatuscallback': smsStatusCallback,
    'Messagestatuscallback': messageStatusCallback,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return ApplicationInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
  );
};

