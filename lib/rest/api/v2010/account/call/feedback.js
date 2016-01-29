'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var Page = require('../../../../../base/Page');
var deserialize = require('../../../../../base/deserialize');
var values = require('../../../../../base/values');

var FeedbackPage;
var FeedbackList;
var FeedbackInstance;
var FeedbackContext;

/**
 * Initialize the FeedbackPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 * @param {string} accountSid - The account_sid
 * @param {string} callSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns FeedbackPage
 */
function FeedbackPage(version, response, accountSid, callSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    callSid: callSid
  };
}

_.extend(FeedbackPage.prototype, Page.prototype);
FeedbackPage.prototype.constructor = FeedbackPage;

/**
 * Build an instance of FeedbackInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns FeedbackInstance
 */
FeedbackPage.prototype.getInstance = function getInstance(payload) {
  return new FeedbackInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.callSid
  );
};


/**
 * Initialize the FeedbackList
 *
 * @param {Version} version - Version that contains the resource
 * @param {string} accountSid - The account_sid
 * @param {string} callSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns FeedbackList
 */
function FeedbackList(version, accountSid, callSid) {
  function FeedbackListInstance(sid) {
    return FeedbackListInstance.get(sid);
  }

  FeedbackListInstance._version = version;
  // Path Solution
  FeedbackListInstance._solution = {
    accountSid: accountSid,
    callSid: callSid
  };
  /**
   * Constructs a FeedbackContext
   *
   * @returns FeedbackContext
   */
  FeedbackListInstance.get = function get() {
    return new FeedbackContext(
      this._version,
      this._solution.accountSid,
      this._solution.callSid
    );
  };

  return FeedbackListInstance;
}


/**
 * Initialize the FeedbackContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} callSid - The call sid that uniquely identifies the call
 *
 * @returns {FeedbackContext}
 */
function FeedbackInstance(version, payload, accountSid, callSid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    dateCreated: deserialize.rfc2822DateTime(payload.date_created), // jshint ignore:line,
    dateUpdated: deserialize.rfc2822DateTime(payload.date_updated), // jshint ignore:line,
    issues: payload.issues, // jshint ignore:line,
    qualityScore: deserialize.integer(payload.quality_score), // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    callSid: callSid,
  };
}

_.extend(FeedbackInstance.prototype, InstanceResource.prototype);
FeedbackInstance.prototype.constructor = FeedbackInstance;

Object.defineProperty(FeedbackInstance.prototype,
  '_proxy', {
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

Object.defineProperty(FeedbackInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(FeedbackInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(FeedbackInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(FeedbackInstance.prototype,
  'issues', {
  get: function() {
    return this._properties.issues;
  },
});

Object.defineProperty(FeedbackInstance.prototype,
  'qualityScore', {
  get: function() {
    return this._properties.qualityScore;
  },
});

Object.defineProperty(FeedbackInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

/**
 * Create a new FeedbackInstance
 *
 * @returns Newly created FeedbackInstance
 */
FeedbackInstance.prototype.create = function create(opts) {
  return this._proxy.create(
    opts
  );
};

/**
 * Fetch a FeedbackInstance
 *
 * @returns Fetched FeedbackInstance
 */
FeedbackInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Update the FeedbackInstance
 *
 * @param {string} opts.qualityScore - An integer from 1 to 5
 * @param {feedback.issues} [opts.issue] - Issues experienced during the call
 *
 * @returns Updated FeedbackInstance
 */
FeedbackInstance.prototype.update = function update(opts) {
  return this._proxy.update(
    opts
  );
};


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
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    callSid: callSid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Calls/<%= callSid %>/Feedback.json' // jshint ignore:line
  )(this._solution);
}

_.extend(FeedbackContext.prototype, InstanceContext.prototype);
FeedbackContext.prototype.constructor = FeedbackContext;

/**
 * Create a new FeedbackInstance
 *
 * @returns Newly created FeedbackInstance
 */
FeedbackContext.prototype.create = function create(opts) {
  if (_.isUndefined(opts)) {
    throw new Error('Required parameters are missing. Please provide: qualityScore.');  // jshint ignore:line
  }
  if (_.isUndefined(opts.qualityScore)) {
    throw new Error('Required parameter "qualityScore" missing.');
  }
  var data = values.of({
    'QualityScore': opts.qualityScore,
    'Issue': opts.issue
  });

  var promise = this._version.create({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  promise = promise.then(function(payload) {
    return new FeedbackInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.callSid
    );
  }.bind(this));

  return promise;
};

/**
 * Fetch a FeedbackInstance
 *
 * @returns Fetched FeedbackInstance
 */
FeedbackContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new FeedbackInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.callSid
    );
  }.bind(this));

  return promise;
};

/**
 * Update the FeedbackInstance
 *
 * @param {string} opts.qualityScore - An integer from 1 to 5
 * @param {feedback.issues} [opts.issue] - Issues experienced during the call
 *
 * @returns Updated FeedbackInstance
 */
FeedbackContext.prototype.update = function update(opts) {
  if (_.isUndefined(opts)) {
    throw new Error('Required parameters are missing. Please provide: qualityScore.');  // jshint ignore:line
  }
  if (_.isUndefined(opts.qualityScore)) {
    throw new Error('Required parameter "qualityScore" missing.');
  }
  var data = values.of({
    'QualityScore': opts.qualityScore,
    'Issue': opts.issue,
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  promise = promise.then(function(payload) {
    return new FeedbackInstance(
      this.version,
      payload,
      this._solution.accountSid,
      this._solution.callSid
    );
  }.bind(this));

  return promise;
};

module.exports = {
  FeedbackPage: FeedbackPage,
  FeedbackList: FeedbackList,
  FeedbackInstance: FeedbackInstance,
  FeedbackContext: FeedbackContext
};
