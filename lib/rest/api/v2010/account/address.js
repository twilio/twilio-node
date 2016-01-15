'use strict';

var _ = require('lodash');
var DependentPhoneNumberList = require(
    './address/dependentPhoneNumber').DependentPhoneNumberList;
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var ListResource = require('../../../../base/ListResource');
var values = require('../../../../base/values');

var AddressList;
var AddressInstance;
var AddressContext;

/**
 * Initialize the AddressList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The account_sid
 *
 * @returns AddressList
 */
function AddressList(version, accountSid) {
  function AddressListInstance(sid) {
    return AddressListInstance.get(sid);
  }

  AddressListInstance._version = version;
  // Path Solution
  AddressListInstance._solution = {
    accountSid: accountSid
  };
  AddressListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Addresses.json' // jshint ignore:line
  )(AddressListInstance._solution);
  /**
   * Create a new AddressInstance
   *
   * @param string customerName - The customer_name
   * @param string street - The street
   * @param string city - The city
   * @param string region - The region
   * @param string postalCode - The postal_code
   * @param string isoCountry - The iso_country
   * @param string [opts.friendlyName] - The friendly_name
   *
   * @returns Newly created AddressInstance
   */
  AddressListInstance.create = function create(customerName, street, city, region,
                                                postalCode, isoCountry, opts) {
    var version = this._version;

    opts = opts || {};
    var data = values.of({
      'CustomerName': customerName,
      'Street': street,
      'City': city,
      'Region': region,
      'PostalCode': postalCode,
      'IsoCountry': isoCountry,
      'FriendlyName': opts.friendlyName || values.unset
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    promise = promise.then(function(payload) {
      return new AddressInstance(
        version,
        payload,
        solution.accountSid
      );
    });

    return promise;
  };

  /**
   * Streams AddressInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.customerName] - The customer_name
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.isoCountry] - The iso_country
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
  AddressListInstance.stream = function stream(opts) {
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
   * Lists AddressInstance records from the API as a list.
   *
   * @param string [opts.customerName] - The customer_name
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.isoCountry] - The iso_country
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
  AddressListInstance.list = function list(opts) {
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
   * Retrieve a single page of AddressInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.customerName] - The customer_name
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.isoCountry] - The iso_country
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of AddressInstance
   */
  AddressListInstance.page = function page(opts) {
    var params = values.of({
      'CustomerName': opts.customerName || values.unset,
      'FriendlyName': opts.friendlyName || values.unset,
      'IsoCountry': opts.isoCountry || values.unset,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params
    );

    return AddressPage(
      this._version,
      response,
      solution.accountSid
    );
  };

  /**
   * Constructs a AddressContext
   *
   * :param sid - The sid
   *
   * @returns AddressContext
   */
  AddressListInstance.get = function get(sid) {
    return new AddressContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return AddressListInstance;
}


/**
 * Initialize the AddressContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: The sid
 *
 * @returns {AddressContext}
 */
function AddressInstance(version, payload, accountSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    city: payload.city, // jshint ignore:line,
    customerName: payload.customer_name, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    isoCountry: payload.iso_country, // jshint ignore:line,
    postalCode: payload.postal_code, // jshint ignore:line,
    region: payload.region, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    street: payload.street, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(AddressInstance.prototype, InstanceResource.prototype);
AddressInstance.prototype.constructor = AddressInstance;

Object.defineProperty(AddressInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new AddressContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(AddressInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(AddressInstance.prototype,
  'city', {
  get: function() {
    return this._properties.city;
  },
});

Object.defineProperty(AddressInstance.prototype,
  'customerName', {
  get: function() {
    return this._properties.customerName;
  },
});

Object.defineProperty(AddressInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(AddressInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(AddressInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(AddressInstance.prototype,
  'isoCountry', {
  get: function() {
    return this._properties.isoCountry;
  },
});

Object.defineProperty(AddressInstance.prototype,
  'postalCode', {
  get: function() {
    return this._properties.postalCode;
  },
});

Object.defineProperty(AddressInstance.prototype,
  'region', {
  get: function() {
    return this._properties.region;
  },
});

Object.defineProperty(AddressInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(AddressInstance.prototype,
  'street', {
  get: function() {
    return this._properties.street;
  },
});

Object.defineProperty(AddressInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Deletes the AddressInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
AddressInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};

/**
 * Fetch a AddressInstance
 *
 * @returns Fetched AddressInstance
 */
AddressInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Update the AddressInstance
 *
 * @param string [opts.friendlyName] - The friendly_name
 * @param string [opts.customerName] - The customer_name
 * @param string [opts.street] - The street
 * @param string [opts.city] - The city
 * @param string [opts.region] - The region
 * @param string [opts.postalCode] - The postal_code
 *
 * @returns Updated AddressInstance
 */
AddressInstance.prototype.update = function update(opts) {
  return this._proxy.update(
    opts
  );
};

/**
 * Access the dependentPhoneNumbers
 *
 * @returns dependentPhoneNumbers
 */
AddressInstance.prototype.dependentPhoneNumbers = function
    dependentPhoneNumbers() {
  return this._proxy.dependentPhoneNumbers;
};


/**
 * Initialize the AddressContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - The sid
 *
 * @returns {AddressContext}
 */
function AddressContext(version, accountSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Addresses/<%= sid %>.json' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._dependentPhoneNumbers = undefined;
}

_.extend(AddressContext.prototype, InstanceContext.prototype);
AddressContext.prototype.constructor = AddressContext;

/**
 * Deletes the AddressInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
AddressContext.prototype.remove = function remove() {
  return this._version.remove(this._uri);
};

/**
 * Fetch a AddressInstance
 *
 * @returns Fetched AddressInstance
 */
AddressContext.prototype.fetch = function fetch() {
  var version = this._version;
  var solution = this._solution;
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new AddressInstance(
      version,
      payload,
      solution.accountSid,
      solution.sid
    );
  });

  return promise;
};

/**
 * Update the AddressInstance
 *
 * @param string [opts.friendlyName] - The friendly_name
 * @param string [opts.customerName] - The customer_name
 * @param string [opts.street] - The street
 * @param string [opts.city] - The city
 * @param string [opts.region] - The region
 * @param string [opts.postalCode] - The postal_code
 *
 * @returns Updated AddressInstance
 */
AddressContext.prototype.update = function update(opts) {
  var version = this._version;
  var solution = this._solution;

  opts = opts || {};
  var data = values.of({
    'FriendlyName': opts.friendlyName || values.unset,
    'CustomerName': opts.customerName || values.unset,
    'Street': opts.street || values.unset,
    'City': opts.city || values.unset,
    'Region': opts.region || values.unset,
    'PostalCode': opts.postalCode || values.unset,
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  promise = promise.then(function(payload) {
    return new AddressInstance(
      version,
      payload,
      solution.accountSid,
      solution.sid
    );
  });

  return promise;
};

Object.defineProperty(AddressContext.prototype,
  'dependentPhoneNumbers', {
  get: function() {
    if (!this._dependentPhoneNumbers) {
      this._dependentPhoneNumbers = new DependentPhoneNumberList(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }
    return this._dependentPhoneNumbers;
  },
});

module.exports = {
  AddressList: AddressList,
  AddressInstance: AddressInstance,
  AddressContext: AddressContext
};
