'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var UserChannelList;
var UserChannelPage;
var UserChannelInstance;

/* jshint ignore:start */
/**
 * @constructor Twilio.Chat.V2.ServiceContext.UserContext.UserChannelList
 * @description Initialize the UserChannelList
 *
 * @param {Twilio.Chat.V2} version - Version of the resource
 * @param {string} serviceSid - The service_sid
 * @param {string} userSid - The sid
 */
/* jshint ignore:end */
UserChannelList = function UserChannelList(version, serviceSid, userSid) {
  /* jshint ignore:start */
  /**
   * @function userChannels
   * @memberof Twilio.Chat.V2.ServiceContext.UserContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Chat.V2.ServiceContext.UserContext.UserChannelContext}
   */
  /* jshint ignore:end */
  function UserChannelListInstance(sid) {
    return UserChannelListInstance.get(sid);
  }

  UserChannelListInstance._version = version;
  // Path Solution
  UserChannelListInstance._solution = {
    serviceSid: serviceSid,
    userSid: userSid
  };
  UserChannelListInstance._uri = _.template(
    '/Services/<%= serviceSid %>/Users/<%= userSid %>/Channels' // jshint ignore:line
  )(UserChannelListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams UserChannelInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Chat.V2.ServiceContext.UserContext.UserChannelList
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
  UserChannelListInstance.each = function each(opts, callback) {
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
    var currentResource = 0;
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
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
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

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };

  /* jshint ignore:start */
  /**
   * @description Lists UserChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Chat.V2.ServiceContext.UserContext.UserChannelList
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
  UserChannelListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of UserChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Chat.V2.ServiceContext.UserContext.UserChannelList
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
  UserChannelListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new UserChannelPage(
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
   * Retrieve a single target page of UserChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Chat.V2.ServiceContext.UserContext.UserChannelList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  UserChannelListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({
      method: 'GET',
      uri: targetUrl
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new UserChannelPage(
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

  return UserChannelListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Chat.V2.ServiceContext.UserContext.UserChannelPage
 * @augments Page
 * @description Initialize the UserChannelPage
 *
 * @param {Twilio.Chat.V2} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns UserChannelPage
 */
/* jshint ignore:end */
UserChannelPage = function UserChannelPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(UserChannelPage.prototype, Page.prototype);
UserChannelPage.prototype.constructor = UserChannelPage;

/* jshint ignore:start */
/**
 * Build an instance of UserChannelInstance
 *
 * @function getInstance
 * @memberof Twilio.Chat.V2.ServiceContext.UserContext.UserChannelPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns UserChannelInstance
 */
/* jshint ignore:end */
UserChannelPage.prototype.getInstance = function getInstance(payload) {
  return new UserChannelInstance(
    this._version,
    payload,
    this._solution.serviceSid,
    this._solution.userSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Chat.V2.ServiceContext.UserContext.UserChannelInstance
 * @description Initialize the UserChannelContext
 *
 * @property {string} accountSid - The account_sid
 * @property {string} serviceSid - The service_sid
 * @property {string} channelSid - The channel_sid
 * @property {string} memberSid - The member_sid
 * @property {user_channel.channel_status} status - The status
 * @property {number} lastConsumedMessageIndex - The last_consumed_message_index
 * @property {number} unreadMessagesCount - The unread_messages_count
 * @property {string} links - The links
 *
 * @param {Twilio.Chat.V2} version - Version of the resource
 * @param {object} payload - The instance payload
 */
/* jshint ignore:end */
UserChannelInstance = function UserChannelInstance(version, payload, serviceSid,
                                                    userSid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.serviceSid = payload.service_sid; // jshint ignore:line
  this.channelSid = payload.channel_sid; // jshint ignore:line
  this.memberSid = payload.member_sid; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.lastConsumedMessageIndex = deserialize.integer(payload.last_consumed_message_index); // jshint ignore:line
  this.unreadMessagesCount = deserialize.integer(payload.unread_messages_count); // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    serviceSid: serviceSid,
    userSid: userSid,
  };
};

module.exports = {
  UserChannelList: UserChannelList,
  UserChannelPage: UserChannelPage,
  UserChannelInstance: UserChannelInstance
};
