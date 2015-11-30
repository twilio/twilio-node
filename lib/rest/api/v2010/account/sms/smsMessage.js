'use strict';

var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

/**
 * Initialize the SmsMessageContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: The sid
 *
 * @returns {class_name}
 */
function SmsMessageContext(version, accountSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/SMS/Messages/<% sid %>.json', this._solution);
}

/**
 * Deletes the SmsMessageInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
SmsMessageContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

/**
 * Fetch a SmsMessageInstance
 *
 * @returns Fetched SmsMessageInstance
 */
SmsMessageContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return SmsMessageInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Update the SmsMessageInstance
 *
 * @param string [opts.body] - The body
 *
 * @returns Updated SmsMessageInstance
 */
SmsMessageContext.prototype.update = function update(self, opts) {
  var data = values.of({
    'Body': body,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return SmsMessageInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
  );
};

