'use strict';

var _ = require('lodash');
var InstanceResource = require('../../../../base/InstanceResource');
var ParticipantList = require('./participant');

var CompletedList;
var CompletedInstance;
var CompletedContext;

/**
 * Initialize the CompletedContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {CompletedContext}
 */
function CompletedInstance(version, payload) {
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
  this._solution = {};
}

_.extend(CompletedInstance.prototype, InstanceResource.prototype);
CompletedInstance.prototype.constructor = CompletedInstance;

Object.defineProperty(CompletedInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(CompletedInstance.prototype,
  'status', {
  get: function() {
    return this._properties.status;
  },
});

Object.defineProperty(CompletedInstance.prototype,
  'duration', {
  get: function() {
    return this._properties.duration;
  },
});

Object.defineProperty(CompletedInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(CompletedInstance.prototype,
  'startTime', {
  get: function() {
    return this._properties.startTime;
  },
});

Object.defineProperty(CompletedInstance.prototype,
  'endTime', {
  get: function() {
    return this._properties.endTime;
  },
});

Object.defineProperty(CompletedInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(CompletedInstance.prototype,
  'url', {
  get: function() {
    return this._properties.url;
  },
});

/**
 * Access the participants
 *
 * @returns participants
 */
CompletedInstance.prototype.participants = function participants() {
  return this._proxy.participants;
};

module.exports = {
  CompletedList: CompletedList,
  CompletedInstance: CompletedInstance,
  CompletedContext: CompletedContext
};
