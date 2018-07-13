/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V1 = require('../../V1');
import serialize = require('../../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { ReservationList } from './task/reservation';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the TaskList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The ID of the Workspace that holds this Task
 */
declare function TaskList(version: V1, workspaceSid: string): TaskListInstance;

interface TaskResource {
  account_sid: string;
  addons: string;
  age: number;
  assignment_status: TaskStatus;
  attributes: string;
  date_created: Date;
  date_updated: Date;
  links: string;
  priority: number;
  reason: string;
  sid: string;
  task_channel_sid: string;
  task_channel_unique_name: string;
  task_queue_friendly_name: string;
  task_queue_sid: string;
  timeout: number;
  url: string;
  workflow_friendly_name: string;
  workflow_sid: string;
  workspace_sid: string;
}

interface TaskListInstance {
  /* jshint ignore:start */
  /**
   * create a TaskInstance
   *
   * @function create
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {number} [opts.timeout] -
   *          The amount of time in seconds the task is allowed to live up to a maximum of 2 weeks.
   * @param {number} [opts.priority] - Override priority for the Task.
   * @param {string} [opts.taskChannel] -
   *          When MultiTasking is enabled specify the type of the task by passing either TaskChannel Unique Name or Task Channel Sid.
   * @param {string} [opts.workflowSid] -
   *          The WorkflowSid for the Workflow that you would like to handle routing for this Task.
   * @param {string} [opts.attributes] -
   *          Url-encoded JSON string describing the attributes of this task.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed TaskInstance
   */
  /* jshint ignore:end */
  TaskListInstance.create = function create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Timeout': _.get(opts, 'timeout'),
      'Priority': _.get(opts, 'priority'),
      'TaskChannel': _.get(opts, 'taskChannel'),
      'WorkflowSid': _.get(opts, 'workflowSid'),
      'Attributes': _.get(opts, 'attributes')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new TaskInstance(
        this._version,
        payload,
        this._solution.workspaceSid,
        this._solution.sid
      ));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };
  /* jshint ignore:start */
  /**
   * Streams TaskInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {number} [opts.priority] -
   *          Retrieve the list of all Tasks in the workspace with the specified priority.
   * @param {string|list} [opts.assignmentStatus] -
   *          Returns the list of all Tasks in the workspace with the specified AssignmentStatus.
   * @param {string} [opts.workflowSid] -
   *          Returns the list of Tasks that are being controlled by the Workflow with the specified Sid value.
   * @param {string} [opts.workflowName] -
   *          Returns the list of Tasks that are being controlled by the Workflow with the specified FriendlyName value.
   * @param {string} [opts.taskQueueSid] -
   *          Returns the list of Tasks that are currently waiting in the TaskQueue identified by the Sid specified.
   * @param {string} [opts.taskQueueName] -
   *          Returns the list of Tasks that are currently waiting in the TaskQueue identified by the FriendlyName specified.
   * @param {string} [opts.evaluateTaskAttributes] -
   *          Provide a task attributes expression, and this will return tasks which match the attributes.
   * @param {string} [opts.ordering] -
   *          Use this parameter to control the order of the Tasks returned.
   * @param {boolean} [opts.hasAddons] - The has_addons
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   *         callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  TaskListInstance.each = function each(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    if (opts.callback) {
      callback = opts.callback;
    }
    if (_.isUndefined(callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var currentResource = 0;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
          callback(instance, onComplete);
        });

        if ((limits.pageLimit && limits.pageLimit <= currentPage)) {
          onComplete();
        } else if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };
  /* jshint ignore:start */
  /**
   * Retrieve a single target page of TaskInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  TaskListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new TaskPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };
  /* jshint ignore:start */
  /**
   * @description Lists TaskInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {number} [opts.priority] -
   *          Retrieve the list of all Tasks in the workspace with the specified priority.
   * @param {string|list} [opts.assignmentStatus] -
   *          Returns the list of all Tasks in the workspace with the specified AssignmentStatus.
   * @param {string} [opts.workflowSid] -
   *          Returns the list of Tasks that are being controlled by the Workflow with the specified Sid value.
   * @param {string} [opts.workflowName] -
   *          Returns the list of Tasks that are being controlled by the Workflow with the specified FriendlyName value.
   * @param {string} [opts.taskQueueSid] -
   *          Returns the list of Tasks that are currently waiting in the TaskQueue identified by the Sid specified.
   * @param {string} [opts.taskQueueName] -
   *          Returns the list of Tasks that are currently waiting in the TaskQueue identified by the FriendlyName specified.
   * @param {string} [opts.evaluateTaskAttributes] -
   *          Provide a task attributes expression, and this will return tasks which match the attributes.
   * @param {string} [opts.ordering] -
   *          Use this parameter to control the order of the Tasks returned.
   * @param {boolean} [opts.hasAddons] - The has_addons
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  TaskListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };
  /* jshint ignore:start */
  /**
   * Retrieve a single page of TaskInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {number} [opts.priority] -
   *          Retrieve the list of all Tasks in the workspace with the specified priority.
   * @param {string|list} [opts.assignmentStatus] -
   *          Returns the list of all Tasks in the workspace with the specified AssignmentStatus.
   * @param {string} [opts.workflowSid] -
   *          Returns the list of Tasks that are being controlled by the Workflow with the specified Sid value.
   * @param {string} [opts.workflowName] -
   *          Returns the list of Tasks that are being controlled by the Workflow with the specified FriendlyName value.
   * @param {string} [opts.taskQueueSid] -
   *          Returns the list of Tasks that are currently waiting in the TaskQueue identified by the Sid specified.
   * @param {string} [opts.taskQueueName] -
   *          Returns the list of Tasks that are currently waiting in the TaskQueue identified by the FriendlyName specified.
   * @param {string} [opts.evaluateTaskAttributes] -
   *          Provide a task attributes expression, and this will return tasks which match the attributes.
   * @param {string} [opts.ordering] -
   *          Use this parameter to control the order of the Tasks returned.
   * @param {boolean} [opts.hasAddons] - The has_addons
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  TaskListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Priority': _.get(opts, 'priority'),
      'AssignmentStatus': serialize.map(_.get(opts, 'assignmentStatus'), function(e) { return e; }),
      'WorkflowSid': _.get(opts, 'workflowSid'),
      'WorkflowName': _.get(opts, 'workflowName'),
      'TaskQueueSid': _.get(opts, 'taskQueueSid'),
      'TaskQueueName': _.get(opts, 'taskQueueName'),
      'EvaluateTaskAttributes': _.get(opts, 'evaluateTaskAttributes'),
      'Ordering': _.get(opts, 'ordering'),
      'HasAddons': serialize.bool(_.get(opts, 'hasAddons')),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new TaskPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };
}

/**
 * Options to pass to update
 *
 * @property attributes - The user-defined JSON data describing the custom attributes of this task.
 * @property assignmentStatus - A 'pending' or 'reserved' Task may be canceled by posting AssignmentStatus='canceled'.
 * @property reason - This is only required if the Task is canceled or completed.
 * @property priority - Override priority for the Task.
 * @property taskChannel - The task_channel
 */
