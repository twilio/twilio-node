'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var Page = require('../../../../../base/Page');
var serialize = require('../../../../../base/serialize');
var values = require('../../../../../base/values');

var TaskQueueStatisticsPage;
var TaskQueueStatisticsList;
var TaskQueueStatisticsInstance;
var TaskQueueStatisticsContext;

/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsPage
 * @augments Page
 * @description Initialize the TaskQueueStatisticsPage
 *
 * @param {V1} version - Version that contains the resource
 * @param {object} response - Response from the API
 * @param {string} workspaceSid - The workspace_sid
 * @param {string} taskQueueSid - The task_queue_sid
 *
 * @returns TaskQueueStatisticsPage
 */
function TaskQueueStatisticsPage(version, response, workspaceSid, taskQueueSid)
                                  {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    taskQueueSid: taskQueueSid
  };
}

_.extend(TaskQueueStatisticsPage.prototype, Page.prototype);
TaskQueueStatisticsPage.prototype.constructor = TaskQueueStatisticsPage;

/**
 * Build an instance of TaskQueueStatisticsInstance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns TaskQueueStatisticsInstance
 */
TaskQueueStatisticsPage.prototype.getInstance = function getInstance(payload) {
  return new TaskQueueStatisticsInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.taskQueueSid
  );
};


/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsList
 * @description Initialize the TaskQueueStatisticsList
 *
 * @param {V1} version - Version that contains the resource
 * @param {string} workspaceSid - The workspace_sid
 * @param {string} taskQueueSid - The task_queue_sid
 *
 * @returns {function} - TaskQueueStatisticsListInstance
 */
function TaskQueueStatisticsList(version, workspaceSid, taskQueueSid) {
  /**
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsList
   *
   * @param {string} sid - sid of instance
   *
   * @returns TaskQueueStatisticsContext
   */
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
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsList
   *
   * @description Constructs a TaskQueueStatisticsContext
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
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsInstance
 * @augments InstanceResource
 * @description Initialize the TaskQueueStatisticsContext
 *
 * @property {string} accountSid - The account_sid
 * @property {string} cumulative - The cumulative
 * @property {string} realtime - The realtime
 * @property {string} taskQueueSid - The task_queue_sid
 * @property {string} workspaceSid - The workspace_sid
 *
 * @param {V1} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} taskQueueSid - The task_queue_sid
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
 * @description Fetch a TaskQueueStatisticsInstance
 *
 * @param {Date} [opts.endDate] - The end_date
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {number} [opts.minutes] - The minutes
 * @param {Date} [opts.startDate] - The start_date
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched TaskQueueStatisticsInstance
 */
TaskQueueStatisticsInstance.prototype.fetch = function fetch(opts, callback) {
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


/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsContext
 * @augments InstanceContext
 * @description Initialize the TaskQueueStatisticsContext
 *
 * @param {V1} version - Version that contains the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} taskQueueSid - The task_queue_sid
 */
function TaskQueueStatisticsContext(version, workspaceSid, taskQueueSid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    taskQueueSid: taskQueueSid,
  };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/TaskQueues/<%= taskQueueSid %>/Statistics' // jshint ignore:line
  )(this._solution);
}

_.extend(TaskQueueStatisticsContext.prototype, InstanceContext.prototype);
TaskQueueStatisticsContext.prototype.constructor = TaskQueueStatisticsContext;

/**
 * @description Fetch a TaskQueueStatisticsInstance
 *
 * @param {Date} [opts.endDate] - The end_date
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {number} [opts.minutes] - The minutes
 * @param {Date} [opts.startDate] - The start_date
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched TaskQueueStatisticsInstance
 */
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
