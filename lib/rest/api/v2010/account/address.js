'use strict';

var DependentPhoneNumberList = require('./address/dependentPhoneNumber');
var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

/**
 * Initialize the AddressContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: The sid
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
        this._solution.addressSid,
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

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return AddressInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
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

  return AddressInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
  );
};

