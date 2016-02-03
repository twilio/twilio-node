'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceResource = require('../../../../../base/InstanceResource');
var Page = require('../../../../../base/Page');
var deserialize = require('../../../../../base/deserialize');
var values = require('../../../../../base/values');

var DependentPhoneNumberPage;
var DependentPhoneNumberList;
var DependentPhoneNumberInstance;
var DependentPhoneNumberContext;

/**
 * @constructor Twilio.Api.V2010.AccountContext.AddressContext.DependentPhoneNumberPage
 * @augments Page
 * @description Initialize the DependentPhoneNumberPage
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} response - Response from the API
 * @param {string} accountSid - The account_sid
 * @param {string} addressSid - The sid
 *
 * @returns DependentPhoneNumberPage
 */
function DependentPhoneNumberPage(version, response, accountSid, addressSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    addressSid: addressSid
  };
}

_.extend(DependentPhoneNumberPage.prototype, Page.prototype);
DependentPhoneNumberPage.prototype.constructor = DependentPhoneNumberPage;

/**
 * Build an instance of DependentPhoneNumberInstance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns DependentPhoneNumberInstance
 */
DependentPhoneNumberPage.prototype.getInstance = function getInstance(payload) {
  return new DependentPhoneNumberInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.addressSid
  );
};


/**
 * @constructor Twilio.Api.V2010.AccountContext.AddressContext.DependentPhoneNumberList
 * @description Initialize the DependentPhoneNumberList
 *
 * @param {V2010} version - Version that contains the resource
 * @param {string} accountSid - The account_sid
 * @param {string} addressSid - The sid
 *
 * @returns {function} - DependentPhoneNumberListInstance
 */
function DependentPhoneNumberList(version, accountSid, addressSid) {
  /**
   * @memberof Twilio.Api.V2010.AccountContext.AddressContext.DependentPhoneNumberList
   *
   * @param {string} sid - sid of instance
   *
   * @returns DependentPhoneNumberContext
   */
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
  /**
   * @memberof DependentPhoneNumberList
   *
   * @description Streams DependentPhoneNumberInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
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
   * @memberof DependentPhoneNumberList
   *
   * @description Lists DependentPhoneNumberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
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
  DependentPhoneNumberListInstance.list = function list(opts, callback) {
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
   * @memberof DependentPhoneNumberList
   *
   * @description Retrieve a single page of DependentPhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
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
  DependentPhoneNumberListInstance.page = function page(opts, callback) {
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
        this._solution.accountSid,
        this._solution.addressSid
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
}


/**
 * @constructor Twilio.Api.V2010.AccountContext.AddressContext.DependentPhoneNumberInstance
 * @augments InstanceResource
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
 * @param {V2010} version - Version that contains the resource
 * @param {object} payload - The instance payload
 */
function DependentPhoneNumberInstance(version, payload, accountSid, addressSid)
                                       {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    friendlyName: payload.friendly_name, // jshint ignore:line,
    phoneNumber: payload.phone_number, // jshint ignore:line,
    lata: payload.lata, // jshint ignore:line,
    rateCenter: payload.rate_center, // jshint ignore:line,
    latitude: deserialize.decimal(payload.latitude), // jshint ignore:line,
    longitude: deserialize.decimal(payload.longitude), // jshint ignore:line,
    region: payload.region, // jshint ignore:line,
    postalCode: payload.postal_code, // jshint ignore:line,
    isoCountry: payload.iso_country, // jshint ignore:line,
    addressRequirements: payload.address_requirements, // jshint ignore:line,
    capabilities: payload.capabilities, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    addressSid: addressSid,
  };
}

_.extend(DependentPhoneNumberInstance.prototype, InstanceResource.prototype);
DependentPhoneNumberInstance.prototype.constructor = DependentPhoneNumberInstance;

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'phoneNumber', {
  get: function() {
    return this._properties.phoneNumber;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'lata', {
  get: function() {
    return this._properties.lata;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'rateCenter', {
  get: function() {
    return this._properties.rateCenter;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'latitude', {
  get: function() {
    return this._properties.latitude;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'longitude', {
  get: function() {
    return this._properties.longitude;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'region', {
  get: function() {
    return this._properties.region;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'postalCode', {
  get: function() {
    return this._properties.postalCode;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'isoCountry', {
  get: function() {
    return this._properties.isoCountry;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'addressRequirements', {
  get: function() {
    return this._properties.addressRequirements;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'capabilities', {
  get: function() {
    return this._properties.capabilities;
  },
});

module.exports = {
  DependentPhoneNumberPage: DependentPhoneNumberPage,
  DependentPhoneNumberList: DependentPhoneNumberList,
  DependentPhoneNumberInstance: DependentPhoneNumberInstance,
  DependentPhoneNumberContext: DependentPhoneNumberContext
};
