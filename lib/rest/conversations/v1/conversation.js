'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../base/InstanceContext');
var InstanceResource = require('../../../base/InstanceResource');
var ParticipantList = require('./conversation/participant');
var values = require('../../../base/values');

var ConversationList;
var ConversationInstance;
var ConversationContext;

/**
 * Initialize the ConversationContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} sid: The sid
 *
 * @returns {ConversationContext}
 */
function ConversationInstance(version, payload, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    sid: payload.sid, // jshint ignore:line,
    status: payload.status, // jshint ignore:line,
    duration: payload.duration, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    startTime: payload.start_time, // jshint ignore:line,
    endTime: payload.end_time, // jshint ignore:line,
    accountSid: payload.account_sid, // jshint ignore:line,
    url: payload.url, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    sid: sid || this._properties.sid,
  };
}

_.extend(ConversationInstance.prototype, InstanceResource.prototype);
ConversationInstance.prototype.constructor = ConversationInstance;

Object.defineProperty(ConversationInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ConversationContext(
        this._version,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(ConversationInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(ConversationInstance.prototype,
  'status', {
  get: function() {
    return this._properties.status;
  },
});

Object.defineProperty(ConversationInstance.prototype,
  'duration', {
  get: function() {
    return this._properties.duration;
  },
});

Object.defineProperty(ConversationInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(ConversationInstance.prototype,
  'startTime', {
  get: function() {
    return this._properties.startTime;
  },
});

Object.defineProperty(ConversationInstance.prototype,
  'endTime', {
  get: function() {
    return this._properties.endTime;
  },
});

Object.defineProperty(ConversationInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(ConversationInstance.prototype,
  'url', {
  get: function() {
    return this._properties.url;
  },
});

/**
 * Fetch a ConversationInstance
 *
 * @returns Fetched ConversationInstance
 */
ConversationInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Access the participants
 *
 * @returns participants
 */
ConversationInstance.prototype.participants = function participants() {
  return this._proxy.participants;
};


/**
 * Initialize the ConversationContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} sid - The sid
 *
 * @returns {ConversationContext}
 */
function ConversationContext(version, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    sid: sid,
  };
  this._uri = _.template(
    '/Conversations/<% sid %>', // jshint ignore:line
    this._solution
  );

  // Dependents
  this._participants = undefined;
}

_.extend(ConversationContext.prototype, InstanceContext.prototype);
ConversationContext.prototype.constructor = ConversationContext;

/**
 * Fetch a ConversationInstance
 *
 * @returns Fetched ConversationInstance
 */
ConversationContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new ConversationInstance(
    this._version,
    payload,
    this._solution.sid
  );
};

Object.defineProperty(ConversationContext.prototype,
  'participants', {
  get: function() {
    if (!this._participants) {
      this._participants = new ParticipantList(
        this._version,
        this._solution.conversationSid
      );
    }
    return this._participants;
  },
});

module.exports = {
  ConversationList: ConversationList,
  ConversationInstance: ConversationInstance,
  ConversationContext: ConversationContext
};
