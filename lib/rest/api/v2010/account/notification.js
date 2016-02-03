'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var Page = require('../../../../base/Page');
var deserialize = require('../../../../base/deserialize');
var serialize = require('../../../../base/serialize');
var values = require('../../../../base/values');

var NotificationPage;
var NotificationList;
var NotificationInstance;
var NotificationContext;

/**
 * @constructor Twilio.Api.V2010.AccountContext.NotificationPage
 * @augments Page
 * @description Initialize the NotificationPage
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} response - Response from the API
 * @param {string} accountSid - The unique sid that identifies this account
 *
 * @returns NotificationPage
 */
function NotificationPage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(NotificationPage.prototype, Page.prototype);
NotificationPage.prototype.constructor = NotificationPage;

/**
 * Build an instance of NotificationInstance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns NotificationInstance
 */
NotificationPage.prototype.getInstance = function getInstance(payload) {
  return new NotificationInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/**
 * @constructor Twilio.Api.V2010.AccountContext.NotificationList
 * @description Initialize the NotificationList
 *
 * @param {V2010} version - Version that contains the resource
 * @param {string} accountSid - The unique sid that identifies this account
 *
 * @returns {function} - NotificationListInstance
 */
function NotificationList(version, accountSid) {
  /**
   * @memberof Twilio.Api.V2010.AccountContext.NotificationList
   *
   * @param {string} sid - sid of instance
   *
   * @returns NotificationContext
   */
  function NotificationListInstance(sid) {
    return NotificationListInstance.get(sid);
  }

  NotificationListInstance._version = version;
  // Path Solution
  NotificationListInstance._solution = {
    accountSid: accountSid
  };
  NotificationListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Notifications.json' // jshint ignore:line
  )(NotificationListInstance._solution);
  /**
   * @memberof NotificationList
   *
   * @description Streams NotificationInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
   * @param {number} [opts.log] - Filter by log level
   * @param {Date} [opts.messageDateBefore] - Filter by date
   * @param {Date} [opts.messageDate] - Filter by date
   * @param {Date} [opts.messageDateAfter] - Filter by date
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
  NotificationListInstance.each = function each(opts, callback) {
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
   * @memberof NotificationList
   *
   * @description Lists NotificationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
   * @param {number} [opts.log] - Filter by log level
   * @param {Date} [opts.messageDateBefore] - Filter by date
   * @param {Date} [opts.messageDate] - Filter by date
   * @param {Date} [opts.messageDateAfter] - Filter by date
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
  NotificationListInstance.list = function list(opts, callback) {
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
   * @memberof NotificationList
   *
   * @description Retrieve a single page of NotificationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
   * @param {number} [opts.log] - Filter by log level
   * @param {Date} [opts.messageDateBefore] - Filter by date
   * @param {Date} [opts.messageDate] - Filter by date
   * @param {Date} [opts.messageDateAfter] - Filter by date
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  NotificationListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Log': opts.log,
      'MessageDate<': serialize.iso8601Date(opts.messageDateBefore),
      'MessageDate': serialize.iso8601Date(opts.messageDate),
      'MessageDate>': serialize.iso8601Date(opts.messageDateAfter),
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
      deferred.resolve(new NotificationPage(
        this._version,
        payload,
        this._solution.accountSid
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
   * @memberof Twilio.Api.V2010.AccountContext.NotificationList
   *
   * @description Constructs a NotificationContext
   *
   * @param {string} sid - Fetch by unique notification Sid
   *
   * @returns NotificationContext
   */
  NotificationListInstance.get = function get(sid) {
    return new NotificationContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return NotificationListInstance;
}


/**
 * @constructor Twilio.Api.V2010.AccountContext.NotificationInstance
 * @augments InstanceResource
 * @description Initialize the NotificationContext
 *
 * @property {string} accountSid - The unique sid that identifies this account
 * @property {string} apiVersion - The version of the Twilio API in use
 * @property {string} callSid - The string that uniquely identifies the call
 * @property {Date} dateCreated - The date this resource was created
 * @property {Date} dateUpdated - The date this resource was last updated
 * @property {string} errorCode -
 *          A unique error code corresponding to the notification
 * @property {string} log - An integer log level
 * @property {Date} messageDate - The date the notification was generated
 * @property {string} messageText - The text of the notification.
 * @property {string} moreInfo - A URL for more information about the error code
 * @property {string} requestMethod - HTTP method used with the request url
 * @property {string} requestUrl -
 *          URL of the resource that generated the notification
 * @property {string} requestVariables -
 *          Twilio-generated HTTP variables sent to the server
 * @property {string} responseBody - The HTTP body returned by your server.
 * @property {string} responseHeaders - The HTTP headers returned by your server.
 * @property {string} sid - A string that uniquely identifies this notification
 * @property {string} uri - The URI for this resource
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique notification Sid
 */
function NotificationInstance(version, payload, accountSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    apiVersion: payload.api_version, // jshint ignore:line,
    callSid: payload.call_sid, // jshint ignore:line,
    dateCreated: deserialize.rfc2822DateTime(payload.date_created), // jshint ignore:line,
    dateUpdated: deserialize.rfc2822DateTime(payload.date_updated), // jshint ignore:line,
    errorCode: payload.error_code, // jshint ignore:line,
    log: payload.log, // jshint ignore:line,
    messageDate: deserialize.rfc2822DateTime(payload.message_date), // jshint ignore:line,
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

/**
 * @description Fetch a NotificationInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched NotificationInstance
 */
NotificationInstance.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new NotificationInstance(
      this._version,
      payload,
      this._solution.accountSid,
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
 * @description Deletes the NotificationInstance
 *
 * @param {function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
NotificationInstance.prototype.remove = function remove(callback) {
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
 * @constructor Twilio.Api.V2010.AccountContext.NotificationContext
 * @augments InstanceContext
 * @description Initialize the NotificationContext
 *
 * @param {V2010} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique notification Sid
 */
function NotificationContext(version, accountSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Notifications/<%= sid %>.json' // jshint ignore:line
  )(this._solution);
}

_.extend(NotificationContext.prototype, InstanceContext.prototype);
NotificationContext.prototype.constructor = NotificationContext;

/**
 * @description Fetch a NotificationInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched NotificationInstance
 */
NotificationContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new NotificationInstance(
      this._version,
      payload,
      this._solution.accountSid,
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
 * @description Deletes the NotificationInstance
 *
 * @param {function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
NotificationContext.prototype.remove = function remove(callback) {
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

module.exports = {
  NotificationPage: NotificationPage,
  NotificationList: NotificationList,
  NotificationInstance: NotificationInstance,
  NotificationContext: NotificationContext
};
