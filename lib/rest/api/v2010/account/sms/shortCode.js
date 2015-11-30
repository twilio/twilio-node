'use strict';

var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

/**
 * Initialize the ShortCodeContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique short-code Sid
 *
 * @returns {class_name}
 */
function ShortCodeContext(version, accountSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/SMS/ShortCodes/<% sid %>.json', this._solution);
}

/**
 * Fetch a ShortCodeInstance
 *
 * @returns Fetched ShortCodeInstance
 */
ShortCodeContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return ShortCodeInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Update the ShortCodeInstance
 *
 * @param string [opts.friendlyName] - A human readable description of this resource
 * @param string [opts.apiVersion] - The API version to use
 * @param string [opts.smsUrl] - URL Twilio will request when receiving an SMS
 * @param string [opts.smsMethod] - HTTP method to use when requesting the sms url
 * @param string [opts.smsFallbackUrl] - URL Twilio will request if an error occurs in executing TwiML
 * @param string [opts.smsFallbackMethod] - HTTP method Twilio will use with sms fallback url
 *
 * @returns Updated ShortCodeInstance
 */
ShortCodeContext.prototype.update = function update(self, opts) {
  var data = values.of({
    'Friendlyname': friendlyName,
    'Apiversion': apiVersion,
    'Smsurl': smsUrl,
    'Smsmethod': smsMethod,
    'Smsfallbackurl': smsFallbackUrl,
    'Smsfallbackmethod': smsFallbackMethod,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return ShortCodeInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
  );
};

