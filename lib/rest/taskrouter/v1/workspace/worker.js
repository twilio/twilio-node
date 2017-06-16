'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var ReservationList = require('./worker/reservation').ReservationList;
var WorkerChannelList = require('./worker/workerChannel').WorkerChannelList;
var WorkerStatisticsList = require(
    './worker/workerStatistics').WorkerStatisticsList;
var WorkersStatisticsList = require(
    './worker/workersStatistics').WorkersStatisticsList;
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var WorkerList;
var WorkerPage;
var WorkerInstance;
var WorkerContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerList
 * @description Initialize the WorkerList
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {string} workspaceSid - The workspace_sid
 */
/* jshint ignore:end */
WorkerList = function WorkerList(version, workspaceSid) {
  /* jshint ignore:start */
  /**
   * @function workers
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext}
   */
  /* jshint ignore:end */
  function WorkerListInstance(sid) {
    return WorkerListInstance.get(sid);
  }

  WorkerListInstance._version = version;
  // Path Solution
  WorkerListInstance._solution = {
    workspaceSid: workspaceSid
  };
  WorkerListInstance._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Workers' // jshint ignore:line
  )(WorkerListInstance._solution);

  // Components
  WorkerListInstance._statistics = undefined;

  /* jshint ignore:start */
  /**
   * Streams WorkerInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.activityName] - The activity_name
   * @param {string} [opts.activitySid] - The activity_sid
   * @param {string} [opts.available] - The available
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.targetWorkersExpression] - The target_workers_expression
   * @param {string} [opts.taskQueueName] - The task_queue_name
   * @param {string} [opts.taskQueueSid] - The task_queue_sid
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
  WorkerListInstance.each = function each(opts, callback) {
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
   * @description Lists WorkerInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.activityName] - The activity_name
   * @param {string} [opts.activitySid] - The activity_sid
   * @param {string} [opts.available] - The available
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.targetWorkersExpression] - The target_workers_expression
   * @param {string} [opts.taskQueueName] - The task_queue_name
   * @param {string} [opts.taskQueueSid] - The task_queue_sid
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
  WorkerListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of WorkerInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.activityName] - The activity_name
   * @param {string} [opts.activitySid] - The activity_sid
   * @param {string} [opts.available] - The available
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.targetWorkersExpression] - The target_workers_expression
   * @param {string} [opts.taskQueueName] - The task_queue_name
   * @param {string} [opts.taskQueueSid] - The task_queue_sid
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  WorkerListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'ActivityName': _.get(opts, 'activityName'),
      'ActivitySid': _.get(opts, 'activitySid'),
      'Available': _.get(opts, 'available'),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'TargetWorkersExpression': _.get(opts, 'targetWorkersExpression'),
      'TaskQueueName': _.get(opts, 'taskQueueName'),
      'TaskQueueSid': _.get(opts, 'taskQueueSid'),
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
      deferred.resolve(new WorkerPage(
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
   * Retrieve a single target page of WorkerInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerList
   * @instance
   *
   * @param {string} [opts.activityName] - The activity_name
   * @param {string} [opts.activitySid] - The activity_sid
   * @param {string} [opts.available] - The available
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.targetWorkersExpression] - The target_workers_expression
   * @param {string} [opts.taskQueueName] - The task_queue_name
   * @param {string} [opts.taskQueueSid] - The task_queue_sid
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  WorkerListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({
      method: 'GET',
      uri: targetUrl
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new WorkerPage(
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
   * create a WorkerInstance
   *
   * @function create
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.friendlyName - The friendly_name
   * @param {string} [opts.activitySid] - The activity_sid
   * @param {string} [opts.attributes] - The attributes
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed WorkerInstance
   */
  /* jshint ignore:end */
  WorkerListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.friendlyName)) {
      throw new Error('Required parameter "opts.friendlyName" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': _.get(opts, 'friendlyName'),
      'ActivitySid': _.get(opts, 'activitySid'),
      'Attributes': _.get(opts, 'attributes')
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new WorkerInstance(
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

  Object.defineProperty(WorkerListInstance,
    'statistics', {
    get: function statistics() {
      if (!this._statistics) {
        this._statistics = new WorkersStatisticsList(
          this._version,
          this._solution.workspaceSid
        );
      }

      return this._statistics;
    }
  });

  /* jshint ignore:start */
  /**
   * Constructs a worker
   *
   * @function get
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext}
   */
  /* jshint ignore:end */
  WorkerListInstance.get = function get(sid) {
    return new WorkerContext(
      this._version,
      this._solution.workspaceSid,
      sid
    );
  };

  return WorkerListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerPage
 * @augments Page
 * @description Initialize the WorkerPage
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns WorkerPage
 */
/* jshint ignore:end */
WorkerPage = function WorkerPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(WorkerPage.prototype, Page.prototype);
WorkerPage.prototype.constructor = WorkerPage;

/* jshint ignore:start */
/**
 * Build an instance of WorkerInstance
 *
 * @function getInstance
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns WorkerInstance
 */
/* jshint ignore:end */
WorkerPage.prototype.getInstance = function getInstance(payload) {
  return new WorkerInstance(
    this._version,
    payload,
    this._solution.workspaceSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerInstance
 * @description Initialize the WorkerContext
 *
 * @property {string} accountSid - The account_sid
 * @property {string} activityName - The activity_name
 * @property {string} activitySid - The activity_sid
 * @property {string} attributes - The attributes
 * @property {string} available - The available
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateStatusChanged - The date_status_changed
 * @property {Date} dateUpdated - The date_updated
 * @property {string} friendlyName - The friendly_name
 * @property {string} sid - The sid
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
WorkerInstance = function WorkerInstance(version, payload, workspaceSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.activityName = payload.activity_name; // jshint ignore:line
  this.activitySid = payload.activity_sid; // jshint ignore:line
  this.attributes = payload.attributes; // jshint ignore:line
  this.available = payload.available; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateStatusChanged = deserialize.iso8601DateTime(payload.date_status_changed); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
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

Object.defineProperty(WorkerInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new WorkerContext(
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
 * fetch a WorkerInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkerInstance
 */
/* jshint ignore:end */
WorkerInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a WorkerInstance
 *
 * @function update
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.activitySid] - The activity_sid
 * @param {string} [opts.attributes] - The attributes
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkerInstance
 */
/* jshint ignore:end */
WorkerInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * remove a WorkerInstance
 *
 * @function remove
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkerInstance
 */
/* jshint ignore:end */
WorkerInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * Access the statistics
 *
 * @function statistics
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerInstance
 * @instance
 *
 * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerStatisticsList}
 */
/* jshint ignore:end */
WorkerInstance.prototype.statistics = function statistics() {
  return this._proxy.statistics;
};

/* jshint ignore:start */
/**
 * Access the reservations
 *
 * @function reservations
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerInstance
 * @instance
 *
 * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.ReservationList}
 */
/* jshint ignore:end */
WorkerInstance.prototype.reservations = function reservations() {
  return this._proxy.reservations;
};

/* jshint ignore:start */
/**
 * Access the workerChannels
 *
 * @function workerChannels
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerInstance
 * @instance
 *
 * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerChannelList}
 */
/* jshint ignore:end */
WorkerInstance.prototype.workerChannels = function workerChannels() {
  return this._proxy.workerChannels;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext
 * @description Initialize the WorkerContext
 *
 * @property {Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerStatisticsList} statistics -
 *          statistics resource
 * @property {Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.ReservationList} reservations -
 *          reservations resource
 * @property {Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerChannelList} workerChannels -
 *          workerChannels resource
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
WorkerContext = function WorkerContext(version, workspaceSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Workers/<%= sid %>' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._statistics = undefined;
  this._reservations = undefined;
  this._workerChannels = undefined;
};

/* jshint ignore:start */
/**
 * fetch a WorkerInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkerInstance
 */
/* jshint ignore:end */
WorkerContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new WorkerInstance(
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
 * update a WorkerInstance
 *
 * @function update
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.activitySid] - The activity_sid
 * @param {string} [opts.attributes] - The attributes
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkerInstance
 */
/* jshint ignore:end */
WorkerContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'ActivitySid': _.get(opts, 'activitySid'),
    'Attributes': _.get(opts, 'attributes'),
    'FriendlyName': _.get(opts, 'friendlyName')
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new WorkerInstance(
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
 * remove a WorkerInstance
 *
 * @function remove
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkerInstance
 */
/* jshint ignore:end */
WorkerContext.prototype.remove = function remove(callback) {
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

Object.defineProperty(WorkerContext.prototype,
  'statistics', {
  get: function() {
    if (!this._statistics) {
      this._statistics = new WorkerStatisticsList(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    }
    return this._statistics;
  }
});

Object.defineProperty(WorkerContext.prototype,
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

Object.defineProperty(WorkerContext.prototype,
  'workerChannels', {
  get: function() {
    if (!this._workerChannels) {
      this._workerChannels = new WorkerChannelList(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    }
    return this._workerChannels;
  }
});

module.exports = {
  WorkerList: WorkerList,
  WorkerPage: WorkerPage,
  WorkerInstance: WorkerInstance,
  WorkerContext: WorkerContext
};
