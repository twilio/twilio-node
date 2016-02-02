'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceResource = require('../../../../../../base/InstanceResource');
var Page = require('../../../../../../base/Page');
var deserialize = require('../../../../../../base/deserialize');
var values = require('../../../../../../base/values');

var YearlyPage;
var YearlyList;
var YearlyInstance;
var YearlyContext;

/**
 * Initialize the YearlyPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns YearlyPage
 */
function YearlyPage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(YearlyPage.prototype, Page.prototype);
YearlyPage.prototype.constructor = YearlyPage;

/**
 * Build an instance of YearlyInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns YearlyInstance
 */
YearlyPage.prototype.getInstance = function getInstance(payload) {
  return new YearlyInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/**
 * Initialize the YearlyList
 *
 * @param {Version} version - Version that contains the resource
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns YearlyList
 */
function YearlyList(version, accountSid) {
  function YearlyListInstance(sid) {
    return YearlyListInstance.get(sid);
  }

  YearlyListInstance._version = version;
  // Path Solution
  YearlyListInstance._solution = {
    accountSid: accountSid
  };
  YearlyListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Usage/Records/Yearly.json' // jshint ignore:line
  )(YearlyListInstance._solution);
  /**
   * Streams YearlyInstance records from the API.
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
  YearlyListInstance.each = function each(opts, callback) {
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
   * Lists YearlyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
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
   * @param {Function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  YearlyListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of YearlyInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {Function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  YearlyListInstance.page = function page(opts, callback) {
    var deferred = Q.defer();
    var data = values.of({
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
      deferred.resolve(new YearlyPage(
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

  return YearlyListInstance;
}


/**
 * Initialize the YearlyContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {YearlyContext}
 */
function YearlyInstance(version, payload, accountSid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    apiVersion: payload.api_version, // jshint ignore:line,
    category: payload.category, // jshint ignore:line,
    count: payload.count, // jshint ignore:line,
    countUnit: payload.count_unit, // jshint ignore:line,
    description: payload.description, // jshint ignore:line,
    endDate: deserialize.rfc2822DateTime(payload.end_date), // jshint ignore:line,
    price: deserialize.decimal(payload.price), // jshint ignore:line,
    priceUnit: payload.price_unit, // jshint ignore:line,
    startDate: deserialize.rfc2822DateTime(payload.start_date), // jshint ignore:line,
    subresourceUris: payload.subresource_uris, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
    usage: payload.usage, // jshint ignore:line,
    usageUnit: payload.usage_unit, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
  };
}

_.extend(YearlyInstance.prototype, InstanceResource.prototype);
YearlyInstance.prototype.constructor = YearlyInstance;

Object.defineProperty(YearlyInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(YearlyInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(YearlyInstance.prototype,
  'category', {
  get: function() {
    return this._properties.category;
  },
});

Object.defineProperty(YearlyInstance.prototype,
  'count', {
  get: function() {
    return this._properties.count;
  },
});

Object.defineProperty(YearlyInstance.prototype,
  'countUnit', {
  get: function() {
    return this._properties.countUnit;
  },
});

Object.defineProperty(YearlyInstance.prototype,
  'description', {
  get: function() {
    return this._properties.description;
  },
});

Object.defineProperty(YearlyInstance.prototype,
  'endDate', {
  get: function() {
    return this._properties.endDate;
  },
});

Object.defineProperty(YearlyInstance.prototype,
  'price', {
  get: function() {
    return this._properties.price;
  },
});

Object.defineProperty(YearlyInstance.prototype,
  'priceUnit', {
  get: function() {
    return this._properties.priceUnit;
  },
});

Object.defineProperty(YearlyInstance.prototype,
  'startDate', {
  get: function() {
    return this._properties.startDate;
  },
});

Object.defineProperty(YearlyInstance.prototype,
  'subresourceUris', {
  get: function() {
    return this._properties.subresourceUris;
  },
});

Object.defineProperty(YearlyInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

Object.defineProperty(YearlyInstance.prototype,
  'usage', {
  get: function() {
    return this._properties.usage;
  },
});

Object.defineProperty(YearlyInstance.prototype,
  'usageUnit', {
  get: function() {
    return this._properties.usageUnit;
  },
});

module.exports = {
  YearlyPage: YearlyPage,
  YearlyList: YearlyList,
  YearlyInstance: YearlyInstance,
  YearlyContext: YearlyContext
};
