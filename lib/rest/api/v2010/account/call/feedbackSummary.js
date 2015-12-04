'use strict';

var _ = require('lodash');
var Instance = require('../../../../../base');
var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

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
  this._uri = _.template('/Accounts/<% account_sid %>/Calls/FeedbackSummary/<% sid %>.json', this._solution);
}

/**
 * Fetch a FeedbackSummaryInstance
 *
 * @returns Fetched FeedbackSummaryInstance
 */
FeedbackSummaryContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new FeedbackSummaryInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid,
  );
};

/**
 * Deletes the FeedbackSummaryInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
FeedbackSummaryContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};


function FeedbackSummaryInstance() {
}

Object.defineProperty(FeedbackSummaryInstance.prototype, '_proxy', {
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

Object.defineProperty(FeedbackSummaryInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(FeedbackSummaryInstance.prototype, 'callCount', {
  get: function() {
    return this._properties.callCount;
  },
});

Object.defineProperty(FeedbackSummaryInstance.prototype, 'callFeedbackCount', {
  get: function() {
    return this._properties.callFeedbackCount;
  },
});

Object.defineProperty(FeedbackSummaryInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(FeedbackSummaryInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(FeedbackSummaryInstance.prototype, 'endDate', {
  get: function() {
    return this._properties.endDate;
  },
});

Object.defineProperty(FeedbackSummaryInstance.prototype, 'includeSubaccounts', {
  get: function() {
    return this._properties.includeSubaccounts;
  },
});

Object.defineProperty(FeedbackSummaryInstance.prototype, 'issues', {
  get: function() {
    return this._properties.issues;
  },
});

Object.defineProperty(FeedbackSummaryInstance.prototype, 'qualityScoreAverage', {
  get: function() {
    return this._properties.qualityScoreAverage;
  },
});

Object.defineProperty(FeedbackSummaryInstance.prototype, 'qualityScoreMedian', {
  get: function() {
    return this._properties.qualityScoreMedian;
  },
});

Object.defineProperty(FeedbackSummaryInstance.prototype, 'qualityScoreStandardDeviation', {
  get: function() {
    return this._properties.qualityScoreStandardDeviation;
  },
});

Object.defineProperty(FeedbackSummaryInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(FeedbackSummaryInstance.prototype, 'startDate', {
  get: function() {
    return this._properties.startDate;
  },
});

Object.defineProperty(FeedbackSummaryInstance.prototype, 'status', {
  get: function() {
    return this._properties.status;
  },
});

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
FeedbackSummaryInstance.prototype.FeedbackSummaryInstance = function
    FeedbackSummaryInstance(version, payload, accountSid, sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid // jshint ignore:line,
      callCount: payload.call_count // jshint ignore:line,
      callFeedbackCount: payload.call_feedback_count // jshint ignore:line,
      dateCreated: payload.date_created // jshint ignore:line,
      dateUpdated: payload.date_updated // jshint ignore:line,
      endDate: payload.end_date // jshint ignore:line,
      includeSubaccounts: payload.include_subaccounts // jshint ignore:line,
      issues: payload.issues // jshint ignore:line,
      qualityScoreAverage: payload.quality_score_average // jshint ignore:line,
      qualityScoreMedian: payload.quality_score_median // jshint ignore:line,
      qualityScoreStandardDeviation: payload.quality_score_standard_deviation // jshint ignore:line,
      sid: payload.sid // jshint ignore:line,
      startDate: payload.start_date // jshint ignore:line,
      status: payload.status // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
};

/**
 * Fetch a FeedbackSummaryInstance
 *
 * @returns Fetched FeedbackSummaryInstance
 */
FeedbackSummaryInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
};

/**
 * Deletes the FeedbackSummaryInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
FeedbackSummaryInstance.prototype.delete = function delete(self) {
  return this._proxy.delete();
};

