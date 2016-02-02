'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var Page = require('../../../../../base/Page');
var deserialize = require('../../../../../base/deserialize');
var values = require('../../../../../base/values');

var ReservationPage;
var ReservationList;
var ReservationInstance;
var ReservationContext;

/**
 * Initialize the ReservationPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 * @param {string} workspaceSid - The workspace_sid
 * @param {string} taskSid - The task_sid
 *
 * @returns ReservationPage
 */
function ReservationPage(version, response, workspaceSid, taskSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    taskSid: taskSid
  };
}

_.extend(ReservationPage.prototype, Page.prototype);
ReservationPage.prototype.constructor = ReservationPage;

/**
 * Build an instance of ReservationInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns ReservationInstance
 */
ReservationPage.prototype.getInstance = function getInstance(payload) {
  return new ReservationInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.taskSid
  );
};


/**
 * Initialize the ReservationList
 *
 * @param {Version} version - Version that contains the resource
 * @param {string} workspaceSid - The workspace_sid
 * @param {string} taskSid - The task_sid
 *
 * @returns ReservationList
 */
function ReservationList(version, workspaceSid, taskSid) {
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
   * Lists ReservationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {string} [opts.status] - The status
   * @param {string} [opts.assignmentStatus] - The assignment_status
   * @param {string} [opts.reservationStatus] - The reservation_status
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
   * @param {Function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  ReservationListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of ReservationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {string} [opts.status] - The status
   * @param {string} [opts.assignmentStatus] - The assignment_status
   * @param {string} [opts.reservationStatus] - The reservation_status
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {Function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  ReservationListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Status': opts.status,
      'AssignmentStatus': opts.assignmentStatus,
      'ReservationStatus': opts.reservationStatus,
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
        this._solution.workspaceSid,
        this._solution.taskSid
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
   * Constructs a ReservationContext
   *
   * @param {string} sid - The sid
   *
   * @returns ReservationContext
   */
  ReservationListInstance.get = function get(sid) {
    return new ReservationContext(
      this._version,
      this._solution.workspaceSid,
      this._solution.taskSid,
      sid
    );
  };

  return ReservationListInstance;
}


/**
 * Initialize the ReservationContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} taskSid - The task_sid
 * @param {sid} sid - The sid
 *
 * @returns {ReservationContext}
 */
function ReservationInstance(version, payload, workspaceSid, taskSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    dateCreated: deserialize.iso8601DateTime(payload.date_created), // jshint ignore:line,
    dateUpdated: deserialize.iso8601DateTime(payload.date_updated), // jshint ignore:line,
    reservationStatus: payload.reservation_status, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    taskSid: payload.task_sid, // jshint ignore:line,
    workerName: payload.worker_name, // jshint ignore:line,
    workerSid: payload.worker_sid, // jshint ignore:line,
    workspaceSid: payload.workspace_sid, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
    taskSid: taskSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(ReservationInstance.prototype, InstanceResource.prototype);
ReservationInstance.prototype.constructor = ReservationInstance;

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
  },
});

