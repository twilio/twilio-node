'use strict';

var ListResource = require('../../../../base/ListResource');
var values = require('../../../../base/values');

var TaskList;
var TaskInstance;
var TaskContext;

/**
 * Initialize the TaskList
 *
 * :param Version version: Version that contains the resource
 * :param workspaceSid: The workspace_sid
 *
 * @returns TaskList
 */
function TaskList(version, workspaceSid) {
  function TaskListInstance() {
  }

  // Path Solution
  TaskListInstance._solution = {
    workspaceSid: workspaceSid,
  };
  TaskListInstance._uri = _.template(
    '/Workspaces/{workspace_sid}/Tasks',
    this._solution
  );
  /**
   * Streams TaskInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.priority] - The priority
   * @param task.status [opts.assignmentStatus] - The assignment_status
   * @param string [opts.workflowSid] - The workflow_sid
   * @param string [opts.workflowName] - The workflow_name
   * @param string [opts.taskQueueSid] - The task_queue_sid
   * @param string [opts.taskQueueName] - The task_queue_name
   * @param {number} [opts.limit] -
   *          Upper limit for the number of records to return.
   *                            list() guarantees never to return more than limit.
   *                            Default is no limit
   * @param {number} [opts.pageSize=50] -
   *          Number of records to fetch per request,
   *                            when not set will use the default value of 50 records.
   *                            If no pageSize is defined but a limit is defined,
   *                            list() will attempt to read the limit with the most efficient
   *                            page size, i.e. min(limit, 1000)
   * @param {Function} opts.callback - A callback function to process records
   */
  TaskListInstance.read = function stream(opts) {
    var limits = this._version.readLimits({
      limit: limit,
      pageSize: pageSize
    })

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists TaskInstance records from the API as a list.
   *
   * @param string [opts.priority] - The priority
   * @param task.status [opts.assignmentStatus] - The assignment_status
   * @param string [opts.workflowSid] - The workflow_sid
   * @param string [opts.workflowName] - The workflow_name
   * @param string [opts.taskQueueSid] - The task_queue_sid
   * @param string [opts.taskQueueName] - The task_queue_name
   * @param {number} [opts.limit]: Upper limit for the number of records to return.
   *                    list() guarantees never to return more than limit.
   *                    Default is no limit
   * @param {number} [opts.pageSize]: Number of records to fetch per request,
   *                    when not set will use the default value of 50 records.
   *                    If no page_size is defined but a limit is defined,
   *                    list() will attempt to read the limit with the most
   *                    efficient page size, i.e. min(limit, 1000)
   *
   * @returns {Array} A list of records
   */
  TaskListInstance.read = function list(opts) {
    return this.page();
  };

  /**
   * Retrieve a single page of TaskInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.priority] - The priority
   * @param task.status [opts.assignmentStatus] - The assignment_status
   * @param string [opts.workflowSid] - The workflow_sid
   * @param string [opts.workflowName] - The workflow_name
   * @param string [opts.taskQueueSid] - The task_queue_sid
   * @param string [opts.taskQueueName] - The task_queue_name
   * @param {string} [opts.pageToken]: PageToken provided by the API
   * @param {number} [opts.pageNumber]: Page Number, this value is simply for client state
   * @param {number} [opts.pageSize]: Number of records to return, defaults to 50
   *
   * @returns Page of TaskInstance
   */
  TaskListInstance.read = function page(opts, page_token=values.unset,
                                         page_number=values.unset,
                                         page_size=values.unset) {
    var params = values.of({
      'Priority': opts.priority,
      'Assignmentstatus': opts.assignmentStatus,
      'Workflowsid': opts.workflowSid,
      'Workflowname': opts.workflowName,
      'Taskqueuesid': opts.taskQueueSid,
      'Taskqueuename': opts.taskQueueName,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size,
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params=params,
    );

    return TaskPage(
      this._version,
      response,
      this._solution.workspaceSid,
    );
  };

  /**
   * Create a new TaskInstance
   *
   * @param string attributes - The attributes
   * @param string workflowSid - The workflow_sid
   * @param string [opts.timeout] - The timeout
   * @param string [opts.priority] - The priority
   *
   * @returns Newly created TaskInstance
   */
  TaskListInstance.create = function create(attributes, workflowSid, opts) {
    var data = values.of({
      'Attributes': attributes,
      'Workflowsid': workflowSid,
      'Timeout': opts.timeout,
      'Priority': opts.priority,
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new TaskInstance(
      this._version,
      payload,
      this._solution.workspaceSid
    );
  };

  return TaskListInstance;
}

module.exports = {
  TaskList: TaskList,
  TaskInstance: TaskInstance,
  TaskContext: TaskContext
};
