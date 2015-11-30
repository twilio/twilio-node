'use strict';

var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

/**
 * Initialize the WorkerStatisticsContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} workspaceSid: The workspace_sid
 * @param {sid} workerSid: The worker_sid
 *
 * @returns {WorkerStatisticsContext}
 */
function WorkerStatisticsContext(version, workspaceSid, workerSid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    workerSid: workerSid,
  };
  this._uri = _.template('/Workspaces/<% workspace_sid %>/Workers/<% worker_sid %>/Statistics', this._solution);
}

/**
 * Fetch a WorkerStatisticsInstance
 *
 * @param string [opts.minutes] - The minutes
 * @param string [opts.startDate] - The start_date
 * @param string [opts.endDate] - The end_date
 *
 * @returns Fetched WorkerStatisticsInstance
 */
WorkerStatisticsContext.prototype.fetch = function fetch(self, opts) {
  var params = values.of({
    'Minutes': minutes,
    'Startdate': startDate,
    'Enddate': endDate,
  });

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return WorkerStatisticsInstance(
    this._version,
    payload,
    workspaceSid=self._solution['workspaceSid'],
    workerSid=self._solution['workerSid'],
  );
};

