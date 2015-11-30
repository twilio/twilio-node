'use strict';

var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

/**
 * Initialize the IncomingPhoneNumberContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} ownerAccountSid: The owner_account_sid
 * @param {sid} sid: Fetch by unique incoming-phone-number Sid
 *
 * @returns {IncomingPhoneNumberContext}
 */
function IncomingPhoneNumberContext(version, ownerAccountSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    ownerAccountSid: ownerAccountSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% owner_account_sid %>/IncomingPhoneNumbers/<% sid %>.json', this._solution);
}

/**
 * Update the IncomingPhoneNumberInstance
 *
 * @param string [opts.accountSid] - The new owner of the phone number
 * @param string [opts.apiVersion] - The Twilio REST API version to use
 * @param string [opts.friendlyName] - A human readable description of this resource
 * @param string [opts.smsApplicationSid] - Unique string that identifies the application
 * @param string [opts.smsFallbackMethod] - HTTP method used with sms fallback url
 * @param string [opts.smsFallbackUrl] - URL Twilio will request if an error occurs in executing TwiML
 * @param string [opts.smsMethod] - HTTP method to use with sms url
 * @param string [opts.smsUrl] - URL Twilio will request when receiving an SMS
 * @param string [opts.statusCallback] - URL Twilio will use to pass status parameters
 * @param string [opts.statusCallbackMethod] - HTTP method twilio will use with status callback
 * @param string [opts.voiceApplicationSid] - The unique sid of the application to handle this number
 * @param string [opts.voiceCallerIdLookup] - Look up the caller's caller-ID
 * @param string [opts.voiceFallbackMethod] - HTTP method used with fallback_url
 * @param string [opts.voiceFallbackUrl] - URL Twilio will request when an error occurs in TwiML
 * @param string [opts.voiceMethod] - HTTP method used with the voice url
 * @param string [opts.voiceUrl] - URL Twilio will request when receiving a call
 *
 * @returns Updated IncomingPhoneNumberInstance
 */
IncomingPhoneNumberContext.prototype.update = function update(self, opts) {
  var data = values.of({
    'Accountsid': accountSid,
    'Apiversion': apiVersion,
    'Friendlyname': friendlyName,
    'Smsapplicationsid': smsApplicationSid,
    'Smsfallbackmethod': smsFallbackMethod,
    'Smsfallbackurl': smsFallbackUrl,
    'Smsmethod': smsMethod,
    'Smsurl': smsUrl,
    'Statuscallback': statusCallback,
    'Statuscallbackmethod': statusCallbackMethod,
    'Voiceapplicationsid': voiceApplicationSid,
    'Voicecalleridlookup': voiceCallerIdLookup,
    'Voicefallbackmethod': voiceFallbackMethod,
    'Voicefallbackurl': voiceFallbackUrl,
    'Voicemethod': voiceMethod,
    'Voiceurl': voiceUrl,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return IncomingPhoneNumberInstance(
    this._version,
    payload,
    ownerAccountSid=self._solution['ownerAccountSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Fetch a IncomingPhoneNumberInstance
 *
 * @returns Fetched IncomingPhoneNumberInstance
 */
IncomingPhoneNumberContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return IncomingPhoneNumberInstance(
    this._version,
    payload,
    ownerAccountSid=self._solution['ownerAccountSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Deletes the IncomingPhoneNumberInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
IncomingPhoneNumberContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

