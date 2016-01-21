'use strict';

var Q = require('q');
var _ = require('lodash');
var FeedbackList = require('./call/feedback').FeedbackList;
var FeedbackSummaryList = require('./call/feedbackSummary').FeedbackSummaryList;
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var NotificationList = require('./call/notification').NotificationList;
var Page = require('../../../../base/Page');
var RecordingList = require('./call/recording').RecordingList;
var values = require('../../../../base/values');

var CallPage;
var CallList;
var CallInstance;
var CallContext;

/**
 * Initialize the CallPage
 *
 * :param Version version: Version that contains the resource
 * :param Response response: Response from the API
 * :param accountSid: The unique id of the Account responsible for creating this Call
 *
 * @returns CallPage
 */
function CallPage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(CallPage.prototype, Page.prototype);
CallPage.prototype.constructor = CallPage;

/**
 * Build an instance of CallInstance
 *
 * :param dict payload: Payload response from the API
 *
 * @returns CallInstance
 */
CallPage.prototype.getInstance = function getInstance(payload) {
  return new CallInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/**
 * Initialize the CallList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The unique id of the Account responsible for creating this Call
 *
 * @returns CallList
 */
function CallList(version, accountSid) {
  function CallListInstance(sid) {
    return CallListInstance.get(sid);
  }

  CallListInstance._version = version;
  // Path Solution
  CallListInstance._solution = {
    accountSid: accountSid
  };
  CallListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Calls.json' // jshint ignore:line
  )(CallListInstance._solution);

  // Components
  CallListInstance._feedbackSummaries = undefined;

  /**
   * Create a new CallInstance
   *
   * @param string to - Phone number, SIP address or client identifier to call
   * @param string from - Twilio number from which to originate the call
   * @param string [opts.method] - HTTP method to use to fetch TwiML
   * @param string [opts.fallbackUrl] - Fallback URL in case of error
   * @param string [opts.fallbackMethod] - HTTP Method to use with FallbackUrl
   * @param string [opts.statusCallback] - Status Callback URL
   * @param string [opts.statusCallbackMethod] -
   *          HTTP Method to use with StatusCallback
   * @param string [opts.sendDigits] - Digits to send
   * @param string [opts.ifMachine] -
   *          Action to take if a machine has answered the call
   * @param string [opts.timeout] - Number of seconds to wait for an answer
   * @param string [opts.record] - Whether or not to record the Call
   * @param string [opts.url] - Url from which to fetch TwiML
   * @param string [opts.applicationSid] -
   *          ApplicationSid that configures from where to fetch TwiML
   *
   * @returns Newly created CallInstance
   */
  CallListInstance.create = function create(to, from, opts) {
    opts = opts || {};
    var data = values.of({
      'To': to,
      'From': from,
      'Method': opts.method,
      'FallbackUrl': opts.fallbackUrl,
      'FallbackMethod': opts.fallbackMethod,
      'StatusCallback': opts.statusCallback,
      'StatusCallbackMethod': opts.statusCallbackMethod,
      'SendDigits': opts.sendDigits,
      'IfMachine': opts.ifMachine,
      'Timeout': opts.timeout,
      'Record': opts.record,
      'Url': opts.url,
      'ApplicationSid': opts.applicationSid
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    promise = promise.then(function(payload) {
      return new CallInstance(
        this._version,
        payload,
        this._solution.accountSid
      );
    }.bind(this));

    return promise;
  };

  /**
   * Streams CallInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.to] - Phone number or Client identifier to filter `to` on
   * @param string [opts.from] -
   *          Phone number or Client identifier to filter `from` on
   * @param string [opts.parentCallSid] - Parent Call Sid to filter on
   * @param call.status [opts.status] - Status to filter on
   * @param string [opts.startTimeBefore] - StartTime to filter on
   * @param string [opts.startTime] - StartTime to filter on
   * @param string [opts.startTimeAfter] - StartTime to filter on
   * @param string [opts.endTimeBefore] - EndTime to filter on
   * @param string [opts.endTime] - EndTime to filter on
   * @param string [opts.endTimeAfter] - EndTime to filter on
   * @param {Function} opts.callback - A callback function to process records
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
   */
  CallListInstance.stream = function stream(opts) {
    if (!(opts && 'callback' in opts)) {
      throw new Error('opts.callback parameter required');
    }

    var currentPage = 1;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var deferred = Q.defer();
    function fetchNextPage(fn) {
      var promise = fn();

      promise.then(function(page) {
        if (_.isEmpty(page.instances)) {
          deferred.resolve();
        }

        _.each(page.instances, opts.callback);

        if ((limits.pageLimit && limits.pageLimit <= currentPage)) {
          deferred.resolve();
        } else {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(deferred.reject);
    }

    fetchNextPage(_.bind(this.page, this, opts));

    return deferred.promise;
  };

  /**
   * Lists CallInstance records from the API as a list.
   *
   * @param string [opts.to] - Phone number or Client identifier to filter `to` on
   * @param string [opts.from] -
   *          Phone number or Client identifier to filter `from` on
   * @param string [opts.parentCallSid] - Parent Call Sid to filter on
   * @param call.status [opts.status] - Status to filter on
   * @param string [opts.startTimeBefore] - StartTime to filter on
   * @param string [opts.startTime] - StartTime to filter on
   * @param string [opts.startTimeAfter] - StartTime to filter on
   * @param string [opts.endTimeBefore] - EndTime to filter on
   * @param string [opts.endTime] - EndTime to filter on
   * @param string [opts.endTimeAfter] - EndTime to filter on
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
  CallListInstance.list = function list(opts) {
    opts = opts || {};

    var allResources = [];
    opts.callback = function(resource) {
      allResources.push(resource);
    };

    var promise = this.stream(opts);
    promise = promise.then(function() {
      return allResources;
    });

    return promise;
  };

  /**
   * Retrieve a single page of CallInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.to] - Phone number or Client identifier to filter `to` on
   * @param string [opts.from] -
   *          Phone number or Client identifier to filter `from` on
   * @param string [opts.parentCallSid] - Parent Call Sid to filter on
   * @param call.status [opts.status] - Status to filter on
   * @param string [opts.startTimeBefore] - StartTime to filter on
   * @param string [opts.startTime] - StartTime to filter on
   * @param string [opts.startTimeAfter] - StartTime to filter on
   * @param string [opts.endTimeBefore] - EndTime to filter on
   * @param string [opts.endTime] - EndTime to filter on
   * @param string [opts.endTimeAfter] - EndTime to filter on
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of CallInstance
   */
  CallListInstance.page = function page(opts) {
    opts = opts || {};
    var params = values.of({
      'To': opts.to,
      'From': opts.from,
      'ParentCallSid': opts.parentCallSid,
      'Status': opts.status,
      'StartTime<': opts.starttimebefore,
      'StartTime': opts.startTime,
      'StartTime>': opts.starttimeafter,
      'EndTime<': opts.endtimebefore,
      'EndTime': opts.endTime,
      'EndTime>': opts.endtimeafter,
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = version.page(
      'GET',
      this._uri,
      { params: params }
    );

    promise = promise.then(function(response) {
      return new CallPage(
        this._version,
        response,
        this._solution.accountSid
      );
    }.bind(this));

    return promise;
  };

  Object.defineProperty(CallListInstance,
    'feedbackSummaries', {
    get: function feedbackSummaries() {
      if (!this._feedbackSummaries) {
        this._feedbackSummaries = new FeedbackSummaryList(
          this._version,
          this._solution.accountSid
        );
      }

      return this._feedbackSummaries;
    },
  });

  /**
   * Constructs a CallContext
   *
   * :param sid - Call Sid that uniquely identifies the Call to fetch
   *
   * @returns CallContext
   */
  CallListInstance.get = function get(sid) {
    return new CallContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return CallListInstance;
}


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
    '/Accounts/<%= accountSid %>/Calls/<%= sid %>.json' // jshint ignore:line
  )(this._solution);

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
  return this._version.remove({
    method: 'DELETE',
    uri: this._uri
  });
};

/**
 * Fetch a CallInstance
 *
 * @returns Fetched CallInstance
 */
CallContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new CallInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.sid
    );
  }.bind(this));

  return promise;
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
  opts = opts || {};
  var data = values.of({
    'Url': opts.url,
    'Method': opts.method,
    'Status': opts.status,
    'FallbackUrl': opts.fallbackUrl,
    'FallbackMethod': opts.fallbackMethod,
    'StatusCallback': opts.statusCallback,
    'StatusCallbackMethod': opts.statusCallbackMethod,
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  promise = promise.then(function(payload) {
    return new CallInstance(
      this.version,
      payload,
      this._solution.accountSid,
      this._solution.sid
    );
  }.bind(this));

  return promise;
};

Object.defineProperty(CallContext.prototype,
  'recordings', {
  get: function() {
    if (!this._recordings) {
      this._recordings = new RecordingList(
        this._version,
        this._solution.accountSid,
        this._solution.sid
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
        this._solution.sid
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
        this._solution.sid
      );
    }
    return this._feedback;
  },
});

module.exports = {
  CallPage: CallPage,
  CallList: CallList,
  CallInstance: CallInstance,
  CallContext: CallContext
};
