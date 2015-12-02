'use strict';

var _ = require('lodash');
var Instance = require('../../../../../base');
var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

/**
 * Initialize the WorkflowStatisticsContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} workflowSid - The workflow_sid
 *
 * @returns {WorkflowStatisticsContext}
 */
function WorkflowStatisticsContext(version, workspaceSid, workflowSid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    workflowSid: workflowSid,
  };
  this._uri = _.template('/Workspaces/<% workspace_sid %>/Workflows/<% workflow_sid %>/Statistics', this._solution);
}

/**
 * Fetch a WorkflowStatisticsInstance
 *
 * @param string [opts.minutes] - The minutes
 * @param string [opts.startDate] - The start_date
 * @param string [opts.endDate] - The end_date
 *
 * @returns Fetched WorkflowStatisticsInstance
 */
WorkflowStatisticsContext.prototype.fetch = function fetch(self, opts) {
  var params = values.of({
    'Minutes': minutes,
    'Startdate': startDate,
    'Enddate': endDate,
  });

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new WorkflowStatisticsInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.workflowSid,
  );
};


function WorkflowStatisticsInstance() {
}

Object.defineProperty(WorkflowStatisticsInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new WorkflowStatisticsContext(
        this._version,
        this._solution.workspaceSid,
        this._solution.workflowSid
      );
    return this._context;
  },
});

Object.defineProperty(WorkflowStatisticsInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(WorkflowStatisticsInstance.prototype, 'cumulative', {
  get: function() {
    return this._properties.cumulative;
  },
});

Object.defineProperty(WorkflowStatisticsInstance.prototype, 'realtime', {
  get: function() {
    return this._properties.realtime;
  },
});

Object.defineProperty(WorkflowStatisticsInstance.prototype, 'workflowSid', {
  get: function() {
    return this._properties.workflowSid;
  },
});

Object.defineProperty(WorkflowStatisticsInstance.prototype, 'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

/**
 * Initialize the WorkflowStatisticsContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid: The workspace_sid
 * @param {sid} workflowSid: The workflow_sid
 *
 * @returns {WorkflowStatisticsContext}
 */
WorkflowStatisticsInstance.prototype.WorkflowStatisticsInstance = function
    WorkflowStatisticsInstance(version, payload, workspaceSid, workflowSid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid,
      cumulative: payload.cumulative,
      realtime: payload.realtime,
      workflowSid: payload.workflow_sid,
      workspaceSid: payload.workspace_sid,
  };

  // Context
  this._context = None;
  this._solution = {
    workspaceSid: workspaceSid,
    workflowSid: workflowSid,
  };
};

/**
 * Fetch a WorkflowStatisticsInstance
 *
 * @param string [opts.minutes] - The minutes
 * @param string [opts.startDate] - The start_date
 * @param string [opts.endDate] - The end_date
 *
 * @returns Fetched WorkflowStatisticsInstance
 */
WorkflowStatisticsInstance.prototype.fetch = function fetch(self, opts) {
  return this._proxy.fetch(
    opts
  );
};

