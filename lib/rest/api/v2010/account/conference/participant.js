'use strict';

var _ = require('lodash');
var Q = require('q');
var Page = require('../../../../../base/Page');
var deserialize = require('../../../../../base/deserialize');
var values = require('../../../../../base/values');

var ParticipantPage;
var ParticipantList;
var ParticipantInstance;
var ParticipantContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantPage
 * @augments Page
 * @description Initialize the ParticipantPage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns ParticipantPage
 */
/* jshint ignore:end */
function ParticipantPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
}

_.extend(ParticipantPage.prototype, Page.prototype);
ParticipantPage.prototype.constructor = ParticipantPage;

/* jshint ignore:start */
/**
 * Build an instance of ParticipantInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns ParticipantInstance
 */
/* jshint ignore:end */
ParticipantPage.prototype.getInstance = function getInstance(payload) {
  return new ParticipantInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.conferenceSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantList
 * @description Initialize the ParticipantList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid - The unique sid that identifies this account
 * @param {string} conferenceSid -
 *          A string that uniquely identifies this conference
 */
/* jshint ignore:end */
function ParticipantList(version, accountSid, conferenceSid) {
  /* jshint ignore:start */
  /**
   * @function participants
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantContext}
   */
  /* jshint ignore:end */
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
  /* jshint ignore:start */
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
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.muted] - Filter by muted participants
   * @param {string} [opts.hold] - The hold
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize=50] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   * callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
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

  /* jshint ignore:start */
  /**
   * @description Lists ParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.muted] - Filter by muted participants
   * @param {string} [opts.hold] - The hold
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
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ParticipantListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
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

  /* jshint ignore:start */
  /**
   * Retrieve a single page of ParticipantInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.muted] - Filter by muted participants
   * @param {string} [opts.hold] - The hold
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ParticipantListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Muted': opts.muted,
      'Hold': opts.hold,
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
        this._solution
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

  /* jshint ignore:start */
  /**
   * Constructs a participant
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantList
   * @instance
   *
   * @param {string} callSid - The call_sid
   *
   * @returns {Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantContext}
   */
  /* jshint ignore:end */
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


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantInstance
 * @description Initialize the ParticipantContext
 *
 * @property {string} accountSid - The unique sid that identifies this account
 * @property {string} callSid - A string that uniquely identifies this call
 * @property {string} conferenceSid -
 *          A string that uniquely identifies this conference
 * @property {Date} dateCreated - The date this resource was created
 * @property {Date} dateUpdated - The date this resource was last updated
 * @property {string} endConferenceOnExit -
 *          Indicates if the endConferenceOnExit was set
 * @property {string} muted - Indicates if the participant is muted
 * @property {string} hold - The hold
 * @property {string} startConferenceOnEnter -
 *          Indicates if the startConferenceOnEnter attribute was set
 * @property {string} uri - The URI for this resource
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} conferenceSid - The string that uniquely identifies this conference
 * @param {sid} callSid - The call_sid
 */
/* jshint ignore:end */
function ParticipantInstance(version, payload, accountSid, conferenceSid,
                              callSid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.callSid = payload.call_sid; // jshint ignore:line
  this.conferenceSid = payload.conference_sid; // jshint ignore:line
  this.dateCreated = deserialize.rfc2822DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated); // jshint ignore:line
  this.endConferenceOnExit = payload.end_conference_on_exit; // jshint ignore:line
  this.muted = payload.muted; // jshint ignore:line
  this.hold = payload.hold; // jshint ignore:line
  this.startConferenceOnEnter = payload.start_conference_on_enter; // jshint ignore:line
  this.uri = payload.uri; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    conferenceSid: conferenceSid,
    callSid: callSid || this.callSid,
  };
}

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

/* jshint ignore:start */
/**
 * fetch a ParticipantInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ParticipantInstance
 */
/* jshint ignore:end */
ParticipantInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a ParticipantInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.muted] - Indicates if the participant should be muted
 * @param {string} [opts.hold] - The hold
 * @param {string} [opts.holdUrl] - The hold_url
 * @param {string} [opts.holdMethod] - The hold_method
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ParticipantInstance
 */
/* jshint ignore:end */
ParticipantInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * remove a ParticipantInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ParticipantInstance
 */
/* jshint ignore:end */
ParticipantInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantContext
 * @description Initialize the ParticipantContext
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} conferenceSid - The string that uniquely identifies this conference
 * @param {sid} callSid - The call_sid
 */
/* jshint ignore:end */
function ParticipantContext(version, accountSid, conferenceSid, callSid) {
  this._version = version;

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

/* jshint ignore:start */
/**
 * fetch a ParticipantInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ParticipantInstance
 */
/* jshint ignore:end */
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

/* jshint ignore:start */
/**
 * update a ParticipantInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.muted] - Indicates if the participant should be muted
 * @param {string} [opts.hold] - The hold
 * @param {string} [opts.holdUrl] - The hold_url
 * @param {string} [opts.holdMethod] - The hold_method
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ParticipantInstance
 */
/* jshint ignore:end */
ParticipantContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'Muted': opts.muted,
    'Hold': opts.hold,
    'HoldUrl': opts.holdUrl,
    'HoldMethod': opts.holdMethod
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

/* jshint ignore:start */
/**
 * remove a ParticipantInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ParticipantInstance
 */
/* jshint ignore:end */
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
