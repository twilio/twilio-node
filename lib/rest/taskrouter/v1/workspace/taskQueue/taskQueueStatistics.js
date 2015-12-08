'use strict';

var ListResource = require('../../../../../base/ListResource');

var TaskQueueStatisticsList;
var TaskQueueStatisticsInstance;
var TaskQueueStatisticsContext;

/**
 * Initialize the TaskQueueStatisticsList
 *
 * :param Version version: Version that contains the resource
 * :param workspaceSid: The workspace_sid
 * :param taskQueueSid: The task_queue_sid
 *
 * @returns TaskQueueStatisticsList
 */
function TaskQueueStatisticsList(version, workspaceSid, taskQueueSid) {
  function TaskQueueStatisticsListInstance() {
  }

  TaskQueueStatisticsListInstance._version = version;
  // Path Solution
  TaskQueueStatisticsListInstance._solution = {
    workspaceSid: workspaceSid,
    taskQueueSid: taskQueueSid,
  };
  /**
   * Constructs a TaskQueueStatisticsContext
   *
   * @returns TaskQueueStatisticsContext
   */
  function get() {
    return new TaskQueueStatisticsContext(
      this._version,
      this._solution.workspaceSid,
      this._solution.taskQueueSid
    );
  }

  return TaskQueueStatisticsListInstance;
}

module.exports = {
  TaskQueueStatisticsList: TaskQueueStatisticsList,
  TaskQueueStatisticsInstance: TaskQueueStatisticsInstance,
  TaskQueueStatisticsContext: TaskQueueStatisticsContext
};
