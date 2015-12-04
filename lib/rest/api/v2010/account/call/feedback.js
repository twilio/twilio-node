'use strict';

var _ = require('lodash');
var Instance = require('../../../../../base');
var InstanceContext = require('../../../../../base/InstanceContext');
var values = require('../../../../../base/values');

/**
 * Initialize the FeedbackContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} callSid - The call sid that uniquely identifies the call
 *
 * @returns {FeedbackContext}
 */
function FeedbackContext(version, accountSid, callSid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    callSid: callSid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/Calls/<% call_sid %>/Feedback.json', this._solution);
}

/**
 * Create a new FeedbackInstance
 *
 * @param string qualityScore - The quality_score
 * @param feedback.issues [opts.issue] - The issue
 *
 * @returns Newly created FeedbackInstance
 */
FeedbackContext.prototype.create = function create(self, qualityScore, opts) {
  var data = values.of({
    'Qualityscore': qualityScore,
    'Issue': opts.issue,
  });

  var payload = this._version.create(
    'POST',
    self._uri,
    data=data,
  );

  return FeedbackInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.callSid,
  );
};

/**
 * Fetch a FeedbackInstance
 *
 * @returns Fetched FeedbackInstance
 */
FeedbackContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new FeedbackInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.callSid,
  );
};

/**
 * Update the FeedbackInstance
 *
 * @param string qualityScore - An integer from 1 to 5
 * @param feedback.issues [opts.issue] - Issues experienced during the call
 *
 * @returns Updated FeedbackInstance
 */
FeedbackContext.prototype.update = function update(self, qualityScore, opts) {
  var data = values.of({
    'Qualityscore': qualityScore,
    'Issue': opts.issue,
  });

  data.uri = this._uri;
  data.method = 'POST';

  var payload = this._version.update(data);

  return new FeedbackInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.callSid
  );
};


function FeedbackInstance() {
}

Object.defineProperty(FeedbackInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new FeedbackContext(
        this._version,
        this._solution.accountSid,
        this._solution.callSid
      );
    }

    return this._context;
  },
});

Object.defineProperty(FeedbackInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(FeedbackInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(FeedbackInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(FeedbackInstance.prototype, 'issues', {
  get: function() {
    return this._properties.issues;
  },
});

Object.defineProperty(FeedbackInstance.prototype, 'qualityScore', {
  get: function() {
    return this._properties.qualityScore;
  },
});

Object.defineProperty(FeedbackInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

/**
 * Initialize the FeedbackContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} callSid: The call sid that uniquely identifies the call
 *
 * @returns {FeedbackContext}
 */
FeedbackInstance.prototype.FeedbackInstance = function FeedbackInstance(version,
    payload, accountSid, callSid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid // jshint ignore:line,
      dateCreated: payload.date_created // jshint ignore:line,
      dateUpdated: payload.date_updated // jshint ignore:line,
      issues: payload.issues // jshint ignore:line,
      qualityScore: payload.quality_score // jshint ignore:line,
      sid: payload.sid // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    callSid: callSid,
  };
};

/**
 * Create a new FeedbackInstance
 *
 * @param string qualityScore - The quality_score
 * @param feedback.issues [opts.issue] - The issue
 *
 * @returns Newly created FeedbackInstance
 */
FeedbackInstance.prototype.create = function create(self, qualityScore, opts) {
  return this._proxy.create(
    qualityScore,
    opts
  );
};

/**
 * Fetch a FeedbackInstance
 *
 * @returns Fetched FeedbackInstance
 */
FeedbackInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
};

/**
 * Update the FeedbackInstance
 *
 * @param string qualityScore - An integer from 1 to 5
 * @param feedback.issues [opts.issue] - Issues experienced during the call
 *
 * @returns Updated FeedbackInstance
 */
FeedbackInstance.prototype.update = function update(self, qualityScore, opts) {
  return this._proxy.update(
    qualityScore,
    opts
  );
};

