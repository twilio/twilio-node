'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../base/InstanceContext');
var InstanceResource = require('../../../base/InstanceResource');
var Page = require('../../../base/Page');
var deserialize = require('../../../base/deserialize');
var serialize = require('../../../base/serialize');
var values = require('../../../base/values');

var AlertPage;
var AlertList;
var AlertInstance;
var AlertContext;

/**
 * Initialize the AlertPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 *
 * @returns AlertPage
 */
function AlertPage(version, response) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {};
}

_.extend(AlertPage.prototype, Page.prototype);
AlertPage.prototype.constructor = AlertPage;

/**
 * Build an instance of AlertInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns AlertInstance
 */
AlertPage.prototype.getInstance = function getInstance(payload) {
  return new AlertInstance(
    this._version,
    payload
  );
};


/**
 * Initialize the AlertList
 *
 * @param {Version} version - Version that contains the resource
 *
 * @returns AlertList
 */
function AlertList(version) {
  function AlertListInstance(sid) {
    return AlertListInstance.get(sid);
  }

  AlertListInstance._version = version;
  // Path Solution
  AlertListInstance._solution = {};
  AlertListInstance._uri = _.template(
    '/Alerts' // jshint ignore:line
  )(AlertListInstance._solution);
  /**
   * Streams AlertInstance records from the API.
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
  AlertListInstance.each = function each(opts, callback) {
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
   * Lists AlertInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {string} [opts.logLevel] - The log_level
   * @param {Date} [opts.startDateBefore] - The start_date
   * @param {Date} [opts.startDate] - The start_date
   * @param {Date} [opts.startDateAfter] - The start_date
   * @param {Date} [opts.endDateBefore] - The end_date
   * @param {Date} [opts.endDate] - The end_date
   * @param {Date} [opts.endDateAfter] - The end_date
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
  AlertListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of AlertInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {string} [opts.logLevel] - The log_level
   * @param {Date} [opts.startDateBefore] - The start_date
   * @param {Date} [opts.startDate] - The start_date
   * @param {Date} [opts.startDateAfter] - The start_date
   * @param {Date} [opts.endDateBefore] - The end_date
   * @param {Date} [opts.endDate] - The end_date
   * @param {Date} [opts.endDateAfter] - The end_date
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {Function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  AlertListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'LogLevel': opts.logLevel,
      'StartDate<': serialize.iso8601Date(opts.startDateBefore),
      'StartDate': serialize.iso8601Date(opts.startDate),
      'StartDate>': serialize.iso8601Date(opts.startDateAfter),
      'EndDate<': serialize.iso8601Date(opts.endDateBefore),
      'EndDate': serialize.iso8601Date(opts.endDate),
      'EndDate>': serialize.iso8601Date(opts.endDateAfter),
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
      deferred.resolve(new AlertPage(
        this._version,
        payload
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
   * Constructs a AlertContext
   *
   * @param {string} sid - The sid
   *
   * @returns AlertContext
   */
  AlertListInstance.get = function get(sid) {
    return new AlertContext(
      this._version,
      sid
    );
  };

  return AlertListInstance;
}


/**
 * Initialize the AlertContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} sid - The sid
 *
 * @returns {AlertContext}
 */
function AlertInstance(version, payload, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    alertText: payload.alert_text, // jshint ignore:line,
    apiVersion: payload.api_version, // jshint ignore:line,
    dateCreated: deserialize.iso8601DateTime(payload.date_created), // jshint ignore:line,
    dateGenerated: deserialize.iso8601DateTime(payload.date_generated), // jshint ignore:line,
    dateUpdated: deserialize.iso8601DateTime(payload.date_updated), // jshint ignore:line,
    errorCode: payload.error_code, // jshint ignore:line,
    logLevel: payload.log_level, // jshint ignore:line,
    moreInfo: payload.more_info, // jshint ignore:line,
    requestMethod: payload.request_method, // jshint ignore:line,
    requestUrl: payload.request_url, // jshint ignore:line,
    resourceSid: payload.resource_sid, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    url: payload.url, // jshint ignore:line,
    requestVariables: payload.request_variables, // jshint ignore:line,
    responseBody: payload.response_body, // jshint ignore:line,
    responseHeaders: payload.response_headers, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    sid: sid || this._properties.sid,
  };
}

_.extend(AlertInstance.prototype, InstanceResource.prototype);
AlertInstance.prototype.constructor = AlertInstance;

Object.defineProperty(AlertInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new AlertContext(
        this._version,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'alertText', {
  get: function() {
    return this._properties.alertText;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'dateGenerated', {
  get: function() {
    return this._properties.dateGenerated;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'errorCode', {
  get: function() {
    return this._properties.errorCode;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'logLevel', {
  get: function() {
    return this._properties.logLevel;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'moreInfo', {
  get: function() {
    return this._properties.moreInfo;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'requestMethod', {
  get: function() {
    return this._properties.requestMethod;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'requestUrl', {
  get: function() {
    return this._properties.requestUrl;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'requestVariables', {
  get: function() {
    return this._properties.requestVariables;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'resourceSid', {
  get: function() {
    return this._properties.resourceSid;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'responseBody', {
  get: function() {
    return this._properties.responseBody;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'responseHeaders', {
  get: function() {
    return this._properties.responseHeaders;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(AlertInstance.prototype,
  'url', {
  get: function() {
    return this._properties.url;
  },
});

/**
 * Fetch a AlertInstance
 *
 * @param {Function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched AlertInstance
 */
AlertInstance.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new AlertInstance(
      this._version,
      payload,
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
 * Deletes the AlertInstance
 *
 * @param {Function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
AlertInstance.prototype.remove = function remove(callback) {
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
 * Initialize the AlertContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} sid - The sid
 *
 * @returns {AlertContext}
 */
function AlertContext(version, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    sid: sid,
  };
  this._uri = _.template(
    '/Alerts/<%= sid %>' // jshint ignore:line
  )(this._solution);
}

_.extend(AlertContext.prototype, InstanceContext.prototype);
AlertContext.prototype.constructor = AlertContext;

/**
 * Fetch a AlertInstance
 *
 * @param {Function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched AlertInstance
 */
AlertContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new AlertInstance(
      this._version,
      payload,
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
 * Deletes the AlertInstance
 *
 * @param {Function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
AlertContext.prototype.remove = function remove(callback) {
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
  AlertPage: AlertPage,
  AlertList: AlertList,
  AlertInstance: AlertInstance,
  AlertContext: AlertContext
};
