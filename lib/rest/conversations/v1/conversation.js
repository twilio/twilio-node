'use strict';

var InstanceContext = require('../../../base/InstanceContext');
var ParticipantList = require('./conversation/participant');
var values = require('../../../base/values');

/**
 * Initialize the ConversationContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} sid: The sid
 *
 * @returns {class_name}
 */
function ConversationContext(version, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    sid: sid,
  };
  this._uri = _.template('/Conversations/<% sid %>', this._solution);

  // Dependents
  this._participants = undefined;
}

Object.defineProperty(ConversationContext.prototype, 'participants', {
  get: function() {
    if (!this._participants) {
      this._participants = new ParticipantList(
        this._version,
        this._solution.conversationSid,
      );
    }
    return this._participants;
  },
});

/**
 * Fetch a ConversationInstance
 *
 * @returns Fetched ConversationInstance
 */
ConversationContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return ConversationInstance(
    this._version,
    payload,
    sid=self._solution['sid'],
  );
};

