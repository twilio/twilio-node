'use strict';

var _ = require('lodash');
var Q = require('q');
var Page = require('../../../../base/Page');
var deserialize = require('../../../../base/deserialize');
var values = require('../../../../base/values');

var InProgressPage;
var InProgressList;
var InProgressInstance;
var InProgressContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Conversations.V1.ConversationContext.InProgressPage
 * @augments Page
 * @description Initialize the InProgressPage
 *
 * @param {Twilio.Conversations.V1} version - Version of the resource
 * @param {object} response - Response from the API
 *
 * @returns InProgressPage
 */
/* jshint ignore:end */
function InProgressPage(version, response) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {};
}

_.extend(InProgressPage.prototype, Page.prototype);
InProgressPage.prototype.constructor = InProgressPage;

/* jshint ignore:start */
/**
 * Build an instance of InProgressInstance
 *
 * @function getInstance
 * @memberof Twilio.Conversations.V1.ConversationContext.InProgressPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns InProgressInstance
 */
/* jshint ignore:end */
InProgressPage.prototype.getInstance = function getInstance(payload) {
  return new InProgressInstance(
    this._version,
    payload
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Conversations.V1.ConversationContext.InProgressList
 * @description Initialize the InProgressList
 *
 * @param {Twilio.Conversations.V1} version - Version of the resource
 */
/* jshint ignore:end */
function InProgressList(version) {
  /* jshint ignore:start */
  /**
   * @function inProgress
   * @memberof Twilio.Conversations.V1.ConversationContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Conversations.V1.ConversationContext.InProgressContext}
   */
  /* jshint ignore:end */
  function InProgressListInstance(sid) {
    return InProgressListInstance.get(sid);
  }

  InProgressListInstance._version = version;
  // Path Solution
  InProgressListInstance._solution = {};
  InProgressListInstance._uri = _.template(
    '/Conversations/InProgress' // jshint ignore:line
  )(InProgressListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams InProgressInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Conversations.V1.ConversationContext.InProgressList
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
  InProgressListInstance.each = function each(opts, callback) {
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
   * @description Lists InProgressInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Conversations.V1.ConversationContext.InProgressList
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
  InProgressListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of InProgressInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Conversations.V1.ConversationContext.InProgressList
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
  InProgressListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new InProgressPage(
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

  return InProgressListInstance;
}


/* jshint ignore:start */
/**
 * @constructor Twilio.Conversations.V1.ConversationContext.InProgressInstance
 * @description Initialize the InProgressContext
 *
 * @property {string} sid - The sid
 * @property {in_progress.status} status - The status
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
function InProgressInstance(version, payload) {
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
  InProgressPage: InProgressPage,
  InProgressList: InProgressList,
  InProgressInstance: InProgressInstance,
  InProgressContext: InProgressContext
};
