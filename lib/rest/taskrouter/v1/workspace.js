'use strict';

var _ = require('lodash');
var Q = require('q');
var ActivityList = require('./workspace/activity').ActivityList;
var EventList = require('./workspace/event').EventList;
var InstanceContext = require('../../../base/InstanceContext');
var InstanceResource = require('../../../base/InstanceResource');
var Page = require('../../../base/Page');
var TaskList = require('./workspace/task').TaskList;
var TaskQueueList = require('./workspace/taskQueue').TaskQueueList;
var WorkerList = require('./workspace/worker').WorkerList;
var WorkflowList = require('./workspace/workflow').WorkflowList;
var WorkspaceStatisticsList = require(
    './workspace/workspaceStatistics').WorkspaceStatisticsList;
var deserialize = require('../../../base/deserialize');
var values = require('../../../base/values');

var WorkspacePage;
var WorkspaceList;
var WorkspaceInstance;
var WorkspaceContext;

/**
 * Initialize the WorkspacePage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 *
 * @returns WorkspacePage
 */
function WorkspacePage(version, response) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {};
}

_.extend(WorkspacePage.prototype, Page.prototype);
WorkspacePage.prototype.constructor = WorkspacePage;

/**
 * Build an instance of WorkspaceInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns WorkspaceInstance
 */
WorkspacePage.prototype.getInstance = function getInstance(payload) {
  return new WorkspaceInstance(
    this._version,
    payload
  );
};


/**
 * Initialize the WorkspaceList
 *
 * @param {Version} version - Version that contains the resource
 *
 * @returns WorkspaceList
 */
