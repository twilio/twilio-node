'use strict';

var _ = require('lodash');
var Q = require('q');
var Page = require('../../../../../base/Page');
var deserialize = require('../../../../../base/deserialize');
var serialize = require('../../../../../base/serialize');
var values = require('../../../../../base/values');


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.CallContext.NotificationList
 * @description Initialize the NotificationList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid - The account_sid
 * @param {string} callSid - The call_sid
 */
/* jshint ignore:end */
function NotificationList(version, accountSid, callSid) {
  /* jshint ignore:start */
  /**
   * @function notifications
   * @memberof Twilio.Api.V2010.AccountContext.CallContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.CallContext.NotificationContext}
   */
  /* jshint ignore:end */
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
  /* jshint ignore:start */
  /**
   * Streams NotificationInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.NotificationList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {number} [opts.log] - The log
   * @param {Date} [opts.messageDateBefore] - The message_date
   * @param {Date} [opts.messageDate] - The message_date
   * @param {Date} [opts.messageDateAfter] - The message_date
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

    fetchNextPage(_.bind(this.page, this, opts));
  };

  /* jshint ignore:start */
  /**
   * @description Lists NotificationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.NotificationList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {number} [opts.log] - The log
   * @param {Date} [opts.messageDateBefore] - The message_date
   * @param {Date} [opts.messageDate] - The message_date
   * @param {Date} [opts.messageDateAfter] - The message_date
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
  NotificationListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of NotificationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.NotificationList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {number} [opts.log] - The log
   * @param {Date} [opts.messageDateBefore] - The message_date
   * @param {Date} [opts.messageDate] - The message_date
   * @param {Date} [opts.messageDateAfter] - The message_date
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  NotificationListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Log': _.get(opts, "log", undefined),
      'MessageDate<': serialize.iso8601Date(_.get(opts, "messageDateBefore", undefined)),
      'MessageDate': serialize.iso8601Date(_.get(opts, "messageDate", undefined)),
      'MessageDate>': serialize.iso8601Date(_.get(opts, "messageDateAfter", undefined)),
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
   * Constructs a notification
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.NotificationList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Api.V2010.AccountContext.CallContext.NotificationContext}
   */
  /* jshint ignore:end */
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


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.CallContext.NotificationPage
 * @augments Page
 * @description Initialize the NotificationPage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns NotificationPage
 */
/* jshint ignore:end */
function NotificationPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
}

_.extend(NotificationPage.prototype, Page.prototype);
NotificationPage.prototype.constructor = NotificationPage;

/* jshint ignore:start */
/**
 * Build an instance of NotificationInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.CallContext.NotificationPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns NotificationInstance
 */
/* jshint ignore:end */
NotificationPage.prototype.getInstance = function getInstance(payload) {
  return new NotificationInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.callSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.CallContext.NotificationInstance
 * @description Initialize the NotificationContext
 *
 * @property {string} accountSid - The account_sid
 * @property {string} apiVersion - The api_version
 * @property {string} callSid - The call_sid
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} errorCode - The error_code
 * @property {string} log - The log
 * @property {Date} messageDate - The message_date
 * @property {string} messageText - The message_text
 * @property {string} moreInfo - The more_info
 * @property {string} requestMethod - The request_method
 * @property {string} requestUrl - The request_url
 * @property {string} requestVariables - The request_variables
 * @property {string} responseBody - The response_body
 * @property {string} responseHeaders - The response_headers
 * @property {string} sid - The sid
 * @property {string} uri - The uri
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} callSid - The call_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
function NotificationInstance(version, payload, accountSid, callSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.apiVersion = payload.api_version; // jshint ignore:line
  this.callSid = payload.call_sid; // jshint ignore:line
  this.dateCreated = deserialize.rfc2822DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated); // jshint ignore:line
  this.errorCode = payload.error_code; // jshint ignore:line
  this.log = payload.log; // jshint ignore:line
  this.messageDate = deserialize.rfc2822DateTime(payload.message_date); // jshint ignore:line
  this.messageText = payload.message_text; // jshint ignore:line
  this.moreInfo = payload.more_info; // jshint ignore:line
  this.requestMethod = payload.request_method; // jshint ignore:line
  this.requestUrl = payload.request_url; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.uri = payload.uri; // jshint ignore:line
  this.requestVariables = payload.request_variables; // jshint ignore:line
  this.responseBody = payload.response_body; // jshint ignore:line
  this.responseHeaders = payload.response_headers; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    callSid: callSid,
    sid: sid || this.sid,
  };
}

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
  }
});

/* jshint ignore:start */
/**
 * fetch a NotificationInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.CallContext.NotificationInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed NotificationInstance
 */
/* jshint ignore:end */
NotificationInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * remove a NotificationInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.CallContext.NotificationInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed NotificationInstance
 */
/* jshint ignore:end */
NotificationInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.CallContext.NotificationContext
 * @description Initialize the NotificationContext
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} callSid - The call_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
function NotificationContext(version, accountSid, callSid, sid) {
  this._version = version;

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

/* jshint ignore:start */
/**
 * fetch a NotificationInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.CallContext.NotificationContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed NotificationInstance
 */
/* jshint ignore:end */
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
      this._solution.callSid,
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
 * remove a NotificationInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.CallContext.NotificationContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed NotificationInstance
 */
/* jshint ignore:end */
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
  NotificationList: NotificationList,
  NotificationPage: NotificationPage,
  NotificationInstance: NotificationInstance,
  NotificationContext: NotificationContext
};