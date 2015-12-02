'use strict';

var _ = require('lodash');
var Instance = require('../../../../base');
var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

/**
 * Initialize the WorkspaceStatisticsContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} workspaceSid - The workspace_sid
 *
 * @returns {WorkspaceStatisticsContext}
 */
function WorkspaceStatisticsContext(version, workspaceSid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
  };
  this._uri = _.template('/Workspaces/<% workspace_sid %>/Statistics', this._solution);
}

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
WorkspaceStatisticsContext.prototype.fetch = function fetch(self, opts) {
  var params = values.of({
    'Minutes': minutes,
    'Startdate<': startdatebefore,
    'Startdate': startDate,
    'Startdate>': startdateafter,
    'Enddate<': enddatebefore,
    'Enddate': endDate,
    'Enddate>': enddateafter,
  });

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new WorkspaceStatisticsInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
  );
};


function WorkspaceStatisticsInstance() {
}

Object.defineProperty(WorkspaceStatisticsInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new WorkspaceStatisticsContext(
        this._version,
        this._solution.workspaceSid
      );
    return this._context;
  },
});

Object.defineProperty(WorkspaceStatisticsInstance.prototype, 'realtime', {
  get: function() {
    return this._properties.realtime;
  },
});

Object.defineProperty(WorkspaceStatisticsInstance.prototype, 'cumulative', {
  get: function() {
    return this._properties.cumulative;
  },
});

Object.defineProperty(WorkspaceStatisticsInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(WorkspaceStatisticsInstance.prototype, 'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

/**
 * Initialize the WorkspaceStatisticsContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid: The workspace_sid
 *
 * @returns {WorkspaceStatisticsContext}
 */
WorkspaceStatisticsInstance.prototype.WorkspaceStatisticsInstance = function
    WorkspaceStatisticsInstance(version, payload, workspaceSid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      realtime: payload.realtime,
      cumulative: payload.cumulative,
      accountSid: payload.account_sid,
      workspaceSid: payload.workspace_sid,
  };

  // Context
  this._context = None;
  this._solution = {
    workspaceSid: workspaceSid,
  };
};

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
WorkspaceStatisticsInstance.prototype.fetch = function fetch(self, opts) {
  return this._proxy.fetch(
    opts
  );
};

