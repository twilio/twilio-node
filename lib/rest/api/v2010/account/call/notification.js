'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var ListResource = require('../../../../../base/ListResource');
var Page = require('../../../../../base/Page');
var values = require('../../../../../base/values');

var NotificationPage;
var NotificationList;
var NotificationInstance;
var NotificationContext;

/**
 * Initialize the NotificationPage
 *
 * :param Version version: Version that contains the resource
 * :param Response response: Response from the API
 * :param accountSid: The account_sid
 * :param callSid: The call_sid
 *
 * @returns NotificationPage
 */
function NotificationPage(version, response, accountSid, callSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    callSid: callSid
  };
}

_.extend(NotificationPage.prototype, Page.prototype);
NotificationPage.prototype.constructor = NotificationPage;

/**
 * Build an instance of NotificationInstance
 *
 * :param dict payload: Payload response from the API
 *
 * @returns NotificationInstance
 */
NotificationPage.prototype.getInstance = function getInstance(payload) {
  return new NotificationInstance(
    this._version,
    payload,
    accountSid=this._solution['accountSid'],
    callSid=this._solution['callSid']
  );
};


/**
 * Initialize the NotificationList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The account_sid
 * :param callSid: The call_sid
 *
 * @returns NotificationList
 */
function NotificationList(version, accountSid, callSid) {
  function NotificationListInstance(sid) {
    return NotificationListInstance.get(sid);
  }

  NotificationListInstance._version = version;
  // Path Solution
  NotificationListInstance._solution = {
    accountSid: accountSid,
    callSid: callSid
  };
  NotificationListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Calls/<%= callSid %>/Notifications.json' // jshint ignore:line
  )(NotificationListInstance._solution);
  /**
   * Streams NotificationInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.log] - The log
   * @param string [opts.messageDateBefore] - The message_date
   * @param string [opts.messageDate] - The message_date
   * @param string [opts.messageDateAfter] - The message_date
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
  NotificationListInstance.stream = function stream(opts) {
    opts = opts || {};

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
   * Lists NotificationInstance records from the API as a list.
   *
   * @param string [opts.log] - The log
   * @param string [opts.messageDateBefore] - The message_date
   * @param string [opts.messageDate] - The message_date
   * @param string [opts.messageDateAfter] - The message_date
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
  NotificationListInstance.list = function list(opts) {
    opts = opts || {};

    var allResources = [];
    opts.callback = function(resource) {
      allResources.push(resource);
    };

    var promise = this.stream(opts);
    promise = promise.then(function() {
      return allResources;
    });

    return promise;
  };

  /**
   * Retrieve a single page of NotificationInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.log] - The log
   * @param string [opts.messageDateBefore] - The message_date
   * @param string [opts.messageDate] - The message_date
   * @param string [opts.messageDateAfter] - The message_date
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of NotificationInstance
   */
  NotificationListInstance.page = function page(opts) {
    opts = opts || {};

    var version = this._version;
    var solution = this._solution;

    var params = values.of({
      'Log': opts.log,
      'MessageDate<': opts.messagedatebefore,
      'MessageDate': opts.messageDate,
      'MessageDate>': opts.messagedateafter,
      'PageToken': opts.page_token,
      'Page': opts.page_number,
      'PageSize': opts.page_size
    });

    var promise = version.page(
      'GET',
      this._uri,
      params
    );

    promise = promise.then(function(response) {
      return new NotificationPage(
        version,
        response,
        solution.accountSid,
        solution.callSid
      );
    });

    return promise;
  };

  /**
   * Constructs a NotificationContext
   *
   * :param sid - The sid
   *
   * @returns NotificationContext
   */
  NotificationListInstance.get = function get(sid) {
    return new NotificationContext(
      this._version,
      this._solution.accountSid,
      this._solution.callSid,
      sid
    );
  };

  return NotificationListInstance;
}


/**
 * Initialize the NotificationContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} callSid: The call_sid
 * @param {sid} sid: The sid
 *
 * @returns {NotificationContext}
 */
