'use strict';

var _ = require('lodash');
var InstanceResource = require('../../../../../base/InstanceResource');
var ListResource = require('../../../../../base/ListResource');
var values = require('../../../../../base/values');

var LocalList;
var LocalInstance;
var LocalContext;

/**
 * Initialize the LocalList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: A 34 character string that uniquely identifies this resource.
 * :param countryCode: The country_code
 *
 * @returns LocalList
 */
function LocalList(version, accountSid, countryCode) {
  function LocalListInstance(sid) {
    return LocalListInstance.get(sid);
  }

  LocalListInstance._version = version;
  // Path Solution
  LocalListInstance._solution = {
    accountSid: accountSid,
    countryCode: countryCode
  };
  LocalListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/AvailablePhoneNumbers/<%= countryCode %>/Local.json' // jshint ignore:line
  )(LocalListInstance._solution);
  /**
   * Streams LocalInstance records from the API.
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
  LocalListInstance.stream = function stream(opts) {
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
   * Lists LocalInstance records from the API as a list.
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
  LocalListInstance.list = function list(opts) {
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
   * Retrieve a single page of LocalInstance records from the API.
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
   * @returns Page of LocalInstance
   */
  LocalListInstance.page = function page(opts) {
    var params = values.of({
      'Areacode': opts.areaCode,
      'Contains': opts.contains,
      'Smsenabled': opts.smsEnabled,
      'Mmsenabled': opts.mmsEnabled,
      'Voiceenabled': opts.voiceEnabled,
      'Excludealladdressrequired': opts.excludeAllAddressRequired,
      'Excludelocaladdressrequired': opts.excludeLocalAddressRequired,
      'Excludeforeignaddressrequired': opts.excludeForeignAddressRequired,
      'Beta': opts.beta,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params
    );

    return LocalPage(
      this._version,
      response,
      solution.accountSid,
      solution.countryCode
    );
  };

  return LocalListInstance;
}


/**
 * Initialize the LocalContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {LocalContext}
 */
function LocalInstance(version, payload, accountSid, countryCode) {
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

_.extend(LocalInstance.prototype, InstanceResource.prototype);
LocalInstance.prototype.constructor = LocalInstance;

Object.defineProperty(LocalInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'phoneNumber', {
  get: function() {
    return this._properties.phoneNumber;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'lata', {
  get: function() {
    return this._properties.lata;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'rateCenter', {
  get: function() {
    return this._properties.rateCenter;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'latitude', {
  get: function() {
    return this._properties.latitude;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'longitude', {
  get: function() {
    return this._properties.longitude;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'region', {
  get: function() {
    return this._properties.region;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'postalCode', {
  get: function() {
    return this._properties.postalCode;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'isoCountry', {
  get: function() {
    return this._properties.isoCountry;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'addressRequirements', {
  get: function() {
    return this._properties.addressRequirements;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'beta', {
  get: function() {
    return this._properties.beta;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'capabilities', {
  get: function() {
    return this._properties.capabilities;
  },
});

module.exports = {
  LocalList: LocalList,
  LocalInstance: LocalInstance,
  LocalContext: LocalContext
};
