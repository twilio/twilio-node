'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../../base/deserialize');  /* jshint ignore:line */
var serialize = require(
    '../../../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../../../base/values');  /* jshint ignore:line */

var DailyList;
var DailyPage;
var DailyInstance;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.DailyList
 * @description Initialize the DailyList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 */
/* jshint ignore:end */
DailyList = function DailyList(version, accountSid) {
  /* jshint ignore:start */
  /**
   * @function daily
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.RecordContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.DailyContext}
   */
  /* jshint ignore:end */
  function DailyListInstance(sid) {
    return DailyListInstance.get(sid);
  }

  DailyListInstance._version = version;
  // Path Solution
  DailyListInstance._solution = {
    accountSid: accountSid
  };
  DailyListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Usage/Records/Daily.json' // jshint ignore:line
  )(DailyListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams DailyInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.DailyList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {daily.category} [opts.category] - The category
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
  DailyListInstance.each = function each(opts, callback) {
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
   * @description Lists DailyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.DailyList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {daily.category} [opts.category] - The category
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
  DailyListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of DailyInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.DailyList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {daily.category} [opts.category] - The category
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
  DailyListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Category': _.get(opts, 'category'),
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
      deferred.resolve(new DailyPage(
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
   * Retrieve a single target page of DailyInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.DailyList
   * @instance
   *
   * @param {daily.category} [opts.category] - The category
   * @param {Date} [opts.startDate] - The start_date
   * @param {Date} [opts.endDate] - The end_date
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  DailyListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({
      method: 'GET',
      uri: targetUrl
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new DailyPage(
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

  return DailyListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.DailyPage
 * @augments Page
 * @description Initialize the DailyPage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns DailyPage
 */
/* jshint ignore:end */
DailyPage = function DailyPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(DailyPage.prototype, Page.prototype);
DailyPage.prototype.constructor = DailyPage;

/* jshint ignore:start */
/**
 * Build an instance of DailyInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.DailyPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns DailyInstance
 */
/* jshint ignore:end */
DailyPage.prototype.getInstance = function getInstance(payload) {
  return new DailyInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.DailyInstance
 * @description Initialize the DailyContext
 *
 * @property {string} accountSid - The account_sid
 * @property {string} apiVersion - The api_version
 * @property {daily.category} category - The category
 * @property {string} count - The count
 * @property {string} countUnit - The count_unit
 * @property {string} description - The description
 * @property {Date} endDate - The end_date
 * @property {number} price - The price
 * @property {string} priceUnit - The price_unit
 * @property {Date} startDate - The start_date
 * @property {string} subresourceUris - The subresource_uris
 * @property {string} uri - The uri
 * @property {string} usage - The usage
 * @property {string} usageUnit - The usage_unit
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 */
/* jshint ignore:end */
DailyInstance = function DailyInstance(version, payload, accountSid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.apiVersion = payload.api_version; // jshint ignore:line
  this.category = payload.category; // jshint ignore:line
  this.count = payload.count; // jshint ignore:line
  this.countUnit = payload.count_unit; // jshint ignore:line
  this.description = payload.description; // jshint ignore:line
  this.endDate = deserialize.iso8601Date(payload.end_date); // jshint ignore:line
  this.price = deserialize.decimal(payload.price); // jshint ignore:line
  this.priceUnit = payload.price_unit; // jshint ignore:line
  this.startDate = deserialize.iso8601Date(payload.start_date); // jshint ignore:line
  this.subresourceUris = payload.subresource_uris; // jshint ignore:line
  this.uri = payload.uri; // jshint ignore:line
  this.usage = payload.usage; // jshint ignore:line
  this.usageUnit = payload.usage_unit; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
  };
};

module.exports = {
  DailyList: DailyList,
  DailyPage: DailyPage,
  DailyInstance: DailyInstance
};
