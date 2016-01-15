'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var ListResource = require('../../../../base/ListResource');
var values = require('../../../../base/values');

var WorkspaceStatisticsList;
var WorkspaceStatisticsInstance;
var WorkspaceStatisticsContext;

/**
 * Initialize the WorkspaceStatisticsList
 *
 * :param Version version: Version that contains the resource
 * :param workspaceSid: The workspace_sid
 *
 * @returns WorkspaceStatisticsList
 */
function WorkspaceStatisticsList(version, workspaceSid) {
  function WorkspaceStatisticsListInstance(sid) {
    return WorkspaceStatisticsListInstance.get(sid);
  }

  WorkspaceStatisticsListInstance._version = version;
  // Path Solution
  WorkspaceStatisticsListInstance._solution = {
    workspaceSid: workspaceSid
  };
  /**
   * Constructs a WorkspaceStatisticsContext
   *
   * @returns WorkspaceStatisticsContext
   */
  WorkspaceStatisticsListInstance.get = function get() {
    return new WorkspaceStatisticsContext(
      this._version,
      this._solution.workspaceSid
    );
  };

  return WorkspaceStatisticsListInstance;
}


/**
 * Initialize the WorkspaceStatisticsContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid: The workspace_sid
 *
 * @returns {WorkspaceStatisticsContext}
 */
function WorkspaceStatisticsInstance(version, payload, workspaceSid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    realtime: payload.realtime, // jshint ignore:line,
    cumulative: payload.cumulative, // jshint ignore:line,
    accountSid: payload.account_sid, // jshint ignore:line,
    workspaceSid: payload.workspace_sid, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
  };
}

_.extend(WorkspaceStatisticsInstance.prototype, InstanceResource.prototype);
WorkspaceStatisticsInstance.prototype.constructor = WorkspaceStatisticsInstance;

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

Object.defineProperty(WorkspaceStatisticsInstance.prototype,
  'realtime', {
  get: function() {
    return this._properties.realtime;
  },
});

Object.defineProperty(WorkspaceStatisticsInstance.prototype,
  'cumulative', {
  get: function() {
    return this._properties.cumulative;
  },
});

Object.defineProperty(WorkspaceStatisticsInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(WorkspaceStatisticsInstance.prototype,
  'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

/**
 * Fetch a WorkspaceStatisticsInstance
 *
 * @param string [opts.minutes] - The minutes
 * @param string [opts.startDateBefore] - The start_date
 * @param string [opts.startDate] - The start_date
 * @param string [opts.startDateAfter] - The start_date
 * @param string [opts.endDateBefore] - The end_date
 * @param string [opts.endDate] - The end_date
 * @param string [opts.endDateAfter] - The end_date
 *
 * @returns Fetched WorkspaceStatisticsInstance
 */
WorkspaceStatisticsInstance.prototype.fetch = function fetch(opts) {
  return this._proxy.fetch(
    opts
  );
};


/**
 * Initialize the WorkspaceStatisticsContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} workspaceSid - The workspace_sid
 *
 * @returns {WorkspaceStatisticsContext}
 */
function WorkspaceStatisticsContext(version, workspaceSid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
  };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Statistics' // jshint ignore:line
  )(this._solution);
}

_.extend(WorkspaceStatisticsContext.prototype, InstanceContext.prototype);
WorkspaceStatisticsContext.prototype.constructor = WorkspaceStatisticsContext;

/**
 * Fetch a WorkspaceStatisticsInstance
 *
 * @param string [opts.minutes] - The minutes
 * @param string [opts.startDateBefore] - The start_date
 * @param string [opts.startDate] - The start_date
 * @param string [opts.startDateAfter] - The start_date
 * @param string [opts.endDateBefore] - The end_date
 * @param string [opts.endDate] - The end_date
 * @param string [opts.endDateAfter] - The end_date
 *
 * @returns Fetched WorkspaceStatisticsInstance
 */
WorkspaceStatisticsContext.prototype.fetch = function fetch(opts) {
  var params = values.of({
    'Minutes': opts.minutes,
    'Startdate<': opts.startdatebefore,
    'Startdate': opts.startDate,
    'Startdate>': opts.startdateafter,
    'Enddate<': opts.enddatebefore,
    'Enddate': opts.endDate,
    'Enddate>': opts.enddateafter,
  });

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new WorkspaceStatisticsInstance(
      this._version,
      payload,
      this._solution.workspaceSid
    );
  });

  return promise;
};

module.exports = {
  WorkspaceStatisticsList: WorkspaceStatisticsList,
  WorkspaceStatisticsInstance: WorkspaceStatisticsInstance,
  WorkspaceStatisticsContext: WorkspaceStatisticsContext
};
