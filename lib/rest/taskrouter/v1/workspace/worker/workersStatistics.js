'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var serialize = require(
    '../../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var WorkersStatisticsList;
var WorkersStatisticsPage;
var WorkersStatisticsInstance;
var WorkersStatisticsContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersStatisticsList
 * @description Initialize the WorkersStatisticsList
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {string} workspaceSid - The workspace_sid
 */
/* jshint ignore:end */
WorkersStatisticsList = function WorkersStatisticsList(version, workspaceSid) {
  /* jshint ignore:start */
  /**
   * @function statistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersStatisticsContext}
   */
  /* jshint ignore:end */
  function WorkersStatisticsListInstance(sid) {
    return WorkersStatisticsListInstance.get(sid);
  }

  WorkersStatisticsListInstance._version = version;
  // Path Solution
  WorkersStatisticsListInstance._solution = {
    workspaceSid: workspaceSid
  };
  /* jshint ignore:start */
  /**
   * Constructs a workers_statistics
   *
   * @function get
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersStatisticsList
   * @instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersStatisticsContext}
   */
  /* jshint ignore:end */
  WorkersStatisticsListInstance.get = function get() {
    return new WorkersStatisticsContext(
      this._version,
      this._solution.workspaceSid
    );
  };

  return WorkersStatisticsListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersStatisticsPage
 * @augments Page
 * @description Initialize the WorkersStatisticsPage
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns WorkersStatisticsPage
 */
/* jshint ignore:end */
WorkersStatisticsPage = function WorkersStatisticsPage(version, response,
                                                        solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(WorkersStatisticsPage.prototype, Page.prototype);
WorkersStatisticsPage.prototype.constructor = WorkersStatisticsPage;

/* jshint ignore:start */
/**
 * Build an instance of WorkersStatisticsInstance
 *
 * @function getInstance
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersStatisticsPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns WorkersStatisticsInstance
 */
/* jshint ignore:end */
WorkersStatisticsPage.prototype.getInstance = function getInstance(payload) {
  return new WorkersStatisticsInstance(
    this._version,
    payload,
    this._solution.workspaceSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersStatisticsInstance
 * @description Initialize the WorkersStatisticsContext
 *
 * @property {string} accountSid - The account_sid
 * @property {string} cumulative - The cumulative
 * @property {string} realtime - The realtime
 * @property {string} workspaceSid - The workspace_sid
 * @property {string} url - The url
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid - The workspace_sid
 */
/* jshint ignore:end */
WorkersStatisticsInstance = function WorkersStatisticsInstance(version, payload,
    workspaceSid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.cumulative = payload.cumulative; // jshint ignore:line
  this.realtime = payload.realtime; // jshint ignore:line
  this.workspaceSid = payload.workspace_sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
  };
};

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
  }
});

/* jshint ignore:start */
/**
 * fetch a WorkersStatisticsInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersStatisticsInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {number} [opts.minutes] - The minutes
 * @param {Date} [opts.startDate] - The start_date
 * @param {Date} [opts.endDate] - The end_date
 * @param {string} [opts.taskQueueSid] - The task_queue_sid
 * @param {string} [opts.taskQueueName] - The task_queue_name
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkersStatisticsInstance
 */
/* jshint ignore:end */
WorkersStatisticsInstance.prototype.fetch = function fetch(opts, callback) {
  return this._proxy.fetch(opts, callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersStatisticsContext
 * @description Initialize the WorkersStatisticsContext
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {sid} workspaceSid - The workspace_sid
 */
/* jshint ignore:end */
WorkersStatisticsContext = function WorkersStatisticsContext(version,
    workspaceSid) {
  this._version = version;

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
  };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Workers/Statistics' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a WorkersStatisticsInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersStatisticsContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {number} [opts.minutes] - The minutes
 * @param {Date} [opts.startDate] - The start_date
 * @param {Date} [opts.endDate] - The end_date
 * @param {string} [opts.taskQueueSid] - The task_queue_sid
 * @param {string} [opts.taskQueueName] - The task_queue_name
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkersStatisticsInstance
 */
/* jshint ignore:end */
WorkersStatisticsContext.prototype.fetch = function fetch(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'Minutes': _.get(opts, 'minutes'),
    'StartDate': serialize.iso8601DateTime(_.get(opts, 'startDate')),
    'EndDate': serialize.iso8601DateTime(_.get(opts, 'endDate')),
    'TaskQueueSid': _.get(opts, 'taskQueueSid'),
    'TaskQueueName': _.get(opts, 'taskQueueName'),
    'FriendlyName': _.get(opts, 'friendlyName')
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
  WorkersStatisticsList: WorkersStatisticsList,
  WorkersStatisticsPage: WorkersStatisticsPage,
  WorkersStatisticsInstance: WorkersStatisticsInstance,
  WorkersStatisticsContext: WorkersStatisticsContext
};
