'use strict';

var _ = require('lodash');
var Q = require('q');
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
 * @constructor Twilio.Api.V2010.AccountContext.CallContext.FeedbackPage
 * @augments Page
 * @description Initialize the FeedbackPage
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} response - Response from the API
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
 * @param {object} payload - Payload response from the API
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
 * @constructor Twilio.Api.V2010.AccountContext.CallContext.FeedbackList
 * @description Initialize the FeedbackList
 *
 * @param {V2010} version - Version that contains the resource
 * @param {string} accountSid - The account_sid
 * @param {string} callSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns {function} - FeedbackListInstance
 */
function FeedbackList(version, accountSid, callSid) {
  /**
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.FeedbackList
   *
   * @param {string} sid - sid of instance
   *
   * @returns FeedbackContext
   */
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
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.FeedbackList
   *
   * @description Constructs a FeedbackContext
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
 * @constructor Twilio.Api.V2010.AccountContext.CallContext.FeedbackInstance
 * @augments InstanceResource
 * @description Initialize the FeedbackContext
 *
 * @property {string} accountSid - The account_sid
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {feedback.issues} issues - The issues
 * @property {number} qualityScore - 1 to 5 quality score
 * @property {string} sid - The sid
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} callSid - The call sid that uniquely identifies the call
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
 * @memberof FeedbackList
 *
 * @description Create a new FeedbackInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {object} opts - ...
 * @param {number} opts.qualityScore - The quality_score
 * @param {feedback.issues} [opts.issue] - The issue
 * @param {function} [callback] - Callback to handle created record
 *
 * @returns {Promise} Resolves to newly created FeedbackInstance
 */
FeedbackInstance.prototype.create = function create(opts, callback) {
  if (_.isUndefined(opts)) {
    throw new Error('Required parameters qualityScore are missing.');  // jshint ignore:line
  }
  if (_.isUndefined(opts.qualityScore)) {
    throw new Error('Required parameter "qualityScore" missing.');
  }

  var deferred = Q.defer();
  var data = values.of({
    'QualityScore': opts.qualityScore,
    'Issue': opts.issue
  });

  var promise = this._version.create({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new FeedbackInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.callSid
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
 * @description Fetch a FeedbackInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched FeedbackInstance
 */
FeedbackInstance.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new FeedbackInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.callSid
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
 * @description Update the FeedbackInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {object} opts - ...
 * @param {number} opts.qualityScore - An integer from 1 to 5
 * @param {feedback.issues} [opts.issue] - Issues experienced during the call
 * @param {function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated FeedbackInstance
 */
FeedbackInstance.prototype.update = function update(opts, callback) {
  if (_.isUndefined(opts)) {
    throw new Error('Required parameters qualityScore are missing.');  // jshint ignore:line
  }
  if (_.isUndefined(opts.qualityScore)) {
    throw new Error('Required parameter "qualityScore" missing.');
  }

  var deferred = Q.defer();
  var data = values.of({
    'QualityScore': opts.qualityScore,
    'Issue': opts.issue
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new FeedbackInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.callSid
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
 * @constructor Twilio.Api.V2010.AccountContext.CallContext.FeedbackContext
 * @augments InstanceContext
 * @description Initialize the FeedbackContext
 *
 * @param {V2010} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} callSid - The call sid that uniquely identifies the call
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
 * @memberof FeedbackList
 *
 * @description Create a new FeedbackInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {object} opts - ...
 * @param {number} opts.qualityScore - The quality_score
 * @param {feedback.issues} [opts.issue] - The issue
 * @param {function} [callback] - Callback to handle created record
 *
 * @returns {Promise} Resolves to newly created FeedbackInstance
 */
FeedbackContext.prototype.create = function create(opts, callback) {
  if (_.isUndefined(opts)) {
    throw new Error('Required parameters qualityScore are missing.');  // jshint ignore:line
  }
  if (_.isUndefined(opts.qualityScore)) {
    throw new Error('Required parameter "qualityScore" missing.');
  }

  var deferred = Q.defer();
  var data = values.of({
    'QualityScore': opts.qualityScore,
    'Issue': opts.issue
  });

  var promise = this._version.create({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new FeedbackInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.callSid
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
 * @description Fetch a FeedbackInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched FeedbackInstance
 */
FeedbackContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new FeedbackInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.callSid
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
 * @description Update the FeedbackInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {object} opts - ...
 * @param {number} opts.qualityScore - An integer from 1 to 5
 * @param {feedback.issues} [opts.issue] - Issues experienced during the call
 * @param {function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated FeedbackInstance
 */
FeedbackContext.prototype.update = function update(opts, callback) {
  if (_.isUndefined(opts)) {
    throw new Error('Required parameters qualityScore are missing.');  // jshint ignore:line
  }
  if (_.isUndefined(opts.qualityScore)) {
    throw new Error('Required parameter "qualityScore" missing.');
  }

  var deferred = Q.defer();
  var data = values.of({
    'QualityScore': opts.qualityScore,
    'Issue': opts.issue
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new FeedbackInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.callSid
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

module.exports = {
  FeedbackPage: FeedbackPage,
  FeedbackList: FeedbackList,
  FeedbackInstance: FeedbackInstance,
  FeedbackContext: FeedbackContext
};
