'use strict';

var _ = require('lodash');
var Instance = require('../../../../base');
var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

var ParticipantInstance;
var ParticipantContext;

function ParticipantInstance() {
}

Object.defineProperty(ParticipantInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ParticipantContext(
        this._version,
        this._solution.conversationSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'address', {
  get: function() {
    return this._properties.address;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'status', {
  get: function() {
    return this._properties.status;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'conversationSid', {
  get: function() {
    return this._properties.conversationSid;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'startTime', {
  get: function() {
    return this._properties.startTime;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'endTime', {
  get: function() {
    return this._properties.endTime;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'duration', {
  get: function() {
    return this._properties.duration;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'url', {
  get: function() {
    return this._properties.url;
  },
});

/**
 * Initialize the ParticipantContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} conversationSid: The conversation_sid
 * @param {sid} sid: The sid
 *
 * @returns {ParticipantContext}
 */
ParticipantInstance.prototype.ParticipantInstance = function
    ParticipantInstance(version, payload, conversationSid, sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    sid: payload.sid, // jshint ignore:line,
    address: payload.address, // jshint ignore:line,
    status: payload.status, // jshint ignore:line,
    conversationSid: payload.conversation_sid, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    startTime: payload.start_time, // jshint ignore:line,
    endTime: payload.end_time, // jshint ignore:line,
    duration: payload.duration, // jshint ignore:line,
    accountSid: payload.account_sid, // jshint ignore:line,
    url: payload.url, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    conversationSid: conversationSid,
    sid: sid || this._properties.sid,
  };
};

/**
 * Fetch a ParticipantInstance
 *
 * @returns Fetched ParticipantInstance
 */
ParticipantInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};


/**
 * Initialize the ParticipantContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} conversationSid - The conversation_sid
 * @param {sid} sid - The sid
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
  this._uri = _.template(
    '/Conversations/<% conversation_sid %>/Participants/<% sid %>', // jshint ignore:line
    this._solution
  );
}

/**
 * Fetch a ParticipantInstance
 *
 * @returns Fetched ParticipantInstance
 */
ParticipantContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new ParticipantInstance(
    this._version,
    payload,
    this._solution.conversationSid,
    this._solution.sid
  );
};

module.exports = {
  ParticipantInstance: ParticipantInstance,
  ParticipantContext: ParticipantContext
};
