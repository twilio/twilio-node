'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var Page = require('../../../../base/Page');
var TaskQueueStatisticsList = require(
    './taskQueue/taskQueueStatistics').TaskQueueStatisticsList;
var TaskQueuesStatisticsList = require(
    './taskQueue/taskQueuesStatistics').TaskQueuesStatisticsList;
var deserialize = require('../../../../base/deserialize');
var values = require('../../../../base/values');

var TaskQueuePage;
var TaskQueueList;
var TaskQueueInstance;
var TaskQueueContext;

/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueuePage
 * @augments Page
 * @description Initialize the TaskQueuePage
 *
 * @param {V1} version - Version that contains the resource
 * @param {object} response - Response from the API
 * @param {string} workspaceSid - The workspace_sid
 *
 * @returns TaskQueuePage
 */
function TaskQueuePage(version, response, workspaceSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid
  };
}

_.extend(TaskQueuePage.prototype, Page.prototype);
TaskQueuePage.prototype.constructor = TaskQueuePage;

/**
 * Build an instance of TaskQueueInstance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns TaskQueueInstance
 */
TaskQueuePage.prototype.getInstance = function getInstance(payload) {
  return new TaskQueueInstance(
    this._version,
    payload,
    this._solution.workspaceSid
  );
};


/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueList
 * @description Initialize the TaskQueueList
 *
 * @param {V1} version - Version that contains the resource
 * @param {string} workspaceSid - The workspace_sid
 *
 * @returns {function} - TaskQueueListInstance
 */
function TaskQueueList(version, workspaceSid) {
  /**
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueList
   *
   * @param {string} sid - sid of instance
   *
   * @returns TaskQueueContext
   */
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

  // Components
  TaskQueueListInstance._statistics = undefined;

  /**
   * @memberof TaskQueueList
   *
   * @description Streams TaskQueueInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.evaluateWorkerAttributes] - The evaluate_worker_attributes
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
   * @memberof TaskQueueList
   *
   * @description Lists TaskQueueInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.evaluateWorkerAttributes] - The evaluate_worker_attributes
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
  TaskQueueListInstance.list = function list(opts, callback) {
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
   * @memberof TaskQueueList
   *
   * @description Retrieve a single page of TaskQueueInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.evaluateWorkerAttributes] - The evaluate_worker_attributes
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  TaskQueueListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': opts.friendlyName,
      'EvaluateWorkerAttributes': opts.evaluateWorkerAttributes,
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
   * @memberof TaskQueueList
   *
   * @description Create a new TaskQueueInstance
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object} opts - ...
   * @param {string} opts.friendlyName - The friendly_name
   * @param {string} opts.reservationActivitySid - The reservation_activity_sid
   * @param {string} opts.assignmentActivitySid - The assignment_activity_sid
   * @param {string} [opts.targetWorkers] - The target_workers
   * @param {number} [opts.maxReservedWorkers] - The max_reserved_workers
   * @param {function} [callback] - Callback to handle created record
   *
   * @returns {Promise} Resolves to newly created TaskQueueInstance
   */
  TaskQueueListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameters friendlyName, reservationActivitySid, assignmentActivitySid are missing.');  // jshint ignore:line
    }
    if (_.isUndefined(opts.friendlyName)) {
      throw new Error('Required parameter "friendlyName" missing.');
    }
    if (_.isUndefined(opts.reservationActivitySid)) {
      throw new Error('Required parameter "reservationActivitySid" missing.');
    }
    if (_.isUndefined(opts.assignmentActivitySid)) {
      throw new Error('Required parameter "assignmentActivitySid" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': opts.friendlyName,
      'ReservationActivitySid': opts.reservationActivitySid,
      'AssignmentActivitySid': opts.assignmentActivitySid,
      'TargetWorkers': opts.targetWorkers,
      'MaxReservedWorkers': opts.maxReservedWorkers
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

  Object.defineProperty(TaskQueueListInstance,
    'statistics', {
    get: function statistics() {
      if (!this._statistics) {
        this._statistics = new TaskQueuesStatisticsList(
          this._version,
          this._solution.workspaceSid
        );
      }

      return this._statistics;
    },
  });

  /**
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueList
   *
   * @description Constructs a TaskQueueContext
   *
   * @param {string} sid - The sid
   *
   * @returns TaskQueueContext
   */
  TaskQueueListInstance.get = function get(sid) {
    return new TaskQueueContext(
      this._version,
      this._solution.workspaceSid,
      sid
    );
  };

  return TaskQueueListInstance;
}


/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueInstance
 * @augments InstanceResource
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
 * @property {string} url - The url
 * @property {string} workspaceSid - The workspace_sid
 *
 * @param {V1} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} sid - The sid
 */
