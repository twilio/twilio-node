'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var DependentPhoneNumberList;
var DependentPhoneNumberPage;
var DependentPhoneNumberInstance;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.AddressContext.DependentPhoneNumberList
 * @description Initialize the DependentPhoneNumberList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid - The account_sid
 * @param {string} addressSid - The sid
 */
/* jshint ignore:end */
DependentPhoneNumberList = function DependentPhoneNumberList(version,
    accountSid, addressSid) {
  /* jshint ignore:start */
  /**
   * @function dependentPhoneNumbers
   * @memberof Twilio.Api.V2010.AccountContext.AddressContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.AddressContext.DependentPhoneNumberContext}
   */
  /* jshint ignore:end */
  function DependentPhoneNumberListInstance(sid) {
    return DependentPhoneNumberListInstance.get(sid);
  }

  DependentPhoneNumberListInstance._version = version;
  // Path Solution
  DependentPhoneNumberListInstance._solution = {
    accountSid: accountSid,
    addressSid: addressSid
  };
  DependentPhoneNumberListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Addresses/<%= addressSid %>/DependentPhoneNumbers.json' // jshint ignore:line
  )(DependentPhoneNumberListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams DependentPhoneNumberInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.AddressContext.DependentPhoneNumberList
   * @instance
   *
   * @param {object|function} opts - ...
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
  DependentPhoneNumberListInstance.each = function each(opts, callback) {
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
   * @description Lists DependentPhoneNumberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.AddressContext.DependentPhoneNumberList
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
  /* jshint ignore:end */
  DependentPhoneNumberListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of DependentPhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.AddressContext.DependentPhoneNumberList
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
  /* jshint ignore:end */
  DependentPhoneNumberListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new DependentPhoneNumberPage(
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

  return DependentPhoneNumberListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.AddressContext.DependentPhoneNumberPage
 * @augments Page
 * @description Initialize the DependentPhoneNumberPage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns DependentPhoneNumberPage
 */
/* jshint ignore:end */
DependentPhoneNumberPage = function DependentPhoneNumberPage(version, response,
    solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(DependentPhoneNumberPage.prototype, Page.prototype);
DependentPhoneNumberPage.prototype.constructor = DependentPhoneNumberPage;

/* jshint ignore:start */
/**
 * Build an instance of DependentPhoneNumberInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.AddressContext.DependentPhoneNumberPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns DependentPhoneNumberInstance
 */
/* jshint ignore:end */
DependentPhoneNumberPage.prototype.getInstance = function getInstance(payload) {
  return new DependentPhoneNumberInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.addressSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.AddressContext.DependentPhoneNumberInstance
 * @description Initialize the DependentPhoneNumberContext
 *
 * @property {string} friendlyName - The friendly_name
 * @property {string} phoneNumber - The phone_number
 * @property {string} lata - The lata
 * @property {string} rateCenter - The rate_center
 * @property {number} latitude - The latitude
 * @property {number} longitude - The longitude
 * @property {string} region - The region
 * @property {string} postalCode - The postal_code
 * @property {string} isoCountry - The iso_country
 * @property {string} addressRequirements - The address_requirements
 * @property {string} capabilities - The capabilities
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 */
/* jshint ignore:end */
DependentPhoneNumberInstance = function DependentPhoneNumberInstance(version,
    payload, accountSid, addressSid) {
  this._version = version;

  // Marshaled Properties
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.phoneNumber = payload.phone_number; // jshint ignore:line
  this.lata = payload.lata; // jshint ignore:line
  this.rateCenter = payload.rate_center; // jshint ignore:line
  this.latitude = deserialize.decimal(payload.latitude); // jshint ignore:line
  this.longitude = deserialize.decimal(payload.longitude); // jshint ignore:line
  this.region = payload.region; // jshint ignore:line
  this.postalCode = payload.postal_code; // jshint ignore:line
  this.isoCountry = payload.iso_country; // jshint ignore:line
  this.addressRequirements = payload.address_requirements; // jshint ignore:line
  this.capabilities = payload.capabilities; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    addressSid: addressSid,
  };
};

module.exports = {
  DependentPhoneNumberList: DependentPhoneNumberList,
  DependentPhoneNumberPage: DependentPhoneNumberPage,
  DependentPhoneNumberInstance: DependentPhoneNumberInstance
};