Object.defineProperty(ReservationInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(ReservationInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(ReservationInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(ReservationInstance.prototype,
  'reservationStatus', {
  get: function() {
    return this._properties.reservationStatus;
  },
});

Object.defineProperty(ReservationInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(ReservationInstance.prototype,
  'taskSid', {
  get: function() {
    return this._properties.taskSid;
  },
});

Object.defineProperty(ReservationInstance.prototype,
  'workerName', {
  get: function() {
    return this._properties.workerName;
  },
});

Object.defineProperty(ReservationInstance.prototype,
  'workerSid', {
  get: function() {
    return this._properties.workerSid;
  },
});

Object.defineProperty(ReservationInstance.prototype,
  'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

/**
 * Fetch a ReservationInstance
 *
 * @param {Function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched ReservationInstance
 */
ReservationInstance.prototype.fetch = function fetch(callback) {
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

/**
 * Update the ReservationInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {string} opts.reservationStatus - The reservation_status
 * @param {string} [opts.workerActivitySid] - The worker_activity_sid
 * @param {string} [opts.instruction] - The instruction
 * @param {string} [opts.dequeuePostWorkActivitySid] -
 *          The dequeue_post_work_activity_sid
 * @param {string} [opts.dequeueFrom] - The dequeue_from
 * @param {string} [opts.dequeueRecord] - The dequeue_record
 * @param {string} [opts.dequeueTimeout] - The dequeue_timeout
 * @param {string} [opts.dequeueTo] - The dequeue_to
 * @param {string} [opts.dequeueStatusCallbackUrl] -
 *          The dequeue_status_callback_url
 * @param {string} [opts.callFrom] - The call_from
 * @param {string} [opts.callRecord] - The call_record
 * @param {string} [opts.callTimeout] - The call_timeout
 * @param {string} [opts.callTo] - The call_to
 * @param {string} [opts.callUrl] - The call_url
 * @param {string} [opts.callStatusCallbackUrl] - The call_status_callback_url
 * @param {string} [opts.callAccept] - The call_accept
 * @param {string} [opts.redirectCallSid] - The redirect_call_sid
 * @param {string} [opts.redirectAccept] - The redirect_accept
 * @param {string} [opts.redirectUrl] - The redirect_url
 * @param {Function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated ReservationInstance
 */
ReservationInstance.prototype.update = function update(opts, callback) {
  if (_.isUndefined(opts)) {
    throw new Error('Required parameters reservationStatus are missing.');  // jshint ignore:line
  }
  if (_.isUndefined(opts.reservationStatus)) {
    throw new Error('Required parameter "reservationStatus" missing.');
  }

  var deferred = Q.defer();
  var data = values.of({
    'ReservationStatus': opts.reservationStatus,
    'WorkerActivitySid': opts.workerActivitySid,
    'Instruction': opts.instruction,
    'DequeuePostWorkActivitySid': opts.dequeuePostWorkActivitySid,
    'DequeueFrom': opts.dequeueFrom,
    'DequeueRecord': opts.dequeueRecord,
    'DequeueTimeout': opts.dequeueTimeout,
    'DequeueTo': opts.dequeueTo,
    'DequeueStatusCallbackUrl': opts.dequeueStatusCallbackUrl,
    'CallFrom': opts.callFrom,
    'CallRecord': opts.callRecord,
    'CallTimeout': opts.callTimeout,
    'CallTo': opts.callTo,
    'CallUrl': opts.callUrl,
    'CallStatusCallbackUrl': opts.callStatusCallbackUrl,
    'CallAccept': opts.callAccept,
    'RedirectCallSid': opts.redirectCallSid,
    'RedirectAccept': opts.redirectAccept,
    'RedirectUrl': opts.redirectUrl
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


/**
 * Initialize the ReservationContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} taskSid - The task_sid
 * @param {sid} sid - The sid
 *
 * @returns {ReservationContext}
 */
function ReservationContext(version, workspaceSid, taskSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    taskSid: taskSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Tasks/<%= taskSid %>/Reservations/<%= sid %>' // jshint ignore:line
  )(this._solution);
}

_.extend(ReservationContext.prototype, InstanceContext.prototype);
ReservationContext.prototype.constructor = ReservationContext;

/**
 * Fetch a ReservationInstance
 *
 * @param {Function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched ReservationInstance
 */
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

/**
 * Update the ReservationInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {string} opts.reservationStatus - The reservation_status
 * @param {string} [opts.workerActivitySid] - The worker_activity_sid
 * @param {string} [opts.instruction] - The instruction
 * @param {string} [opts.dequeuePostWorkActivitySid] -
 *          The dequeue_post_work_activity_sid
 * @param {string} [opts.dequeueFrom] - The dequeue_from
 * @param {string} [opts.dequeueRecord] - The dequeue_record
 * @param {string} [opts.dequeueTimeout] - The dequeue_timeout
 * @param {string} [opts.dequeueTo] - The dequeue_to
 * @param {string} [opts.dequeueStatusCallbackUrl] -
 *          The dequeue_status_callback_url
 * @param {string} [opts.callFrom] - The call_from
 * @param {string} [opts.callRecord] - The call_record
 * @param {string} [opts.callTimeout] - The call_timeout
 * @param {string} [opts.callTo] - The call_to
 * @param {string} [opts.callUrl] - The call_url
 * @param {string} [opts.callStatusCallbackUrl] - The call_status_callback_url
 * @param {string} [opts.callAccept] - The call_accept
 * @param {string} [opts.redirectCallSid] - The redirect_call_sid
 * @param {string} [opts.redirectAccept] - The redirect_accept
 * @param {string} [opts.redirectUrl] - The redirect_url
 * @param {Function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated ReservationInstance
 */
ReservationContext.prototype.update = function update(opts, callback) {
  if (_.isUndefined(opts)) {
    throw new Error('Required parameters reservationStatus are missing.');  // jshint ignore:line
  }
  if (_.isUndefined(opts.reservationStatus)) {
    throw new Error('Required parameter "reservationStatus" missing.');
  }

  var deferred = Q.defer();
  var data = values.of({
    'ReservationStatus': opts.reservationStatus,
    'WorkerActivitySid': opts.workerActivitySid,
    'Instruction': opts.instruction,
    'DequeuePostWorkActivitySid': opts.dequeuePostWorkActivitySid,
    'DequeueFrom': opts.dequeueFrom,
    'DequeueRecord': opts.dequeueRecord,
    'DequeueTimeout': opts.dequeueTimeout,
    'DequeueTo': opts.dequeueTo,
    'DequeueStatusCallbackUrl': opts.dequeueStatusCallbackUrl,
    'CallFrom': opts.callFrom,
    'CallRecord': opts.callRecord,
    'CallTimeout': opts.callTimeout,
    'CallTo': opts.callTo,
    'CallUrl': opts.callUrl,
    'CallStatusCallbackUrl': opts.callStatusCallbackUrl,
    'CallAccept': opts.callAccept,
    'RedirectCallSid': opts.redirectCallSid,
    'RedirectAccept': opts.redirectAccept,
    'RedirectUrl': opts.redirectUrl
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
  ReservationPage: ReservationPage,
  ReservationList: ReservationList,
  ReservationInstance: ReservationInstance,
  ReservationContext: ReservationContext
};
