'use strict';

var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

/**
 * Initialize the TriggerContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique usage-trigger Sid
 *
 * @returns {class_name}
 */
function TriggerContext(version, accountSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/Usage/Triggers/<% sid %>.json', this._solution);
}

/**
 * Fetch a TriggerInstance
 *
 * @returns Fetched TriggerInstance
 */
TriggerContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return TriggerInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Update the TriggerInstance
 *
 * @param string [opts.callbackMethod] - HTTP method to use with callback_url
 * @param string [opts.callbackUrl] - URL Twilio will request when the trigger fires
 * @param string [opts.friendlyName] - A user-specified, human-readable name for the trigger.
 *
 * @returns Updated TriggerInstance
 */
TriggerContext.prototype.update = function update(self, opts) {
  var data = values.of({
    'Callbackmethod': callbackMethod,
    'Callbackurl': callbackUrl,
    'Friendlyname': friendlyName,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return TriggerInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Deletes the TriggerInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
TriggerContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

