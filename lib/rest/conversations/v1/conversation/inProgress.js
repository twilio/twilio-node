'use strict';

var Instance = require('../../../../base');
var ParticipantList = require('./participant');

function InProgressInstance() {
}

Object.defineProperty(InProgressInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(InProgressInstance.prototype, 'status', {
  get: function() {
    return this._properties.status;
  },
});

Object.defineProperty(InProgressInstance.prototype, 'duration', {
  get: function() {
    return this._properties.duration;
  },
});

Object.defineProperty(InProgressInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(InProgressInstance.prototype, 'startTime', {
  get: function() {
    return this._properties.startTime;
  },
});

Object.defineProperty(InProgressInstance.prototype, 'endTime', {
  get: function() {
    return this._properties.endTime;
  },
});

Object.defineProperty(InProgressInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(InProgressInstance.prototype, 'url', {
  get: function() {
    return this._properties.url;
  },
});

/**
 * Initialize the InProgressContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {InProgressContext}
 */
InProgressInstance.prototype.InProgressInstance = function
    InProgressInstance(version, payload) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      sid: payload.sid // jshint ignore:line,
      status: payload.status // jshint ignore:line,
      duration: payload.duration // jshint ignore:line,
      dateCreated: payload.date_created // jshint ignore:line,
      startTime: payload.start_time // jshint ignore:line,
      endTime: payload.end_time // jshint ignore:line,
      accountSid: payload.account_sid // jshint ignore:line,
      url: payload.url // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {};
};

/**
 * Access the participants
 *
 * @returns participants
 */
InProgressInstance.prototype.participants = function participants() {
  return this._proxy.participants;
};

