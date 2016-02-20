'use strict';

var _ = require('lodash');
var Q = require('q');
var Page = require('../../../../base/Page');
var deserialize = require('../../../../base/deserialize');
var values = require('../../../../base/values');

var ParticipantPage;
var ParticipantList;
var ParticipantInstance;
var ParticipantContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Conversations.V1.ConversationContext.ParticipantPage
 * @augments Page
 * @description Initialize the ParticipantPage
 *
 * @param {Twilio.Conversations.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {string} conversationSid - The conversation_sid
 *
 * @returns ParticipantPage
 */
/* jshint ignore:end */
function ParticipantPage(version, response, conversationSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    conversationSid: conversationSid
  };
}

_.extend(ParticipantPage.prototype, Page.prototype);
ParticipantPage.prototype.constructor = ParticipantPage;

/* jshint ignore:start */
/**
 * Build an instance of ParticipantInstance
 *
 * @function getInstance
 * @memberof Twilio.Conversations.V1.ConversationContext.ParticipantPage
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
    this._solution.conversationSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Conversations.V1.ConversationContext.ParticipantList
 * @description Initialize the ParticipantList
 *
 * @param {Twilio.Conversations.V1} version - Version of the resource
 * @param {string} conversationSid - The conversation_sid
 */
/* jshint ignore:end */
function ParticipantList(version, conversationSid) {
  /* jshint ignore:start */
  /**
   * @function participants
   * @memberof Twilio.Conversations.V1.ConversationContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Conversations.V1.ConversationContext.ParticipantContext}
   */
  /* jshint ignore:end */
  function ParticipantListInstance(sid) {
    return ParticipantListInstance.get(sid);
  }

  ParticipantListInstance._version = version;
  // Path Solution
  ParticipantListInstance._solution = {
    conversationSid: conversationSid
  };
  ParticipantListInstance._uri = _.template(
    '/Conversations/<%= conversationSid %>/Participants' // jshint ignore:line
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
   * @memberof Twilio.Conversations.V1.ConversationContext.ParticipantList
   * @instance
   *
   * @param {object|function} opts - ...
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
   * @memberof Twilio.Conversations.V1.ConversationContext.ParticipantList
   * @instance
   *
   * @param {object|function} opts - ...
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
   * @memberof Twilio.Conversations.V1.ConversationContext.ParticipantList
   * @instance
   *
   * @param {object|function} opts - ...
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
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
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
        this._solution.conversationSid,
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

  /* jshint ignore:start */
  /**
   * create a ParticipantInstance
   *
   * @function create
   * @memberof Twilio.Conversations.V1.ConversationContext.ParticipantList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.to - The to
   * @param {string} opts.from - The from
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed ParticipantInstance
   */
  /* jshint ignore:end */
  ParticipantListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.to)) {
      throw new Error('Required parameter "opts.to" missing.');
    }
    if (_.isUndefined(opts.from)) {
      throw new Error('Required parameter "opts.from" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'To': opts.to,
      'From': opts.from
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new ParticipantInstance(
        this._version,
        payload,
        this._solution.conversationSid,
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

  /* jshint ignore:start */
  /**
   * Constructs a participant
   *
   * @function get
   * @memberof Twilio.Conversations.V1.ConversationContext.ParticipantList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Conversations.V1.ConversationContext.ParticipantContext}
   */
  /* jshint ignore:end */
  ParticipantListInstance.get = function get(sid) {
    return new ParticipantContext(
      this._version,
      this._solution.conversationSid,
      sid
    );
  };

  return ParticipantListInstance;
}


/* jshint ignore:start */
/**
 * @constructor Twilio.Conversations.V1.ConversationContext.ParticipantInstance
 * @description Initialize the ParticipantContext
 *
 * @property {string} sid - The sid
 * @property {string} address - The address
 * @property {participant.status} status - The status
 * @property {string} conversationSid - The conversation_sid
 * @property {Date} dateCreated - The date_created
 * @property {Date} startTime - The start_time
 * @property {Date} endTime - The end_time
 * @property {number} duration - The duration
 * @property {string} accountSid - The account_sid
 * @property {string} url - The url
 *
 * @param {Twilio.Conversations.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} conversationSid - The conversation_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
function ParticipantInstance(version, payload, conversationSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.address = payload.address; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.conversationSid = payload.conversation_sid; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.startTime = deserialize.iso8601DateTime(payload.start_time); // jshint ignore:line
  this.endTime = deserialize.iso8601DateTime(payload.end_time); // jshint ignore:line
  this.duration = deserialize.integer(payload.duration); // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    conversationSid: conversationSid,
    sid: sid || this.sid,
  };
}

Object.defineProperty(ParticipantInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ParticipantContext(
        this._version,
        this._solution.conversationSid,
        this._solution.sid
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
 * @memberof Twilio.Conversations.V1.ConversationContext.ParticipantInstance
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
 * @constructor Twilio.Conversations.V1.ConversationContext.ParticipantContext
 * @description Initialize the ParticipantContext
 *
 * @param {Twilio.Conversations.V1} version - Version of the resource
 * @param {sid} conversationSid - The conversation_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
function ParticipantContext(version, conversationSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    conversationSid: conversationSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Conversations/<%= conversationSid %>/Participants/<%= sid %>' // jshint ignore:line
  )(this._solution);
}

/* jshint ignore:start */
/**
 * fetch a ParticipantInstance
 *
 * @function fetch
 * @memberof Twilio.Conversations.V1.ConversationContext.ParticipantContext
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
      this._solution.conversationSid,
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

module.exports = {
  ParticipantPage: ParticipantPage,
  ParticipantList: ParticipantList,
  ParticipantInstance: ParticipantInstance,
  ParticipantContext: ParticipantContext
};
