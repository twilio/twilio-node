'use strict';

var FeedbackList = require('./call/feedback');
var InstanceContext = require('../../../../base/InstanceContext');
var NotificationList = require('./call/notification');
var RecordingList = require('./call/recording');
var values = require('../../../../base/values');

/**
 * Initialize the CallContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Call Sid that uniquely identifies the Call to fetch
 *
 * @returns {CallContext}
 */
function CallContext(version, accountSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/Calls/<% sid %>.json', this._solution);

  // Dependents
  this._recordings = undefined;
  this._notifications = undefined;
  this._feedback = undefined;
}

Object.defineProperty(CallContext.prototype, 'recordings', {
  get: function() {
    if (!this._recordings) {
      this._recordings = new RecordingList(
        this._version,
        this._solution.accountSid,
        this._solution.callSid,
      );
    }
    return this._recordings;
  },
});

Object.defineProperty(CallContext.prototype, 'notifications', {
  get: function() {
    if (!this._notifications) {
      this._notifications = new NotificationList(
        this._version,
        this._solution.accountSid,
        this._solution.callSid,
      );
    }
    return this._notifications;
  },
});

Object.defineProperty(CallContext.prototype, 'feedback', {
  get: function() {
    if (!this._feedback) {
      this._feedback = new FeedbackList(
        this._version,
        this._solution.accountSid,
        this._solution.callSid,
      );
    }
    return this._feedback;
  },
});

/**
 * Deletes the CallInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
CallContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

/**
 * Fetch a CallInstance
 *
 * @returns Fetched CallInstance
 */
CallContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return CallInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Update the CallInstance
 *
 * @param string [opts.url] - URL that returns TwiML
 * @param string [opts.method] - HTTP method to use to fetch TwiML
 * @param call.status [opts.status] - Status to update the Call with
 * @param string [opts.fallbackUrl] - Fallback URL in case of error
 * @param string [opts.fallbackMethod] - HTTP Method to use with FallbackUrl
 * @param string [opts.statusCallback] - Status Callback URL
 * @param string [opts.statusCallbackMethod] - HTTP Method to use with StatusCallback
 *
 * @returns Updated CallInstance
 */
CallContext.prototype.update = function update(self, opts) {
  var data = values.of({
    'Url': url,
    'Method': method,
    'Status': status,
    'Fallbackurl': fallbackUrl,
    'Fallbackmethod': fallbackMethod,
    'Statuscallback': statusCallback,
    'Statuscallbackmethod': statusCallbackMethod,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return CallInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
  );
};

