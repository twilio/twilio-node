'use strict';

var Instance = require('../../../../base');
var ParticipantList = require('./participant');

function CompletedInstance() {
}

Object.defineProperty(CompletedInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(CompletedInstance.prototype, 'status', {
  get: function() {
    return this._properties.status;
  },
});

Object.defineProperty(CompletedInstance.prototype, 'duration', {
  get: function() {
    return this._properties.duration;
  },
});

Object.defineProperty(CompletedInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(CompletedInstance.prototype, 'startTime', {
  get: function() {
    return this._properties.startTime;
  },
});

Object.defineProperty(CompletedInstance.prototype, 'endTime', {
  get: function() {
    return this._properties.endTime;
  },
});

Object.defineProperty(CompletedInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(CompletedInstance.prototype, 'url', {
  get: function() {
    return this._properties.url;
  },
});

/**
 * Initialize the CompletedContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {CompletedContext}
 */
CompletedInstance.prototype.CompletedInstance = function
    CompletedInstance(version, payload) {
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
  this._solution = {};
};

/**
 * Access the participants
 *
 * @returns participants
 */
CompletedInstance.prototype.participants = function participants() {
  return this._proxy.participants;
};

