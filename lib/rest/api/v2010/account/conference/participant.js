'use strict';

var _ = require('lodash');
var Instance = require('../../../../../base');
var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

/**
 * Initialize the ParticipantContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} conferenceSid - The string that uniquely identifies this conference
 * @param {sid} callSid - The call_sid
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

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new ParticipantInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.conferenceSid,
    this._solution.callSid,
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

  data.uri = this._uri;
  data.method = 'POST';

  var payload = this._version.update(data);

  return new ParticipantInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.conferenceSid,
    this._solution.callSid
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


function ParticipantInstance() {
}

Object.defineProperty(ParticipantInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ParticipantContext(
        this._version,
        this._solution.accountSid,
        this._solution.conferenceSid,
        this._solution.callSid
      );
    }

    return this._context;
  },
});

Object.defineProperty(ParticipantInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(ParticipantInstance.prototype, 'callSid', {
  get: function() {
    return this._properties.callSid;
  },
});

Object.defineProperty(ParticipantInstance.prototype, 'conferenceSid', {
  get: function() {
    return this._properties.conferenceSid;
  },
});

Object.defineProperty(ParticipantInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(ParticipantInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(ParticipantInstance.prototype, 'endConferenceOnExit', {
  get: function() {
    return this._properties.endConferenceOnExit;
  },
});

Object.defineProperty(ParticipantInstance.prototype, 'muted', {
  get: function() {
    return this._properties.muted;
  },
});

Object.defineProperty(ParticipantInstance.prototype, 'startConferenceOnEnter', {
  get: function() {
    return this._properties.startConferenceOnEnter;
  },
});

Object.defineProperty(ParticipantInstance.prototype, 'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Initialize the ParticipantContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} conferenceSid: The string that uniquely identifies this conference
 * @param {sid} callSid: The call_sid
 *
 * @returns {ParticipantContext}
 */
ParticipantInstance.prototype.ParticipantInstance = function
    ParticipantInstance(version, payload, accountSid, conferenceSid, callSid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid // jshint ignore:line,
      callSid: payload.call_sid // jshint ignore:line,
      conferenceSid: payload.conference_sid // jshint ignore:line,
      dateCreated: payload.date_created // jshint ignore:line,
      dateUpdated: payload.date_updated // jshint ignore:line,
      endConferenceOnExit: payload.end_conference_on_exit // jshint ignore:line,
      muted: payload.muted // jshint ignore:line,
      startConferenceOnEnter: payload.start_conference_on_enter // jshint ignore:line,
      uri: payload.uri // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    conferenceSid: conferenceSid,
    callSid: callSid || this._properties.callSid,
  };
};

/**
 * Fetch a ParticipantInstance
 *
 * @returns Fetched ParticipantInstance
 */
ParticipantInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
};

/**
 * Update the ParticipantInstance
 *
 * @param string muted - Indicates if the participant should be muted
 *
 * @returns Updated ParticipantInstance
 */
ParticipantInstance.prototype.update = function update(self, muted) {
  return this._proxy.update(
    muted
  );
};

/**
 * Deletes the ParticipantInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
ParticipantInstance.prototype.delete = function delete(self) {
  return this._proxy.delete();
};

