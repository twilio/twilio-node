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
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskPage
 * @augments Page
 * @description Initialize the TaskPage
 *
 * @param {V1} version - Version that contains the resource
 * @param {object} response - Response from the API
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
 * @param {object} payload - Payload response from the API
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
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskList
 * @description Initialize the TaskList
 *
 * @param {V1} version - Version that contains the resource
 * @param {string} workspaceSid - The workspace_sid
 *
 * @returns {function} - TaskListInstance
 */
function TaskList(version, workspaceSid) {
  /**
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskList
   *
   * @param {string} sid - sid of instance
   *
   * @returns TaskContext
   */
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
   * @memberof TaskList
   *
   * @description Streams TaskInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
   * @param {number} [opts.priority] - The priority
   * @param {task.status} [opts.assignmentStatus] - The assignment_status
   * @param {string} [opts.workflowSid] - The workflow_sid
   * @param {string} [opts.workflowName] - The workflow_name
   * @param {string} [opts.taskQueueSid] - The task_queue_sid
   * @param {string} [opts.taskQueueName] - The task_queue_name
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
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   * callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  TaskListInstance.each = function each(opts, callback) {
    opts = opts || {};
    if (_.isFunction(opts)) {
      opts = { callback: opts };
    } else if (_.isFunction(callback) && !_.isFunction(opts.callback)) {
      opts.callback = callback;
    }

    if (_.isUndefined(opts.callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
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
          if (done) {
            return false;
          }

          opts.callback(instance, onComplete);
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

    fetchNextPage(_.bind(this.page, this, opts));
  };

  /**
   * @memberof TaskList
   *
   * @description Lists TaskInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
   * @param {number} [opts.priority] - The priority
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
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  TaskListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource) {
      allResources.push(resource);
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

  /**
   * @memberof TaskList
   *
   * @description Retrieve a single page of TaskInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
   * @param {number} [opts.priority] - The priority
   * @param {task.status} [opts.assignmentStatus] - The assignment_status
   * @param {string} [opts.workflowSid] - The workflow_sid
   * @param {string} [opts.workflowName] - The workflow_name
   * @param {string} [opts.taskQueueSid] - The task_queue_sid
   * @param {string} [opts.taskQueueName] - The task_queue_name
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  TaskListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
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

    var promise = this._version.page({
      uri: this._uri,
      method: 'GET',
      params: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new TaskPage(
        this._version,
        payload,
        this._solution.workspaceSid
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

  /**
   * @memberof TaskList
   *
   * @description Create a new TaskInstance
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object} opts - ...
   * @param {string} opts.attributes - The attributes
   * @param {string} opts.workflowSid - The workflow_sid
   * @param {number} [opts.timeout] - The timeout
   * @param {number} [opts.priority] - The priority
   * @param {function} [callback] - Callback to handle created record
   *
   * @returns {Promise} Resolves to newly created TaskInstance
   */
  TaskListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameters attributes, workflowSid are missing.');  // jshint ignore:line
    }
    if (_.isUndefined(opts.attributes)) {
      throw new Error('Required parameter "attributes" missing.');
    }
    if (_.isUndefined(opts.workflowSid)) {
      throw new Error('Required parameter "workflowSid" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'Attributes': opts.attributes,
      'WorkflowSid': opts.workflowSid,
      'Timeout': opts.timeout,
      'Priority': opts.priority
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new TaskInstance(
        this._version,
        payload,
        this._solution.workspaceSid
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

  /**
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskList
   *
   * @description Constructs a TaskContext
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
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskInstance
 * @augments InstanceResource
 * @description Initialize the TaskContext
 *
 * @property {string} accountSid - The account_sid
 * @property {number} age - The age
 * @property {task.status} assignmentStatus - The assignment_status
 * @property {string} attributes - The attributes
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {number} priority - The priority
 * @property {string} reason - The reason
 * @property {string} sid - The sid
 * @property {string} taskQueueSid - The task_queue_sid
 * @property {number} timeout - The timeout
 * @property {string} workflowSid - The workflow_sid
 * @property {string} workspaceSid - The workspace_sid
 *
 * @param {V1} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} sid - The sid
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
 * @description Fetch a TaskInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched TaskInstance
 */
TaskInstance.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

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

/**
 * @description Update the TaskInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.attributes] - The attributes
 * @param {task.status} [opts.assignmentStatus] - The assignment_status
 * @param {string} [opts.reason] - The reason
 * @param {number} [opts.priority] - The priority
 * @param {function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated TaskInstance
 */
TaskInstance.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'Attributes': opts.attributes,
    'AssignmentStatus': opts.assignmentStatus,
    'Reason': opts.reason,
    'Priority': opts.priority
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

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

/**
 * @description Deletes the TaskInstance
 *
 * @param {function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
TaskInstance.prototype.remove = function remove(callback) {
  var deferred = Q.defer();
  var promise = this._version.remove({
    uri: this._uri,
    method: 'DELETE'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(payload);
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
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
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskContext
 * @augments InstanceContext
 * @description Initialize the TaskContext
 *
 * @property {Twilio.Taskrouter.V1.WorkspaceContext.TaskContext.ReservationList} reservations -
 *          reservations resource
 *
 * @param {V1} version - Version that contains the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} sid - The sid
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
 * @description Fetch a TaskInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched TaskInstance
 */
TaskContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

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

/**
 * @description Update the TaskInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.attributes] - The attributes
 * @param {task.status} [opts.assignmentStatus] - The assignment_status
 * @param {string} [opts.reason] - The reason
 * @param {number} [opts.priority] - The priority
 * @param {function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated TaskInstance
 */
TaskContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'Attributes': opts.attributes,
    'AssignmentStatus': opts.assignmentStatus,
    'Reason': opts.reason,
    'Priority': opts.priority
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

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

/**
 * @description Deletes the TaskInstance
 *
 * @param {function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
TaskContext.prototype.remove = function remove(callback) {
  var deferred = Q.defer();
  var promise = this._version.remove({
    uri: this._uri,
    method: 'DELETE'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(payload);
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
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
