'use strict';

var _ = require('lodash');
var Instance = require('../../../../../base');
var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

/**
 * Initialize the TaskQueueStatisticsContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} taskQueueSid - The task_queue_sid
 *
 * @returns {TaskQueueStatisticsContext}
 */
function TaskQueueStatisticsContext(version, workspaceSid, taskQueueSid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    taskQueueSid: taskQueueSid,
  };
  this._uri = _.template('/Workspaces/<% workspace_sid %>/TaskQueues/<% task_queue_sid %>/Statistics', this._solution);
}

/**
 * Fetch a TaskQueueStatisticsInstance
 *
 * @param string [opts.endDate] - The end_date
 * @param string [opts.friendlyName] - The friendly_name
 * @param string [opts.minutes] - The minutes
 * @param string [opts.startDate] - The start_date
 *
 * @returns Fetched TaskQueueStatisticsInstance
 */
TaskQueueStatisticsContext.prototype.fetch = function fetch(self, opts) {
  var params = values.of({
    'Enddate': opts.endDate,
    'Friendlyname': opts.friendlyName,
    'Minutes': opts.minutes,
    'Startdate': opts.startDate,
  });

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new TaskQueueStatisticsInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.taskQueueSid,
  );
};


function TaskQueueStatisticsInstance() {
}

Object.defineProperty(TaskQueueStatisticsInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new TaskQueueStatisticsContext(
        this._version,
        this._solution.workspaceSid,
        this._solution.taskQueueSid
      );
    }

    return this._context;
  },
});

Object.defineProperty(TaskQueueStatisticsInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(TaskQueueStatisticsInstance.prototype, 'cumulative', {
  get: function() {
    return this._properties.cumulative;
  },
});

Object.defineProperty(TaskQueueStatisticsInstance.prototype, 'realtime', {
  get: function() {
    return this._properties.realtime;
  },
});

Object.defineProperty(TaskQueueStatisticsInstance.prototype, 'taskQueueSid', {
  get: function() {
    return this._properties.taskQueueSid;
  },
});

Object.defineProperty(TaskQueueStatisticsInstance.prototype, 'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

/**
 * Initialize the TaskQueueStatisticsContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid: The workspace_sid
 * @param {sid} taskQueueSid: The task_queue_sid
 *
 * @returns {TaskQueueStatisticsContext}
 */
TaskQueueStatisticsInstance.prototype.TaskQueueStatisticsInstance = function
    TaskQueueStatisticsInstance(version, payload, workspaceSid, taskQueueSid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid // jshint ignore:line,
      cumulative: payload.cumulative // jshint ignore:line,
      realtime: payload.realtime // jshint ignore:line,
      taskQueueSid: payload.task_queue_sid // jshint ignore:line,
      workspaceSid: payload.workspace_sid // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
    taskQueueSid: taskQueueSid,
  };
};

/**
 * Fetch a TaskQueueStatisticsInstance
 *
 * @param string [opts.endDate] - The end_date
 * @param string [opts.friendlyName] - The friendly_name
 * @param string [opts.minutes] - The minutes
 * @param string [opts.startDate] - The start_date
 *
 * @returns Fetched TaskQueueStatisticsInstance
 */
TaskQueueStatisticsInstance.prototype.fetch = function fetch(self, opts) {
  return this._proxy.fetch(
    opts
  );
};

