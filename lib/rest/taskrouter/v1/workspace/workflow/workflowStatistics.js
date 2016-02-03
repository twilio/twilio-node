'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var Page = require('../../../../../base/Page');
var serialize = require('../../../../../base/serialize');
var values = require('../../../../../base/values');

var WorkflowStatisticsPage;
var WorkflowStatisticsList;
var WorkflowStatisticsInstance;
var WorkflowStatisticsContext;

/**
 * @constructor
 * @augments Page
 * @description Initialize the WorkflowStatisticsPage
 *
 * @param {V1} version - Version that contains the resource
 * @param {object} response - Response from the API
 * @param {string} workspaceSid - The workspace_sid
 * @param {string} workflowSid - The workflow_sid
 *
 * @returns WorkflowStatisticsPage
 */
function WorkflowStatisticsPage(version, response, workspaceSid, workflowSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    workflowSid: workflowSid
  };
}

_.extend(WorkflowStatisticsPage.prototype, Page.prototype);
WorkflowStatisticsPage.prototype.constructor = WorkflowStatisticsPage;

/**
 * Build an instance of WorkflowStatisticsInstance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns WorkflowStatisticsInstance
 */
WorkflowStatisticsPage.prototype.getInstance = function getInstance(payload) {
  return new WorkflowStatisticsInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.workflowSid
  );
};


/**
 * @constructor
 * @description Initialize the WorkflowStatisticsList
 *
 * @param {V1} version - Version that contains the resource
 * @param {string} workspaceSid - The workspace_sid
 * @param {string} workflowSid - The workflow_sid
 *
 * @returns {function} - WorkflowStatisticsListInstance
 */
function WorkflowStatisticsList(version, workspaceSid, workflowSid) {
  /**
   * @memberof WorkflowStatisticsList
   *
   * @param {string} sid - sid of instance
   *
   * @returns WorkflowStatisticsContext
   */
  function WorkflowStatisticsListInstance(sid) {
    return WorkflowStatisticsListInstance.get(sid);
  }

  WorkflowStatisticsListInstance._version = version;
  // Path Solution
  WorkflowStatisticsListInstance._solution = {
    workspaceSid: workspaceSid,
    workflowSid: workflowSid
  };
  /**
   * @memberof WorkflowStatisticsList
   *
   * @description Constructs a WorkflowStatisticsContext
   *
   * @returns WorkflowStatisticsContext
   */
  WorkflowStatisticsListInstance.get = function get() {
    return new WorkflowStatisticsContext(
      this._version,
      this._solution.workspaceSid,
      this._solution.workflowSid
    );
  };

  return WorkflowStatisticsListInstance;
}


/**
 * @constructor
 * @augments InstanceResource
 * @description Initialize the WorkflowStatisticsContext
 *
 * @property {string} accountSid - The account_sid
 * @property {string} cumulative - The cumulative
 * @property {string} realtime - The realtime
 * @property {string} workflowSid - The workflow_sid
 * @property {string} workspaceSid - The workspace_sid
 *
 * @param {V1} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} workflowSid - The workflow_sid
 */
function WorkflowStatisticsInstance(version, payload, workspaceSid, workflowSid)
                                     {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    cumulative: payload.cumulative, // jshint ignore:line,
    realtime: payload.realtime, // jshint ignore:line,
    workflowSid: payload.workflow_sid, // jshint ignore:line,
    workspaceSid: payload.workspace_sid, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
    workflowSid: workflowSid,
  };
}

_.extend(WorkflowStatisticsInstance.prototype, InstanceResource.prototype);
WorkflowStatisticsInstance.prototype.constructor = WorkflowStatisticsInstance;

Object.defineProperty(WorkflowStatisticsInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new WorkflowStatisticsContext(
        this._version,
        this._solution.workspaceSid,
        this._solution.workflowSid
      );
    }

    return this._context;
  },
});

Object.defineProperty(WorkflowStatisticsInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(WorkflowStatisticsInstance.prototype,
  'cumulative', {
  get: function() {
    return this._properties.cumulative;
  },
});

Object.defineProperty(WorkflowStatisticsInstance.prototype,
  'realtime', {
  get: function() {
    return this._properties.realtime;
  },
});

Object.defineProperty(WorkflowStatisticsInstance.prototype,
  'workflowSid', {
  get: function() {
    return this._properties.workflowSid;
  },
});

Object.defineProperty(WorkflowStatisticsInstance.prototype,
  'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

/**
 * @description Fetch a WorkflowStatisticsInstance
 *
 * @param {number} [opts.minutes] - The minutes
 * @param {Date} [opts.startDate] - The start_date
 * @param {Date} [opts.endDate] - The end_date
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched WorkflowStatisticsInstance
 */
WorkflowStatisticsInstance.prototype.fetch = function fetch(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'Minutes': opts.minutes,
    'StartDate': serialize.iso8601DateTime(opts.startDate),
    'EndDate': serialize.iso8601DateTime(opts.endDate)
  });

  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET',
    params: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new WorkflowStatisticsInstance(
      this._version,
      payload,
      this._solution.workspaceSid,
      this._solution.workflowSid
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
 * @constructor
 * @augments InstanceContext
 * @description Initialize the WorkflowStatisticsContext
 *
 * @param {V1} version - Version that contains the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} workflowSid - The workflow_sid
 */
function WorkflowStatisticsContext(version, workspaceSid, workflowSid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    workflowSid: workflowSid,
  };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Workflows/<%= workflowSid %>/Statistics' // jshint ignore:line
  )(this._solution);
}

_.extend(WorkflowStatisticsContext.prototype, InstanceContext.prototype);
WorkflowStatisticsContext.prototype.constructor = WorkflowStatisticsContext;

/**
 * @description Fetch a WorkflowStatisticsInstance
 *
 * @param {number} [opts.minutes] - The minutes
 * @param {Date} [opts.startDate] - The start_date
 * @param {Date} [opts.endDate] - The end_date
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched WorkflowStatisticsInstance
 */
WorkflowStatisticsContext.prototype.fetch = function fetch(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'Minutes': opts.minutes,
    'StartDate': serialize.iso8601DateTime(opts.startDate),
    'EndDate': serialize.iso8601DateTime(opts.endDate)
  });

  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET',
    params: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new WorkflowStatisticsInstance(
      this._version,
      payload,
      this._solution.workspaceSid,
      this._solution.workflowSid
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
  WorkflowStatisticsPage: WorkflowStatisticsPage,
  WorkflowStatisticsList: WorkflowStatisticsList,
  WorkflowStatisticsInstance: WorkflowStatisticsInstance,
  WorkflowStatisticsContext: WorkflowStatisticsContext
};
