'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
var serialize = require(
    '../../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var MediaList;
var MediaPage;
var MediaInstance;
var MediaContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.MessageContext.MediaList
 * @description Initialize the MediaList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid - The unique sid that identifies this account
 * @param {string} messageSid - A string that uniquely identifies this message
 */
/* jshint ignore:end */
MediaList = function MediaList(version, accountSid, messageSid) {
  /* jshint ignore:start */
  /**
   * @function media
   * @memberof Twilio.Api.V2010.AccountContext.MessageContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.MessageContext.MediaContext}
   */
  /* jshint ignore:end */
  function MediaListInstance(sid) {
    return MediaListInstance.get(sid);
  }

  MediaListInstance._version = version;
  // Path Solution
  MediaListInstance._solution = {
    accountSid: accountSid,
    messageSid: messageSid
  };
  MediaListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Messages/<%= messageSid %>/Media.json' // jshint ignore:line
  )(MediaListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams MediaInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.MessageContext.MediaList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {Date} [opts.dateCreatedBefore] - Filter by date created
   * @param {Date} [opts.dateCreated] - Filter by date created
   * @param {Date} [opts.dateCreatedAfter] - Filter by date created
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
  MediaListInstance.each = function each(opts, callback) {
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
   * @description Lists MediaInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.MessageContext.MediaList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {Date} [opts.dateCreatedBefore] - Filter by date created
   * @param {Date} [opts.dateCreated] - Filter by date created
   * @param {Date} [opts.dateCreatedAfter] - Filter by date created
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
  MediaListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of MediaInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.MessageContext.MediaList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {Date} [opts.dateCreatedBefore] - Filter by date created
   * @param {Date} [opts.dateCreated] - Filter by date created
   * @param {Date} [opts.dateCreatedAfter] - Filter by date created
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  MediaListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'DateCreated<': serialize.iso8601DateTime(_.get(opts, 'dateCreatedBefore')),
      'DateCreated': serialize.iso8601DateTime(_.get(opts, 'dateCreated')),
      'DateCreated>': serialize.iso8601DateTime(_.get(opts, 'dateCreatedAfter')),
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
      deferred.resolve(new MediaPage(
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
   * Retrieve a single target page of MediaInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.MessageContext.MediaList
   * @instance
   *
   * @param {Date} [opts.dateCreatedBefore] - Filter by date created
   * @param {Date} [opts.dateCreated] - Filter by date created
   * @param {Date} [opts.dateCreatedAfter] - Filter by date created
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  MediaListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({
      method: 'GET',
      uri: targetUrl
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new MediaPage(
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
   * Constructs a media
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.MessageContext.MediaList
   * @instance
   *
   * @param {string} sid - Fetch by unique media Sid
   *
   * @returns {Twilio.Api.V2010.AccountContext.MessageContext.MediaContext}
   */
  /* jshint ignore:end */
  MediaListInstance.get = function get(sid) {
    return new MediaContext(
      this._version,
      this._solution.accountSid,
      this._solution.messageSid,
      sid
    );
  };

  return MediaListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.MessageContext.MediaPage
 * @augments Page
 * @description Initialize the MediaPage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns MediaPage
 */
/* jshint ignore:end */
MediaPage = function MediaPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(MediaPage.prototype, Page.prototype);
MediaPage.prototype.constructor = MediaPage;

/* jshint ignore:start */
/**
 * Build an instance of MediaInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.MessageContext.MediaPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns MediaInstance
 */
/* jshint ignore:end */
MediaPage.prototype.getInstance = function getInstance(payload) {
  return new MediaInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.messageSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.MessageContext.MediaInstance
 * @description Initialize the MediaContext
 *
 * @property {string} accountSid - The unique sid that identifies this account
 * @property {string} contentType - The default mime-type of the media
 * @property {Date} dateCreated - The date this resource was created
 * @property {Date} dateUpdated - The date this resource was last updated
 * @property {string} parentSid -
 *          The unique id of the resource that created the media.
 * @property {string} sid - A string that uniquely identifies this media
 * @property {string} uri - The URI for this resource
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} messageSid - The message_sid
 * @param {sid} sid - Fetch by unique media Sid
 */
/* jshint ignore:end */
MediaInstance = function MediaInstance(version, payload, accountSid, messageSid,
                                        sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.contentType = payload.content_type; // jshint ignore:line
  this.dateCreated = deserialize.rfc2822DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated); // jshint ignore:line
  this.parentSid = payload.parent_sid; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.uri = payload.uri; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    messageSid: messageSid,
    sid: sid || this.sid,
  };
};

Object.defineProperty(MediaInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new MediaContext(
        this._version,
        this._solution.accountSid,
        this._solution.messageSid,
        this._solution.sid
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * remove a MediaInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.MessageContext.MediaInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed MediaInstance
 */
/* jshint ignore:end */
MediaInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * fetch a MediaInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.MessageContext.MediaInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed MediaInstance
 */
/* jshint ignore:end */
MediaInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.MessageContext.MediaContext
 * @description Initialize the MediaContext
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} messageSid - The message_sid
 * @param {sid} sid - Fetch by unique media Sid
 */
/* jshint ignore:end */
MediaContext = function MediaContext(version, accountSid, messageSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    messageSid: messageSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Messages/<%= messageSid %>/Media/<%= sid %>.json' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * remove a MediaInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.MessageContext.MediaContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed MediaInstance
 */
/* jshint ignore:end */
MediaContext.prototype.remove = function remove(callback) {
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

/* jshint ignore:start */
/**
 * fetch a MediaInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.MessageContext.MediaContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed MediaInstance
 */
/* jshint ignore:end */
MediaContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new MediaInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.messageSid,
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
  MediaList: MediaList,
  MediaPage: MediaPage,
  MediaInstance: MediaInstance,
  MediaContext: MediaContext
};
