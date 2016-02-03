'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceResource = require('../../../../../base/InstanceResource');
var Page = require('../../../../../base/Page');
var deserialize = require('../../../../../base/deserialize');
var values = require('../../../../../base/values');

var TollFreePage;
var TollFreeList;
var TollFreeInstance;
var TollFreeContext;

/**
 * @constructor
 * @augments Page
 * @description Initialize the TollFreePage
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} response - Response from the API
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 * @param {string} countryCode - The country_code
 *
 * @returns TollFreePage
 */
function TollFreePage(version, response, accountSid, countryCode) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    countryCode: countryCode
  };
}

_.extend(TollFreePage.prototype, Page.prototype);
TollFreePage.prototype.constructor = TollFreePage;

/**
 * Build an instance of TollFreeInstance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns TollFreeInstance
 */
TollFreePage.prototype.getInstance = function getInstance(payload) {
  return new TollFreeInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.countryCode
  );
};


/**
 * @constructor
 * @description Initialize the TollFreeList
 *
 * @param {V2010} version - Version that contains the resource
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 * @param {string} countryCode - The country_code
 *
 * @returns {function} - TollFreeListInstance
 */
function TollFreeList(version, accountSid, countryCode) {
  /**
   * @memberof TollFreeList
   *
   * @param {string} sid - sid of instance
   *
   * @returns TollFreeContext
   */
  function TollFreeListInstance(sid) {
    return TollFreeListInstance.get(sid);
  }

  TollFreeListInstance._version = version;
  // Path Solution
  TollFreeListInstance._solution = {
    accountSid: accountSid,
    countryCode: countryCode
  };
  TollFreeListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/AvailablePhoneNumbers/<%= countryCode %>/TollFree.json' // jshint ignore:line
  )(TollFreeListInstance._solution);
  /**
   * @memberof TollFreeList
   *
   * @description Streams TollFreeInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
   * @param {number} [opts.areaCode] - The area_code
   * @param {string} [opts.contains] - The contains
   * @param {string} [opts.smsEnabled] - The sms_enabled
   * @param {string} [opts.mmsEnabled] - The mms_enabled
   * @param {string} [opts.voiceEnabled] - The voice_enabled
   * @param {string} [opts.excludeAllAddressRequired] -
   *          The exclude_all_address_required
   * @param {string} [opts.excludeLocalAddressRequired] -
   *          The exclude_local_address_required
   * @param {string} [opts.excludeForeignAddressRequired] -
   *          The exclude_foreign_address_required
   * @param {string} [opts.beta] - The beta
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
  TollFreeListInstance.each = function each(opts, callback) {
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
   * @memberof TollFreeList
   *
   * @description Lists TollFreeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
   * @param {number} [opts.areaCode] - The area_code
   * @param {string} [opts.contains] - The contains
   * @param {string} [opts.smsEnabled] - The sms_enabled
   * @param {string} [opts.mmsEnabled] - The mms_enabled
   * @param {string} [opts.voiceEnabled] - The voice_enabled
   * @param {string} [opts.excludeAllAddressRequired] -
   *          The exclude_all_address_required
   * @param {string} [opts.excludeLocalAddressRequired] -
   *          The exclude_local_address_required
   * @param {string} [opts.excludeForeignAddressRequired] -
   *          The exclude_foreign_address_required
   * @param {string} [opts.beta] - The beta
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
  TollFreeListInstance.list = function list(opts, callback) {
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
   * @memberof TollFreeList
   *
   * @description Retrieve a single page of TollFreeInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
   * @param {number} [opts.areaCode] - The area_code
   * @param {string} [opts.contains] - The contains
   * @param {string} [opts.smsEnabled] - The sms_enabled
   * @param {string} [opts.mmsEnabled] - The mms_enabled
   * @param {string} [opts.voiceEnabled] - The voice_enabled
   * @param {string} [opts.excludeAllAddressRequired] -
   *          The exclude_all_address_required
   * @param {string} [opts.excludeLocalAddressRequired] -
   *          The exclude_local_address_required
   * @param {string} [opts.excludeForeignAddressRequired] -
   *          The exclude_foreign_address_required
   * @param {string} [opts.beta] - The beta
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  TollFreeListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'AreaCode': opts.areaCode,
      'Contains': opts.contains,
      'SmsEnabled': opts.smsEnabled,
      'MmsEnabled': opts.mmsEnabled,
      'VoiceEnabled': opts.voiceEnabled,
      'ExcludeAllAddressRequired': opts.excludeAllAddressRequired,
      'ExcludeLocalAddressRequired': opts.excludeLocalAddressRequired,
      'ExcludeForeignAddressRequired': opts.excludeForeignAddressRequired,
      'Beta': opts.beta,
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
      deferred.resolve(new TollFreePage(
        this._version,
        payload,
        this._solution.accountSid,
        this._solution.countryCode
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

  return TollFreeListInstance;
}


/**
 * @constructor
 * @augments InstanceResource
 * @description Initialize the TollFreeContext
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
 * @property {string} beta - The beta
 * @property {string} capabilities - The capabilities
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} payload - The instance payload
 */
function TollFreeInstance(version, payload, accountSid, countryCode) {
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
    beta: payload.beta, // jshint ignore:line,
    capabilities: payload.capabilities, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    countryCode: countryCode,
  };
}

_.extend(TollFreeInstance.prototype, InstanceResource.prototype);
TollFreeInstance.prototype.constructor = TollFreeInstance;

Object.defineProperty(TollFreeInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'phoneNumber', {
  get: function() {
    return this._properties.phoneNumber;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'lata', {
  get: function() {
    return this._properties.lata;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'rateCenter', {
  get: function() {
    return this._properties.rateCenter;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'latitude', {
  get: function() {
    return this._properties.latitude;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'longitude', {
  get: function() {
    return this._properties.longitude;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'region', {
  get: function() {
    return this._properties.region;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'postalCode', {
  get: function() {
    return this._properties.postalCode;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'isoCountry', {
  get: function() {
    return this._properties.isoCountry;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'addressRequirements', {
  get: function() {
    return this._properties.addressRequirements;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'beta', {
  get: function() {
    return this._properties.beta;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'capabilities', {
  get: function() {
    return this._properties.capabilities;
  },
});

module.exports = {
  TollFreePage: TollFreePage,
  TollFreeList: TollFreeList,
  TollFreeInstance: TollFreeInstance,
  TollFreeContext: TollFreeContext
};
