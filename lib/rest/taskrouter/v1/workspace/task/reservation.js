'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var ListResource = require('../../../../../base/ListResource');
var values = require('../../../../../base/values');

var ReservationList;
var ReservationInstance;
var ReservationContext;

/**
 * Initialize the ReservationList
 *
 * :param Version version: Version that contains the resource
 * :param workspaceSid: The workspace_sid
 * :param taskSid: The task_sid
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
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
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
   * @param {Function} opts.callback - A callback function to process records
   */
  ReservationListInstance.stream = function stream() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists ReservationInstance records from the API as a list.
   *
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
  ReservationListInstance.list = function list() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize,
    });

    return this.page(
      limits.pageSize
    );
  };

  /**
   * Retrieve a single page of ReservationInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of ReservationInstance
   */
  ReservationListInstance.page = function page() {
    var params = values.of({
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params
    );

    return ReservationPage(
      this._version,
      response,
      solution.workspaceSid,
      solution.taskSid
    );
  };

  /**
   * Constructs a ReservationContext
   *
   * :param sid - The sid
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
 * @param {sid} workspaceSid: The workspace_sid
 * @param {sid} taskSid: The task_sid
 * @param {sid} sid: The sid
 *
 * @returns {ReservationContext}
 */
function ReservationInstance(version, payload, workspaceSid, taskSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
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
 * @returns Fetched ReservationInstance
 */
ReservationInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Update the ReservationInstance
 *
 * @param string reservationStatus - The reservation_status
 * @param string [opts.workerActivitySid] - The worker_activity_sid
 *
 * @returns Updated ReservationInstance
 */
ReservationInstance.prototype.update = function update(reservationStatus, opts)
                                                        {
  return this._proxy.update(
    reservationStatus,
    opts
  );
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
 * @returns Fetched ReservationInstance
 */
ReservationContext.prototype.fetch = function fetch() {
  var version = this._version;
  var solution = this._solution;
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new ReservationInstance(
      version,
      payload,
      solution.workspaceSid,
      solution.taskSid,
      solution.sid
    );
  });

  return promise;
};

/**
 * Update the ReservationInstance
 *
 * @param string reservationStatus - The reservation_status
 * @param string [opts.workerActivitySid] - The worker_activity_sid
 *
 * @returns Updated ReservationInstance
 */
ReservationContext.prototype.update = function update(reservationStatus, opts) {
  var version = this._version;
  var solution = this._solution;

  opts = opts || {};
  var data = values.of({
    'ReservationStatus': reservationStatus,
    'WorkerActivitySid': opts.workerActivitySid || values.unset,
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  promise = promise.then(function(payload) {
    return new ReservationInstance(
      version,
      payload,
      solution.workspaceSid,
      solution.taskSid,
      solution.sid
    );
  });

  return promise;
};

module.exports = {
  ReservationList: ReservationList,
  ReservationInstance: ReservationInstance,
  ReservationContext: ReservationContext
};
