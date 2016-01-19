'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var ListResource = require('../../../../base/ListResource');
var Page = require('../../../../base/Page');
var WorkflowStatisticsList = require(
    './workflow/workflowStatistics').WorkflowStatisticsList;
var values = require('../../../../base/values');

var WorkflowPage;
var WorkflowList;
var WorkflowInstance;
var WorkflowContext;

/**
 * Initialize the WorkflowPage
 *
 * :param Version version: Version that contains the resource
 * :param Response response: Response from the API
 * :param workspaceSid: The workspace_sid
 *
 * @returns WorkflowPage
 */
function WorkflowPage(version, response, workspaceSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid
  };
}

_.extend(WorkflowPage.prototype, Page.prototype);
WorkflowPage.prototype.constructor = WorkflowPage;

/**
 * Build an instance of WorkflowInstance
 *
 * :param dict payload: Payload response from the API
 *
 * @returns WorkflowInstance
 */
WorkflowPage.prototype.getInstance = function getInstance(payload) {
  return new WorkflowInstance(
    this._version,
    payload,
    workspaceSid=this._solution['workspaceSid']
  );
};


/**
 * Initialize the WorkflowList
 *
 * :param Version version: Version that contains the resource
 * :param workspaceSid: The workspace_sid
 *
 * @returns WorkflowList
 */
