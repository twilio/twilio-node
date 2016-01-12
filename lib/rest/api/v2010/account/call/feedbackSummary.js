'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var values = require('../../../../../base/values');

var FeedbackSummaryList;
var FeedbackSummaryInstance;
var FeedbackSummaryContext;

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
  InstanceResource.constructor.call(this, version);

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
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<% account_sid %>/Calls/FeedbackSummary/<% sid %>.json', // jshint ignore:line
    this._solution
  );
}

_.extend(FeedbackSummaryContext.prototype, InstanceContext.prototype);
FeedbackSummaryContext.prototype.constructor = FeedbackSummaryContext;

/**
 * Fetch a FeedbackSummaryInstance
 *
 * @returns Fetched FeedbackSummaryInstance
 */
FeedbackSummaryContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new FeedbackSummaryInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
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
