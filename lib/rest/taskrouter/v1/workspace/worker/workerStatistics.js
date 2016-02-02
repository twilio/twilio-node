'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var Page = require('../../../../../base/Page');
var serialize = require('../../../../../base/serialize');
var values = require('../../../../../base/values');

var WorkerStatisticsPage;
var WorkerStatisticsList;
var WorkerStatisticsInstance;
var WorkerStatisticsContext;

/**
 * Initialize the WorkerStatisticsPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 * @param {string} workspaceSid - The workspace_sid
 * @param {string} workerSid - The worker_sid
 *
 * @returns WorkerStatisticsPage
 */
function WorkerStatisticsPage(version, response, workspaceSid, workerSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    workerSid: workerSid
  };
}

_.extend(WorkerStatisticsPage.prototype, Page.prototype);
WorkerStatisticsPage.prototype.constructor = WorkerStatisticsPage;

/**
 * Build an instance of WorkerStatisticsInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns WorkerStatisticsInstance
 */
WorkerStatisticsPage.prototype.getInstance = function getInstance(payload) {
  return new WorkerStatisticsInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.workerSid
  );
};


/**
 * Initialize the WorkerStatisticsList
 *
 * @param {Version} version - Version that contains the resource
 * @param {string} workspaceSid - The workspace_sid
 * @param {string} workerSid - The worker_sid
 *
 * @returns WorkerStatisticsList
 */
function WorkerStatisticsList(version, workspaceSid, workerSid) {
  function WorkerStatisticsListInstance(sid) {
    return WorkerStatisticsListInstance.get(sid);
  }

  WorkerStatisticsListInstance._version = version;
  // Path Solution
  WorkerStatisticsListInstance._solution = {
    workspaceSid: workspaceSid,
    workerSid: workerSid
  };
  /**
   * Constructs a WorkerStatisticsContext
   *
   * @returns WorkerStatisticsContext
   */
  WorkerStatisticsListInstance.get = function get() {
    return new WorkerStatisticsContext(
      this._version,
      this._solution.workspaceSid,
      this._solution.workerSid
    );
  };

  return WorkerStatisticsListInstance;
}


/**
 * Initialize the WorkerStatisticsContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} workerSid - The worker_sid
 *
 * @returns {WorkerStatisticsContext}
 */
function WorkerStatisticsInstance(version, payload, workspaceSid, workerSid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    cumulative: payload.cumulative, // jshint ignore:line,
    workerSid: payload.worker_sid, // jshint ignore:line,
    workspaceSid: payload.workspace_sid, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
    workerSid: workerSid,
  };
}

_.extend(WorkerStatisticsInstance.prototype, InstanceResource.prototype);
WorkerStatisticsInstance.prototype.constructor = WorkerStatisticsInstance;

Object.defineProperty(WorkerStatisticsInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new WorkerStatisticsContext(
        this._version,
        this._solution.workspaceSid,
        this._solution.workerSid
      );
    }

    return this._context;
  },
});

Object.defineProperty(WorkerStatisticsInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(WorkerStatisticsInstance.prototype,
  'cumulative', {
  get: function() {
    return this._properties.cumulative;
  },
});

Object.defineProperty(WorkerStatisticsInstance.prototype,
  'workerSid', {
  get: function() {
    return this._properties.workerSid;
  },
});

Object.defineProperty(WorkerStatisticsInstance.prototype,
  'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

/**
 * Fetch a WorkerStatisticsInstance
 *
 * @param {string} [opts.minutes] - The minutes
 * @param {Date} [opts.startDate] - The start_date
 * @param {Date} [opts.endDate] - The end_date
 * @param {Function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched WorkerStatisticsInstance
 */
WorkerStatisticsInstance.prototype.fetch = function fetch(opts, callback) {
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
    deferred.resolve(new WorkerStatisticsInstance(
      this._version,
      payload,
      this._solution.workspaceSid,
      this._solution.workerSid
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
 * Initialize the WorkerStatisticsContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} workerSid - The worker_sid
 *
 * @returns {WorkerStatisticsContext}
 */
function WorkerStatisticsContext(version, workspaceSid, workerSid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    workerSid: workerSid,
  };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Workers/<%= workerSid %>/Statistics' // jshint ignore:line
  )(this._solution);
}

_.extend(WorkerStatisticsContext.prototype, InstanceContext.prototype);
WorkerStatisticsContext.prototype.constructor = WorkerStatisticsContext;

/**
 * Fetch a WorkerStatisticsInstance
 *
 * @param {string} [opts.minutes] - The minutes
 * @param {Date} [opts.startDate] - The start_date
 * @param {Date} [opts.endDate] - The end_date
 * @param {Function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched WorkerStatisticsInstance
 */
WorkerStatisticsContext.prototype.fetch = function fetch(opts, callback) {
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
    deferred.resolve(new WorkerStatisticsInstance(
      this._version,
      payload,
      this._solution.workspaceSid,
      this._solution.workerSid
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
  WorkerStatisticsPage: WorkerStatisticsPage,
  WorkerStatisticsList: WorkerStatisticsList,
  WorkerStatisticsInstance: WorkerStatisticsInstance,
  WorkerStatisticsContext: WorkerStatisticsContext
};
