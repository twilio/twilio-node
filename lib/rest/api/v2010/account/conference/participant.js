'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var Page = require('../../../../../base/Page');
var deserialize = require('../../../../../base/deserialize');
var values = require('../../../../../base/values');

var ParticipantPage;
var ParticipantList;
var ParticipantInstance;
var ParticipantContext;

/**
 * Initialize the ParticipantPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 * @param {string} accountSid - The unique sid that identifies this account
 * @param {string} conferenceSid -
 *          A string that uniquely identifies this conference
 *
 * @returns ParticipantPage
 */
function ParticipantPage(version, response, accountSid, conferenceSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    conferenceSid: conferenceSid
  };
}

_.extend(ParticipantPage.prototype, Page.prototype);
ParticipantPage.prototype.constructor = ParticipantPage;

/**
 * Build an instance of ParticipantInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns ParticipantInstance
 */
ParticipantPage.prototype.getInstance = function getInstance(payload) {
  return new ParticipantInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.conferenceSid
  );
};


/**
 * Initialize the ParticipantList
 *
 * @param {Version} version - Version that contains the resource
 * @param {string} accountSid - The unique sid that identifies this account
 * @param {string} conferenceSid -
 *          A string that uniquely identifies this conference
 *
 * @returns ParticipantList
 */
function ParticipantList(version, accountSid, conferenceSid) {
  function ParticipantListInstance(sid) {
    return ParticipantListInstance.get(sid);
  }

  ParticipantListInstance._version = version;
  // Path Solution
  ParticipantListInstance._solution = {
    accountSid: accountSid,
    conferenceSid: conferenceSid
  };
  ParticipantListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Conferences/<%= conferenceSid %>/Participants.json' // jshint ignore:line
  )(ParticipantListInstance._solution);
  /**
   * Streams ParticipantInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
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
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   * callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  ParticipantListInstance.each = function each(opts, callback) {
    opts = opts || {};
    if (_.isFunction(opts)) {
      opts = { callback: opts };
    } else if (_.isFunction(callback) && !_.isFunction(opts.callback)) {
      opts.callback = callback;
    }

    if (_.isUndefined(opts.callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done) {
            return false;
          }

          opts.callback(instance, onComplete);
        });

        if ((limits.pageLimit && limits.pageLimit <= currentPage)) {
          onComplete();
        } else if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, opts));
  };

  /**
   * Lists ParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {string} [opts.muted] - Filter by muted participants
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
   * @param {Function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  ParticipantListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource) {
      allResources.push(resource);
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };

  /**
   * Retrieve a single page of ParticipantInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {string} [opts.muted] - Filter by muted participants
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {Function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  ParticipantListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Muted': opts.muted,
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({
      uri: this._uri,
      method: 'GET',
      params: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new ParticipantPage(
        this._version,
        payload,
        this._solution.accountSid,
        this._solution.conferenceSid
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
   * Constructs a ParticipantContext
   *
   * @param {string} callSid - The call_sid
   *
   * @returns ParticipantContext
   */
  ParticipantListInstance.get = function get(callSid) {
    return new ParticipantContext(
      this._version,
      this._solution.accountSid,
      this._solution.conferenceSid,
      callSid
    );
  };

  return ParticipantListInstance;
}


/**
 * Initialize the ParticipantContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} conferenceSid - The string that uniquely identifies this conference
 * @param {sid} callSid - The call_sid
 *
 * @returns {ParticipantContext}
 */
function ParticipantInstance(version, payload, accountSid, conferenceSid,
                              callSid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    callSid: payload.call_sid, // jshint ignore:line,
    conferenceSid: payload.conference_sid, // jshint ignore:line,
    dateCreated: deserialize.rfc2822DateTime(payload.date_created), // jshint ignore:line,
    dateUpdated: deserialize.rfc2822DateTime(payload.date_updated), // jshint ignore:line,
    endConferenceOnExit: payload.end_conference_on_exit, // jshint ignore:line,
    muted: payload.muted, // jshint ignore:line,
    startConferenceOnEnter: payload.start_conference_on_enter, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    conferenceSid: conferenceSid,
    callSid: callSid || this._properties.callSid,
  };
}

_.extend(ParticipantInstance.prototype, InstanceResource.prototype);
ParticipantInstance.prototype.constructor = ParticipantInstance;

Object.defineProperty(ParticipantInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ParticipantContext(
        this._version,
        this._solution.accountSid,
        this._solution.conferenceSid,
        this._solution.callSid
      );
    }

    return this._context;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'callSid', {
  get: function() {
    return this._properties.callSid;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'conferenceSid', {
  get: function() {
    return this._properties.conferenceSid;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'endConferenceOnExit', {
  get: function() {
    return this._properties.endConferenceOnExit;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'muted', {
  get: function() {
    return this._properties.muted;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'startConferenceOnEnter', {
  get: function() {
    return this._properties.startConferenceOnEnter;
  },
});

Object.defineProperty(ParticipantInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Fetch a ParticipantInstance
 *
 * @param {Function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched ParticipantInstance
 */
ParticipantInstance.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ParticipantInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.conferenceSid,
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
 * Update the ParticipantInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {string} opts.muted - Indicates if the participant should be muted
 * @param {Function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated ParticipantInstance
 */
ParticipantInstance.prototype.update = function update(opts, callback) {
  if (_.isUndefined(opts)) {
    throw new Error('Required parameters muted are missing.');  // jshint ignore:line
  }
  if (_.isUndefined(opts.muted)) {
    throw new Error('Required parameter "muted" missing.');
  }

  var deferred = Q.defer();
  var data = values.of({
    'Muted': opts.muted
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ParticipantInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.conferenceSid,
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
 * Deletes the ParticipantInstance
 *
 * @param {Function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
ParticipantInstance.prototype.remove = function remove(callback) {
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
 * Initialize the ParticipantContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} conferenceSid - The string that uniquely identifies this conference
 * @param {sid} callSid - The call_sid
 *
 * @returns {ParticipantContext}
 */
function ParticipantContext(version, accountSid, conferenceSid, callSid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    conferenceSid: conferenceSid,
    callSid: callSid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Conferences/<%= conferenceSid %>/Participants/<%= callSid %>.json' // jshint ignore:line
  )(this._solution);
}

_.extend(ParticipantContext.prototype, InstanceContext.prototype);
ParticipantContext.prototype.constructor = ParticipantContext;

/**
 * Fetch a ParticipantInstance
 *
 * @param {Function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched ParticipantInstance
 */
ParticipantContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ParticipantInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.conferenceSid,
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
 * Update the ParticipantInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {string} opts.muted - Indicates if the participant should be muted
 * @param {Function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated ParticipantInstance
 */
ParticipantContext.prototype.update = function update(opts, callback) {
  if (_.isUndefined(opts)) {
    throw new Error('Required parameters muted are missing.');  // jshint ignore:line
  }
  if (_.isUndefined(opts.muted)) {
    throw new Error('Required parameter "muted" missing.');
  }

  var deferred = Q.defer();
  var data = values.of({
    'Muted': opts.muted
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ParticipantInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.conferenceSid,
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
 * Deletes the ParticipantInstance
 *
 * @param {Function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
ParticipantContext.prototype.remove = function remove(callback) {
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
  ParticipantPage: ParticipantPage,
  ParticipantList: ParticipantList,
  ParticipantInstance: ParticipantInstance,
  ParticipantContext: ParticipantContext
};
