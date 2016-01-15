'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var ListResource = require('../../../../../base/ListResource');
var values = require('../../../../../base/values');

var TaskQueueStatisticsList;
var TaskQueueStatisticsInstance;
var TaskQueueStatisticsContext;

/**
 * Initialize the TaskQueueStatisticsList
 *
 * :param Version version: Version that contains the resource
 * :param workspaceSid: The workspace_sid
 * :param taskQueueSid: The task_queue_sid
 *
 * @returns TaskQueueStatisticsList
 */
function TaskQueueStatisticsList(version, workspaceSid, taskQueueSid) {
  function TaskQueueStatisticsListInstance(sid) {
    return TaskQueueStatisticsListInstance.get(sid);
  }

  TaskQueueStatisticsListInstance._version = version;
  // Path Solution
  TaskQueueStatisticsListInstance._solution = {
    workspaceSid: workspaceSid,
    taskQueueSid: taskQueueSid
  };
  /**
   * Constructs a TaskQueueStatisticsContext
   *
   * @returns TaskQueueStatisticsContext
   */
  TaskQueueStatisticsListInstance.get = function get() {
    return new TaskQueueStatisticsContext(
      this._version,
      this._solution.workspaceSid,
      this._solution.taskQueueSid
    );
  };

  return TaskQueueStatisticsListInstance;
}


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
function TaskQueueStatisticsInstance(version, payload, workspaceSid,
                                      taskQueueSid) {
  InstanceResource.prototype.constructor.call(this, version);

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
    taskQueueSid: taskQueueSid,
  };
}

_.extend(TaskQueueStatisticsInstance.prototype, InstanceResource.prototype);
TaskQueueStatisticsInstance.prototype.constructor = TaskQueueStatisticsInstance;

Object.defineProperty(TaskQueueStatisticsInstance.prototype,
  '_proxy', {
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

Object.defineProperty(TaskQueueStatisticsInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(TaskQueueStatisticsInstance.prototype,
  'cumulative', {
  get: function() {
    return this._properties.cumulative;
  },
});

Object.defineProperty(TaskQueueStatisticsInstance.prototype,
  'realtime', {
  get: function() {
    return this._properties.realtime;
  },
});

Object.defineProperty(TaskQueueStatisticsInstance.prototype,
  'taskQueueSid', {
  get: function() {
    return this._properties.taskQueueSid;
  },
});

Object.defineProperty(TaskQueueStatisticsInstance.prototype,
  'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

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
TaskQueueStatisticsInstance.prototype.fetch = function fetch(opts) {
  return this._proxy.fetch(
    opts
  );
};


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
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    taskQueueSid: taskQueueSid,
  };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid%>/TaskQueues/<%= taskQueueSid%>/Statistics' // jshint ignore:line
  )(this._solution);
}

_.extend(TaskQueueStatisticsContext.prototype, InstanceContext.prototype);
TaskQueueStatisticsContext.prototype.constructor = TaskQueueStatisticsContext;

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
TaskQueueStatisticsContext.prototype.fetch = function fetch(opts) {
  var params = values.of({
    'Enddate': opts.endDate,
    'Friendlyname': opts.friendlyName,
    'Minutes': opts.minutes,
    'Startdate': opts.startDate,
  });

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new TaskQueueStatisticsInstance(
      this._version,
      payload,
      this._solution.workspaceSid,
      this._solution.taskQueueSid
    );
  });

  return promise;
};

module.exports = {
  TaskQueueStatisticsList: TaskQueueStatisticsList,
  TaskQueueStatisticsInstance: TaskQueueStatisticsInstance,
  TaskQueueStatisticsContext: TaskQueueStatisticsContext
};
