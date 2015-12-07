'use strict';

var ListResource = require('../../../../../base/ListResource');

var WorkerStatisticsList;
var WorkerStatisticsInstance;
var WorkerStatisticsContext;

/**
 * Initialize the WorkerStatisticsList
 *
 * :param Version version: Version that contains the resource
 * :param workspaceSid: The workspace_sid
 * :param workerSid: The worker_sid
 *
 * @returns WorkerStatisticsList
 */
function WorkerStatisticsList(version, workspaceSid, workerSid) {
  function WorkerStatisticsListInstance() {
  }

  // Path Solution
  WorkerStatisticsListInstance._solution = {
    workspaceSid: workspaceSid,
    workerSid: workerSid,
  };
  return WorkerStatisticsListInstance;
}

module.exports = {
  WorkerStatisticsList: WorkerStatisticsList,
  WorkerStatisticsInstance: WorkerStatisticsInstance,
  WorkerStatisticsContext: WorkerStatisticsContext
};
