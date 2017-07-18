'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var ReservationList;
var ReservationPage;
var ReservationInstance;
var ReservationContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskContext.ReservationList
 * @description Initialize the ReservationList
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {string} workspaceSid - The workspace_sid
 * @param {string} taskSid - The task_sid
 */
/* jshint ignore:end */
ReservationList = function ReservationList(version, workspaceSid, taskSid) {
  /* jshint ignore:start */
  /**
   * @function reservations
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.TaskContext.ReservationContext}
   */
  /* jshint ignore:end */
  function ReservationListInstance(sid) {
    return ReservationListInstance.get(sid);
  }

  ReservationListInstance._version = version;
  // Path Solution
  ReservationListInstance._solution = {
    workspaceSid: workspaceSid,
    taskSid: taskSid
  };
  ReservationListInstance._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Tasks/<%= taskSid %>/Reservations' // jshint ignore:line
  )(ReservationListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams ReservationInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskContext.ReservationList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {reservation.status} [opts.reservationStatus] - The reservation_status
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
  ReservationListInstance.each = function each(opts, callback) {
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
   * @description Lists ReservationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskContext.ReservationList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {reservation.status} [opts.reservationStatus] - The reservation_status
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
  ReservationListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of ReservationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskContext.ReservationList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {reservation.status} [opts.reservationStatus] - The reservation_status
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ReservationListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'ReservationStatus': _.get(opts, 'reservationStatus'),
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
      deferred.resolve(new ReservationPage(
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
   * Constructs a reservation
   *
   * @function get
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskContext.ReservationList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.TaskContext.ReservationContext}
   */
  /* jshint ignore:end */
  ReservationListInstance.get = function get(sid) {
    return new ReservationContext(
      this._version,
      this._solution.workspaceSid,
      this._solution.taskSid,
      sid
    );
  };

  return ReservationListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskContext.ReservationPage
 * @augments Page
 * @description Initialize the ReservationPage
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns ReservationPage
 */
/* jshint ignore:end */
ReservationPage = function ReservationPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(ReservationPage.prototype, Page.prototype);
ReservationPage.prototype.constructor = ReservationPage;

/* jshint ignore:start */
/**
 * Build an instance of ReservationInstance
 *
 * @function getInstance
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskContext.ReservationPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns ReservationInstance
 */
/* jshint ignore:end */
ReservationPage.prototype.getInstance = function getInstance(payload) {
  return new ReservationInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.taskSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskContext.ReservationInstance
 * @description Initialize the ReservationContext
 *
 * @property {string} accountSid - The account_sid
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {reservation.status} reservationStatus - The reservation_status
 * @property {string} sid - The sid
 * @property {string} taskSid - The task_sid
 * @property {string} workerName - The worker_name
 * @property {string} workerSid - The worker_sid
 * @property {string} workspaceSid - The workspace_sid
 * @property {string} url - The url
 * @property {string} links - The links
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} taskSid - The task_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
ReservationInstance = function ReservationInstance(version, payload,
                                                    workspaceSid, taskSid, sid)
                                                    {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.reservationStatus = payload.reservation_status; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.taskSid = payload.task_sid; // jshint ignore:line
  this.workerName = payload.worker_name; // jshint ignore:line
  this.workerSid = payload.worker_sid; // jshint ignore:line
  this.workspaceSid = payload.workspace_sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
    taskSid: taskSid,
    sid: sid || this.sid,
  };
};

Object.defineProperty(ReservationInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ReservationContext(
        this._version,
        this._solution.workspaceSid,
        this._solution.taskSid,
        this._solution.sid
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a ReservationInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskContext.ReservationInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ReservationInstance
 */
/* jshint ignore:end */
ReservationInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a ReservationInstance
 *
 * @function update
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskContext.ReservationInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {reservation.status} [opts.reservationStatus] - The reservation_status
 * @param {string} [opts.workerActivitySid] - The worker_activity_sid
 * @param {string} [opts.instruction] - The instruction
 * @param {string} [opts.dequeuePostWorkActivitySid] -
 *          The dequeue_post_work_activity_sid
 * @param {string} [opts.dequeueFrom] - The dequeue_from
 * @param {string} [opts.dequeueRecord] - The dequeue_record
 * @param {number} [opts.dequeueTimeout] - The dequeue_timeout
 * @param {string} [opts.dequeueTo] - The dequeue_to
 * @param {string} [opts.dequeueStatusCallbackUrl] -
 *          The dequeue_status_callback_url
 * @param {string} [opts.callFrom] - The call_from
 * @param {string} [opts.callRecord] - The call_record
 * @param {number} [opts.callTimeout] - The call_timeout
 * @param {string} [opts.callTo] - The call_to
 * @param {string} [opts.callUrl] - The call_url
 * @param {string} [opts.callStatusCallbackUrl] - The call_status_callback_url
 * @param {string} [opts.callAccept] - The call_accept
 * @param {string} [opts.redirectCallSid] - The redirect_call_sid
 * @param {string} [opts.redirectAccept] - The redirect_accept
 * @param {string} [opts.redirectUrl] - The redirect_url
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ReservationInstance
 */
/* jshint ignore:end */
ReservationInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskContext.ReservationContext
 * @description Initialize the ReservationContext
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} taskSid - The task_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
ReservationContext = function ReservationContext(version, workspaceSid, taskSid,
                                                  sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    taskSid: taskSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Tasks/<%= taskSid %>/Reservations/<%= sid %>' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a ReservationInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskContext.ReservationContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ReservationInstance
 */
/* jshint ignore:end */
ReservationContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ReservationInstance(
      this._version,
      payload,
      this._solution.workspaceSid,
      this._solution.taskSid,
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
 * update a ReservationInstance
 *
 * @function update
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskContext.ReservationContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {reservation.status} [opts.reservationStatus] - The reservation_status
 * @param {string} [opts.workerActivitySid] - The worker_activity_sid
 * @param {string} [opts.instruction] - The instruction
 * @param {string} [opts.dequeuePostWorkActivitySid] -
 *          The dequeue_post_work_activity_sid
 * @param {string} [opts.dequeueFrom] - The dequeue_from
 * @param {string} [opts.dequeueRecord] - The dequeue_record
 * @param {number} [opts.dequeueTimeout] - The dequeue_timeout
 * @param {string} [opts.dequeueTo] - The dequeue_to
 * @param {string} [opts.dequeueStatusCallbackUrl] -
 *          The dequeue_status_callback_url
 * @param {string} [opts.callFrom] - The call_from
 * @param {string} [opts.callRecord] - The call_record
 * @param {number} [opts.callTimeout] - The call_timeout
 * @param {string} [opts.callTo] - The call_to
 * @param {string} [opts.callUrl] - The call_url
 * @param {string} [opts.callStatusCallbackUrl] - The call_status_callback_url
 * @param {string} [opts.callAccept] - The call_accept
 * @param {string} [opts.redirectCallSid] - The redirect_call_sid
 * @param {string} [opts.redirectAccept] - The redirect_accept
 * @param {string} [opts.redirectUrl] - The redirect_url
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ReservationInstance
 */
/* jshint ignore:end */
ReservationContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'ReservationStatus': _.get(opts, 'reservationStatus'),
    'WorkerActivitySid': _.get(opts, 'workerActivitySid'),
    'Instruction': _.get(opts, 'instruction'),
    'DequeuePostWorkActivitySid': _.get(opts, 'dequeuePostWorkActivitySid'),
    'DequeueFrom': _.get(opts, 'dequeueFrom'),
    'DequeueRecord': _.get(opts, 'dequeueRecord'),
    'DequeueTimeout': _.get(opts, 'dequeueTimeout'),
    'DequeueTo': _.get(opts, 'dequeueTo'),
    'DequeueStatusCallbackUrl': _.get(opts, 'dequeueStatusCallbackUrl'),
    'CallFrom': _.get(opts, 'callFrom'),
    'CallRecord': _.get(opts, 'callRecord'),
    'CallTimeout': _.get(opts, 'callTimeout'),
    'CallTo': _.get(opts, 'callTo'),
    'CallUrl': _.get(opts, 'callUrl'),
    'CallStatusCallbackUrl': _.get(opts, 'callStatusCallbackUrl'),
    'CallAccept': _.get(opts, 'callAccept'),
    'RedirectCallSid': _.get(opts, 'redirectCallSid'),
    'RedirectAccept': _.get(opts, 'redirectAccept'),
    'RedirectUrl': _.get(opts, 'redirectUrl')
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ReservationInstance(
      this._version,
      payload,
      this._solution.workspaceSid,
      this._solution.taskSid,
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
  ReservationList: ReservationList,
  ReservationPage: ReservationPage,
  ReservationInstance: ReservationInstance,
  ReservationContext: ReservationContext
};
