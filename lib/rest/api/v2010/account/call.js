'use strict';

var _ = require('lodash');
var FeedbackList = require('./call/feedback');
var Instance = require('../../../../base');
var InstanceContext = require('../../../../base/InstanceContext');
var NotificationList = require('./call/notification');
var RecordingList = require('./call/recording');
var values = require('../../../../base/values');

/**
 * Initialize the CallContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Call Sid that uniquely identifies the Call to fetch
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
        this._solution.callSid
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
        this._solution.callSid
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
        this._solution.callSid
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

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new CallInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid,
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
    'Url': opts.url,
    'Method': opts.method,
    'Status': opts.status,
    'Fallbackurl': opts.fallbackUrl,
    'Fallbackmethod': opts.fallbackMethod,
    'Statuscallback': opts.statusCallback,
    'Statuscallbackmethod': opts.statusCallbackMethod,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return new CallInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
};


function CallInstance() {
}

Object.defineProperty(CallInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new CallContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(CallInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(CallInstance.prototype, 'annotation', {
  get: function() {
    return this._properties.annotation;
  },
});

Object.defineProperty(CallInstance.prototype, 'answeredBy', {
  get: function() {
    return this._properties.answeredBy;
  },
});

Object.defineProperty(CallInstance.prototype, 'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(CallInstance.prototype, 'callerName', {
  get: function() {
    return this._properties.callerName;
  },
});

Object.defineProperty(CallInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(CallInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(CallInstance.prototype, 'direction', {
  get: function() {
    return this._properties.direction;
  },
});

Object.defineProperty(CallInstance.prototype, 'duration', {
  get: function() {
    return this._properties.duration;
  },
});

Object.defineProperty(CallInstance.prototype, 'endTime', {
  get: function() {
    return this._properties.endTime;
  },
});

Object.defineProperty(CallInstance.prototype, 'forwardedFrom', {
  get: function() {
    return this._properties.forwardedFrom;
  },
});

Object.defineProperty(CallInstance.prototype, 'from', {
  get: function() {
    return this._properties.from;
  },
});

Object.defineProperty(CallInstance.prototype, 'fromFormatted', {
  get: function() {
    return this._properties.fromFormatted;
  },
});

Object.defineProperty(CallInstance.prototype, 'groupSid', {
  get: function() {
    return this._properties.groupSid;
  },
});

Object.defineProperty(CallInstance.prototype, 'parentCallSid', {
  get: function() {
    return this._properties.parentCallSid;
  },
});

Object.defineProperty(CallInstance.prototype, 'phoneNumberSid', {
  get: function() {
    return this._properties.phoneNumberSid;
  },
});

Object.defineProperty(CallInstance.prototype, 'price', {
  get: function() {
    return this._properties.price;
  },
});

Object.defineProperty(CallInstance.prototype, 'priceUnit', {
  get: function() {
    return this._properties.priceUnit;
  },
});

Object.defineProperty(CallInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(CallInstance.prototype, 'startTime', {
  get: function() {
    return this._properties.startTime;
  },
});

Object.defineProperty(CallInstance.prototype, 'status', {
  get: function() {
    return this._properties.status;
  },
});

Object.defineProperty(CallInstance.prototype, 'subresourceUris', {
  get: function() {
    return this._properties.subresourceUris;
  },
});

Object.defineProperty(CallInstance.prototype, 'to', {
  get: function() {
    return this._properties.to;
  },
});

Object.defineProperty(CallInstance.prototype, 'toFormatted', {
  get: function() {
    return this._properties.toFormatted;
  },
});

Object.defineProperty(CallInstance.prototype, 'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Initialize the CallContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Call Sid that uniquely identifies the Call to fetch
 *
 * @returns {CallContext}
 */
CallInstance.prototype.CallInstance = function CallInstance(version, payload,
                                                             accountSid, sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid,
      annotation: payload.annotation,
      answeredBy: payload.answered_by,
      apiVersion: payload.api_version,
      callerName: payload.caller_name,
      dateCreated: payload.date_created,
      dateUpdated: payload.date_updated,
      direction: payload.direction,
      duration: payload.duration,
      endTime: payload.end_time,
      forwardedFrom: payload.forwarded_from,
      from: payload.from,
      fromFormatted: payload.from_formatted,
      groupSid: payload.group_sid,
      parentCallSid: payload.parent_call_sid,
      phoneNumberSid: payload.phone_number_sid,
      price: payload.price,
      priceUnit: payload.price_unit,
      sid: payload.sid,
      startTime: payload.start_time,
      status: payload.status,
      subresourceUris: payload.subresource_uris,
      to: payload.to,
      toFormatted: payload.to_formatted,
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
 * Deletes the CallInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
CallInstance.prototype.delete = function delete(self) {
  return this._proxy.delete();
};

/**
 * Fetch a CallInstance
 *
 * @returns Fetched CallInstance
 */
CallInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
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
CallInstance.prototype.update = function update(self, opts) {
  return this._proxy.update(
    opts
  );
};

/**
 * Access the recordings
 *
 * @returns recordings
 */
CallInstance.prototype.recordings = function recordings() {
  return this._proxy.recordings;
};

/**
 * Access the notifications
 *
 * @returns notifications
 */
CallInstance.prototype.notifications = function notifications() {
  return this._proxy.notifications;
};

/**
 * Access the feedback
 *
 * @returns feedback
 */
CallInstance.prototype.feedback = function feedback() {
  return this._proxy.feedback;
};

