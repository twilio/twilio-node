'use strict';

var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

/**
 * Initialize the TaskQueueStatisticsContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} workspaceSid: The workspace_sid
 * @param {sid} taskQueueSid: The task_queue_sid
 *
 * @returns {class_name}
 */
function TaskQueueStatisticsContext(version, workspaceSid, taskQueueSid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    taskQueueSid: taskQueueSid,
  };
  this._uri = _.template('/Workspaces/<% workspace_sid %>/TaskQueues/<% task_queue_sid %>/Statistics', this._solution);
}

/**
 * Fetch a TaskQueueStatisticsInstance
 *
 * @param string [opts.endDate] - The end_date
 * @param string [opts.friendlyName] - The friendly_name
 * @param string [opts.minutes] - The minutes
 * @param string [opts.startDate] - The start_date
 *
 * @returns Fetched TaskQueueStatisticsInstance
 */
TaskQueueStatisticsContext.prototype.fetch = function fetch(self, opts) {
  var params = values.of({
    'Enddate': endDate,
    'Friendlyname': friendlyName,
    'Minutes': minutes,
    'Startdate': startDate,
  });

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return TaskQueueStatisticsInstance(
    this._version,
    payload,
    workspaceSid=self._solution['workspaceSid'],
    taskQueueSid=self._solution['taskQueueSid'],
  );
};

