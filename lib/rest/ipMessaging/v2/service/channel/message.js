'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var MessageList;
var MessagePage;
var MessageInstance;
var MessageContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessageList
 * @description Initialize the MessageList
 *
 * @param {Twilio.IpMessaging.V2} version - Version of the resource
 * @param {string} serviceSid - The service_sid
 * @param {string} channelSid - The channel_sid
 */
/* jshint ignore:end */
MessageList = function MessageList(version, serviceSid, channelSid) {
  /* jshint ignore:start */
  /**
   * @function messages
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessageContext}
   */
  /* jshint ignore:end */
  function MessageListInstance(sid) {
    return MessageListInstance.get(sid);
  }

  MessageListInstance._version = version;
  // Path Solution
  MessageListInstance._solution = {
    serviceSid: serviceSid,
    channelSid: channelSid
  };
  MessageListInstance._uri = _.template(
    '/Services/<%= serviceSid %>/Channels/<%= channelSid %>/Messages' // jshint ignore:line
  )(MessageListInstance._solution);
  /* jshint ignore:start */
  /**
   * create a MessageInstance
   *
   * @function create
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessageList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.body - The body
   * @param {string} [opts.from] - The from
   * @param {string} [opts.attributes] - The attributes
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed MessageInstance
   */
  /* jshint ignore:end */
  MessageListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.body)) {
      throw new Error('Required parameter "opts.body" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'Body': _.get(opts, 'body'),
      'From': _.get(opts, 'from'),
      'Attributes': _.get(opts, 'attributes')
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
        this._solution.serviceSid,
        this._solution.channelSid,
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
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessageList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {message.order_type} [opts.order] - The order
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
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessageList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {message.order_type} [opts.order] - The order
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
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessageList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {message.order_type} [opts.order] - The order
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
      'Order': _.get(opts, 'order'),
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
   * Constructs a message
   *
   * @function get
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessageList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessageContext}
   */
  /* jshint ignore:end */
  MessageListInstance.get = function get(sid) {
    return new MessageContext(
      this._version,
      this._solution.serviceSid,
      this._solution.channelSid,
      sid
    );
  };

  return MessageListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessagePage
 * @augments Page
 * @description Initialize the MessagePage
 *
 * @param {Twilio.IpMessaging.V2} version - Version of the resource
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
 * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessagePage
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
    this._solution.serviceSid,
    this._solution.channelSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessageInstance
 * @description Initialize the MessageContext
 *
 * @property {string} sid - The sid
 * @property {string} accountSid - The account_sid
 * @property {string} attributes - The attributes
 * @property {string} serviceSid - The service_sid
 * @property {string} to - The to
 * @property {string} channelSid - The channel_sid
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} wasEdited - The was_edited
 * @property {string} from - The from
 * @property {string} body - The body
 * @property {number} index - The index
 * @property {string} url - The url
 *
 * @param {Twilio.IpMessaging.V2} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} serviceSid - The service_sid
 * @param {sid} channelSid - The channel_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
MessageInstance = function MessageInstance(version, payload, serviceSid,
                                            channelSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.attributes = payload.attributes; // jshint ignore:line
  this.serviceSid = payload.service_sid; // jshint ignore:line
  this.to = payload.to; // jshint ignore:line
  this.channelSid = payload.channel_sid; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.wasEdited = payload.was_edited; // jshint ignore:line
  this.from = payload.from; // jshint ignore:line
  this.body = payload.body; // jshint ignore:line
  this.index = deserialize.integer(payload.index); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    serviceSid: serviceSid,
    channelSid: channelSid,
    sid: sid || this.sid,
  };
};

Object.defineProperty(MessageInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new MessageContext(
        this._version,
        this._solution.serviceSid,
        this._solution.channelSid,
        this._solution.sid
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a MessageInstance
 *
 * @function fetch
 * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessageInstance
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
 * remove a MessageInstance
 *
 * @function remove
 * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessageInstance
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
 * update a MessageInstance
 *
 * @function update
 * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessageInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.body] - The body
 * @param {string} [opts.attributes] - The attributes
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
 * @constructor Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessageContext
 * @description Initialize the MessageContext
 *
 * @param {Twilio.IpMessaging.V2} version - Version of the resource
 * @param {sid} serviceSid - The service_sid
 * @param {sid} channelSid - The channel_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
MessageContext = function MessageContext(version, serviceSid, channelSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    serviceSid: serviceSid,
    channelSid: channelSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Services/<%= serviceSid %>/Channels/<%= channelSid %>/Messages/<%= sid %>' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a MessageInstance
 *
 * @function fetch
 * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessageContext
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
      this._solution.serviceSid,
      this._solution.channelSid,
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
 * remove a MessageInstance
 *
 * @function remove
 * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessageContext
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
 * update a MessageInstance
 *
 * @function update
 * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.MessageContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.body] - The body
 * @param {string} [opts.attributes] - The attributes
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed MessageInstance
 */
/* jshint ignore:end */
MessageContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'Body': _.get(opts, 'body'),
    'Attributes': _.get(opts, 'attributes')
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
      this._solution.serviceSid,
      this._solution.channelSid,
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
  MessageList: MessageList,
  MessagePage: MessagePage,
  MessageInstance: MessageInstance,
  MessageContext: MessageContext
};
