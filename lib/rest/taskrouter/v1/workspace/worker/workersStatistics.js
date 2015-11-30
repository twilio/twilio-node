'use strict';

var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

/**
 * Initialize the WorkersStatisticsContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} workspaceSid: The workspace_sid
 *
 * @returns {class_name}
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

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return WorkersStatisticsInstance(
    this._version,
    payload,
    workspaceSid=self._solution['workspaceSid'],
  );
};

