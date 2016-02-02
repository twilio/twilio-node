'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var Page = require('../../../../base/Page');
var values = require('../../../../base/values');

var CountryPage;
var CountryList;
var CountryInstance;
var CountryContext;

/**
 * Initialize the CountryPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 *
 * @returns CountryPage
 */
function CountryPage(version, response) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {};
}

_.extend(CountryPage.prototype, Page.prototype);
CountryPage.prototype.constructor = CountryPage;

/**
 * Build an instance of CountryInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns CountryInstance
 */
CountryPage.prototype.getInstance = function getInstance(payload) {
  return new CountryInstance(
    this._version,
    payload
  );
};


/**
 * Initialize the CountryList
 *
 * @param {Version} version - Version that contains the resource
 *
 * @returns CountryList
 */
function CountryList(version) {
  function CountryListInstance(sid) {
    return CountryListInstance.get(sid);
  }

  CountryListInstance._version = version;
  // Path Solution
  CountryListInstance._solution = {};
  CountryListInstance._uri = _.template(
    '/Voice/Countries' // jshint ignore:line
  )(CountryListInstance._solution);
  /**
   * Streams CountryInstance records from the API.
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
  CountryListInstance.each = function each(opts, callback) {
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
   * Lists CountryInstance records from the API as a list.
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
  CountryListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of CountryInstance records from the API.
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
  CountryListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new CountryPage(
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
   * Constructs a CountryContext
   *
   * @param {string} isoCountry - The iso_country
   *
   * @returns CountryContext
   */
  CountryListInstance.get = function get(isoCountry) {
    return new CountryContext(
      this._version,
      isoCountry
    );
  };

  return CountryListInstance;
}


/**
 * Initialize the CountryContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {iso_country_code} isoCountry - The iso_country
 *
 * @returns {CountryContext}
 */
function CountryInstance(version, payload, isoCountry) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    country: payload.country, // jshint ignore:line,
    isoCountry: payload.iso_country, // jshint ignore:line,
    url: payload.url, // jshint ignore:line,
    outboundPrefixPrices: payload.outbound_prefix_prices, // jshint ignore:line,
    inboundCallPrices: payload.inbound_call_prices, // jshint ignore:line,
    priceUnit: payload.price_unit, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    isoCountry: isoCountry || this._properties.isoCountry,
  };
}

_.extend(CountryInstance.prototype, InstanceResource.prototype);
CountryInstance.prototype.constructor = CountryInstance;

Object.defineProperty(CountryInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new CountryContext(
        this._version,
        this._solution.isoCountry
      );
    }

    return this._context;
  },
});

Object.defineProperty(CountryInstance.prototype,
  'country', {
  get: function() {
    return this._properties.country;
  },
});

Object.defineProperty(CountryInstance.prototype,
  'isoCountry', {
  get: function() {
    return this._properties.isoCountry;
  },
});

Object.defineProperty(CountryInstance.prototype,
  'outboundPrefixPrices', {
  get: function() {
    return this._properties.outboundPrefixPrices;
  },
});

Object.defineProperty(CountryInstance.prototype,
  'inboundCallPrices', {
  get: function() {
    return this._properties.inboundCallPrices;
  },
});

Object.defineProperty(CountryInstance.prototype,
  'priceUnit', {
  get: function() {
    return this._properties.priceUnit;
  },
});

Object.defineProperty(CountryInstance.prototype,
  'url', {
  get: function() {
    return this._properties.url;
  },
});

/**
 * Fetch a CountryInstance
 *
 * @param {Function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched CountryInstance
 */
CountryInstance.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new CountryInstance(
      this._version,
      payload,
      this._solution.isoCountry
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
 * Initialize the CountryContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {iso_country_code} isoCountry - The iso_country
 *
 * @returns {CountryContext}
 */
function CountryContext(version, isoCountry) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    isoCountry: isoCountry,
  };
  this._uri = _.template(
    '/Voice/Countries/<%= isoCountry %>' // jshint ignore:line
  )(this._solution);
}

_.extend(CountryContext.prototype, InstanceContext.prototype);
CountryContext.prototype.constructor = CountryContext;

/**
 * Fetch a CountryInstance
 *
 * @param {Function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched CountryInstance
 */
CountryContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new CountryInstance(
      this._version,
      payload,
      this._solution.isoCountry
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

module.exports = {
  CountryPage: CountryPage,
  CountryList: CountryList,
  CountryInstance: CountryInstance,
  CountryContext: CountryContext
};
