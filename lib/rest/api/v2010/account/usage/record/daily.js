'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceResource = require('../../../../../../base/InstanceResource');
var Page = require('../../../../../../base/Page');
var deserialize = require('../../../../../../base/deserialize');
var values = require('../../../../../../base/values');

var DailyPage;
var DailyList;
var DailyInstance;
var DailyContext;

/**
 * Initialize the DailyPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns DailyPage
 */
function DailyPage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(DailyPage.prototype, Page.prototype);
DailyPage.prototype.constructor = DailyPage;

/**
 * Build an instance of DailyInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns DailyInstance
 */
DailyPage.prototype.getInstance = function getInstance(payload) {
  return new DailyInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/**
 * Initialize the DailyList
 *
 * @param {Version} version - Version that contains the resource
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns DailyList
 */
function DailyList(version, accountSid) {
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
   * Lists DailyInstance records from the API as a list.
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
  DailyListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of DailyInstance records from the API.
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
  DailyListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new DailyPage(
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

  return DailyListInstance;
}


/**
 * Initialize the DailyContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {DailyContext}
 */
function DailyInstance(version, payload, accountSid) {
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

_.extend(DailyInstance.prototype, InstanceResource.prototype);
DailyInstance.prototype.constructor = DailyInstance;

Object.defineProperty(DailyInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(DailyInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(DailyInstance.prototype,
  'category', {
  get: function() {
    return this._properties.category;
  },
});

Object.defineProperty(DailyInstance.prototype,
  'count', {
  get: function() {
    return this._properties.count;
  },
});

Object.defineProperty(DailyInstance.prototype,
  'countUnit', {
  get: function() {
    return this._properties.countUnit;
  },
});

Object.defineProperty(DailyInstance.prototype,
  'description', {
  get: function() {
    return this._properties.description;
  },
});

Object.defineProperty(DailyInstance.prototype,
  'endDate', {
  get: function() {
    return this._properties.endDate;
  },
});

Object.defineProperty(DailyInstance.prototype,
  'price', {
  get: function() {
    return this._properties.price;
  },
});

Object.defineProperty(DailyInstance.prototype,
  'priceUnit', {
  get: function() {
    return this._properties.priceUnit;
  },
});

Object.defineProperty(DailyInstance.prototype,
  'startDate', {
  get: function() {
    return this._properties.startDate;
  },
});

Object.defineProperty(DailyInstance.prototype,
  'subresourceUris', {
  get: function() {
    return this._properties.subresourceUris;
  },
});

Object.defineProperty(DailyInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

Object.defineProperty(DailyInstance.prototype,
  'usage', {
  get: function() {
    return this._properties.usage;
  },
});

Object.defineProperty(DailyInstance.prototype,
  'usageUnit', {
  get: function() {
    return this._properties.usageUnit;
  },
});

module.exports = {
  DailyPage: DailyPage,
  DailyList: DailyList,
  DailyInstance: DailyInstance,
  DailyContext: DailyContext
};