export interface UpdateOptions {
  assignmentStatus?: task.status;
  attributes?: string;
  priority?: number;
  reason?: string;
  taskChannel?: string;
}

/**
 * Options to pass to update
 *
 * @property attributes - The user-defined JSON data describing the custom attributes of this task.
 * @property assignmentStatus - A 'pending' or 'reserved' Task may be canceled by posting AssignmentStatus='canceled'.
 * @property reason - This is only required if the Task is canceled or completed.
 * @property priority - Override priority for the Task.
 * @property taskChannel - The task_channel
 */
export interface UpdateOptions {
  assignmentStatus?: task.status;
  attributes?: string;
  priority?: number;
  reason?: string;
  taskChannel?: string;
}


declare class TaskPage extends Page {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskPage
   * @augments Page
   * @description Initialize the TaskPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Taskrouter.V1, response: object, solution: object);

  /**
   * Build an instance of TaskInstance
   *
   * @function getInstance
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class TaskInstance {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskInstance
   * @description Initialize the TaskContext
   *
   * @property accountSid - The ID of the account that owns this Task
   * @property age - The number of seconds since this task was created.
   * @property assignmentStatus - Returns the list of all Tasks in the workspace with the specified AssignmentStatus.
   * @property attributes - The user-defined JSON string describing the custom attributes of this work.
   * @property addons - The addon data for all installed addons is returned with this attribute
   * @property dateCreated - Date this task was created, given as ISO 8601 format.
   * @property dateUpdated - Date this task was updated, given as ISO 8601 format.
   * @property priority - Retrieve the list of all Tasks in the workspace with the specified priority.
   * @property reason - The reason the task was canceled  or completed
   * @property sid - The unique ID of the Task
   * @property taskQueueSid - Returns the list of Tasks that are currently waiting in the TaskQueue identified by the Sid specified.
   * @property taskQueueFriendlyName - The task_queue_friendly_name
   * @property taskChannelSid - The ID of the Task Channel
   * @property taskChannelUniqueName - The unique name of the Task Channel
   * @property timeout - The amount of time in seconds the task is allowed to live
   * @property workflowSid - Returns the list of Tasks that are being controlled by the Workflow with the specified Sid value.
   * @property workflowFriendlyName - The workflow_friendly_name
   * @property workspaceSid - The ID of the Workspace that holds this Task
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The ID of the Workspace that holds this Task
   * @param sid - The sid
   */
  constructor(version: Twilio.Taskrouter.V1, payload: object, workspaceSid: sid, sid: sid);

  _proxy?: TaskContext;
  /**
   * fetch a TaskInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a TaskInstance
   *
   * @function remove
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Access the reservations
   *
   * @function reservations
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskInstance
   * @instance
   */
  reservations();
  /**
   * Produce a plain JSON object version of the TaskInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskInstance
   * @instance
   */
  toJSON();
  /**
   * update a TaskInstance
   *
   * @function update
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class TaskContext {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskContext
   * @description Initialize the TaskContext
   *
   * @property reservations - reservations resource
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Taskrouter.V1, workspaceSid: sid, sid: sid);

  /**
   * fetch a TaskInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a TaskInstance
   *
   * @function remove
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  reservations?: Twilio.Taskrouter.V1.WorkspaceContext.TaskContext.ReservationList;
  /**
   * update a TaskInstance
   *
   * @function update
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { TaskContext, TaskInstance, TaskList, TaskListInstance, TaskPage, TaskResource }