'use strict';

var ListResource = require('../../../../../base/ListResource');

var WorkflowStatisticsList;
var WorkflowStatisticsInstance;
var WorkflowStatisticsContext;

/**
 * Initialize the WorkflowStatisticsList
 *
 * :param Version version: Version that contains the resource
 * :param workspaceSid: The workspace_sid
 * :param workflowSid: The workflow_sid
 *
 * @returns WorkflowStatisticsList
 */
function WorkflowStatisticsList(version, workspaceSid, workflowSid) {
  function WorkflowStatisticsListInstance() {
  }

  // Path Solution
  WorkflowStatisticsListInstance._solution = {
    workspaceSid: workspaceSid,
    workflowSid: workflowSid,
  };
  return WorkflowStatisticsListInstance;
}

module.exports = {
  WorkflowStatisticsList: WorkflowStatisticsList,
  WorkflowStatisticsInstance: WorkflowStatisticsInstance,
  WorkflowStatisticsContext: WorkflowStatisticsContext
};
