'use strict';

var Instance = require('../../../../../base');

var TaskQueuesStatisticsInstance;
var TaskQueuesStatisticsContext;

function TaskQueuesStatisticsInstance() {
}

Object.defineProperty(TaskQueuesStatisticsInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(TaskQueuesStatisticsInstance.prototype,
  'cumulative', {
  get: function() {
    return this._properties.cumulative;
  },
});

Object.defineProperty(TaskQueuesStatisticsInstance.prototype,
  'realtime', {
  get: function() {
    return this._properties.realtime;
  },
});

Object.defineProperty(TaskQueuesStatisticsInstance.prototype,
  'taskQueueSid', {
  get: function() {
    return this._properties.taskQueueSid;
  },
});

Object.defineProperty(TaskQueuesStatisticsInstance.prototype,
  'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

/**
 * Initialize the TaskQueuesStatisticsContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {TaskQueuesStatisticsContext}
 */
TaskQueuesStatisticsInstance.prototype.TaskQueuesStatisticsInstance = function
    TaskQueuesStatisticsInstance(version, payload, workspaceSid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    cumulative: payload.cumulative, // jshint ignore:line,
    realtime: payload.realtime, // jshint ignore:line,
    taskQueueSid: payload.task_queue_sid, // jshint ignore:line,
    workspaceSid: payload.workspace_sid, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
  };
};

module.exports = {
  TaskQueuesStatisticsInstance: TaskQueuesStatisticsInstance,
  TaskQueuesStatisticsContext: TaskQueuesStatisticsContext
};
