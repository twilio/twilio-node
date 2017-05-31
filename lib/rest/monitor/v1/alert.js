'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../base/deserialize');  /* jshint ignore:line */
var serialize = require('../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../base/values');  /* jshint ignore:line */

var AlertList;
var AlertPage;
var AlertInstance;
var AlertContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Monitor.V1.AlertList
 * @description Initialize the AlertList
 *
 * @param {Twilio.Monitor.V1} version - Version of the resource
 */
/* jshint ignore:end */
AlertList = function AlertList(version) {
  /* jshint ignore:start */
  /**
   * @function alerts
   * @memberof Twilio.Monitor.V1
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Monitor.V1.AlertContext}
   */
  /* jshint ignore:end */
  function AlertListInstance(sid) {
    return AlertListInstance.get(sid);
  }

  AlertListInstance._version = version;
  // Path Solution
  AlertListInstance._solution = {};
  AlertListInstance._uri = _.template(
    '/Alerts' // jshint ignore:line
  )(AlertListInstance._solution);
  /* jshint ignore:start */
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
   * @function each
   * @memberof Twilio.Monitor.V1.AlertList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.logLevel] - The log_level
   * @param {Date} [opts.startDate] - The start_date
   * @param {Date} [opts.endDate] - The end_date
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
   * @description Lists AlertInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Monitor.V1.AlertList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.logLevel] - The log_level
   * @param {Date} [opts.startDate] - The start_date
   * @param {Date} [opts.endDate] - The end_date
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
  AlertListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of AlertInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Monitor.V1.AlertList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.logLevel] - The log_level
   * @param {Date} [opts.startDate] - The start_date
   * @param {Date} [opts.endDate] - The end_date
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  AlertListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'LogLevel': _.get(opts, 'logLevel'),
      'StartDate': serialize.iso8601Date(_.get(opts, 'startDate')),
      'EndDate': serialize.iso8601Date(_.get(opts, 'endDate')),
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
   * Retrieve a single target page of AlertInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Monitor.V1.AlertList
   * @instance
   *
   * @param {string} [opts.logLevel] - The log_level
   * @param {Date} [opts.startDate] - The start_date
   * @param {Date} [opts.endDate] - The end_date
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  AlertListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({
      method: 'GET',
      uri: targetUrl
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new AlertPage(
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
   * Constructs a alert
   *
   * @function get
   * @memberof Twilio.Monitor.V1.AlertList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Monitor.V1.AlertContext}
   */
  /* jshint ignore:end */
  AlertListInstance.get = function get(sid) {
    return new AlertContext(
      this._version,
      sid
    );
  };

  return AlertListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Monitor.V1.AlertPage
 * @augments Page
 * @description Initialize the AlertPage
 *
 * @param {Twilio.Monitor.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns AlertPage
 */
/* jshint ignore:end */
AlertPage = function AlertPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(AlertPage.prototype, Page.prototype);
AlertPage.prototype.constructor = AlertPage;

/* jshint ignore:start */
/**
 * Build an instance of AlertInstance
 *
 * @function getInstance
 * @memberof Twilio.Monitor.V1.AlertPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns AlertInstance
 */
/* jshint ignore:end */
AlertPage.prototype.getInstance = function getInstance(payload) {
  return new AlertInstance(
    this._version,
    payload
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Monitor.V1.AlertInstance
 * @description Initialize the AlertContext
 *
 * @property {string} accountSid - The account_sid
 * @property {string} alertText - The alert_text
 * @property {string} apiVersion - The api_version
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateGenerated - The date_generated
 * @property {Date} dateUpdated - The date_updated
 * @property {string} errorCode - The error_code
 * @property {string} logLevel - The log_level
 * @property {string} moreInfo - The more_info
 * @property {string} requestMethod - The request_method
 * @property {string} requestUrl - The request_url
 * @property {string} requestVariables - The request_variables
 * @property {string} resourceSid - The resource_sid
 * @property {string} responseBody - The response_body
 * @property {string} responseHeaders - The response_headers
 * @property {string} sid - The sid
 * @property {string} url - The url
 *
 * @param {Twilio.Monitor.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
AlertInstance = function AlertInstance(version, payload, sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.alertText = payload.alert_text; // jshint ignore:line
  this.apiVersion = payload.api_version; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateGenerated = deserialize.iso8601DateTime(payload.date_generated); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.errorCode = payload.error_code; // jshint ignore:line
  this.logLevel = payload.log_level; // jshint ignore:line
  this.moreInfo = payload.more_info; // jshint ignore:line
  this.requestMethod = payload.request_method; // jshint ignore:line
  this.requestUrl = payload.request_url; // jshint ignore:line
  this.resourceSid = payload.resource_sid; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.requestVariables = payload.request_variables; // jshint ignore:line
  this.responseBody = payload.response_body; // jshint ignore:line
  this.responseHeaders = payload.response_headers; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    sid: sid || this.sid,
  };
};

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
  }
});

/* jshint ignore:start */
/**
 * fetch a AlertInstance
 *
 * @function fetch
 * @memberof Twilio.Monitor.V1.AlertInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AlertInstance
 */
/* jshint ignore:end */
AlertInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * remove a AlertInstance
 *
 * @function remove
 * @memberof Twilio.Monitor.V1.AlertInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AlertInstance
 */
/* jshint ignore:end */
AlertInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Monitor.V1.AlertContext
 * @description Initialize the AlertContext
 *
 * @param {Twilio.Monitor.V1} version - Version of the resource
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
AlertContext = function AlertContext(version, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    sid: sid,
  };
  this._uri = _.template(
    '/Alerts/<%= sid %>' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a AlertInstance
 *
 * @function fetch
 * @memberof Twilio.Monitor.V1.AlertContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AlertInstance
 */
/* jshint ignore:end */
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

/* jshint ignore:start */
/**
 * remove a AlertInstance
 *
 * @function remove
 * @memberof Twilio.Monitor.V1.AlertContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AlertInstance
 */
/* jshint ignore:end */
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
  AlertList: AlertList,
  AlertPage: AlertPage,
  AlertInstance: AlertInstance,
  AlertContext: AlertContext
};
