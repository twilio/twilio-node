'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var MediaList = require('./message/media').MediaList;
var Page = require('../../../../base/Page');
var deserialize = require('../../../../base/deserialize');
var serialize = require('../../../../base/serialize');
var values = require('../../../../base/values');

var MessagePage;
var MessageList;
var MessageInstance;
var MessageContext;

/**
 * @constructor Twilio.Api.V2010.AccountContext.MessagePage
 * @augments Page
 * @description Initialize the MessagePage
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} response - Response from the API
 * @param {string} accountSid - The unique sid that identifies this account
 *
 * @returns MessagePage
 */
function MessagePage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(MessagePage.prototype, Page.prototype);
MessagePage.prototype.constructor = MessagePage;

/**
 * Build an instance of MessageInstance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns MessageInstance
 */
MessagePage.prototype.getInstance = function getInstance(payload) {
  return new MessageInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/**
 * @constructor Twilio.Api.V2010.AccountContext.MessageList
 * @description Initialize the MessageList
 *
 * @param {V2010} version - Version that contains the resource
 * @param {string} accountSid - The unique sid that identifies this account
 *
 * @returns {function} - MessageListInstance
 */
function MessageList(version, accountSid) {
  /**
   * @memberof Twilio.Api.V2010.AccountContext.MessageList
   *
   * @param {string} sid - sid of instance
   *
   * @returns MessageContext
   */
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
  /**
   * @memberof MessageList
   *
   * @description Create a new MessageInstance
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object} opts - ...
   * @param {string} opts.to - The phone number to receive the message
   * @param {string} opts.from - The phone number that initiated the message
   * @param {string} [opts.statusCallback] -
   *          URL Twilio will request when the status changes
   * @param {string} [opts.applicationSid] - The application to use for callbacks
   * @param {string} [opts.body] - The body
   * @param {string} [opts.mediaUrl] - The media_url
   * @param {function} [callback] - Callback to handle created record
   *
   * @returns {Promise} Resolves to newly created MessageInstance
   */
  MessageListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameters to, from are missing.');  // jshint ignore:line
    }
    if (_.isUndefined(opts.to)) {
      throw new Error('Required parameter "to" missing.');
    }
    if (_.isUndefined(opts.from)) {
      throw new Error('Required parameter "from" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'To': opts.to,
      'From': opts.from,
      'StatusCallback': opts.statusCallback,
      'ApplicationSid': opts.applicationSid,
      'Body': opts.body,
      'MediaUrl': opts.mediaUrl
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
        this._solution.accountSid
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
   * @memberof MessageList
   *
   * @description Streams MessageInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
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
   * @memberof MessageList
   *
   * @description Lists MessageInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
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
  MessageListInstance.list = function list(opts, callback) {
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
   * @memberof MessageList
   *
   * @description Retrieve a single page of MessageInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
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
  MessageListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'To': opts.to,
      'From': opts.from,
      'DateSent<': serialize.iso8601Date(opts.dateSentBefore),
      'DateSent': serialize.iso8601Date(opts.dateSent),
      'DateSent>': serialize.iso8601Date(opts.dateSentAfter),
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
        this._solution.accountSid
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
   * @memberof Twilio.Api.V2010.AccountContext.MessageList
   *
   * @description Constructs a MessageContext
   *
   * @param {string} sid - Fetch by unique message Sid
   *
   * @returns MessageContext
   */
  MessageListInstance.get = function get(sid) {
    return new MessageContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return MessageListInstance;
}


/**
 * @constructor Twilio.Api.V2010.AccountContext.MessageInstance
 * @augments InstanceResource
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
 * @param {V2010} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique message Sid
 */
function MessageInstance(version, payload, accountSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    apiVersion: payload.api_version, // jshint ignore:line,
    body: payload.body, // jshint ignore:line,
    dateCreated: deserialize.rfc2822DateTime(payload.date_created), // jshint ignore:line,
    dateUpdated: deserialize.rfc2822DateTime(payload.date_updated), // jshint ignore:line,
    dateSent: deserialize.rfc2822DateTime(payload.date_sent), // jshint ignore:line,
    direction: payload.direction, // jshint ignore:line,
    errorCode: deserialize.integer(payload.error_code), // jshint ignore:line,
    errorMessage: payload.error_message, // jshint ignore:line,
    from: payload.from, // jshint ignore:line,
    numMedia: payload.num_media, // jshint ignore:line,
    numSegments: payload.num_segments, // jshint ignore:line,
    price: deserialize.decimal(payload.price), // jshint ignore:line,
    priceUnit: payload.price_unit, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    status: payload.status, // jshint ignore:line,
    subresourceUris: payload.subresource_uris, // jshint ignore:line,
    to: payload.to, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(MessageInstance.prototype, InstanceResource.prototype);
MessageInstance.prototype.constructor = MessageInstance;

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
  },
});

Object.defineProperty(MessageInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(MessageInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(MessageInstance.prototype,
  'body', {
  get: function() {
    return this._properties.body;
  },
});

Object.defineProperty(MessageInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(MessageInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(MessageInstance.prototype,
  'dateSent', {
  get: function() {
    return this._properties.dateSent;
  },
});

Object.defineProperty(MessageInstance.prototype,
  'direction', {
  get: function() {
    return this._properties.direction;
  },
});

Object.defineProperty(MessageInstance.prototype,
  'errorCode', {
  get: function() {
    return this._properties.errorCode;
  },
});

Object.defineProperty(MessageInstance.prototype,
  'errorMessage', {
  get: function() {
    return this._properties.errorMessage;
  },
});

Object.defineProperty(MessageInstance.prototype,
  'from', {
  get: function() {
    return this._properties.from;
  },
});

Object.defineProperty(MessageInstance.prototype,
  'numMedia', {
  get: function() {
    return this._properties.numMedia;
  },
});

Object.defineProperty(MessageInstance.prototype,
  'numSegments', {
  get: function() {
    return this._properties.numSegments;
  },
});

Object.defineProperty(MessageInstance.prototype,
  'price', {
  get: function() {
    return this._properties.price;
  },
});

Object.defineProperty(MessageInstance.prototype,
  'priceUnit', {
  get: function() {
    return this._properties.priceUnit;
  },
});

Object.defineProperty(MessageInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(MessageInstance.prototype,
  'status', {
  get: function() {
    return this._properties.status;
  },
});

Object.defineProperty(MessageInstance.prototype,
  'subresourceUris', {
  get: function() {
    return this._properties.subresourceUris;
  },
});

Object.defineProperty(MessageInstance.prototype,
  'to', {
  get: function() {
    return this._properties.to;
  },
});

Object.defineProperty(MessageInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * @description Deletes the MessageInstance
 *
 * @param {function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
MessageInstance.prototype.remove = function remove(callback) {
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
 * @description Fetch a MessageInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched MessageInstance
 */
MessageInstance.prototype.fetch = function fetch(callback) {
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

/**
 * @description Update the MessageInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.body] - The body
 * @param {function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated MessageInstance
 */
MessageInstance.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'Body': opts.body
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

/**
 * Access the media
 *
 * @returns media
 */
MessageInstance.prototype.media = function media() {
  return this._proxy.media;
};


/**
 * @constructor Twilio.Api.V2010.AccountContext.MessageContext
 * @augments InstanceContext
 * @description Initialize the MessageContext
 *
 * @property {Twilio.Api.V2010.AccountContext.MessageContext.MediaList} media -
 *          media resource
 *
 * @param {V2010} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique message Sid
 */
function MessageContext(version, accountSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

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
}

_.extend(MessageContext.prototype, InstanceContext.prototype);
MessageContext.prototype.constructor = MessageContext;

/**
 * @description Deletes the MessageInstance
 *
 * @param {function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
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

/**
 * @description Fetch a MessageInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched MessageInstance
 */
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

/**
 * @description Update the MessageInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.body] - The body
 * @param {function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated MessageInstance
 */
MessageContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'Body': opts.body
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
  },
});

module.exports = {
  MessagePage: MessagePage,
  MessageList: MessageList,
  MessageInstance: MessageInstance,
  MessageContext: MessageContext
};