function NotificationInstance(version, payload, accountSid, callSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    apiVersion: payload.api_version, // jshint ignore:line,
    callSid: payload.call_sid, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    errorCode: payload.error_code, // jshint ignore:line,
    log: payload.log, // jshint ignore:line,
    messageDate: payload.message_date, // jshint ignore:line,
    messageText: payload.message_text, // jshint ignore:line,
    moreInfo: payload.more_info, // jshint ignore:line,
    requestMethod: payload.request_method, // jshint ignore:line,
    requestUrl: payload.request_url, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
    requestVariables: payload.request_variables, // jshint ignore:line,
    responseBody: payload.response_body, // jshint ignore:line,
    responseHeaders: payload.response_headers, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    callSid: callSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(NotificationInstance.prototype, InstanceResource.prototype);
NotificationInstance.prototype.constructor = NotificationInstance;

Object.defineProperty(NotificationInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new NotificationContext(
        this._version,
        this._solution.accountSid,
        this._solution.callSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(NotificationInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(NotificationInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(NotificationInstance.prototype,
  'callSid', {
  get: function() {
    return this._properties.callSid;
  },
});

Object.defineProperty(NotificationInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(NotificationInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(NotificationInstance.prototype,
  'errorCode', {
  get: function() {
    return this._properties.errorCode;
  },
});

Object.defineProperty(NotificationInstance.prototype,
  'log', {
  get: function() {
    return this._properties.log;
  },
});

Object.defineProperty(NotificationInstance.prototype,
  'messageDate', {
  get: function() {
    return this._properties.messageDate;
  },
});

Object.defineProperty(NotificationInstance.prototype,
  'messageText', {
  get: function() {
    return this._properties.messageText;
  },
});

Object.defineProperty(NotificationInstance.prototype,
  'moreInfo', {
  get: function() {
    return this._properties.moreInfo;
  },
});

Object.defineProperty(NotificationInstance.prototype,
  'requestMethod', {
  get: function() {
    return this._properties.requestMethod;
  },
});

Object.defineProperty(NotificationInstance.prototype,
  'requestUrl', {
  get: function() {
    return this._properties.requestUrl;
  },
});

Object.defineProperty(NotificationInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(NotificationInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

Object.defineProperty(NotificationInstance.prototype,
  'requestVariables', {
  get: function() {
    return this._properties.requestVariables;
  },
});

Object.defineProperty(NotificationInstance.prototype,
  'responseBody', {
  get: function() {
    return this._properties.responseBody;
  },
});

Object.defineProperty(NotificationInstance.prototype,
  'responseHeaders', {
  get: function() {
    return this._properties.responseHeaders;
  },
});

/**
 * Fetch a NotificationInstance
 *
 * @returns Fetched NotificationInstance
 */
NotificationInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Deletes the NotificationInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
NotificationInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};


/**
 * Initialize the NotificationContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} callSid - The call_sid
 * @param {sid} sid - The sid
 *
 * @returns {NotificationContext}
 */
function NotificationContext(version, accountSid, callSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    callSid: callSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Calls/<%= callSid %>/Notifications/<%= sid %>.json' // jshint ignore:line
  )(this._solution);
}

_.extend(NotificationContext.prototype, InstanceContext.prototype);
NotificationContext.prototype.constructor = NotificationContext;

/**
 * Fetch a NotificationInstance
 *
 * @returns Fetched NotificationInstance
 */
NotificationContext.prototype.fetch = function fetch() {
  var version = this._version;
  var solution = this._solution;
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new NotificationInstance(
      version,
      payload,
      solution.accountSid,
      solution.callSid,
      solution.sid
    );
  });

  return promise;
};

/**
 * Deletes the NotificationInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
NotificationContext.prototype.remove = function remove() {
  return this._version.remove({
    method: 'DELETE',
    uri: this._uri
  });
};

module.exports = {
  NotificationPage: NotificationPage,
  NotificationList: NotificationList,
  NotificationInstance: NotificationInstance,
  NotificationContext: NotificationContext
};
