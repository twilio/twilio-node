'use strict';

var _ = require('lodash');
var Instance = require('../../../../../base');
var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

/**
 * Initialize the WorkersStatisticsContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} workspaceSid - The workspace_sid
 *
 * @returns {WorkersStatisticsContext}
 */
function WorkersStatisticsContext(version, workspaceSid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
  };
  this._uri = _.template('/Workspaces/<% workspace_sid %>/Workers/Statistics', this._solution);
}

/**
 * Fetch a WorkersStatisticsInstance
 *
 * @param string [opts.minutes] - The minutes
 * @param string [opts.startDate] - The start_date
 * @param string [opts.endDate] - The end_date
 * @param string [opts.taskQueueSid] - The task_queue_sid
 * @param string [opts.taskQueueName] - The task_queue_name
 * @param string [opts.friendlyName] - The friendly_name
 *
 * @returns Fetched WorkersStatisticsInstance
 */
WorkersStatisticsContext.prototype.fetch = function fetch(self, opts) {
  var params = values.of({
    'Minutes': minutes,
    'Startdate': startDate,
    'Enddate': endDate,
    'Taskqueuesid': taskQueueSid,
    'Taskqueuename': taskQueueName,
    'Friendlyname': friendlyName,
  });

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new WorkersStatisticsInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
  );
};


function WorkersStatisticsInstance() {
}

Object.defineProperty(WorkersStatisticsInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new WorkersStatisticsContext(
        this._version,
        this._solution.workspaceSid
      );
    return this._context;
  },
});

Object.defineProperty(WorkersStatisticsInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(WorkersStatisticsInstance.prototype, 'cumulative', {
  get: function() {
    return this._properties.cumulative;
  },
});

Object.defineProperty(WorkersStatisticsInstance.prototype, 'realtime', {
  get: function() {
    return this._properties.realtime;
  },
});

Object.defineProperty(WorkersStatisticsInstance.prototype, 'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

/**
 * Initialize the WorkersStatisticsContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid: The workspace_sid
 *
 * @returns {WorkersStatisticsContext}
 */
WorkersStatisticsInstance.prototype.WorkersStatisticsInstance = function
    WorkersStatisticsInstance(version, payload, workspaceSid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid,
      cumulative: payload.cumulative,
      realtime: payload.realtime,
      workspaceSid: payload.workspace_sid,
  };

  // Context
  this._context = None;
  this._solution = {
    workspaceSid: workspaceSid,
  };
};

/**
 * Fetch a WorkersStatisticsInstance
 *
 * @param string [opts.minutes] - The minutes
 * @param string [opts.startDate] - The start_date
 * @param string [opts.endDate] - The end_date
 * @param string [opts.taskQueueSid] - The task_queue_sid
 * @param string [opts.taskQueueName] - The task_queue_name
 * @param string [opts.friendlyName] - The friendly_name
 *
 * @returns Fetched WorkersStatisticsInstance
 */
WorkersStatisticsInstance.prototype.fetch = function fetch(self, opts) {
  return this._proxy.fetch(
    opts
  );
};

