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
  function WorkersStatisticsListInstance(sid) {
    return this.get(sid);
  }

  WorkersStatisticsListInstance._version = version;
  // Path Solution
  WorkersStatisticsListInstance._solution = {
    workspaceSid: workspaceSid,
  };
  /**
   * Constructs a WorkersStatisticsContext
   *
   * @returns WorkersStatisticsContext
   */
  function get() {
    return new WorkersStatisticsContext(
      this._version,
      this._solution.workspaceSid
    );
  }

  return WorkersStatisticsListInstance;
}

module.exports = {
  WorkersStatisticsList: WorkersStatisticsList,
  WorkersStatisticsInstance: WorkersStatisticsInstance,
  WorkersStatisticsContext: WorkersStatisticsContext
};
