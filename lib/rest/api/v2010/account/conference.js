'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var ParticipantList = require('./conference/participant');
var values = require('../../../../base/values');

var ConferenceList;
var ConferenceInstance;
var ConferenceContext;

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
function ConferenceInstance(version, payload, accountSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    apiVersion: payload.api_version, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    status: payload.status, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(ConferenceInstance.prototype, InstanceResource.prototype);
ConferenceInstance.prototype.constructor = ConferenceInstance;

Object.defineProperty(ConferenceInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ConferenceContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(ConferenceInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(ConferenceInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(ConferenceInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(ConferenceInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(ConferenceInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(ConferenceInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(ConferenceInstance.prototype,
  'status', {
  get: function() {
    return this._properties.status;
  },
});

Object.defineProperty(ConferenceInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Fetch a ConferenceInstance
 *
 * @returns Fetched ConferenceInstance
 */
ConferenceInstance.prototype.fetch = function fetch() {
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
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<% account_sid %>/Conferences/<% sid %>.json', // jshint ignore:line
    this._solution
  );

  // Dependents
  this._participants = undefined;
}

_.extend(ConferenceContext.prototype, InstanceContext.prototype);
ConferenceContext.prototype.constructor = ConferenceContext;

/**
 * Fetch a ConferenceInstance
 *
 * @returns Fetched ConferenceInstance
 */
ConferenceContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new ConferenceInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
};

Object.defineProperty(ConferenceContext.prototype,
  'participants', {
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

module.exports = {
  ConferenceList: ConferenceList,
  ConferenceInstance: ConferenceInstance,
  ConferenceContext: ConferenceContext
};
