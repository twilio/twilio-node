'use strict';

var _ = require('lodash');
var DependentPhoneNumberList = require('./address/dependentPhoneNumber');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var values = require('../../../../base/values');

var AddressList;
var AddressInstance;
var AddressContext;

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
    '/Accounts/<% account_sid %>/Addresses/<% sid %>.json', // jshint ignore:line
    this._solution
  );

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
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new AddressInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
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
  var data = values.of({
    'Friendlyname': opts.friendlyName,
    'Customername': opts.customerName,
    'Street': opts.street,
    'City': opts.city,
    'Region': opts.region,
    'Postalcode': opts.postalCode,
  });

  var payload = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  return new AddressInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
};

Object.defineProperty(AddressContext.prototype,
  'dependentPhoneNumbers', {
  get: function() {
    if (!this._dependentPhoneNumbers) {
      this._dependentPhoneNumbers = new DependentPhoneNumberList(
        this._version,
        this._solution.accountSid,
        this._solution.addressSid
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
