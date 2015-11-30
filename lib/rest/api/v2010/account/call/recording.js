'use strict';

var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

/**
 * Initialize the RecordingContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} callSid: The call_sid
 * @param {sid} sid: The sid
 *
 * @returns {RecordingContext}
 */
function RecordingContext(version, accountSid, callSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    callSid: callSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/Calls/<% call_sid %>/Recordings/<% sid %>.json', this._solution);
}

/**
 * Fetch a RecordingInstance
 *
 * @returns Fetched RecordingInstance
 */
RecordingContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return RecordingInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    callSid=self._solution['callSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Deletes the RecordingInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
RecordingContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

