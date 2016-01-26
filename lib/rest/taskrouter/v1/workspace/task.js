'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var Page = require('../../../../base/Page');
var ReservationList = require('./task/reservation').ReservationList;
var deserialize = require('../../../../base/deserialize');
var values = require('../../../../base/values');

var TaskPage;
var TaskList;
var TaskInstance;
var TaskContext;

/**
 * Initialize the TaskPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 * @param {string} workspaceSid - The workspace_sid
 *
 * @returns TaskPage
 */
function TaskPage(version, response, workspaceSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid
  };
}

_.extend(TaskPage.prototype, Page.prototype);
TaskPage.prototype.constructor = TaskPage;

/**
 * Build an instance of TaskInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns TaskInstance
 */
TaskPage.prototype.getInstance = function getInstance(payload) {
  return new TaskInstance(
    this._version,
    payload,
    this._solution.workspaceSid
  );
};


/**
 * Initialize the TaskList
 *
 * @param {Version} version - Version that contains the resource
 * @param {string} workspaceSid - The workspace_sid
 *
 * @returns TaskList
 */
function TaskList(version, workspaceSid) {
  function TaskListInstance(sid) {
    return TaskListInstance.get(sid);
  }

  TaskListInstance._version = version;
  // Path Solution
  TaskListInstance._solution = {
    workspaceSid: workspaceSid
  };
  TaskListInstance._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Tasks' // jshint ignore:line
  )(TaskListInstance._solution);
  /**
   * Streams TaskInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param {Function} opts.callback - A callback function to process records
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize=50] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         list() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {string} [opts.priority] - The priority
   * @param {task.status} [opts.assignmentStatus] - The assignment_status
   * @param {string} [opts.workflowSid] - The workflow_sid
   * @param {string} [opts.workflowName] - The workflow_name
   * @param {string} [opts.taskQueueSid] - The task_queue_sid
   * @param {string} [opts.taskQueueName] - The task_queue_name
   */
  TaskListInstance.each = function each(opts) {
    if (!(opts && 'callback' in opts)) {
      throw new Error('opts.callback parameter required');
    }

    var currentPage = 1;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var deferred = Q.defer();
    function fetchNextPage(fn) {
      var promise = fn();

      promise.then(function(page) {
        if (_.isEmpty(page.instances)) {
          deferred.resolve();
        }

        _.each(page.instances, opts.callback);

        if ((limits.pageLimit && limits.pageLimit <= currentPage)) {
          deferred.resolve();
        } else {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(deferred.reject);
    }

    fetchNextPage(_.bind(this.page, this, opts));

    return deferred.promise;
  };

  /**
   * Lists TaskInstance records from the API as a list.
   *
   * @param {string} [opts.priority] - The priority
   * @param {task.status} [opts.assignmentStatus] - The assignment_status
   * @param {string} [opts.workflowSid] - The workflow_sid
   * @param {string} [opts.workflowName] - The workflow_name
   * @param {string} [opts.taskQueueSid] - The task_queue_sid
   * @param {string} [opts.taskQueueName] - The task_queue_name
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
   *
   * @returns {Array} A list of records
   */
  TaskListInstance.list = function list(opts) {
    opts = opts || {};

    var allResources = [];
    opts.callback = function(resource) {
      allResources.push(resource);
    };

    var promise = this.each(opts);
    promise = promise.then(function() {
      return allResources;
    });

    return promise;
  };

  /**
   * Retrieve a single page of TaskInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.priority] - The priority
   * @param {task.status} [opts.assignmentStatus] - The assignment_status
   * @param {string} [opts.workflowSid] - The workflow_sid
   * @param {string} [opts.workflowName] - The workflow_name
   * @param {string} [opts.taskQueueSid] - The task_queue_sid
   * @param {string} [opts.taskQueueName] - The task_queue_name
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of TaskInstance
   */
  TaskListInstance.page = function page(opts) {
    opts = opts || {};
    var params = values.of({
      'Priority': opts.priority,
      'AssignmentStatus': opts.assignmentStatus,
      'WorkflowSid': opts.workflowSid,
      'WorkflowName': opts.workflowName,
      'TaskQueueSid': opts.taskQueueSid,
      'TaskQueueName': opts.taskQueueName,
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = version.page(
      'GET',
      this._uri,
      { params: params }
    );

    promise = promise.then(function(response) {
      return new TaskPage(
        this._version,
        response,
        this._solution.workspaceSid
      );
    }.bind(this));

    return promise;
  };

  /**
   * Create a new TaskInstance
   *
   * @param {string} attributes - The attributes
   * @param {string} workflowSid - The workflow_sid
   * @param {string} [opts.timeout] - The timeout
   * @param {string} [opts.priority] - The priority
   *
   * @returns Newly created TaskInstance
   */
  TaskListInstance.create = function create(attributes, workflowSid, opts) {
    opts = opts || {};
    var data = values.of({
      'Attributes': attributes,
      'WorkflowSid': workflowSid,
      'Timeout': opts.timeout,
      'Priority': opts.priority
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    promise = promise.then(function(payload) {
      return new TaskInstance(
        this._version,
        payload,
        this._solution.workspaceSid
      );
    }.bind(this));

    return promise;
  };

  /**
   * Constructs a TaskContext
   *
   * @param {string} sid - The sid
   *
   * @returns TaskContext
   */
  TaskListInstance.get = function get(sid) {
    return new TaskContext(
      this._version,
      this._solution.workspaceSid,
      sid
    );
  };

  return TaskListInstance;
}


/**
 * Initialize the TaskContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} sid - The sid
 *
 * @returns {TaskContext}
 */
function TaskInstance(version, payload, workspaceSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    age: deserialize.integer(payload.age), // jshint ignore:line,
    assignmentStatus: payload.assignment_status, // jshint ignore:line,
    attributes: payload.attributes, // jshint ignore:line,
    dateCreated: deserialize.iso8601DateTime(payload.date_created), // jshint ignore:line,
    dateUpdated: deserialize.iso8601DateTime(payload.date_updated), // jshint ignore:line,
    priority: deserialize.integer(payload.priority), // jshint ignore:line,
    reason: payload.reason, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    taskQueueSid: payload.task_queue_sid, // jshint ignore:line,
    timeout: deserialize.integer(payload.timeout), // jshint ignore:line,
    workflowSid: payload.workflow_sid, // jshint ignore:line,
    workspaceSid: payload.workspace_sid, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(TaskInstance.prototype, InstanceResource.prototype);
TaskInstance.prototype.constructor = TaskInstance;

Object.defineProperty(TaskInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new TaskContext(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(TaskInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(TaskInstance.prototype,
  'age', {
  get: function() {
    return this._properties.age;
  },
});

Object.defineProperty(TaskInstance.prototype,
  'assignmentStatus', {
  get: function() {
    return this._properties.assignmentStatus;
  },
});

Object.defineProperty(TaskInstance.prototype,
  'attributes', {
  get: function() {
    return this._properties.attributes;
  },
});

Object.defineProperty(TaskInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(TaskInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(TaskInstance.prototype,
  'priority', {
  get: function() {
    return this._properties.priority;
  },
});

Object.defineProperty(TaskInstance.prototype,
  'reason', {
  get: function() {
    return this._properties.reason;
  },
});

Object.defineProperty(TaskInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(TaskInstance.prototype,
  'taskQueueSid', {
  get: function() {
    return this._properties.taskQueueSid;
  },
});

Object.defineProperty(TaskInstance.prototype,
  'timeout', {
  get: function() {
    return this._properties.timeout;
  },
});

Object.defineProperty(TaskInstance.prototype,
  'workflowSid', {
  get: function() {
    return this._properties.workflowSid;
  },
});

Object.defineProperty(TaskInstance.prototype,
  'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

/**
 * Fetch a TaskInstance
 *
 * @returns Fetched TaskInstance
 */
TaskInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Update the TaskInstance
 *
 * @param {string} [opts.attributes] - The attributes
 * @param {task.status} [opts.assignmentStatus] - The assignment_status
 * @param {string} [opts.reason] - The reason
 * @param {string} [opts.priority] - The priority
 *
 * @returns Updated TaskInstance
 */
TaskInstance.prototype.update = function update(opts) {
  return this._proxy.update(
    opts
  );
};

/**
 * Deletes the TaskInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
TaskInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};

/**
 * Access the reservations
 *
 * @returns reservations
 */
TaskInstance.prototype.reservations = function reservations() {
  return this._proxy.reservations;
};


/**
 * Initialize the TaskContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} sid - The sid
 *
 * @returns {TaskContext}
 */
function TaskContext(version, workspaceSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Tasks/<%= sid %>' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._reservations = undefined;
}

_.extend(TaskContext.prototype, InstanceContext.prototype);
TaskContext.prototype.constructor = TaskContext;

/**
 * Fetch a TaskInstance
 *
 * @returns Fetched TaskInstance
 */
TaskContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new TaskInstance(
      this._version,
      payload,
      this._solution.workspaceSid,
      this._solution.sid
    );
  }.bind(this));

  return promise;
};

/**
 * Update the TaskInstance
 *
 * @param {string} [opts.attributes] - The attributes
 * @param {task.status} [opts.assignmentStatus] - The assignment_status
 * @param {string} [opts.reason] - The reason
 * @param {string} [opts.priority] - The priority
 *
 * @returns Updated TaskInstance
 */
TaskContext.prototype.update = function update(opts) {
  opts = opts || {};
  var data = values.of({
    'Attributes': opts.attributes,
    'AssignmentStatus': opts.assignmentStatus,
    'Reason': opts.reason,
    'Priority': opts.priority,
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  promise = promise.then(function(payload) {
    return new TaskInstance(
      this.version,
      payload,
      this._solution.workspaceSid,
      this._solution.sid
    );
  }.bind(this));

  return promise;
};

/**
 * Deletes the TaskInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
TaskContext.prototype.remove = function remove() {
  return this._version.remove({
    method: 'DELETE',
    uri: this._uri
  });
};

Object.defineProperty(TaskContext.prototype,
  'reservations', {
  get: function() {
    if (!this._reservations) {
      this._reservations = new ReservationList(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    }
    return this._reservations;
  },
});

module.exports = {
  TaskPage: TaskPage,
  TaskList: TaskList,
  TaskInstance: TaskInstance,
  TaskContext: TaskContext
};
