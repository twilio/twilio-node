'use strict';

var _ = require('lodash');
var FeedbackList = require('./call/feedback');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var NotificationList = require('./call/notification');
var RecordingList = require('./call/recording');
var values = require('../../../../base/values');

var CallList;
var CallInstance;
var CallContext;

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
function CallInstance(version, payload, accountSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    annotation: payload.annotation, // jshint ignore:line,
    answeredBy: payload.answered_by, // jshint ignore:line,
    apiVersion: payload.api_version, // jshint ignore:line,
    callerName: payload.caller_name, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    direction: payload.direction, // jshint ignore:line,
    duration: payload.duration, // jshint ignore:line,
    endTime: payload.end_time, // jshint ignore:line,
    forwardedFrom: payload.forwarded_from, // jshint ignore:line,
    from: payload.from, // jshint ignore:line,
    fromFormatted: payload.from_formatted, // jshint ignore:line,
    groupSid: payload.group_sid, // jshint ignore:line,
    parentCallSid: payload.parent_call_sid, // jshint ignore:line,
    phoneNumberSid: payload.phone_number_sid, // jshint ignore:line,
    price: payload.price, // jshint ignore:line,
    priceUnit: payload.price_unit, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    startTime: payload.start_time, // jshint ignore:line,
    status: payload.status, // jshint ignore:line,
    subresourceUris: payload.subresource_uris, // jshint ignore:line,
    to: payload.to, // jshint ignore:line,
    toFormatted: payload.to_formatted, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(CallInstance.prototype, InstanceResource.prototype);
CallInstance.prototype.constructor = CallInstance;

Object.defineProperty(CallInstance.prototype,
  '_proxy', {
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

Object.defineProperty(CallInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(CallInstance.prototype,
  'annotation', {
  get: function() {
    return this._properties.annotation;
  },
});

Object.defineProperty(CallInstance.prototype,
  'answeredBy', {
  get: function() {
    return this._properties.answeredBy;
  },
});

Object.defineProperty(CallInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(CallInstance.prototype,
  'callerName', {
  get: function() {
    return this._properties.callerName;
  },
});

Object.defineProperty(CallInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(CallInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(CallInstance.prototype,
  'direction', {
  get: function() {
    return this._properties.direction;
  },
});

Object.defineProperty(CallInstance.prototype,
  'duration', {
  get: function() {
    return this._properties.duration;
  },
});

Object.defineProperty(CallInstance.prototype,
  'endTime', {
  get: function() {
    return this._properties.endTime;
  },
});

Object.defineProperty(CallInstance.prototype,
  'forwardedFrom', {
  get: function() {
    return this._properties.forwardedFrom;
  },
});

Object.defineProperty(CallInstance.prototype,
  'from', {
  get: function() {
    return this._properties.from;
  },
});

Object.defineProperty(CallInstance.prototype,
  'fromFormatted', {
  get: function() {
    return this._properties.fromFormatted;
  },
});

Object.defineProperty(CallInstance.prototype,
  'groupSid', {
  get: function() {
    return this._properties.groupSid;
  },
});

Object.defineProperty(CallInstance.prototype,
  'parentCallSid', {
  get: function() {
    return this._properties.parentCallSid;
  },
});

Object.defineProperty(CallInstance.prototype,
  'phoneNumberSid', {
  get: function() {
    return this._properties.phoneNumberSid;
  },
});

Object.defineProperty(CallInstance.prototype,
  'price', {
  get: function() {
    return this._properties.price;
  },
});

Object.defineProperty(CallInstance.prototype,
  'priceUnit', {
  get: function() {
    return this._properties.priceUnit;
  },
});

Object.defineProperty(CallInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(CallInstance.prototype,
  'startTime', {
  get: function() {
    return this._properties.startTime;
  },
});

Object.defineProperty(CallInstance.prototype,
  'status', {
  get: function() {
    return this._properties.status;
  },
});

Object.defineProperty(CallInstance.prototype,
  'subresourceUris', {
  get: function() {
    return this._properties.subresourceUris;
  },
});

Object.defineProperty(CallInstance.prototype,
  'to', {
  get: function() {
    return this._properties.to;
  },
});

Object.defineProperty(CallInstance.prototype,
  'toFormatted', {
  get: function() {
    return this._properties.toFormatted;
  },
});

Object.defineProperty(CallInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Deletes the CallInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
CallInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};

/**
 * Fetch a CallInstance
 *
 * @returns Fetched CallInstance
 */
CallInstance.prototype.fetch = function fetch() {
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
 * @param string [opts.statusCallbackMethod] -
 *          HTTP Method to use with StatusCallback
 *
 * @returns Updated CallInstance
 */
CallInstance.prototype.update = function update(opts) {
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
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<% account_sid %>/Calls/<% sid %>.json', // jshint ignore:line
    this._solution
  );

  // Dependents
  this._recordings = undefined;
  this._notifications = undefined;
  this._feedback = undefined;
}

_.extend(CallContext.prototype, InstanceContext.prototype);
CallContext.prototype.constructor = CallContext;

/**
 * Deletes the CallInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
CallContext.prototype.remove = function remove() {
  return this._version.remove(this._uri);
};

/**
 * Fetch a CallInstance
 *
 * @returns Fetched CallInstance
 */
CallContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new CallInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
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
 * @param string [opts.statusCallbackMethod] -
 *          HTTP Method to use with StatusCallback
 *
 * @returns Updated CallInstance
 */
CallContext.prototype.update = function update(opts) {
  var data = values.of({
    'Url': opts.url,
    'Method': opts.method,
    'Status': opts.status,
    'Fallbackurl': opts.fallbackUrl,
    'Fallbackmethod': opts.fallbackMethod,
    'Statuscallback': opts.statusCallback,
    'Statuscallbackmethod': opts.statusCallbackMethod,
  });

  var payload = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  return new CallInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
};

Object.defineProperty(CallContext.prototype,
  'recordings', {
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

Object.defineProperty(CallContext.prototype,
  'notifications', {
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

Object.defineProperty(CallContext.prototype,
  'feedback', {
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

module.exports = {
  CallList: CallList,
  CallInstance: CallInstance,
  CallContext: CallContext
};
