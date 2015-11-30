'use strict';

var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

/**
 * Initialize the WorkflowStatisticsContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} workspaceSid: The workspace_sid
 * @param {sid} workflowSid: The workflow_sid
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

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return WorkflowStatisticsInstance(
    this._version,
    payload,
    workspaceSid=self._solution['workspaceSid'],
    workflowSid=self._solution['workflowSid'],
  );
};

