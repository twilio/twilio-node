'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var ReservationList = require('./task/reservation').ReservationList;
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var TaskList;
var TaskPage;
var TaskInstance;
var TaskContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskList
 * @description Initialize the TaskList
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {string} workspaceSid - The workspace_sid
 */
/* jshint ignore:end */
TaskList = function TaskList(version, workspaceSid) {
  /* jshint ignore:start */
  /**
   * @function tasks
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.TaskContext}
   */
  /* jshint ignore:end */
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
   * @param {object|function} opts - ...
   * @param {number} [opts.priority] - The priority
   * @param {string|list} [opts.assignmentStatus] - The assignment_status
   * @param {string} [opts.workflowSid] - The workflow_sid
   * @param {string} [opts.workflowName] - The workflow_name
   * @param {string} [opts.taskQueueSid] - The task_queue_sid
   * @param {string} [opts.taskQueueName] - The task_queue_name
   * @param {string} [opts.evaluateTaskAttributes] - The evaluate_task_attributes
   * @param {string} [opts.ordering] - The ordering
   * @param {string} [opts.hasAddons] - The has_addons
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize=50] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   * callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
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

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
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
   * @param {object|function} opts - ...
   * @param {number} [opts.priority] - The priority
   * @param {string|list} [opts.assignmentStatus] - The assignment_status
   * @param {string} [opts.workflowSid] - The workflow_sid
   * @param {string} [opts.workflowName] - The workflow_name
   * @param {string} [opts.taskQueueSid] - The task_queue_sid
   * @param {string} [opts.taskQueueName] - The task_queue_name
   * @param {string} [opts.evaluateTaskAttributes] - The evaluate_task_attributes
   * @param {string} [opts.ordering] - The ordering
   * @param {string} [opts.hasAddons] - The has_addons
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
   * @param {object|function} opts - ...
   * @param {number} [opts.priority] - The priority
   * @param {string|list} [opts.assignmentStatus] - The assignment_status
   * @param {string} [opts.workflowSid] - The workflow_sid
   * @param {string} [opts.workflowName] - The workflow_name
   * @param {string} [opts.taskQueueSid] - The task_queue_sid
   * @param {string} [opts.taskQueueName] - The task_queue_name
   * @param {string} [opts.evaluateTaskAttributes] - The evaluate_task_attributes
   * @param {string} [opts.ordering] - The ordering
   * @param {string} [opts.hasAddons] - The has_addons
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
      'AssignmentStatus': _.get(opts, 'assignmentStatus'),
      'WorkflowSid': _.get(opts, 'workflowSid'),
      'WorkflowName': _.get(opts, 'workflowName'),
      'TaskQueueSid': _.get(opts, 'taskQueueSid'),
      'TaskQueueName': _.get(opts, 'taskQueueName'),
      'EvaluateTaskAttributes': _.get(opts, 'evaluateTaskAttributes'),
      'Ordering': _.get(opts, 'ordering'),
      'HasAddons': _.get(opts, 'hasAddons'),
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
        this._solution
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
   * Retrieve a single target page of TaskInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskList
   * @instance
   *
   * @param {number} [opts.priority] - The priority
   * @param {string|list} [opts.assignmentStatus] - The assignment_status
   * @param {string} [opts.workflowSid] - The workflow_sid
   * @param {string} [opts.workflowName] - The workflow_name
   * @param {string} [opts.taskQueueSid] - The task_queue_sid
   * @param {string} [opts.taskQueueName] - The task_queue_name
   * @param {string} [opts.evaluateTaskAttributes] - The evaluate_task_attributes
   * @param {string} [opts.ordering] - The ordering
   * @param {string} [opts.hasAddons] - The has_addons
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  TaskListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({
      method: 'GET',
      uri: targetUrl
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new TaskPage(
        this._version,
        payload,
        this._solution
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
   * create a TaskInstance
   *
   * @function create
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {number} [opts.timeout] - The timeout
   * @param {number} [opts.priority] - The priority
   * @param {string} [opts.taskChannel] - The task_channel
   * @param {string} [opts.workflowSid] - The workflow_sid
   * @param {string} [opts.attributes] - The attributes
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

    var promise = this._version.create({
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

  /* jshint ignore:start */
  /**
   * Constructs a task
   *
   * @function get
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.TaskContext}
   */
  /* jshint ignore:end */
  TaskListInstance.get = function get(sid) {
    return new TaskContext(
      this._version,
      this._solution.workspaceSid,
      sid
    );
  };

  return TaskListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskPage
 * @augments Page
 * @description Initialize the TaskPage
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns TaskPage
 */
/* jshint ignore:end */
TaskPage = function TaskPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(TaskPage.prototype, Page.prototype);
TaskPage.prototype.constructor = TaskPage;

/* jshint ignore:start */
/**
 * Build an instance of TaskInstance
 *
 * @function getInstance
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns TaskInstance
 */
/* jshint ignore:end */
TaskPage.prototype.getInstance = function getInstance(payload) {
  return new TaskInstance(
    this._version,
    payload,
    this._solution.workspaceSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskInstance
 * @description Initialize the TaskContext
 *
 * @property {string} accountSid - The account_sid
 * @property {number} age - The age
 * @property {task.status} assignmentStatus - The assignment_status
 * @property {string} attributes - The attributes
 * @property {string} addons - The addons
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {number} priority - The priority
 * @property {string} reason - The reason
 * @property {string} sid - The sid
 * @property {string} taskQueueSid - The task_queue_sid
 * @property {string} taskQueueFriendlyName - The task_queue_friendly_name
 * @property {string} taskChannelSid - The task_channel_sid
 * @property {string} taskChannelUniqueName - The task_channel_unique_name
 * @property {number} timeout - The timeout
 * @property {string} workflowSid - The workflow_sid
 * @property {string} workflowFriendlyName - The workflow_friendly_name
 * @property {string} workspaceSid - The workspace_sid
 * @property {string} url - The url
 * @property {string} links - The links
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
TaskInstance = function TaskInstance(version, payload, workspaceSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.age = deserialize.integer(payload.age); // jshint ignore:line
  this.assignmentStatus = payload.assignment_status; // jshint ignore:line
  this.attributes = payload.attributes; // jshint ignore:line
  this.addons = payload.addons; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.priority = deserialize.integer(payload.priority); // jshint ignore:line
  this.reason = payload.reason; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.taskQueueSid = payload.task_queue_sid; // jshint ignore:line
  this.taskQueueFriendlyName = payload.task_queue_friendly_name; // jshint ignore:line
  this.taskChannelSid = payload.task_channel_sid; // jshint ignore:line
  this.taskChannelUniqueName = payload.task_channel_unique_name; // jshint ignore:line
  this.timeout = deserialize.integer(payload.timeout); // jshint ignore:line
  this.workflowSid = payload.workflow_sid; // jshint ignore:line
  this.workflowFriendlyName = payload.workflow_friendly_name; // jshint ignore:line
  this.workspaceSid = payload.workspace_sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid || this.sid,
  };
};

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
  }
});

/* jshint ignore:start */
/**
 * fetch a TaskInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TaskInstance
 */
/* jshint ignore:end */
TaskInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a TaskInstance
 *
 * @function update
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.attributes] - The attributes
 * @param {task.status} [opts.assignmentStatus] - The assignment_status
 * @param {string} [opts.reason] - The reason
 * @param {number} [opts.priority] - The priority
 * @param {string} [opts.taskChannel] - The task_channel
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TaskInstance
 */
/* jshint ignore:end */
TaskInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * remove a TaskInstance
 *
 * @function remove
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TaskInstance
 */
/* jshint ignore:end */
TaskInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * Access the reservations
 *
 * @function reservations
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskInstance
 * @instance
 *
 * @returns {Twilio.Taskrouter.V1.WorkspaceContext.TaskContext.ReservationList}
 */
/* jshint ignore:end */
TaskInstance.prototype.reservations = function reservations() {
  return this._proxy.reservations;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskContext
 * @description Initialize the TaskContext
 *
 * @property {Twilio.Taskrouter.V1.WorkspaceContext.TaskContext.ReservationList} reservations -
 *          reservations resource
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
TaskContext = function TaskContext(version, workspaceSid, sid) {
  this._version = version;

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
};

/* jshint ignore:start */
/**
 * fetch a TaskInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TaskInstance
 */
/* jshint ignore:end */
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

/* jshint ignore:start */
/**
 * update a TaskInstance
 *
 * @function update
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.attributes] - The attributes
 * @param {task.status} [opts.assignmentStatus] - The assignment_status
 * @param {string} [opts.reason] - The reason
 * @param {number} [opts.priority] - The priority
 * @param {string} [opts.taskChannel] - The task_channel
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TaskInstance
 */
/* jshint ignore:end */
TaskContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'Attributes': _.get(opts, 'attributes'),
    'AssignmentStatus': _.get(opts, 'assignmentStatus'),
    'Reason': _.get(opts, 'reason'),
    'Priority': _.get(opts, 'priority'),
    'TaskChannel': _.get(opts, 'taskChannel')
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

/* jshint ignore:start */
/**
 * remove a TaskInstance
 *
 * @function remove
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TaskInstance
 */
/* jshint ignore:end */
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
  }
});

module.exports = {
  TaskList: TaskList,
  TaskPage: TaskPage,
  TaskInstance: TaskInstance,
  TaskContext: TaskContext
};
