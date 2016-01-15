'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var ListResource = require('../../../../base/ListResource');
var LocalList = require('./availablePhoneNumber/local').LocalList;
var MobileList = require('./availablePhoneNumber/mobile').MobileList;
var TollFreeList = require('./availablePhoneNumber/tollFree').TollFreeList;
var values = require('../../../../base/values');

var AvailablePhoneNumberCountryList;
var AvailablePhoneNumberCountryInstance;
var AvailablePhoneNumberCountryContext;

/**
 * Initialize the AvailablePhoneNumberCountryList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: A 34 character string that uniquely identifies this resource.
 *
 * @returns AvailablePhoneNumberCountryList
 */
function AvailablePhoneNumberCountryList(version, accountSid) {
  function AvailablePhoneNumberCountryListInstance(sid) {
    return AvailablePhoneNumberCountryListInstance.get(sid);
  }

  AvailablePhoneNumberCountryListInstance._version = version;
  // Path Solution
  AvailablePhoneNumberCountryListInstance._solution = {
    accountSid: accountSid
  };
  AvailablePhoneNumberCountryListInstance._uri = _.template(
    '/Accounts/<%= accountSid%>/AvailablePhoneNumbers.json' // jshint ignore:line
  )(AvailablePhoneNumberCountryListInstance._solution);
  /**
   * Streams AvailablePhoneNumberCountryInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
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
   * @param {Function} opts.callback - A callback function to process records
   */
  AvailablePhoneNumberCountryListInstance.stream = function stream() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists AvailablePhoneNumberCountryInstance records from the API as a list.
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
   *
   * @returns {Array} A list of records
   */
  AvailablePhoneNumberCountryListInstance.list = function list() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize,
    });

    return this.page(
      limits.pageSize
    );
  };

  /**
   * Retrieve a single page of AvailablePhoneNumberCountryInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of AvailablePhoneNumberCountryInstance
   */
  AvailablePhoneNumberCountryListInstance.page = function page() {
    var params = values.of({
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params
    );

    return AvailablePhoneNumberCountryPage(
      this._version,
      response,
      this._solution.accountSid
    );
  };

  /**
   * Constructs a AvailablePhoneNumberCountryContext
   *
   * :param countryCode - The country_code
   *
   * @returns AvailablePhoneNumberCountryContext
   */
  AvailablePhoneNumberCountryListInstance.get = function get(countryCode) {
    return new AvailablePhoneNumberCountryContext(
      this._version,
      this._solution.accountSid,
      countryCode
    );
  };

  return AvailablePhoneNumberCountryListInstance;
}


/**
 * Initialize the AvailablePhoneNumberCountryContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {iso_country_code} countryCode: The country_code
 *
 * @returns {AvailablePhoneNumberCountryContext}
 */
function AvailablePhoneNumberCountryInstance(version, payload, accountSid,
                                              countryCode) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    countryCode: payload.country_code, // jshint ignore:line,
    country: payload.country, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
    beta: payload.beta, // jshint ignore:line,
    subresourceUris: payload.subresource_uris, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    countryCode: countryCode || this._properties.countryCode,
  };
}

_.extend(AvailablePhoneNumberCountryInstance.prototype, InstanceResource.prototype);
AvailablePhoneNumberCountryInstance.prototype.constructor = AvailablePhoneNumberCountryInstance;

Object.defineProperty(AvailablePhoneNumberCountryInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new AvailablePhoneNumberCountryContext(
        this._version,
        this._solution.accountSid,
        this._solution.countryCode
      );
    }

    return this._context;
  },
});

Object.defineProperty(AvailablePhoneNumberCountryInstance.prototype,
  'countryCode', {
  get: function() {
    return this._properties.countryCode;
  },
});

Object.defineProperty(AvailablePhoneNumberCountryInstance.prototype,
  'country', {
  get: function() {
    return this._properties.country;
  },
});

Object.defineProperty(AvailablePhoneNumberCountryInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

Object.defineProperty(AvailablePhoneNumberCountryInstance.prototype,
  'beta', {
  get: function() {
    return this._properties.beta;
  },
});

Object.defineProperty(AvailablePhoneNumberCountryInstance.prototype,
  'subresourceUris', {
  get: function() {
    return this._properties.subresourceUris;
  },
});

/**
 * Fetch a AvailablePhoneNumberCountryInstance
 *
 * @returns Fetched AvailablePhoneNumberCountryInstance
 */
AvailablePhoneNumberCountryInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Access the local
 *
 * @returns local
 */
AvailablePhoneNumberCountryInstance.prototype.local = function local() {
  return this._proxy.local;
};

/**
 * Access the tollFree
 *
 * @returns tollFree
 */
AvailablePhoneNumberCountryInstance.prototype.tollFree = function tollFree() {
  return this._proxy.tollFree;
};

/**
 * Access the mobile
 *
 * @returns mobile
 */
AvailablePhoneNumberCountryInstance.prototype.mobile = function mobile() {
  return this._proxy.mobile;
};


/**
 * Initialize the AvailablePhoneNumberCountryContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {iso_country_code} countryCode - The country_code
 *
 * @returns {AvailablePhoneNumberCountryContext}
 */
function AvailablePhoneNumberCountryContext(version, accountSid, countryCode) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    countryCode: countryCode,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid%>/AvailablePhoneNumbers/<%= countryCode%>.json' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._local = undefined;
  this._tollFree = undefined;
  this._mobile = undefined;
}

_.extend(AvailablePhoneNumberCountryContext.prototype, InstanceContext.prototype);
AvailablePhoneNumberCountryContext.prototype.constructor = AvailablePhoneNumberCountryContext;

/**
 * Fetch a AvailablePhoneNumberCountryInstance
 *
 * @returns Fetched AvailablePhoneNumberCountryInstance
 */
AvailablePhoneNumberCountryContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new AvailablePhoneNumberCountryInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.countryCode
    );
  });

  return promise;
};

Object.defineProperty(AvailablePhoneNumberCountryContext.prototype,
  'local', {
  get: function() {
    if (!this._local) {
      this._local = new LocalList(
        this._version,
        this._solution.countryCode,
        this._solution.accountSid
      );
    }
    return this._local;
  },
});

Object.defineProperty(AvailablePhoneNumberCountryContext.prototype,
  'tollFree', {
  get: function() {
    if (!this._tollFree) {
      this._tollFree = new TollFreeList(
        this._version,
        this._solution.countryCode,
        this._solution.accountSid
      );
    }
    return this._tollFree;
  },
});

Object.defineProperty(AvailablePhoneNumberCountryContext.prototype,
  'mobile', {
  get: function() {
    if (!this._mobile) {
      this._mobile = new MobileList(
        this._version,
        this._solution.countryCode,
        this._solution.accountSid
      );
    }
    return this._mobile;
  },
});

module.exports = {
  AvailablePhoneNumberCountryList: AvailablePhoneNumberCountryList,
  AvailablePhoneNumberCountryInstance: AvailablePhoneNumberCountryInstance,
  AvailablePhoneNumberCountryContext: AvailablePhoneNumberCountryContext
};
