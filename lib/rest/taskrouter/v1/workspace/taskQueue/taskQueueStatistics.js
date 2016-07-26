'use strict';

var _ = require('lodash');
var Q = require('q');
var Page = require('../../../../../base/Page');
var serialize = require('../../../../../base/serialize');
var values = require('../../../../../base/values');

var TaskQueueStatisticsPage;
var TaskQueueStatisticsList;
var TaskQueueStatisticsInstance;
var TaskQueueStatisticsContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsPage
 * @augments Page
 * @description Initialize the TaskQueueStatisticsPage
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns TaskQueueStatisticsPage
 */
/* jshint ignore:end */
function TaskQueueStatisticsPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
}

_.extend(TaskQueueStatisticsPage.prototype, Page.prototype);
TaskQueueStatisticsPage.prototype.constructor = TaskQueueStatisticsPage;

/* jshint ignore:start */
/**
 * Build an instance of TaskQueueStatisticsInstance
 *
 * @function getInstance
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns TaskQueueStatisticsInstance
 */
/* jshint ignore:end */
TaskQueueStatisticsPage.prototype.getInstance = function getInstance(payload) {
  return new TaskQueueStatisticsInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.taskQueueSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsList
 * @description Initialize the TaskQueueStatisticsList
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {string} workspaceSid - The workspace_sid
 * @param {string} taskQueueSid - The task_queue_sid
 */
/* jshint ignore:end */
function TaskQueueStatisticsList(version, workspaceSid, taskQueueSid) {
  /* jshint ignore:start */
  /**
   * @function statistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsContext}
   */
  /* jshint ignore:end */
  function TaskQueueStatisticsListInstance(sid) {
    return TaskQueueStatisticsListInstance.get(sid);
  }

  TaskQueueStatisticsListInstance._version = version;
  // Path Solution
  TaskQueueStatisticsListInstance._solution = {
    workspaceSid: workspaceSid,
    taskQueueSid: taskQueueSid
  };
  /* jshint ignore:start */
  /**
   * Constructs a task_queue_statistics
   *
   * @function get
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsList
   * @instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsContext}
   */
  /* jshint ignore:end */
  TaskQueueStatisticsListInstance.get = function get() {
    return new TaskQueueStatisticsContext(
      this._version,
      this._solution.workspaceSid,
      this._solution.taskQueueSid
    );
  };

  return TaskQueueStatisticsListInstance;
}


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsInstance
 * @description Initialize the TaskQueueStatisticsContext
 *
 * @property {string} accountSid - The account_sid
 * @property {string} cumulative - The cumulative
 * @property {string} realtime - The realtime
 * @property {string} taskQueueSid - The task_queue_sid
 * @property {string} workspaceSid - The workspace_sid
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} taskQueueSid - The task_queue_sid
 */
/* jshint ignore:end */
function TaskQueueStatisticsInstance(version, payload, workspaceSid,
                                      taskQueueSid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.cumulative = payload.cumulative; // jshint ignore:line
  this.realtime = payload.realtime; // jshint ignore:line
  this.taskQueueSid = payload.task_queue_sid; // jshint ignore:line
  this.workspaceSid = payload.workspace_sid; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
    taskQueueSid: taskQueueSid,
  };
}

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

/* jshint ignore:start */
/**
 * fetch a TaskQueueStatisticsInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {Date} [opts.endDate] - The end_date
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {number} [opts.minutes] - The minutes
 * @param {Date} [opts.startDate] - The start_date
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TaskQueueStatisticsInstance
 */
/* jshint ignore:end */
TaskQueueStatisticsInstance.prototype.fetch = function fetch(opts, callback) {
  return this._proxy.fetch(opts, callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsContext
 * @description Initialize the TaskQueueStatisticsContext
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} taskQueueSid - The task_queue_sid
 */
/* jshint ignore:end */
function TaskQueueStatisticsContext(version, workspaceSid, taskQueueSid) {
  this._version = version;

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    taskQueueSid: taskQueueSid,
  };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/TaskQueues/<%= taskQueueSid %>/Statistics' // jshint ignore:line
  )(this._solution);
}

/* jshint ignore:start */
/**
 * fetch a TaskQueueStatisticsInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {Date} [opts.endDate] - The end_date
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {number} [opts.minutes] - The minutes
 * @param {Date} [opts.startDate] - The start_date
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TaskQueueStatisticsInstance
 */
/* jshint ignore:end */
TaskQueueStatisticsContext.prototype.fetch = function fetch(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'EndDate': serialize.iso8601DateTime(opts.endDate),
    'FriendlyName': opts.friendlyName,
    'Minutes': opts.minutes,
    'StartDate': serialize.iso8601DateTime(opts.startDate)
  });

  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET',
    params: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new TaskQueueStatisticsInstance(
      this._version,
      payload,
      this._solution.workspaceSid,
      this._solution.taskQueueSid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

module.exports = {
  TaskQueueStatisticsPage: TaskQueueStatisticsPage,
  TaskQueueStatisticsList: TaskQueueStatisticsList,
  TaskQueueStatisticsInstance: TaskQueueStatisticsInstance,
  TaskQueueStatisticsContext: TaskQueueStatisticsContext
};
