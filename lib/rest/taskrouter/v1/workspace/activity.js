'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var ListResource = require('../../../../base/ListResource');
var values = require('../../../../base/values');

var ActivityList;
var ActivityInstance;
var ActivityContext;

/**
 * Initialize the ActivityList
 *
 * :param Version version: Version that contains the resource
 * :param workspaceSid: The workspace_sid
 *
 * @returns ActivityList
 */
function ActivityList(version, workspaceSid) {
  function ActivityListInstance(sid) {
    return ActivityListInstance.get(sid);
  }

  ActivityListInstance._version = version;
  // Path Solution
  ActivityListInstance._solution = {
    workspaceSid: workspaceSid
  };
  ActivityListInstance._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Activities' // jshint ignore:line
  )(ActivityListInstance._solution);
  /**
   * Streams ActivityInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.available] - The available
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
  ActivityListInstance.stream = function stream(opts) {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var page = this.page(
      opts
    );

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists ActivityInstance records from the API as a list.
   *
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.available] - The available
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
  ActivityListInstance.list = function list(opts) {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize,
    });

    return this.page(
      opts,
      limits.pageSize
    );
  };

  /**
   * Retrieve a single page of ActivityInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.available] - The available
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of ActivityInstance
   */
  ActivityListInstance.page = function page(opts) {
    var params = values.of({
      'FriendlyName': opts.friendlyName || values.unset,
      'Available': opts.available || values.unset,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params
    );

    return ActivityPage(
      this._version,
      response,
      solution.workspaceSid
    );
  };

  /**
   * Create a new ActivityInstance
   *
   * @param string friendlyName - The friendly_name
   * @param string available - The available
   *
   * @returns Newly created ActivityInstance
   */
  ActivityListInstance.create = function create(friendlyName, available) {
    var version = this._version;
    opts = opts || {};
    var data = values.of({
      'FriendlyName': friendlyName,
      'Available': available
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    promise = promise.then(function(payload) {
      return new ActivityInstance(
        version,
        payload,
        solution.workspaceSid
      );
    });

    return promise;
  };

  /**
   * Constructs a ActivityContext
   *
   * :param sid - The sid
   *
   * @returns ActivityContext
   */
  ActivityListInstance.get = function get(sid) {
    return new ActivityContext(
      this._version,
      this._solution.workspaceSid,
      sid
    );
  };

  return ActivityListInstance;
}


/**
 * Initialize the ActivityContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid: The workspace_sid
 * @param {sid} sid: The sid
 *
 * @returns {ActivityContext}
 */
function ActivityInstance(version, payload, workspaceSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    available: payload.available, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    workspaceSid: payload.workspace_sid, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(ActivityInstance.prototype, InstanceResource.prototype);
ActivityInstance.prototype.constructor = ActivityInstance;

Object.defineProperty(ActivityInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ActivityContext(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(ActivityInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(ActivityInstance.prototype,
  'available', {
  get: function() {
    return this._properties.available;
  },
});

Object.defineProperty(ActivityInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(ActivityInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(ActivityInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(ActivityInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(ActivityInstance.prototype,
  'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

/**
 * Fetch a ActivityInstance
 *
 * @returns Fetched ActivityInstance
 */
ActivityInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Update the ActivityInstance
 *
 * @param string friendlyName - The friendly_name
 *
 * @returns Updated ActivityInstance
 */
ActivityInstance.prototype.update = function update(friendlyName) {
  return this._proxy.update(
    friendlyName
  );
};

/**
 * Deletes the ActivityInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
ActivityInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};


/**
 * Initialize the ActivityContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} sid - The sid
 *
 * @returns {ActivityContext}
 */
function ActivityContext(version, workspaceSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Activities/<%= sid %>' // jshint ignore:line
  )(this._solution);
}

_.extend(ActivityContext.prototype, InstanceContext.prototype);
ActivityContext.prototype.constructor = ActivityContext;

/**
 * Fetch a ActivityInstance
 *
 * @returns Fetched ActivityInstance
 */
ActivityContext.prototype.fetch = function fetch() {
  var version = this._version;
  var solution = this._solution;
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new ActivityInstance(
      version,
      payload,
      solution.workspaceSid,
      solution.sid
    );
  });

  return promise;
};

/**
 * Update the ActivityInstance
 *
 * @param string friendlyName - The friendly_name
 *
 * @returns Updated ActivityInstance
 */
ActivityContext.prototype.update = function update(friendlyName) {
  var data = values.of({
    'FriendlyName': friendlyName,
  });

  var payload = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  return new ActivityInstance(
    this._version,
    payload,
    solution.workspaceSid,
    solution.sid
  );
};

/**
 * Deletes the ActivityInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
ActivityContext.prototype.remove = function remove() {
  return this._version.remove(this._uri);
};

module.exports = {
  ActivityList: ActivityList,
  ActivityInstance: ActivityInstance,
  ActivityContext: ActivityContext
};
