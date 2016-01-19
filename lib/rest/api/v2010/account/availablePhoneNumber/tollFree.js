'use strict';

var _ = require('lodash');
var InstanceResource = require('../../../../../base/InstanceResource');
var ListResource = require('../../../../../base/ListResource');
var Page = require('../../../../../base/Page');
var values = require('../../../../../base/values');

var TollFreePage;
var TollFreeList;
var TollFreeInstance;
var TollFreeContext;

/**
 * Initialize the TollFreePage
 *
 * :param Version version: Version that contains the resource
 * :param Response response: Response from the API
 * :param accountSid: A 34 character string that uniquely identifies this resource.
 * :param countryCode: The country_code
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
 * :param dict payload: Payload response from the API
 *
 * @returns TollFreeInstance
 */
TollFreePage.prototype.getInstance = function getInstance(payload) {
  return new TollFreeInstance(
    this._version,
    payload,
    accountSid=this._solution['accountSid'],
    countryCode=this._solution['countryCode']
  );
};


/**
 * Initialize the TollFreeList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: A 34 character string that uniquely identifies this resource.
 * :param countryCode: The country_code
 *
 * @returns TollFreeList
 */
function TollFreeList(version, accountSid, countryCode) {
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
   * Streams TollFreeInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.areaCode] - The area_code
   * @param string [opts.contains] - The contains
   * @param string [opts.smsEnabled] - The sms_enabled
   * @param string [opts.mmsEnabled] - The mms_enabled
   * @param string [opts.voiceEnabled] - The voice_enabled
   * @param string [opts.excludeAllAddressRequired] -
   *          The exclude_all_address_required
   * @param string [opts.excludeLocalAddressRequired] -
   *          The exclude_local_address_required
   * @param string [opts.excludeForeignAddressRequired] -
   *          The exclude_foreign_address_required
   * @param string [opts.beta] - The beta
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
   * @param {Function} opts.callback - A callback function to process records
   */
  TollFreeListInstance.stream = function stream(opts) {
    opts = opts || {};

    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var page = this.page(
      opts
    );

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists TollFreeInstance records from the API as a list.
   *
   * @param string [opts.areaCode] - The area_code
   * @param string [opts.contains] - The contains
   * @param string [opts.smsEnabled] - The sms_enabled
   * @param string [opts.mmsEnabled] - The mms_enabled
   * @param string [opts.voiceEnabled] - The voice_enabled
   * @param string [opts.excludeAllAddressRequired] -
   *          The exclude_all_address_required
   * @param string [opts.excludeLocalAddressRequired] -
   *          The exclude_local_address_required
   * @param string [opts.excludeForeignAddressRequired] -
   *          The exclude_foreign_address_required
   * @param string [opts.beta] - The beta
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
   *
   * @returns {Array} A list of records
   */
  TollFreeListInstance.list = function list(opts) {
    opts = opts || {};

    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize,
    });

    return this.page(
      opts,
      limits.pageSize
    );
  };

  /**
   * Retrieve a single page of TollFreeInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.areaCode] - The area_code
   * @param string [opts.contains] - The contains
   * @param string [opts.smsEnabled] - The sms_enabled
   * @param string [opts.mmsEnabled] - The mms_enabled
   * @param string [opts.voiceEnabled] - The voice_enabled
   * @param string [opts.excludeAllAddressRequired] -
   *          The exclude_all_address_required
   * @param string [opts.excludeLocalAddressRequired] -
   *          The exclude_local_address_required
   * @param string [opts.excludeForeignAddressRequired] -
   *          The exclude_foreign_address_required
   * @param string [opts.beta] - The beta
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of TollFreeInstance
   */
  TollFreeListInstance.page = function page(opts) {
    var version = this._version;
    var solution = this._solution;

    var params = values.of({
      'AreaCode': opts.areaCode,
      'Contains': opts.contains,
      'SmsEnabled': opts.smsEnabled,
      'MmsEnabled': opts.mmsEnabled,
      'VoiceEnabled': opts.voiceEnabled,
      'ExcludeAllAddressRequired': opts.excludeAllAddressRequired,
      'ExcludeLocalAddressRequired': opts.excludeLocalAddressRequired,
      'ExcludeForeignAddressRequired': opts.excludeForeignAddressRequired,
      'Beta': opts.beta,
      'PageToken': opts.page_token,
      'Page': opts.page_number,
      'PageSize': opts.page_size
    });

    var promise = version.page(
      'GET',
      this._uri,
      params
    );

    promise = promise.then(function(response) {
      return new TollFreePage(
        version,
        response,
        solution.accountSid,
        solution.countryCode
      );
    });

    return promise;
  };

  return TollFreeListInstance;
}


/**
 * Initialize the TollFreeContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {TollFreeContext}
 */
function TollFreeInstance(version, payload, accountSid, countryCode) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    friendlyName: payload.friendly_name, // jshint ignore:line,
    phoneNumber: payload.phone_number, // jshint ignore:line,
    lata: payload.lata, // jshint ignore:line,
    rateCenter: payload.rate_center, // jshint ignore:line,
    latitude: payload.latitude, // jshint ignore:line,
    longitude: payload.longitude, // jshint ignore:line,
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
