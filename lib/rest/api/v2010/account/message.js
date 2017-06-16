'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var FeedbackList = require('./message/feedback').FeedbackList;
var MediaList = require('./message/media').MediaList;
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var serialize = require('../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var MessageList;
var MessagePage;
var MessageInstance;
var MessageContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.MessageList
 * @description Initialize the MessageList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid - The unique sid that identifies this account
 */
/* jshint ignore:end */
MessageList = function MessageList(version, accountSid) {
  /* jshint ignore:start */
  /**
   * @function messages
   * @memberof Twilio.Api.V2010.AccountContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.MessageContext}
   */
  /* jshint ignore:end */
  function MessageListInstance(sid) {
    return MessageListInstance.get(sid);
  }

  MessageListInstance._version = version;
  // Path Solution
  MessageListInstance._solution = {
    accountSid: accountSid
  };
  MessageListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Messages.json' // jshint ignore:line
  )(MessageListInstance._solution);
  /* jshint ignore:start */
  /**
   * create a MessageInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.MessageList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.to - The phone number to receive the message
   * @param {string} [opts.statusCallback] -
   *          URL Twilio will request when the status changes
   * @param {string} [opts.applicationSid] - The application to use for callbacks
   * @param {number} [opts.maxPrice] - The max_price
   * @param {string} [opts.provideFeedback] - The provide_feedback
   * @param {number} [opts.validityPeriod] - The validity_period
   * @param {string} [opts.from] - The phone number that initiated the message
   * @param {string} [opts.messagingServiceSid] - The messaging_service_sid
   * @param {string} [opts.body] - The body
   * @param {string|list} [opts.mediaUrl] - The media_url
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed MessageInstance
   */
  /* jshint ignore:end */
  MessageListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.to)) {
      throw new Error('Required parameter "opts.to" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'To': _.get(opts, 'to'),
      'From': _.get(opts, 'from'),
      'MessagingServiceSid': _.get(opts, 'messagingServiceSid'),
      'Body': _.get(opts, 'body'),
      'MediaUrl': _.get(opts, 'mediaUrl'),
      'StatusCallback': _.get(opts, 'statusCallback'),
      'ApplicationSid': _.get(opts, 'applicationSid'),
      'MaxPrice': _.get(opts, 'maxPrice'),
      'ProvideFeedback': _.get(opts, 'provideFeedback'),
      'ValidityPeriod': _.get(opts, 'validityPeriod')
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new MessageInstance(
        this._version,
        payload,
        this._solution.accountSid,
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
   * Streams MessageInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.MessageList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.to] - Filter by messages to this number
   * @param {string} [opts.from] - Filter by from number
   * @param {Date} [opts.dateSentBefore] - Filter by date sent
   * @param {Date} [opts.dateSent] - Filter by date sent
   * @param {Date} [opts.dateSentAfter] - Filter by date sent
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
  MessageListInstance.each = function each(opts, callback) {
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
   * @description Lists MessageInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.MessageList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.to] - Filter by messages to this number
   * @param {string} [opts.from] - Filter by from number
   * @param {Date} [opts.dateSentBefore] - Filter by date sent
   * @param {Date} [opts.dateSent] - Filter by date sent
   * @param {Date} [opts.dateSentAfter] - Filter by date sent
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
  MessageListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of MessageInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.MessageList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.to] - Filter by messages to this number
   * @param {string} [opts.from] - Filter by from number
   * @param {Date} [opts.dateSentBefore] - Filter by date sent
   * @param {Date} [opts.dateSent] - Filter by date sent
   * @param {Date} [opts.dateSentAfter] - Filter by date sent
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  MessageListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'To': _.get(opts, 'to'),
      'From': _.get(opts, 'from'),
      'DateSent<': serialize.iso8601DateTime(_.get(opts, 'dateSentBefore')),
      'DateSent': serialize.iso8601DateTime(_.get(opts, 'dateSent')),
      'DateSent>': serialize.iso8601DateTime(_.get(opts, 'dateSentAfter')),
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
      deferred.resolve(new MessagePage(
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
   * Retrieve a single target page of MessageInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.MessageList
   * @instance
   *
   * @param {string} [opts.to] - Filter by messages to this number
   * @param {string} [opts.from] - Filter by from number
   * @param {Date} [opts.dateSentBefore] - Filter by date sent
   * @param {Date} [opts.dateSent] - Filter by date sent
   * @param {Date} [opts.dateSentAfter] - Filter by date sent
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  MessageListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({
      method: 'GET',
      uri: targetUrl
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new MessagePage(
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
   * Constructs a message
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.MessageList
   * @instance
   *
   * @param {string} sid - Fetch by unique message Sid
   *
   * @returns {Twilio.Api.V2010.AccountContext.MessageContext}
   */
  /* jshint ignore:end */
  MessageListInstance.get = function get(sid) {
    return new MessageContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return MessageListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.MessagePage
 * @augments Page
 * @description Initialize the MessagePage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns MessagePage
 */
/* jshint ignore:end */
MessagePage = function MessagePage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(MessagePage.prototype, Page.prototype);
MessagePage.prototype.constructor = MessagePage;

/* jshint ignore:start */
/**
 * Build an instance of MessageInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.MessagePage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns MessageInstance
 */
/* jshint ignore:end */
MessagePage.prototype.getInstance = function getInstance(payload) {
  return new MessageInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.MessageInstance
 * @description Initialize the MessageContext
 *
 * @property {string} accountSid - The unique sid that identifies this account
 * @property {string} apiVersion -
 *          The version of the Twilio API used to process the message.
 * @property {string} body -
 *          The text body of the message. Up to 1600 characters long.
 * @property {Date} dateCreated - The date this resource was created
 * @property {Date} dateUpdated - The date this resource was last updated
 * @property {Date} dateSent - The date the message was sent
 * @property {message.direction} direction - The direction of the message
 * @property {number} errorCode - The error code associated with the message
 * @property {string} errorMessage - Human readable description of the ErrorCode
 * @property {string} from - The phone number that initiated the message
 * @property {string} messagingServiceSid - The messaging_service_sid
 * @property {string} numMedia - Number of media files associated with the message
 * @property {string} numSegments -
 *          Indicates number of messages used to delivery the body
 * @property {number} price - The amount billed for the message
 * @property {string} priceUnit - The currency in which Price is measured
 * @property {string} sid - A string that uniquely identifies this message
 * @property {message.status} status - The status of this message
 * @property {string} subresourceUris - The subresource_uris
 * @property {string} to - The phone number that received the message
 * @property {string} uri - The URI for this resource
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique message Sid
 */
/* jshint ignore:end */
MessageInstance = function MessageInstance(version, payload, accountSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.apiVersion = payload.api_version; // jshint ignore:line
  this.body = payload.body; // jshint ignore:line
  this.dateCreated = deserialize.rfc2822DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated); // jshint ignore:line
  this.dateSent = deserialize.rfc2822DateTime(payload.date_sent); // jshint ignore:line
  this.direction = payload.direction; // jshint ignore:line
  this.errorCode = deserialize.integer(payload.error_code); // jshint ignore:line
  this.errorMessage = payload.error_message; // jshint ignore:line
  this.from = payload.from; // jshint ignore:line
  this.messagingServiceSid = payload.messaging_service_sid; // jshint ignore:line
  this.numMedia = payload.num_media; // jshint ignore:line
  this.numSegments = payload.num_segments; // jshint ignore:line
  this.price = deserialize.decimal(payload.price); // jshint ignore:line
  this.priceUnit = payload.price_unit; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.subresourceUris = payload.subresource_uris; // jshint ignore:line
  this.to = payload.to; // jshint ignore:line
  this.uri = payload.uri; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this.sid,
  };
};

Object.defineProperty(MessageInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new MessageContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * remove a MessageInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.MessageInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed MessageInstance
 */
/* jshint ignore:end */
MessageInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * fetch a MessageInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.MessageInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed MessageInstance
 */
/* jshint ignore:end */
MessageInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a MessageInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.MessageInstance
 * @instance
 *
 * @param {object} opts - ...
 * @param {string} opts.body - The body
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed MessageInstance
 */
/* jshint ignore:end */
MessageInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * Access the media
 *
 * @function media
 * @memberof Twilio.Api.V2010.AccountContext.MessageInstance
 * @instance
 *
 * @returns {Twilio.Api.V2010.AccountContext.MessageContext.MediaList}
 */
/* jshint ignore:end */
MessageInstance.prototype.media = function media() {
  return this._proxy.media;
};

/* jshint ignore:start */
/**
 * Access the feedback
 *
 * @function feedback
 * @memberof Twilio.Api.V2010.AccountContext.MessageInstance
 * @instance
 *
 * @returns {Twilio.Api.V2010.AccountContext.MessageContext.FeedbackList}
 */
/* jshint ignore:end */
MessageInstance.prototype.feedback = function feedback() {
  return this._proxy.feedback;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.MessageContext
 * @description Initialize the MessageContext
 *
 * @property {Twilio.Api.V2010.AccountContext.MessageContext.MediaList} media -
 *          media resource
 * @property {Twilio.Api.V2010.AccountContext.MessageContext.FeedbackList} feedback -
 *          feedback resource
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique message Sid
 */
/* jshint ignore:end */
MessageContext = function MessageContext(version, accountSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Messages/<%= sid %>.json' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._media = undefined;
  this._feedback = undefined;
};

/* jshint ignore:start */
/**
 * remove a MessageInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.MessageContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed MessageInstance
 */
/* jshint ignore:end */
MessageContext.prototype.remove = function remove(callback) {
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
 * fetch a MessageInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.MessageContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed MessageInstance
 */
/* jshint ignore:end */
MessageContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new MessageInstance(
      this._version,
      payload,
      this._solution.accountSid,
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
 * update a MessageInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.MessageContext
 * @instance
 *
 * @param {object} opts - ...
 * @param {string} opts.body - The body
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed MessageInstance
 */
/* jshint ignore:end */
MessageContext.prototype.update = function update(opts, callback) {
  if (_.isUndefined(opts)) {
    throw new Error('Required parameter "opts" missing.');
  }
  if (_.isUndefined(opts.body)) {
    throw new Error('Required parameter "opts.body" missing.');
  }

  var deferred = Q.defer();
  var data = values.of({
    'Body': _.get(opts, 'body')
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new MessageInstance(
      this._version,
      payload,
      this._solution.accountSid,
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

Object.defineProperty(MessageContext.prototype,
  'media', {
  get: function() {
    if (!this._media) {
      this._media = new MediaList(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }
    return this._media;
  }
});

Object.defineProperty(MessageContext.prototype,
  'feedback', {
  get: function() {
    if (!this._feedback) {
      this._feedback = new FeedbackList(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }
    return this._feedback;
  }
});

module.exports = {
  MessageList: MessageList,
  MessagePage: MessagePage,
  MessageInstance: MessageInstance,
  MessageContext: MessageContext
};
