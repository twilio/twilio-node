'use strict';

var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

/**
 * Initialize the ParticipantContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} conferenceSid: The string that uniquely identifies this conference
 * @param {sid} callSid: The call_sid
 *
 * @returns {ParticipantContext}
 */
function ParticipantContext(version, accountSid, conferenceSid, callSid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    conferenceSid: conferenceSid,
    callSid: callSid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/Conferences/<% conference_sid %>/Participants/<% call_sid %>.json', this._solution);
}

/**
 * Fetch a ParticipantInstance
 *
 * @returns Fetched ParticipantInstance
 */
ParticipantContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return ParticipantInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    conferenceSid=self._solution['conferenceSid'],
    callSid=self._solution['callSid'],
  );
};

/**
 * Update the ParticipantInstance
 *
 * @param string muted - Indicates if the participant should be muted
 *
 * @returns Updated ParticipantInstance
 */
ParticipantContext.prototype.update = function update(self, muted) {
  var data = values.of({
    'Muted': muted,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return ParticipantInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    conferenceSid=self._solution['conferenceSid'],
    callSid=self._solution['callSid'],
  );
};

/**
 * Deletes the ParticipantInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
ParticipantContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

