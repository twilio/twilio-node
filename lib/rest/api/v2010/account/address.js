'use strict';

var _ = require('lodash');
var DependentPhoneNumberList = require('./address/dependentPhoneNumber');
var Instance = require('../../../../base');
var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

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
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/Addresses/<% sid %>.json', this._solution);

  // Dependents
  this._dependentPhoneNumbers = undefined;
}

Object.defineProperty(AddressContext.prototype, 'dependentPhoneNumbers', {
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

/**
 * Deletes the AddressInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
AddressContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

/**
 * Fetch a AddressInstance
 *
 * @returns Fetched AddressInstance
 */
AddressContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new AddressInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid,
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
AddressContext.prototype.update = function update(self, opts) {
  var data = values.of({
    'Friendlyname': friendlyName,
    'Customername': customerName,
    'Street': street,
    'City': city,
    'Region': region,
    'Postalcode': postalCode,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return new AddressInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
};


function AddressInstance() {
}

Object.defineProperty(AddressInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new AddressContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._context;
  },
});

Object.defineProperty(AddressInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(AddressInstance.prototype, 'city', {
  get: function() {
    return this._properties.city;
  },
});

Object.defineProperty(AddressInstance.prototype, 'customerName', {
  get: function() {
    return this._properties.customerName;
  },
});

Object.defineProperty(AddressInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(AddressInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(AddressInstance.prototype, 'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(AddressInstance.prototype, 'isoCountry', {
  get: function() {
    return this._properties.isoCountry;
  },
});

Object.defineProperty(AddressInstance.prototype, 'postalCode', {
  get: function() {
    return this._properties.postalCode;
  },
});

Object.defineProperty(AddressInstance.prototype, 'region', {
  get: function() {
    return this._properties.region;
  },
});

Object.defineProperty(AddressInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(AddressInstance.prototype, 'street', {
  get: function() {
    return this._properties.street;
  },
});

Object.defineProperty(AddressInstance.prototype, 'uri', {
  get: function() {
    return this._properties.uri;
  },
});

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
AddressInstance.prototype.AddressInstance = function AddressInstance(version,
    payload, accountSid, sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid,
      city: payload.city,
      customerName: payload.customer_name,
      dateCreated: payload.date_created,
      dateUpdated: payload.date_updated,
      friendlyName: payload.friendly_name,
      isoCountry: payload.iso_country,
      postalCode: payload.postal_code,
      region: payload.region,
      sid: payload.sid,
      street: payload.street,
      uri: payload.uri,
  };

  // Context
  this._context = None;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
};

/**
 * Deletes the AddressInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
AddressInstance.prototype.delete = function delete(self) {
  return this._proxy.delete();
};

/**
 * Fetch a AddressInstance
 *
 * @returns Fetched AddressInstance
 */
AddressInstance.prototype.fetch = function fetch(self) {
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
AddressInstance.prototype.update = function update(self, opts) {
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

