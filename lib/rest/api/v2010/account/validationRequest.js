'use strict';

var ListResource = require('../../../../base/ListResource');
var values = require('../../../../base/values');

var ValidationRequestList;
var ValidationRequestInstance;
var ValidationRequestContext;

/**
 * Initialize the ValidationRequestList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The account_sid
 *
 * @returns ValidationRequestList
 */
function ValidationRequestList(version, accountSid) {
  function ValidationRequestListInstance() {
  }

  // Path Solution
  ValidationRequestListInstance._solution = {
    accountSid: accountSid,
  };
  ValidationRequestListInstance._uri = _.template(
    '/Accounts/{account_sid}/OutgoingCallerIds.json',
    this._solution
  );
  /**
   * Create a new ValidationRequestInstance
   *
   * @param string phoneNumber - The phone_number
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.callDelay] - The call_delay
   * @param string [opts.extension] - The extension
   * @param string [opts.statusCallback] - The status_callback
   * @param string [opts.statusCallbackMethod] - The status_callback_method
   *
   * @returns Newly created ValidationRequestInstance
   */
  ValidationRequestListInstance.create = function create(phoneNumber, opts) {
    var data = values.of({
      'Phonenumber': phoneNumber,
      'Friendlyname': opts.friendlyName,
      'Calldelay': opts.callDelay,
      'Extension': opts.extension,
      'Statuscallback': opts.statusCallback,
      'Statuscallbackmethod': opts.statusCallbackMethod,
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new ValidationRequestInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  };

  return ValidationRequestListInstance;
}

module.exports = {
  ValidationRequestList: ValidationRequestList,
  ValidationRequestInstance: ValidationRequestInstance,
  ValidationRequestContext: ValidationRequestContext
};
