'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var TaskChannelList;
var TaskChannelPage;
var TaskChannelInstance;
var TaskChannelContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskChannelList
 * @description Initialize the TaskChannelList
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {string} workspaceSid - The workspace_sid
 */
/* jshint ignore:end */
TaskChannelList = function TaskChannelList(version, workspaceSid) {
  /* jshint ignore:start */
  /**
   * @function taskChannels
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.TaskChannelContext}
   */
  /* jshint ignore:end */
  function TaskChannelListInstance(sid) {
    return TaskChannelListInstance.get(sid);
  }

  TaskChannelListInstance._version = version;
  // Path Solution
  TaskChannelListInstance._solution = {
    workspaceSid: workspaceSid
  };
  TaskChannelListInstance._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/TaskChannels' // jshint ignore:line
  )(TaskChannelListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams TaskChannelInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskChannelList
   * @instance
   *
   * @param {object|function} opts - ...
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
  TaskChannelListInstance.each = function each(opts, callback) {
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
   * @description Lists TaskChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskChannelList
   * @instance
   *
   * @param {object|function} opts - ...
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
  TaskChannelListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of TaskChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskChannelList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  TaskChannelListInstance.page = function page(opts, callback) {
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
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
      deferred.resolve(new TaskChannelPage(
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
   * Retrieve a single target page of TaskChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskChannelList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  TaskChannelListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({
      method: 'GET',
      uri: targetUrl
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new TaskChannelPage(
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
   * Constructs a task_channel
   *
   * @function get
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskChannelList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.TaskChannelContext}
   */
  /* jshint ignore:end */
  TaskChannelListInstance.get = function get(sid) {
    return new TaskChannelContext(
      this._version,
      this._solution.workspaceSid,
      sid
    );
  };

  return TaskChannelListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskChannelPage
 * @augments Page
 * @description Initialize the TaskChannelPage
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns TaskChannelPage
 */
/* jshint ignore:end */
TaskChannelPage = function TaskChannelPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(TaskChannelPage.prototype, Page.prototype);
TaskChannelPage.prototype.constructor = TaskChannelPage;

/* jshint ignore:start */
/**
 * Build an instance of TaskChannelInstance
 *
 * @function getInstance
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskChannelPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns TaskChannelInstance
 */
/* jshint ignore:end */
TaskChannelPage.prototype.getInstance = function getInstance(payload) {
  return new TaskChannelInstance(
    this._version,
    payload,
    this._solution.workspaceSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskChannelInstance
 * @description Initialize the TaskChannelContext
 *
 * @property {string} accountSid - The account_sid
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} friendlyName - The friendly_name
 * @property {string} sid - The sid
 * @property {string} uniqueName - The unique_name
 * @property {string} workspaceSid - The workspace_sid
 * @property {string} url - The url
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid_like} sid - The sid
 */
/* jshint ignore:end */
TaskChannelInstance = function TaskChannelInstance(version, payload,
                                                    workspaceSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.uniqueName = payload.unique_name; // jshint ignore:line
  this.workspaceSid = payload.workspace_sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid || this.sid,
  };
};

Object.defineProperty(TaskChannelInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new TaskChannelContext(
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
 * fetch a TaskChannelInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskChannelInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TaskChannelInstance
 */
/* jshint ignore:end */
TaskChannelInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskChannelContext
 * @description Initialize the TaskChannelContext
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid_like} sid - The sid
 */
/* jshint ignore:end */
TaskChannelContext = function TaskChannelContext(version, workspaceSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/TaskChannels/<%= sid %>' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a TaskChannelInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskChannelContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TaskChannelInstance
 */
/* jshint ignore:end */
TaskChannelContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new TaskChannelInstance(
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

module.exports = {
  TaskChannelList: TaskChannelList,
  TaskChannelPage: TaskChannelPage,
  TaskChannelInstance: TaskChannelInstance,
  TaskChannelContext: TaskChannelContext
};
