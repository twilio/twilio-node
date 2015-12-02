'use strict';

var _ = require('lodash');
var Instance = require('../../../base');
var InstanceContext = require('../../../base/InstanceContext');
var ParticipantList = require('./conversation/participant');
var values = require('../../../base/values');

/**
 * Initialize the ConversationContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} sid - The sid
 *
 * @returns {ConversationContext}
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
        this._solution.conversationSid
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

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new ConversationInstance(
    this._version,
    payload,
    this._solution.sid,
  );
};


function ConversationInstance() {
}

Object.defineProperty(ConversationInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ConversationContext(
        this._version,
        this._solution.sid
      );
    return this._context;
  },
});

Object.defineProperty(ConversationInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(ConversationInstance.prototype, 'status', {
  get: function() {
    return this._properties.status;
  },
});

Object.defineProperty(ConversationInstance.prototype, 'duration', {
  get: function() {
    return this._properties.duration;
  },
});

Object.defineProperty(ConversationInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(ConversationInstance.prototype, 'startTime', {
  get: function() {
    return this._properties.startTime;
  },
});

Object.defineProperty(ConversationInstance.prototype, 'endTime', {
  get: function() {
    return this._properties.endTime;
  },
});

Object.defineProperty(ConversationInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(ConversationInstance.prototype, 'url', {
  get: function() {
    return this._properties.url;
  },
});

/**
 * Initialize the ConversationContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} sid: The sid
 *
 * @returns {ConversationContext}
 */
ConversationInstance.prototype.ConversationInstance = function
    ConversationInstance(version, payload, sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      sid: payload.sid,
      status: payload.status,
      duration: payload.duration,
      dateCreated: payload.date_created,
      startTime: payload.start_time,
      endTime: payload.end_time,
      accountSid: payload.account_sid,
      url: payload.url,
  };

  // Context
  this._context = None;
  this._solution = {
    sid: sid || this._properties.sid,
  };
};

/**
 * Fetch a ConversationInstance
 *
 * @returns Fetched ConversationInstance
 */
ConversationInstance.prototype.fetch = function fetch(self) {
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