function WorkflowList(version, workspaceSid) {
  function WorkflowListInstance(sid) {
    return WorkflowListInstance.get(sid);
  }

  WorkflowListInstance._version = version;
  // Path Solution
  WorkflowListInstance._solution = {
    workspaceSid: workspaceSid
  };
  WorkflowListInstance._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Workflows' // jshint ignore:line
  )(WorkflowListInstance._solution);
  /**
   * Streams WorkflowInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.friendlyName] - The friendly_name
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
  WorkflowListInstance.stream = function stream(opts) {
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
   * Lists WorkflowInstance records from the API as a list.
   *
   * @param string [opts.friendlyName] - The friendly_name
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
  WorkflowListInstance.list = function list(opts) {
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
   * Retrieve a single page of WorkflowInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.friendlyName] - The friendly_name
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of WorkflowInstance
   */
  WorkflowListInstance.page = function page(opts) {
    var params = values.of({
      'FriendlyName': opts.friendlyName,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params
    );

    return WorkflowPage(
      this._version,
      response,
      solution.workspaceSid
    );
  };

  /**
   * Create a new WorkflowInstance
   *
   * @param string friendlyName - The friendly_name
   * @param string configuration - The configuration
   * @param string assignmentCallbackUrl - The assignment_callback_url
   * @param string [opts.fallbackAssignmentCallbackUrl] -
   *          The fallback_assignment_callback_url
   * @param string [opts.taskReservationTimeout] - The task_reservation_timeout
   *
   * @returns Newly created WorkflowInstance
   */
  WorkflowListInstance.create = function create(friendlyName, configuration,
                                                 assignmentCallbackUrl, opts) {
    var version = this._version;

    opts = opts || {};
    var data = values.of({
      'FriendlyName': friendlyName,
      'Configuration': configuration,
      'AssignmentCallbackUrl': assignmentCallbackUrl,
      'FallbackAssignmentCallbackUrl': opts.fallbackAssignmentCallbackUrl,
      'TaskReservationTimeout': opts.taskReservationTimeout
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    promise = promise.then(function(payload) {
      return new WorkflowInstance(
        version,
        payload,
        solution.workspaceSid
      );
    });

    return promise;
  };

  /**
   * Constructs a WorkflowContext
   *
   * :param sid - The sid
   *
   * @returns WorkflowContext
   */
  WorkflowListInstance.get = function get(sid) {
    return new WorkflowContext(
      this._version,
      this._solution.workspaceSid,
      sid
    );
  };

  return WorkflowListInstance;
}


/**
 * Initialize the WorkflowContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid: The workspace_sid
 * @param {sid} sid: The sid
 *
 * @returns {WorkflowContext}
 */
function WorkflowInstance(version, payload, workspaceSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    assignmentCallbackUrl: payload.assignment_callback_url, // jshint ignore:line,
    configuration: payload.configuration, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    documentContentType: payload.document_content_type, // jshint ignore:line,
    fallbackAssignmentCallbackUrl: payload.fallback_assignment_callback_url, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    taskReservationTimeout: payload.task_reservation_timeout, // jshint ignore:line,
    workspaceSid: payload.workspace_sid, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(WorkflowInstance.prototype, InstanceResource.prototype);
WorkflowInstance.prototype.constructor = WorkflowInstance;

Object.defineProperty(WorkflowInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new WorkflowContext(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(WorkflowInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(WorkflowInstance.prototype,
  'assignmentCallbackUrl', {
  get: function() {
    return this._properties.assignmentCallbackUrl;
  },
});

Object.defineProperty(WorkflowInstance.prototype,
  'configuration', {
  get: function() {
    return this._properties.configuration;
  },
});

Object.defineProperty(WorkflowInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(WorkflowInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(WorkflowInstance.prototype,
  'documentContentType', {
  get: function() {
    return this._properties.documentContentType;
  },
});

Object.defineProperty(WorkflowInstance.prototype,
  'fallbackAssignmentCallbackUrl', {
  get: function() {
    return this._properties.fallbackAssignmentCallbackUrl;
  },
});

Object.defineProperty(WorkflowInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(WorkflowInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(WorkflowInstance.prototype,
  'taskReservationTimeout', {
  get: function() {
    return this._properties.taskReservationTimeout;
  },
});

Object.defineProperty(WorkflowInstance.prototype,
  'workspaceSid', {
  get: function() {
    return this._properties.workspaceSid;
  },
});

/**
 * Fetch a WorkflowInstance
 *
 * @returns Fetched WorkflowInstance
 */
WorkflowInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Update the WorkflowInstance
 *
 * @param string [opts.friendlyName] - The friendly_name
 * @param string [opts.assignmentCallbackUrl] - The assignment_callback_url
 * @param string [opts.fallbackAssignmentCallbackUrl] -
 *          The fallback_assignment_callback_url
 * @param string [opts.configuration] - The configuration
 * @param string [opts.taskReservationTimeout] - The task_reservation_timeout
 *
 * @returns Updated WorkflowInstance
 */
WorkflowInstance.prototype.update = function update(opts) {
  return this._proxy.update(
    opts
  );
};

/**
 * Deletes the WorkflowInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
WorkflowInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};

/**
 * Access the statistics
 *
 * @returns statistics
 */
WorkflowInstance.prototype.statistics = function statistics() {
  return this._proxy.statistics;
};


/**
 * Initialize the WorkflowContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} sid - The sid
 *
 * @returns {WorkflowContext}
 */
function WorkflowContext(version, workspaceSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Workflows/<%= sid %>' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._statistics = undefined;
}

_.extend(WorkflowContext.prototype, InstanceContext.prototype);
WorkflowContext.prototype.constructor = WorkflowContext;

/**
 * Fetch a WorkflowInstance
 *
 * @returns Fetched WorkflowInstance
 */
WorkflowContext.prototype.fetch = function fetch() {
  var version = this._version;
  var solution = this._solution;
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new WorkflowInstance(
      version,
      payload,
      solution.workspaceSid,
      solution.sid
    );
  });

  return promise;
};

/**
 * Update the WorkflowInstance
 *
 * @param string [opts.friendlyName] - The friendly_name
 * @param string [opts.assignmentCallbackUrl] - The assignment_callback_url
 * @param string [opts.fallbackAssignmentCallbackUrl] -
 *          The fallback_assignment_callback_url
 * @param string [opts.configuration] - The configuration
 * @param string [opts.taskReservationTimeout] - The task_reservation_timeout
 *
 * @returns Updated WorkflowInstance
 */
WorkflowContext.prototype.update = function update(opts) {
  var version = this._version;
  var solution = this._solution;

  opts = opts || {};
  var data = values.of({
    'FriendlyName': opts.friendlyName,
    'AssignmentCallbackUrl': opts.assignmentCallbackUrl,
    'FallbackAssignmentCallbackUrl': opts.fallbackAssignmentCallbackUrl,
    'Configuration': opts.configuration,
    'TaskReservationTimeout': opts.taskReservationTimeout,
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  promise = promise.then(function(payload) {
    return new WorkflowInstance(
      version,
      payload,
      solution.workspaceSid,
      solution.sid
    );
  });

  return promise;
};

/**
 * Deletes the WorkflowInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
WorkflowContext.prototype.remove = function remove() {
  return this._version.remove({
    method: 'DELETE',
    uri: this._uri
  });
};

Object.defineProperty(WorkflowContext.prototype,
  'statistics', {
  get: function() {
    if (!this._statistics) {
      this._statistics = new WorkflowStatisticsList(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    }
    return this._statistics;
  },
});

module.exports = {
  WorkflowPage: WorkflowPage,
  WorkflowList: WorkflowList,
  WorkflowInstance: WorkflowInstance,
  WorkflowContext: WorkflowContext
};
