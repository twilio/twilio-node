'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var Page = require('../../../../../base/Page');
var deserialize = require('../../../../../base/deserialize');
var serialize = require('../../../../../base/serialize');
var values = require('../../../../../base/values');

var FeedbackSummaryPage;
var FeedbackSummaryList;
var FeedbackSummaryInstance;
var FeedbackSummaryContext;

/**
 * Initialize the FeedbackSummaryPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 * @param {string} accountSid -
 *          The unique id of the Account responsible for creating this Call
 *
 * @returns FeedbackSummaryPage
 */
function FeedbackSummaryPage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(FeedbackSummaryPage.prototype, Page.prototype);
FeedbackSummaryPage.prototype.constructor = FeedbackSummaryPage;

/**
 * Build an instance of FeedbackSummaryInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns FeedbackSummaryInstance
 */
FeedbackSummaryPage.prototype.getInstance = function getInstance(payload) {
  return new FeedbackSummaryInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/**
 * Initialize the FeedbackSummaryList
 *
 * @param {Version} version - Version that contains the resource
 * @param {string} accountSid -
 *          The unique id of the Account responsible for creating this Call
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
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {Date} opts.startDate - The start_date
   * @param {Date} opts.endDate - The end_date
   * @param {string} [opts.includeSubaccounts] - The include_subaccounts
   * @param {string} [opts.statusCallback] - The status_callback
   * @param {string} [opts.statusCallbackMethod] - The status_callback_method
   * @param {Function} [callback] - Callback to handle created record
   *
   * @returns {Promise} Resolves to newly created FeedbackSummaryInstance
   */
  FeedbackSummaryListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameters startDate, endDate are missing.');  // jshint ignore:line
    }
    if (_.isUndefined(opts.startDate)) {
      throw new Error('Required parameter "startDate" missing.');
    }
    if (_.isUndefined(opts.endDate)) {
      throw new Error('Required parameter "endDate" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'StartDate': serialize.iso8601Date(opts.startDate),
      'EndDate': serialize.iso8601Date(opts.endDate),
      'IncludeSubaccounts': opts.includeSubaccounts,
      'StatusCallback': opts.statusCallback,
      'StatusCallbackMethod': opts.statusCallbackMethod
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new FeedbackSummaryInstance(
        this._version,
        payload,
        this._solution.accountSid
      ));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /**
   * Constructs a FeedbackSummaryContext
   *
   * @param {string} sid - The sid
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
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - The sid
 *
 * @returns {FeedbackSummaryContext}
 */
function FeedbackSummaryInstance(version, payload, accountSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    callCount: deserialize.integer(payload.call_count), // jshint ignore:line,
    callFeedbackCount: deserialize.integer(payload.call_feedback_count), // jshint ignore:line,
    dateCreated: deserialize.rfc2822DateTime(payload.date_created), // jshint ignore:line,
    dateUpdated: deserialize.rfc2822DateTime(payload.date_updated), // jshint ignore:line,
    endDate: deserialize.rfc2822DateTime(payload.end_date), // jshint ignore:line,
    includeSubaccounts: payload.include_subaccounts, // jshint ignore:line,
    issues: payload.issues, // jshint ignore:line,
    qualityScoreAverage: deserialize.decimal(payload.quality_score_average), // jshint ignore:line,
    qualityScoreMedian: deserialize.decimal(payload.quality_score_median), // jshint ignore:line,
    qualityScoreStandardDeviation: deserialize.decimal(payload.quality_score_standard_deviation), // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    startDate: deserialize.rfc2822DateTime(payload.start_date), // jshint ignore:line,
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
 * @param {Function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched FeedbackSummaryInstance
 */
FeedbackSummaryInstance.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new FeedbackSummaryInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.sid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/**
 * Deletes the FeedbackSummaryInstance
 *
 * @param {Function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
FeedbackSummaryInstance.prototype.remove = function remove(callback) {
  var deferred = Q.defer();
  var promise = this._version.remove({
    uri: this._uri,
    method: 'DELETE'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(payload);
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
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
 * @param {Function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched FeedbackSummaryInstance
 */
FeedbackSummaryContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new FeedbackSummaryInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.sid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/**
 * Deletes the FeedbackSummaryInstance
 *
 * @param {Function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
FeedbackSummaryContext.prototype.remove = function remove(callback) {
  var deferred = Q.defer();
  var promise = this._version.remove({
    uri: this._uri,
    method: 'DELETE'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(payload);
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

module.exports = {
  FeedbackSummaryPage: FeedbackSummaryPage,
  FeedbackSummaryList: FeedbackSummaryList,
  FeedbackSummaryInstance: FeedbackSummaryInstance,
  FeedbackSummaryContext: FeedbackSummaryContext
};
