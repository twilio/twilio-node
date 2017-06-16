'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var TaskQueueStatisticsList = require(
    './taskQueue/taskQueueStatistics').TaskQueueStatisticsList;
var TaskQueuesStatisticsList = require(
    './taskQueue/taskQueuesStatistics').TaskQueuesStatisticsList;
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var TaskQueueList;
var TaskQueuePage;
var TaskQueueInstance;
var TaskQueueContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueList
 * @description Initialize the TaskQueueList
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {string} workspaceSid - The workspace_sid
 */
/* jshint ignore:end */
TaskQueueList = function TaskQueueList(version, workspaceSid) {
  /* jshint ignore:start */
  /**
   * @function taskQueues
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext}
   */
  /* jshint ignore:end */
  function TaskQueueListInstance(sid) {
    return TaskQueueListInstance.get(sid);
  }

  TaskQueueListInstance._version = version;
  // Path Solution
  TaskQueueListInstance._solution = {
    workspaceSid: workspaceSid
  };
  TaskQueueListInstance._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/TaskQueues' // jshint ignore:line
  )(TaskQueueListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams TaskQueueInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.evaluateWorkerAttributes] - The evaluate_worker_attributes
   * @param {string} [opts.workerSid] - The worker_sid
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
  TaskQueueListInstance.each = function each(opts, callback) {
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
   * @description Lists TaskQueueInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.evaluateWorkerAttributes] - The evaluate_worker_attributes
   * @param {string} [opts.workerSid] - The worker_sid
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
  TaskQueueListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of TaskQueueInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.evaluateWorkerAttributes] - The evaluate_worker_attributes
   * @param {string} [opts.workerSid] - The worker_sid
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  TaskQueueListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': _.get(opts, 'friendlyName'),
      'EvaluateWorkerAttributes': _.get(opts, 'evaluateWorkerAttributes'),
      'WorkerSid': _.get(opts, 'workerSid'),
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
      deferred.resolve(new TaskQueuePage(
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
   * Retrieve a single target page of TaskQueueInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueList
   * @instance
   *
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.evaluateWorkerAttributes] - The evaluate_worker_attributes
   * @param {string} [opts.workerSid] - The worker_sid
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  TaskQueueListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({
      method: 'GET',
      uri: targetUrl
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new TaskQueuePage(
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
   * create a TaskQueueInstance
   *
   * @function create
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.friendlyName - The friendly_name
   * @param {string} opts.reservationActivitySid - The reservation_activity_sid
   * @param {string} opts.assignmentActivitySid - The assignment_activity_sid
   * @param {string} [opts.targetWorkers] - The target_workers
   * @param {number} [opts.maxReservedWorkers] - The max_reserved_workers
   * @param {task_queue.task_order} [opts.taskOrder] - The task_order
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed TaskQueueInstance
   */
  /* jshint ignore:end */
  TaskQueueListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.friendlyName)) {
      throw new Error('Required parameter "opts.friendlyName" missing.');
    }
    if (_.isUndefined(opts.reservationActivitySid)) {
      throw new Error('Required parameter "opts.reservationActivitySid" missing.');
    }
    if (_.isUndefined(opts.assignmentActivitySid)) {
      throw new Error('Required parameter "opts.assignmentActivitySid" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': _.get(opts, 'friendlyName'),
      'ReservationActivitySid': _.get(opts, 'reservationActivitySid'),
      'AssignmentActivitySid': _.get(opts, 'assignmentActivitySid'),
      'TargetWorkers': _.get(opts, 'targetWorkers'),
      'MaxReservedWorkers': _.get(opts, 'maxReservedWorkers'),
      'TaskOrder': _.get(opts, 'taskOrder')
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new TaskQueueInstance(
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
   * Constructs a task_queue
   *
   * @function get
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext}
   */
  /* jshint ignore:end */
  TaskQueueListInstance.get = function get(sid) {
    return new TaskQueueContext(
      this._version,
      this._solution.workspaceSid,
      sid
    );
  };

  return TaskQueueListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueuePage
 * @augments Page
 * @description Initialize the TaskQueuePage
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns TaskQueuePage
 */
/* jshint ignore:end */
TaskQueuePage = function TaskQueuePage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(TaskQueuePage.prototype, Page.prototype);
TaskQueuePage.prototype.constructor = TaskQueuePage;

/* jshint ignore:start */
/**
 * Build an instance of TaskQueueInstance
 *
 * @function getInstance
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueuePage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns TaskQueueInstance
 */
/* jshint ignore:end */
TaskQueuePage.prototype.getInstance = function getInstance(payload) {
  return new TaskQueueInstance(
    this._version,
    payload,
    this._solution.workspaceSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueInstance
 * @description Initialize the TaskQueueContext
 *
 * @property {string} accountSid - The account_sid
 * @property {string} assignmentActivitySid - The assignment_activity_sid
 * @property {string} assignmentActivityName - The assignment_activity_name
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} friendlyName - The friendly_name
 * @property {number} maxReservedWorkers - The max_reserved_workers
 * @property {string} reservationActivitySid - The reservation_activity_sid
 * @property {string} reservationActivityName - The reservation_activity_name
 * @property {string} sid - The sid
 * @property {string} targetWorkers - The target_workers
 * @property {task_queue.task_order} taskOrder - The task_order
 * @property {string} url - The url
 * @property {string} workspaceSid - The workspace_sid
 * @property {string} links - The links
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
TaskQueueInstance = function TaskQueueInstance(version, payload, workspaceSid,
                                                sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.assignmentActivitySid = payload.assignment_activity_sid; // jshint ignore:line
  this.assignmentActivityName = payload.assignment_activity_name; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.maxReservedWorkers = deserialize.integer(payload.max_reserved_workers); // jshint ignore:line
  this.reservationActivitySid = payload.reservation_activity_sid; // jshint ignore:line
  this.reservationActivityName = payload.reservation_activity_name; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.targetWorkers = payload.target_workers; // jshint ignore:line
  this.taskOrder = payload.task_order; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.workspaceSid = payload.workspace_sid; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid || this.sid,
  };
};

Object.defineProperty(TaskQueueInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new TaskQueueContext(
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
 * fetch a TaskQueueInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TaskQueueInstance
 */
/* jshint ignore:end */
TaskQueueInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a TaskQueueInstance
 *
 * @function update
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.targetWorkers] - The target_workers
 * @param {string} [opts.reservationActivitySid] - The reservation_activity_sid
 * @param {string} [opts.assignmentActivitySid] - The assignment_activity_sid
 * @param {number} [opts.maxReservedWorkers] - The max_reserved_workers
 * @param {task_queue.task_order} [opts.taskOrder] - The task_order
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TaskQueueInstance
 */
/* jshint ignore:end */
TaskQueueInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * remove a TaskQueueInstance
 *
 * @function remove
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TaskQueueInstance
 */
/* jshint ignore:end */
TaskQueueInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * Access the taskQueuesStatistics
 *
 * @function taskQueuesStatistics
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueInstance
 * @instance
 *
 * @returns {Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueuesStatisticsList}
 */
/* jshint ignore:end */
TaskQueueInstance.prototype.taskQueuesStatistics = function
    taskQueuesStatistics() {
  return this._proxy.taskQueuesStatistics;
};

/* jshint ignore:start */
/**
 * Access the taskQueueStatistics
 *
 * @function taskQueueStatistics
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueInstance
 * @instance
 *
 * @returns {Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsList}
 */
/* jshint ignore:end */
TaskQueueInstance.prototype.taskQueueStatistics = function taskQueueStatistics()
    {
  return this._proxy.taskQueueStatistics;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext
 * @description Initialize the TaskQueueContext
 *
 * @property {Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueuesStatisticsList} taskQueuesStatistics -
 *          taskQueuesStatistics resource
 * @property {Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsList} taskQueueStatistics -
 *          taskQueueStatistics resource
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
TaskQueueContext = function TaskQueueContext(version, workspaceSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/TaskQueues/<%= sid %>' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._taskQueuesStatistics = undefined;
  this._taskQueueStatistics = undefined;
};

/* jshint ignore:start */
/**
 * fetch a TaskQueueInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TaskQueueInstance
 */
/* jshint ignore:end */
TaskQueueContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new TaskQueueInstance(
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
 * update a TaskQueueInstance
 *
 * @function update
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.targetWorkers] - The target_workers
 * @param {string} [opts.reservationActivitySid] - The reservation_activity_sid
 * @param {string} [opts.assignmentActivitySid] - The assignment_activity_sid
 * @param {number} [opts.maxReservedWorkers] - The max_reserved_workers
 * @param {task_queue.task_order} [opts.taskOrder] - The task_order
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TaskQueueInstance
 */
/* jshint ignore:end */
TaskQueueContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': _.get(opts, 'friendlyName'),
    'TargetWorkers': _.get(opts, 'targetWorkers'),
    'ReservationActivitySid': _.get(opts, 'reservationActivitySid'),
    'AssignmentActivitySid': _.get(opts, 'assignmentActivitySid'),
    'MaxReservedWorkers': _.get(opts, 'maxReservedWorkers'),
    'TaskOrder': _.get(opts, 'taskOrder')
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new TaskQueueInstance(
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
 * remove a TaskQueueInstance
 *
 * @function remove
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TaskQueueInstance
 */
/* jshint ignore:end */
TaskQueueContext.prototype.remove = function remove(callback) {
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

Object.defineProperty(TaskQueueContext.prototype,
  'taskQueuesStatistics', {
  get: function() {
    if (!this._taskQueuesStatistics) {
      this._taskQueuesStatistics = new TaskQueuesStatisticsList(
        this._version,
        this._solution.workspaceSid
      );
    }
    return this._taskQueuesStatistics;
  }
});

Object.defineProperty(TaskQueueContext.prototype,
  'taskQueueStatistics', {
  get: function() {
    if (!this._taskQueueStatistics) {
      this._taskQueueStatistics = new TaskQueueStatisticsList(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    }
    return this._taskQueueStatistics;
  }
});

module.exports = {
  TaskQueueList: TaskQueueList,
  TaskQueuePage: TaskQueuePage,
  TaskQueueInstance: TaskQueueInstance,
  TaskQueueContext: TaskQueueContext
};
