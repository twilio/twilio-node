'use strict';

var _ = require('lodash');
var Q = require('q');
var Page = require('../../../../base/Page');
var deserialize = require('../../../../base/deserialize');
var values = require('../../../../base/values');

var CompletedPage;
var CompletedList;
var CompletedInstance;
var CompletedContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Conversations.V1.ConversationContext.CompletedPage
 * @augments Page
 * @description Initialize the CompletedPage
 *
 * @param {Twilio.Conversations.V1} version - Version of the resource
 * @param {object} response - Response from the API
 *
 * @returns CompletedPage
 */
/* jshint ignore:end */
function CompletedPage(version, response) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {};
}

_.extend(CompletedPage.prototype, Page.prototype);
CompletedPage.prototype.constructor = CompletedPage;

/* jshint ignore:start */
/**
 * Build an instance of CompletedInstance
 *
 * @function getInstance
 * @memberof Twilio.Conversations.V1.ConversationContext.CompletedPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns CompletedInstance
 */
/* jshint ignore:end */
CompletedPage.prototype.getInstance = function getInstance(payload) {
  return new CompletedInstance(
    this._version,
    payload
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Conversations.V1.ConversationContext.CompletedList
 * @description Initialize the CompletedList
 *
 * @param {Twilio.Conversations.V1} version - Version of the resource
 */
/* jshint ignore:end */
function CompletedList(version) {
  /* jshint ignore:start */
  /**
   * @function completed
   * @memberof Twilio.Conversations.V1.ConversationContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Conversations.V1.ConversationContext.CompletedContext}
   */
  /* jshint ignore:end */
  function CompletedListInstance(sid) {
    return CompletedListInstance.get(sid);
  }

  CompletedListInstance._version = version;
  // Path Solution
  CompletedListInstance._solution = {};
  CompletedListInstance._uri = _.template(
    '/Conversations/Completed' // jshint ignore:line
  )(CompletedListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams CompletedInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Conversations.V1.ConversationContext.CompletedList
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
  CompletedListInstance.each = function each(opts, callback) {
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
   * @description Lists CompletedInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Conversations.V1.ConversationContext.CompletedList
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
  CompletedListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of CompletedInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Conversations.V1.ConversationContext.CompletedList
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
  CompletedListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new CompletedPage(
        this._version,
        payload
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

  return CompletedListInstance;
}


/* jshint ignore:start */
/**
 * @constructor Twilio.Conversations.V1.ConversationContext.CompletedInstance
 * @description Initialize the CompletedContext
 *
 * @property {string} sid - The sid
 * @property {completed.status} status - The status
 * @property {number} duration - The duration
 * @property {Date} dateCreated - The date_created
 * @property {Date} startTime - The start_time
 * @property {Date} endTime - The end_time
 * @property {string} accountSid - The account_sid
 * @property {string} url - The url
 *
 * @param {Twilio.Conversations.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 */
/* jshint ignore:end */
function CompletedInstance(version, payload) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.duration = deserialize.integer(payload.duration); // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.startTime = deserialize.iso8601DateTime(payload.start_time); // jshint ignore:line
  this.endTime = deserialize.iso8601DateTime(payload.end_time); // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {};
}

module.exports = {
  CompletedPage: CompletedPage,
  CompletedList: CompletedList,
  CompletedInstance: CompletedInstance,
  CompletedContext: CompletedContext
};
