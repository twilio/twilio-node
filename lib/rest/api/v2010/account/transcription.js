'use strict';

var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

/**
 * Initialize the TranscriptionContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique transcription Sid
 *
 * @returns {class_name}
 */
function TranscriptionContext(version, accountSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/Transcriptions/<% sid %>.json', this._solution);
}

/**
 * Fetch a TranscriptionInstance
 *
 * @returns Fetched TranscriptionInstance
 */
TranscriptionContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return TranscriptionInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Deletes the TranscriptionInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
TranscriptionContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

