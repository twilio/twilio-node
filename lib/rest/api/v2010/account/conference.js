'use strict';

var _ = require('lodash');
var Instance = require('../../../../base');
var InstanceContext = require('../../../../base/InstanceContext');
var ParticipantList = require('./conference/participant');
var values = require('../../../../base/values');

/**
 * Initialize the ConferenceContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique conference Sid
 *
 * @returns {ConferenceContext}
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
        this._solution.conferenceSid
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

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new ConferenceInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid,
  );
};


function ConferenceInstance() {
}

Object.defineProperty(ConferenceInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ConferenceContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._context;
  },
});

Object.defineProperty(ConferenceInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(ConferenceInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(ConferenceInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(ConferenceInstance.prototype, 'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(ConferenceInstance.prototype, 'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(ConferenceInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(ConferenceInstance.prototype, 'status', {
  get: function() {
    return this._properties.status;
  },
});

Object.defineProperty(ConferenceInstance.prototype, 'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Initialize the ConferenceContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique conference Sid
 *
 * @returns {ConferenceContext}
 */
ConferenceInstance.prototype.ConferenceInstance = function
    ConferenceInstance(version, payload, accountSid, sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid,
      dateCreated: payload.date_created,
      dateUpdated: payload.date_updated,
      apiVersion: payload.api_version,
      friendlyName: payload.friendly_name,
      sid: payload.sid,
      status: payload.status,
      uri: payload.uri,
  };

  // Context
  this._context = None;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
};

/**
 * Fetch a ConferenceInstance
 *
 * @returns Fetched ConferenceInstance
 */
ConferenceInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
};

/**
 * Access the participants
 *
 * @returns participants
 */
ConferenceInstance.prototype.participants = function participants() {
  return this._proxy.participants;
};

