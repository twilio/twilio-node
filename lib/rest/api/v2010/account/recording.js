'use strict';

var InstanceContext = require('../../../../base/InstanceContext');
var TranscriptionList = require('./recording/transcription');
var values = require('../../../../base/values');

/**
 * Initialize the RecordingContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique recording Sid
 *
 * @returns {RecordingContext}
 */
function RecordingContext(version, accountSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/Recordings/<% sid %>.json', this._solution);

  // Dependents
  this._transcriptions = undefined;
}

Object.defineProperty(RecordingContext.prototype, 'transcriptions', {
  get: function() {
    if (!this._transcriptions) {
      this._transcriptions = new TranscriptionList(
        this._version,
        this._solution.accountSid,
        this._solution.recordingSid,
      );
    }
    return this._transcriptions;
  },
});

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

