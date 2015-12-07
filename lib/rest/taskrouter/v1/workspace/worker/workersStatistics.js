'use strict';

var ListResource = require('../../../../../base/ListResource');

var WorkersStatisticsList;
var WorkersStatisticsInstance;
var WorkersStatisticsContext;

/**
 * Initialize the WorkersStatisticsList
 *
 * :param Version version: Version that contains the resource
 * :param workspaceSid: The workspace_sid
 *
 * @returns WorkersStatisticsList
 */
function WorkersStatisticsList(version, workspaceSid) {
  function WorkersStatisticsListInstance() {
  }

  // Path Solution
  WorkersStatisticsListInstance._solution = {
    workspaceSid: workspaceSid,
  };
  return WorkersStatisticsListInstance;
}

module.exports = {
  WorkersStatisticsList: WorkersStatisticsList,
  WorkersStatisticsInstance: WorkersStatisticsInstance,
  WorkersStatisticsContext: WorkersStatisticsContext
};