function WorkspaceList(version) {
  function WorkspaceListInstance(sid) {
    return WorkspaceListInstance.get(sid);
  }

  WorkspaceListInstance._version = version;
  // Path Solution
  WorkspaceListInstance._solution = {};
  WorkspaceListInstance._uri = _.template(
    '/Workspaces' // jshint ignore:line
  )(WorkspaceListInstance._solution);
  /**
   * Streams WorkspaceInstance records from the API.
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
   * @param {string} [opts.friendlyName] - The friendly_name
   */
  WorkspaceListInstance.each = function each(opts) {
    opts = opts || {};
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
   * Lists WorkspaceInstance records from the API as a list.
   *
   * @param {string} [opts.friendlyName] - The friendly_name
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
  WorkspaceListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var allResources = [];
    opts.callback = function(resource) {
      allResources.push(resource);
    };

    var deferred = Q.defer();
    var promise = this.each(opts);
    promise = promise.then(function() {
      deferred.resolve(allResources);
    });

    promise.catch(function(error) {
      deferred.reject(error);
    })

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /**
   * Retrieve a single page of WorkspaceInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of WorkspaceInstance
   */
  WorkspaceListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': opts.friendlyName,
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
      deferred.resolve(new WorkspacePage(
        this._version,
        payload
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
   * Create a new WorkspaceInstance
   *
   * @param {string} opts.friendlyName - The friendly_name
   * @param {string} [opts.eventCallbackUrl] - The event_callback_url
   * @param {string} [opts.template] - The template
   *
   * @returns Newly created WorkspaceInstance
   */
  WorkspaceListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameters friendlyName are missing.');  // jshint ignore:line
    }
    if (_.isUndefined(opts.friendlyName)) {
      throw new Error('Required parameter "friendlyName" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': opts.friendlyName,
      'EventCallbackUrl': opts.eventCallbackUrl,
      'Template': opts.template
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new WorkspaceInstance(
        this._version,
        payload
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
   * Constructs a WorkspaceContext
   *
   * @param {string} sid - The sid
   *
   * @returns WorkspaceContext
   */
  WorkspaceListInstance.get = function get(sid) {
    return new WorkspaceContext(
      this._version,
      sid
    );
  };

  return WorkspaceListInstance;
}


/**
 * Initialize the WorkspaceContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} sid - The sid
 *
 * @returns {WorkspaceContext}
 */
function WorkspaceInstance(version, payload, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    dateCreated: deserialize.iso8601DateTime(payload.date_created), // jshint ignore:line,
    dateUpdated: deserialize.iso8601DateTime(payload.date_updated), // jshint ignore:line,
    defaultActivityName: payload.default_activity_name, // jshint ignore:line,
    defaultActivitySid: payload.default_activity_sid, // jshint ignore:line,
    eventCallbackUrl: payload.event_callback_url, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    timeoutActivityName: payload.timeout_activity_name, // jshint ignore:line,
    timeoutActivitySid: payload.timeout_activity_sid, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    sid: sid || this._properties.sid,
  };
}

_.extend(WorkspaceInstance.prototype, InstanceResource.prototype);
WorkspaceInstance.prototype.constructor = WorkspaceInstance;

Object.defineProperty(WorkspaceInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new WorkspaceContext(
        this._version,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(WorkspaceInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(WorkspaceInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(WorkspaceInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(WorkspaceInstance.prototype,
  'defaultActivityName', {
  get: function() {
    return this._properties.defaultActivityName;
  },
});

Object.defineProperty(WorkspaceInstance.prototype,
  'defaultActivitySid', {
  get: function() {
    return this._properties.defaultActivitySid;
  },
});

Object.defineProperty(WorkspaceInstance.prototype,
  'eventCallbackUrl', {
  get: function() {
    return this._properties.eventCallbackUrl;
  },
});

Object.defineProperty(WorkspaceInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(WorkspaceInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(WorkspaceInstance.prototype,
  'timeoutActivityName', {
  get: function() {
    return this._properties.timeoutActivityName;
  },
});

Object.defineProperty(WorkspaceInstance.prototype,
  'timeoutActivitySid', {
  get: function() {
    return this._properties.timeoutActivitySid;
  },
});

/**
 * Fetch a WorkspaceInstance
 *
 * @returns Fetched WorkspaceInstance
 */
WorkspaceInstance.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new WorkspaceInstance(
      this._version,
      payload,
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
 * Update the WorkspaceInstance
 *
 * @param {string} [opts.defaultActivitySid] - The default_activity_sid
 * @param {string} [opts.eventCallbackUrl] - The event_callback_url
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.timeoutActivitySid] - The timeout_activity_sid
 *
 * @returns Updated WorkspaceInstance
 */
WorkspaceInstance.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'DefaultActivitySid': opts.defaultActivitySid,
    'EventCallbackUrl': opts.eventCallbackUrl,
    'FriendlyName': opts.friendlyName,
    'TimeoutActivitySid': opts.timeoutActivitySid
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new WorkspaceInstance(
      this._version,
      payload,
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
 * Deletes the WorkspaceInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
WorkspaceInstance.prototype.remove = function remove(callback) {
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
 * Access the activities
 *
 * @returns activities
 */
WorkspaceInstance.prototype.activities = function activities() {
  return this._proxy.activities;
};

/**
 * Access the events
 *
 * @returns events
 */
WorkspaceInstance.prototype.events = function events() {
  return this._proxy.events;
};

/**
 * Access the tasks
 *
 * @returns tasks
 */
WorkspaceInstance.prototype.tasks = function tasks() {
  return this._proxy.tasks;
};

/**
 * Access the taskQueues
 *
 * @returns taskQueues
 */
WorkspaceInstance.prototype.taskQueues = function taskQueues() {
  return this._proxy.taskQueues;
};

/**
 * Access the workers
 *
 * @returns workers
 */
WorkspaceInstance.prototype.workers = function workers() {
  return this._proxy.workers;
};

/**
 * Access the workflows
 *
 * @returns workflows
 */
WorkspaceInstance.prototype.workflows = function workflows() {
  return this._proxy.workflows;
};

/**
 * Access the statistics
 *
 * @returns statistics
 */
WorkspaceInstance.prototype.statistics = function statistics() {
  return this._proxy.statistics;
};


/**
 * Initialize the WorkspaceContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} sid - The sid
 *
 * @returns {WorkspaceContext}
 */
function WorkspaceContext(version, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    sid: sid,
  };
  this._uri = _.template(
    '/Workspaces/<%= sid %>' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._activities = undefined;
  this._events = undefined;
  this._tasks = undefined;
  this._taskQueues = undefined;
  this._workers = undefined;
  this._workflows = undefined;
  this._statistics = undefined;
}

_.extend(WorkspaceContext.prototype, InstanceContext.prototype);
WorkspaceContext.prototype.constructor = WorkspaceContext;

/**
 * Fetch a WorkspaceInstance
 *
 * @returns Fetched WorkspaceInstance
 */
WorkspaceContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new WorkspaceInstance(
      this._version,
      payload,
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
 * Update the WorkspaceInstance
 *
 * @param {string} [opts.defaultActivitySid] - The default_activity_sid
 * @param {string} [opts.eventCallbackUrl] - The event_callback_url
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.timeoutActivitySid] - The timeout_activity_sid
 *
 * @returns Updated WorkspaceInstance
 */
WorkspaceContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'DefaultActivitySid': opts.defaultActivitySid,
    'EventCallbackUrl': opts.eventCallbackUrl,
    'FriendlyName': opts.friendlyName,
    'TimeoutActivitySid': opts.timeoutActivitySid
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new WorkspaceInstance(
      this._version,
      payload,
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
 * Deletes the WorkspaceInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
WorkspaceContext.prototype.remove = function remove(callback) {
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

Object.defineProperty(WorkspaceContext.prototype,
  'activities', {
  get: function() {
    if (!this._activities) {
      this._activities = new ActivityList(
        this._version,
        this._solution.sid
      );
    }
    return this._activities;
  },
});

Object.defineProperty(WorkspaceContext.prototype,
  'events', {
  get: function() {
    if (!this._events) {
      this._events = new EventList(
        this._version,
        this._solution.sid
      );
    }
    return this._events;
  },
});

Object.defineProperty(WorkspaceContext.prototype,
  'tasks', {
  get: function() {
    if (!this._tasks) {
      this._tasks = new TaskList(
        this._version,
        this._solution.sid
      );
    }
    return this._tasks;
  },
});

Object.defineProperty(WorkspaceContext.prototype,
  'taskQueues', {
  get: function() {
    if (!this._taskQueues) {
      this._taskQueues = new TaskQueueList(
        this._version,
        this._solution.sid
      );
    }
    return this._taskQueues;
  },
});

Object.defineProperty(WorkspaceContext.prototype,
  'workers', {
  get: function() {
    if (!this._workers) {
      this._workers = new WorkerList(
        this._version,
        this._solution.sid
      );
    }
    return this._workers;
  },
});

Object.defineProperty(WorkspaceContext.prototype,
  'workflows', {
  get: function() {
    if (!this._workflows) {
      this._workflows = new WorkflowList(
        this._version,
        this._solution.sid
      );
    }
    return this._workflows;
  },
});

Object.defineProperty(WorkspaceContext.prototype,
  'statistics', {
  get: function() {
    if (!this._statistics) {
      this._statistics = new WorkspaceStatisticsList(
        this._version,
        this._solution.sid
      );
    }
    return this._statistics;
  },
});

module.exports = {
  WorkspacePage: WorkspacePage,
  WorkspaceList: WorkspaceList,
  WorkspaceInstance: WorkspaceInstance,
  WorkspaceContext: WorkspaceContext
};