function TaskQueueInstance(version, payload, workspaceSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    assignmentActivitySid: payload.assignment_activity_sid, // jshint ignore:line,
    assignmentActivityName: payload.assignment_activity_name, // jshint ignore:line,
    dateCreated: deserialize.iso8601DateTime(payload.date_created), // jshint ignore:line,
    dateUpdated: deserialize.iso8601DateTime(payload.date_updated), // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    maxReservedWorkers: deserialize.integer(payload.max_reserved_workers), // jshint ignore:line,
    reservationActivitySid: payload.reservation_activity_sid, // jshint ignore:line,
    reservationActivityName: payload.reservation_activity_name, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    targetWorkers: payload.target_workers, // jshint ignore:line,
    url: payload.url, // jshint ignore:line,
    workspaceSid: payload.workspace_sid, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(TaskQueueInstance.prototype, InstanceResource.prototype);
TaskQueueInstance.prototype.constructor = TaskQueueInstance;

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
  },
});

Object.defineProperty(TaskQueueInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(TaskQueueInstance.prototype,
  'assignmentActivitySid', {
  get: function() {
    return this._properties.assignmentActivitySid;
  },
});

Object.defineProperty(TaskQueueInstance.prototype,
  'assignmentActivityName', {
  get: function() {
    return this._properties.assignmentActivityName;
  },
});

Object.defineProperty(TaskQueueInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(TaskQueueInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(TaskQueueInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(TaskQueueInstance.prototype,
  'maxReservedWorkers', {
  get: function() {
    return this._properties.maxReservedWorkers;
  },
});

Object.defineProperty(TaskQueueInstance.prototype,
  'reservationActivitySid', {
  get: function() {
    return this._properties.reservationActivitySid;
  },
});

Object.defineProperty(TaskQueueInstance.prototype,
  'reservationActivityName', {
  get: function() {
    return this._properties.reservationActivityName;
  },
});

Object.defineProperty(TaskQueueInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(TaskQueueInstance.prototype,
  'targetWorkers', {
  get: function() {
    return this._properties.targetWorkers;
  },
});

Object.defineProperty(TaskQueueInstance.prototype,
  'url', {
  get: function() {
    return this._properties.url;
  },
});

Object.defineProperty(TaskQueueInstance.prototype,
  'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

/**
 * @description Fetch a TaskQueueInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched TaskQueueInstance
 */
TaskQueueInstance.prototype.fetch = function fetch(callback) {
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

/**
 * @description Update the TaskQueueInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.targetWorkers] - The target_workers
 * @param {string} [opts.reservationActivitySid] - The reservation_activity_sid
 * @param {string} [opts.assignmentActivitySid] - The assignment_activity_sid
 * @param {number} [opts.maxReservedWorkers] - The max_reserved_workers
 * @param {function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated TaskQueueInstance
 */
TaskQueueInstance.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': opts.friendlyName,
    'TargetWorkers': opts.targetWorkers,
    'ReservationActivitySid': opts.reservationActivitySid,
    'AssignmentActivitySid': opts.assignmentActivitySid,
    'MaxReservedWorkers': opts.maxReservedWorkers
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

/**
 * @description Deletes the TaskQueueInstance
 *
 * @param {function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
TaskQueueInstance.prototype.remove = function remove(callback) {
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
 * Access the statistics
 *
 * @returns statistics
 */
TaskQueueInstance.prototype.statistics = function statistics() {
  return this._proxy.statistics;
};


/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext
 * @augments InstanceContext
 * @description Initialize the TaskQueueContext
 *
 * @property {Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsList} statistics -
 *          statistics resource
 *
 * @param {V1} version - Version that contains the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} sid - The sid
 */
function TaskQueueContext(version, workspaceSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/TaskQueues/<%= sid %>' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._statistics = undefined;
}

_.extend(TaskQueueContext.prototype, InstanceContext.prototype);
TaskQueueContext.prototype.constructor = TaskQueueContext;

/**
 * @description Fetch a TaskQueueInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched TaskQueueInstance
 */
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

/**
 * @description Update the TaskQueueInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.targetWorkers] - The target_workers
 * @param {string} [opts.reservationActivitySid] - The reservation_activity_sid
 * @param {string} [opts.assignmentActivitySid] - The assignment_activity_sid
 * @param {number} [opts.maxReservedWorkers] - The max_reserved_workers
 * @param {function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated TaskQueueInstance
 */
TaskQueueContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': opts.friendlyName,
    'TargetWorkers': opts.targetWorkers,
    'ReservationActivitySid': opts.reservationActivitySid,
    'AssignmentActivitySid': opts.assignmentActivitySid,
    'MaxReservedWorkers': opts.maxReservedWorkers
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

/**
 * @description Deletes the TaskQueueInstance
 *
 * @param {function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
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
  'statistics', {
  get: function() {
    if (!this._statistics) {
      this._statistics = new TaskQueueStatisticsList(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    }
    return this._statistics;
  },
});

module.exports = {
  TaskQueuePage: TaskQueuePage,
  TaskQueueList: TaskQueueList,
  TaskQueueInstance: TaskQueueInstance,
  TaskQueueContext: TaskQueueContext
};
