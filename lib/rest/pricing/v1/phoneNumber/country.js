'use strict';

var _ = require('lodash');
var Q = require('q');
var Page = require('../../../../base/Page');
var values = require('../../../../base/values');

var CountryPage;
var CountryList;
var CountryInstance;
var CountryContext;

/**
 * @constructor Twilio.Pricing.V1.PhoneNumberContext.CountryPage
 * @augments Page
 * @description Initialize the CountryPage
 *
 * @param {Twilio.Pricing.V1} version - Version of the resource
 * @param {object} response - Response from the API
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
 * @function getInstance
 * @memberof Twilio.Pricing.V1.PhoneNumberContext.CountryPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
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
 * @constructor Twilio.Pricing.V1.PhoneNumberContext.CountryList
 * @description Initialize the CountryList
 *
 * @param {Twilio.Pricing.V1} version - Version of the resource
 */
function CountryList(version) {
  /**
   * @function countries
   * @memberof Twilio.Pricing.V1.PhoneNumberContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Pricing.V1.PhoneNumberContext.CountryContext}
   */
  function CountryListInstance(sid) {
    return CountryListInstance.get(sid);
  }

  CountryListInstance._version = version;
  // Path Solution
  CountryListInstance._solution = {};
  CountryListInstance._uri = _.template(
    '/PhoneNumbers/Countries' // jshint ignore:line
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
   * @function each
   * @memberof Twilio.Pricing.V1.PhoneNumberContext.CountryList
   * @instance
   *
   * @param {object|function} opts - ...
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
   * @description Lists CountryInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Pricing.V1.PhoneNumberContext.CountryList
   * @instance
   *
   * @param {object|function} opts - ...
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
   * @function page
   * @memberof Twilio.Pricing.V1.PhoneNumberContext.CountryList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  CountryListInstance.page = function page(opts, callback) {
    opts = opts || {};

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
   * Constructs a country
   *
   * @function get
   * @memberof Twilio.Pricing.V1.PhoneNumberContext.CountryList
   * @instance
   *
   * @param {string} isoCountry - The iso_country
   *
   * @returns {Twilio.Pricing.V1.PhoneNumberContext.CountryContext}
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
 * @constructor Twilio.Pricing.V1.PhoneNumberContext.CountryInstance
 * @description Initialize the CountryContext
 *
 * @property {string} country - The country
 * @property {string} isoCountry - The iso_country
 * @property {string} phoneNumberPrices - The phone_number_prices
 * @property {string} priceUnit - The price_unit
 * @property {string} uri - The uri
 * @property {string} url - The url
 *
 * @param {Twilio.Pricing.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {iso_country_code} isoCountry - The iso_country
 */
function CountryInstance(version, payload, isoCountry) {
  this._version = version;

  // Marshaled Properties
  this.country = payload.country; // jshint ignore:line
  this.isoCountry = payload.iso_country; // jshint ignore:line
  this.phoneNumberPrices = payload.phone_number_prices; // jshint ignore:line
  this.priceUnit = payload.price_unit; // jshint ignore:line
  this.uri = payload.uri; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    isoCountry: isoCountry || this.isoCountry,
  };
}

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

/**
 * fetch a CountryInstance
 *
 * @function fetch
 * @memberof Twilio.Pricing.V1.PhoneNumberContext.CountryInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed CountryInstance
 */
CountryInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};


/**
 * @constructor Twilio.Pricing.V1.PhoneNumberContext.CountryContext
 * @description Initialize the CountryContext
 *
 * @param {Twilio.Pricing.V1} version - Version of the resource
 * @param {iso_country_code} isoCountry - The iso_country
 */
function CountryContext(version, isoCountry) {
  this._version = version;

  // Path Solution
  this._solution = {
    isoCountry: isoCountry,
  };
  this._uri = _.template(
    '/PhoneNumbers/Countries/<%= isoCountry %>' // jshint ignore:line
  )(this._solution);
}

/**
 * fetch a CountryInstance
 *
 * @function fetch
 * @memberof Twilio.Pricing.V1.PhoneNumberContext.CountryContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed CountryInstance
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
