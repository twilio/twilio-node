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

  // Path Solution
  TaskQueueStatisticsListInstance._solution = {
    workspaceSid: workspaceSid,
    taskQueueSid: taskQueueSid,
  };
  return TaskQueueStatisticsListInstance;
}

module.exports = {
  TaskQueueStatisticsList: TaskQueueStatisticsList,
  TaskQueueStatisticsInstance: TaskQueueStatisticsInstance,
  TaskQueueStatisticsContext: TaskQueueStatisticsContext
};
