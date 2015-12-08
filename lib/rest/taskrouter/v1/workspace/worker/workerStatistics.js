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

  WorkerStatisticsListInstance._version = version;
  // Path Solution
  WorkerStatisticsListInstance._solution = {
    workspaceSid: workspaceSid,
    workerSid: workerSid,
  };
  /**
   * Constructs a WorkerStatisticsContext
   *
   * @returns WorkerStatisticsContext
   */
  function get() {
    return new WorkerStatisticsContext(
      this._version,
      this._solution.workspaceSid,
      this._solution.workerSid
    );
  }

  return WorkerStatisticsListInstance;
}

module.exports = {
  WorkerStatisticsList: WorkerStatisticsList,
  WorkerStatisticsInstance: WorkerStatisticsInstance,
  WorkerStatisticsContext: WorkerStatisticsContext
};
