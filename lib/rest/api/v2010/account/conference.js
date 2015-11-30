'use strict';

var InstanceContext = require('../../../../base/InstanceContext');
var ParticipantList = require('./conference/participant');
var values = require('../../../../base/values');

/**
 * Initialize the ConferenceContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique conference Sid
 *
 * @returns {class_name}
 */
function ConferenceContext(version, accountSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/Conferences/<% sid %>.json', this._solution);

  // Dependents
  this._participants = undefined;
}

Object.defineProperty(ConferenceContext.prototype, 'participants', {
  get: function() {
    if (!this._participants) {
      this._participants = new ParticipantList(
        this._version,
        this._solution.accountSid,
        this._solution.conferenceSid,
      );
    }
    return this._participants;
  },
});

/**
 * Fetch a ConferenceInstance
 *
 * @returns Fetched ConferenceInstance
 */
ConferenceContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return ConferenceInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
  );
};

