'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var Page = require('../../../../../base/Page');
var serialize = require('../../../../../base/serialize');
var values = require('../../../../../base/values');

var WorkersStatisticsPage;
var WorkersStatisticsList;
var WorkersStatisticsInstance;
var WorkersStatisticsContext;

/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersStatisticsPage
 * @augments Page
 * @description Initialize the WorkersStatisticsPage
 *
 * @param {V1} version - Version that contains the resource
 * @param {object} response - Response from the API
 * @param {string} workspaceSid - The workspace_sid
 *
 * @returns WorkersStatisticsPage
 */
function WorkersStatisticsPage(version, response, workspaceSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid
  };
}

_.extend(WorkersStatisticsPage.prototype, Page.prototype);
WorkersStatisticsPage.prototype.constructor = WorkersStatisticsPage;

/**
 * Build an instance of WorkersStatisticsInstance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns WorkersStatisticsInstance
 */
WorkersStatisticsPage.prototype.getInstance = function getInstance(payload) {
  return new WorkersStatisticsInstance(
    this._version,
    payload,
    this._solution.workspaceSid
  );
};


/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersStatisticsList
 * @description Initialize the WorkersStatisticsList
 *
 * @param {V1} version - Version that contains the resource
 * @param {string} workspaceSid - The workspace_sid
 *
 * @returns {function} - WorkersStatisticsListInstance
 */
function WorkersStatisticsList(version, workspaceSid) {
  /**
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersStatisticsList
   *
   * @param {string} sid - sid of instance
   *
   * @returns WorkersStatisticsContext
   */
  function WorkersStatisticsListInstance(sid) {
    return WorkersStatisticsListInstance.get(sid);
  }

  WorkersStatisticsListInstance._version = version;
  // Path Solution
  WorkersStatisticsListInstance._solution = {
    workspaceSid: workspaceSid
  };
  /**
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersStatisticsList
   *
   * @description Constructs a WorkersStatisticsContext
   *
   * @returns WorkersStatisticsContext
   */
  WorkersStatisticsListInstance.get = function get() {
    return new WorkersStatisticsContext(
      this._version,
      this._solution.workspaceSid
    );
  };

  return WorkersStatisticsListInstance;
}


/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersStatisticsInstance
 * @augments InstanceResource
 * @description Initialize the WorkersStatisticsContext
 *
 * @property {string} accountSid - The account_sid
 * @property {string} cumulative - The cumulative
 * @property {string} realtime - The realtime
 * @property {string} workspaceSid - The workspace_sid
 *
 * @param {V1} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid - The workspace_sid
 */
function WorkersStatisticsInstance(version, payload, workspaceSid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    cumulative: payload.cumulative, // jshint ignore:line,
    realtime: payload.realtime, // jshint ignore:line,
    workspaceSid: payload.workspace_sid, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
  };
}

_.extend(WorkersStatisticsInstance.prototype, InstanceResource.prototype);
WorkersStatisticsInstance.prototype.constructor = WorkersStatisticsInstance;

Object.defineProperty(WorkersStatisticsInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new WorkersStatisticsContext(
        this._version,
        this._solution.workspaceSid
      );
    }

    return this._context;
  },
});

Object.defineProperty(WorkersStatisticsInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(WorkersStatisticsInstance.prototype,
  'cumulative', {
  get: function() {
    return this._properties.cumulative;
  },
});

Object.defineProperty(WorkersStatisticsInstance.prototype,
  'realtime', {
  get: function() {
    return this._properties.realtime;
  },
});

Object.defineProperty(WorkersStatisticsInstance.prototype,
  'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

/**
 * @description Fetch a WorkersStatisticsInstance
 *
 * @param {number} [opts.minutes] - The minutes
 * @param {Date} [opts.startDate] - The start_date
 * @param {Date} [opts.endDate] - The end_date
 * @param {string} [opts.taskQueueSid] - The task_queue_sid
 * @param {string} [opts.taskQueueName] - The task_queue_name
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched WorkersStatisticsInstance
 */
WorkersStatisticsInstance.prototype.fetch = function fetch(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'Minutes': opts.minutes,
    'StartDate': serialize.iso8601DateTime(opts.startDate),
    'EndDate': serialize.iso8601DateTime(opts.endDate),
    'TaskQueueSid': opts.taskQueueSid,
    'TaskQueueName': opts.taskQueueName,
    'FriendlyName': opts.friendlyName
  });

  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET',
    params: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new WorkersStatisticsInstance(
      this._version,
      payload,
      this._solution.workspaceSid
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
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersStatisticsContext
 * @augments InstanceContext
 * @description Initialize the WorkersStatisticsContext
 *
 * @param {V1} version - Version that contains the resource
 * @param {sid} workspaceSid - The workspace_sid
 */
function WorkersStatisticsContext(version, workspaceSid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
  };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Workers/Statistics' // jshint ignore:line
  )(this._solution);
}

_.extend(WorkersStatisticsContext.prototype, InstanceContext.prototype);
WorkersStatisticsContext.prototype.constructor = WorkersStatisticsContext;

/**
 * @description Fetch a WorkersStatisticsInstance
 *
 * @param {number} [opts.minutes] - The minutes
 * @param {Date} [opts.startDate] - The start_date
 * @param {Date} [opts.endDate] - The end_date
 * @param {string} [opts.taskQueueSid] - The task_queue_sid
 * @param {string} [opts.taskQueueName] - The task_queue_name
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched WorkersStatisticsInstance
 */
WorkersStatisticsContext.prototype.fetch = function fetch(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'Minutes': opts.minutes,
    'StartDate': serialize.iso8601DateTime(opts.startDate),
    'EndDate': serialize.iso8601DateTime(opts.endDate),
    'TaskQueueSid': opts.taskQueueSid,
    'TaskQueueName': opts.taskQueueName,
    'FriendlyName': opts.friendlyName
  });

  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET',
    params: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new WorkersStatisticsInstance(
      this._version,
      payload,
      this._solution.workspaceSid
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
  WorkersStatisticsPage: WorkersStatisticsPage,
  WorkersStatisticsList: WorkersStatisticsList,
  WorkersStatisticsInstance: WorkersStatisticsInstance,
  WorkersStatisticsContext: WorkersStatisticsContext
};
