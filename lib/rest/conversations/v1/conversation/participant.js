'use strict';

var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

/**
 * Initialize the ParticipantContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} conversationSid: The conversation_sid
 * @param {sid} sid: The sid
 *
 * @returns {ParticipantContext}
 */
function ParticipantContext(version, conversationSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    conversationSid: conversationSid,
    sid: sid,
  };
  this._uri = _.template('/Conversations/<% conversation_sid %>/Participants/<% sid %>', this._solution);
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
    conversationSid=self._solution['conversationSid'],
    sid=self._solution['sid'],
  );
};

