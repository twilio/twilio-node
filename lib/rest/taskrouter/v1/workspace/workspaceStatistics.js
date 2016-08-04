'use strict';

var _ = require('lodash');
var Q = require('q');
var Page = require('../../../../base/Page');
var values = require('../../../../base/values');

var WorkspaceStatisticsPage;
var WorkspaceStatisticsList;
var WorkspaceStatisticsInstance;
var WorkspaceStatisticsContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceStatisticsPage
 * @augments Page
 * @description Initialize the WorkspaceStatisticsPage
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns WorkspaceStatisticsPage
 */
/* jshint ignore:end */
function WorkspaceStatisticsPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
}

_.extend(WorkspaceStatisticsPage.prototype, Page.prototype);
WorkspaceStatisticsPage.prototype.constructor = WorkspaceStatisticsPage;

/* jshint ignore:start */
/**
 * Build an instance of WorkspaceStatisticsInstance
 *
 * @function getInstance
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceStatisticsPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns WorkspaceStatisticsInstance
 */
/* jshint ignore:end */
WorkspaceStatisticsPage.prototype.getInstance = function getInstance(payload) {
  return new WorkspaceStatisticsInstance(
    this._version,
    payload,
    this._solution.workspaceSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceStatisticsList
 * @description Initialize the WorkspaceStatisticsList
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {string} workspaceSid - The workspace_sid
 */
/* jshint ignore:end */
function WorkspaceStatisticsList(version, workspaceSid) {
  /* jshint ignore:start */
  /**
   * @function statistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceStatisticsContext}
   */
  /* jshint ignore:end */
  function WorkspaceStatisticsListInstance(sid) {
    return WorkspaceStatisticsListInstance.get(sid);
  }

  WorkspaceStatisticsListInstance._version = version;
  // Path Solution
  WorkspaceStatisticsListInstance._solution = {
    workspaceSid: workspaceSid
  };
  /* jshint ignore:start */
  /**
   * Constructs a workspace_statistics
   *
   * @function get
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceStatisticsList
   * @instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceStatisticsContext}
   */
  /* jshint ignore:end */
  WorkspaceStatisticsListInstance.get = function get() {
    return new WorkspaceStatisticsContext(
      this._version,
      this._solution.workspaceSid
    );
  };

  return WorkspaceStatisticsListInstance;
}


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceStatisticsInstance
 * @description Initialize the WorkspaceStatisticsContext
 *
 * @property {string} realtime - The realtime
 * @property {string} cumulative - The cumulative
 * @property {string} accountSid - The account_sid
 * @property {string} workspaceSid - The workspace_sid
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid - The workspace_sid
 */
/* jshint ignore:end */
function WorkspaceStatisticsInstance(version, payload, workspaceSid) {
  this._version = version;

  // Marshaled Properties
  this.realtime = payload.realtime; // jshint ignore:line
  this.cumulative = payload.cumulative; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.workspaceSid = payload.workspace_sid; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
  };
}

Object.defineProperty(WorkspaceStatisticsInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new WorkspaceStatisticsContext(
        this._version,
        this._solution.workspaceSid
      );
    }

    return this._context;
  },
});

/* jshint ignore:start */
/**
 * fetch a WorkspaceStatisticsInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceStatisticsInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {number} [opts.minutes] - The minutes
 * @param {string} [opts.startDate] - The start_date
 * @param {string} [opts.endDate] - The end_date
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkspaceStatisticsInstance
 */
/* jshint ignore:end */
WorkspaceStatisticsInstance.prototype.fetch = function fetch(opts, callback) {
  return this._proxy.fetch(opts, callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceStatisticsContext
 * @description Initialize the WorkspaceStatisticsContext
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {sid} workspaceSid - The workspace_sid
 */
/* jshint ignore:end */
function WorkspaceStatisticsContext(version, workspaceSid) {
  this._version = version;

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
  };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Statistics' // jshint ignore:line
  )(this._solution);
}

/* jshint ignore:start */
/**
 * fetch a WorkspaceStatisticsInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceStatisticsContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {number} [opts.minutes] - The minutes
 * @param {string} [opts.startDate] - The start_date
 * @param {string} [opts.endDate] - The end_date
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkspaceStatisticsInstance
 */
/* jshint ignore:end */
WorkspaceStatisticsContext.prototype.fetch = function fetch(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'Minutes': opts.minutes,
    'StartDate': opts.startDate,
    'EndDate': opts.endDate
  });

  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET',
    params: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new WorkspaceStatisticsInstance(
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
  WorkspaceStatisticsPage: WorkspaceStatisticsPage,
  WorkspaceStatisticsList: WorkspaceStatisticsList,
  WorkspaceStatisticsInstance: WorkspaceStatisticsInstance,
  WorkspaceStatisticsContext: WorkspaceStatisticsContext
};
