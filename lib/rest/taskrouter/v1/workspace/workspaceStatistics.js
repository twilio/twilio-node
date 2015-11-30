'use strict';

var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

/**
 * Initialize the WorkspaceStatisticsContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} workspaceSid: The workspace_sid
 *
 * @returns {class_name}
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

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return WorkspaceStatisticsInstance(
    this._version,
    payload,
    workspaceSid=self._solution['workspaceSid'],
  );
};

