'use strict';

var ListResource = require('../../../../base/ListResource');

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
  function WorkspaceStatisticsListInstance() {
  }

  // Path Solution
  WorkspaceStatisticsListInstance._solution = {
    workspaceSid: workspaceSid,
  };
  return WorkspaceStatisticsListInstance;
}

module.exports = {
  WorkspaceStatisticsList: WorkspaceStatisticsList,
  WorkspaceStatisticsInstance: WorkspaceStatisticsInstance,
  WorkspaceStatisticsContext: WorkspaceStatisticsContext
};
