'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var ListResource = require('../../../../../base/ListResource');
var values = require('../../../../../base/values');

var FeedbackSummaryList;
var FeedbackSummaryInstance;
var FeedbackSummaryContext;

/**
 * Initialize the FeedbackSummaryList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The unique id of the Account responsible for creating this Call
 *
 * @returns FeedbackSummaryList
 */
function FeedbackSummaryList(version, accountSid) {
  function FeedbackSummaryListInstance(sid) {
    return FeedbackSummaryListInstance.get(sid);
  }

  FeedbackSummaryListInstance._version = version;
  // Path Solution
  FeedbackSummaryListInstance._solution = {
    accountSid: accountSid
  };
  FeedbackSummaryListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Calls/FeedbackSummary.json' // jshint ignore:line
  )(FeedbackSummaryListInstance._solution);
  /**
   * Create a new FeedbackSummaryInstance
   *
   * @param string startDate - The start_date
   * @param string endDate - The end_date
   * @param string [opts.includeSubaccounts] - The include_subaccounts
   * @param string [opts.statusCallback] - The status_callback
   * @param string [opts.statusCallbackMethod] - The status_callback_method
   *
   * @returns Newly created FeedbackSummaryInstance
   */
  FeedbackSummaryListInstance.create = function create(startDate, endDate, opts) {
    var version = this._version;

    opts = opts || {};
    var data = values.of({
      'StartDate': startDate,
      'EndDate': endDate,
      'IncludeSubaccounts': opts.includeSubaccounts || values.unset,
      'StatusCallback': opts.statusCallback || values.unset,
      'StatusCallbackMethod': opts.statusCallbackMethod || values.unset
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    promise = promise.then(function(payload) {
      return new FeedbackSummaryInstance(
        version,
        payload,
        solution.accountSid
      );
    });

    return promise;
  };

  /**
   * Constructs a FeedbackSummaryContext
   *
   * :param sid - The sid
   *
   * @returns FeedbackSummaryContext
   */
  FeedbackSummaryListInstance.get = function get(sid) {
    return new FeedbackSummaryContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return FeedbackSummaryListInstance;
}


/**
 * Initialize the FeedbackSummaryContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: The sid
 *
 * @returns {FeedbackSummaryContext}
 */
function FeedbackSummaryInstance(version, payload, accountSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    callCount: payload.call_count, // jshint ignore:line,
    callFeedbackCount: payload.call_feedback_count, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    endDate: payload.end_date, // jshint ignore:line,
    includeSubaccounts: payload.include_subaccounts, // jshint ignore:line,
    issues: payload.issues, // jshint ignore:line,
    qualityScoreAverage: payload.quality_score_average, // jshint ignore:line,
    qualityScoreMedian: payload.quality_score_median, // jshint ignore:line,
    qualityScoreStandardDeviation: payload.quality_score_standard_deviation, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    startDate: payload.start_date, // jshint ignore:line,
    status: payload.status, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(FeedbackSummaryInstance.prototype, InstanceResource.prototype);
FeedbackSummaryInstance.prototype.constructor = FeedbackSummaryInstance;

Object.defineProperty(FeedbackSummaryInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new FeedbackSummaryContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(FeedbackSummaryInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(FeedbackSummaryInstance.prototype,
  'callCount', {
  get: function() {
    return this._properties.callCount;
  },
});

Object.defineProperty(FeedbackSummaryInstance.prototype,
  'callFeedbackCount', {
  get: function() {
    return this._properties.callFeedbackCount;
  },
});

Object.defineProperty(FeedbackSummaryInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(FeedbackSummaryInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(FeedbackSummaryInstance.prototype,
  'endDate', {
  get: function() {
    return this._properties.endDate;
  },
});

Object.defineProperty(FeedbackSummaryInstance.prototype,
  'includeSubaccounts', {
  get: function() {
    return this._properties.includeSubaccounts;
  },
});

Object.defineProperty(FeedbackSummaryInstance.prototype,
  'issues', {
  get: function() {
    return this._properties.issues;
  },
});

Object.defineProperty(FeedbackSummaryInstance.prototype,
  'qualityScoreAverage', {
  get: function() {
    return this._properties.qualityScoreAverage;
  },
});

Object.defineProperty(FeedbackSummaryInstance.prototype,
  'qualityScoreMedian', {
  get: function() {
    return this._properties.qualityScoreMedian;
  },
});

Object.defineProperty(FeedbackSummaryInstance.prototype,
  'qualityScoreStandardDeviation', {
  get: function() {
    return this._properties.qualityScoreStandardDeviation;
  },
});

Object.defineProperty(FeedbackSummaryInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(FeedbackSummaryInstance.prototype,
  'startDate', {
  get: function() {
    return this._properties.startDate;
  },
});

Object.defineProperty(FeedbackSummaryInstance.prototype,
  'status', {
  get: function() {
    return this._properties.status;
  },
});

/**
 * Fetch a FeedbackSummaryInstance
 *
 * @returns Fetched FeedbackSummaryInstance
 */
FeedbackSummaryInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Deletes the FeedbackSummaryInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
FeedbackSummaryInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};


/**
 * Initialize the FeedbackSummaryContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - The sid
 *
 * @returns {FeedbackSummaryContext}
 */
function FeedbackSummaryContext(version, accountSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Calls/FeedbackSummary/<%= sid %>.json' // jshint ignore:line
  )(this._solution);
}

_.extend(FeedbackSummaryContext.prototype, InstanceContext.prototype);
FeedbackSummaryContext.prototype.constructor = FeedbackSummaryContext;

/**
 * Fetch a FeedbackSummaryInstance
 *
 * @returns Fetched FeedbackSummaryInstance
 */
FeedbackSummaryContext.prototype.fetch = function fetch() {
  var version = this._version;
  var solution = this._solution;
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new FeedbackSummaryInstance(
      version,
      payload,
      solution.accountSid,
      solution.sid
    );
  });

  return promise;
};

/**
 * Deletes the FeedbackSummaryInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
FeedbackSummaryContext.prototype.remove = function remove() {
  return this._version.remove(this._uri);
};

module.exports = {
  FeedbackSummaryList: FeedbackSummaryList,
  FeedbackSummaryInstance: FeedbackSummaryInstance,
  FeedbackSummaryContext: FeedbackSummaryContext
};
