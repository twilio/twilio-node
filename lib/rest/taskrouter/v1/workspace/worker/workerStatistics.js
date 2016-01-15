'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var ListResource = require('../../../../../base/ListResource');
var values = require('../../../../../base/values');

var WorkerStatisticsList;
var WorkerStatisticsInstance;
var WorkerStatisticsContext;

/**
 * Initialize the WorkerStatisticsList
 *
 * :param Version version: Version that contains the resource
 * :param workspaceSid: The workspace_sid
 * :param workerSid: The worker_sid
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
 * @param {sid} workspaceSid: The workspace_sid
 * @param {sid} workerSid: The worker_sid
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
 * @param string [opts.minutes] - The minutes
 * @param string [opts.startDate] - The start_date
 * @param string [opts.endDate] - The end_date
 *
 * @returns Fetched WorkerStatisticsInstance
 */
WorkerStatisticsInstance.prototype.fetch = function fetch(opts) {
  return this._proxy.fetch(
    opts
  );
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
    '/Workspaces/<% workspace_sid %>/Workers/<% worker_sid %>/Statistics' // jshint ignore:line
  )(this._solution);
}

_.extend(WorkerStatisticsContext.prototype, InstanceContext.prototype);
WorkerStatisticsContext.prototype.constructor = WorkerStatisticsContext;

/**
 * Fetch a WorkerStatisticsInstance
 *
 * @param string [opts.minutes] - The minutes
 * @param string [opts.startDate] - The start_date
 * @param string [opts.endDate] - The end_date
 *
 * @returns Fetched WorkerStatisticsInstance
 */
WorkerStatisticsContext.prototype.fetch = function fetch(opts) {
  var params = values.of({
    'Minutes': opts.minutes,
    'Startdate': opts.startDate,
    'Enddate': opts.endDate,
  });

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new WorkerStatisticsInstance(
      this._version,
      payload,
      this._solution.workspaceSid,
      this._solution.workerSid
    );
  });

  return promise;
};

module.exports = {
  WorkerStatisticsList: WorkerStatisticsList,
  WorkerStatisticsInstance: WorkerStatisticsInstance,
  WorkerStatisticsContext: WorkerStatisticsContext
};
