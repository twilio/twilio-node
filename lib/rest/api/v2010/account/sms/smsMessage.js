'use strict';

var _ = require('lodash');
var Q = require('q');
var Page = require('../../../../../base/Page');
var deserialize = require('../../../../../base/deserialize');
var serialize = require('../../../../../base/serialize');
var values = require('../../../../../base/values');

var SmsMessagePage;
var SmsMessageList;
var SmsMessageInstance;
var SmsMessageContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.SmsContext.SmsMessagePage
 * @augments Page
 * @description Initialize the SmsMessagePage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns SmsMessagePage
 */
/* jshint ignore:end */
function SmsMessagePage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(SmsMessagePage.prototype, Page.prototype);
SmsMessagePage.prototype.constructor = SmsMessagePage;

/* jshint ignore:start */
/**
 * Build an instance of SmsMessageInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.SmsContext.SmsMessagePage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns SmsMessageInstance
 */
/* jshint ignore:end */
SmsMessagePage.prototype.getInstance = function getInstance(payload) {
  return new SmsMessageInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.SmsContext.SmsMessageList
 * @description Initialize the SmsMessageList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 */
/* jshint ignore:end */
function SmsMessageList(version, accountSid) {
  /* jshint ignore:start */
  /**
   * @function messages
   * @memberof Twilio.Api.V2010.AccountContext.SmsContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.SmsContext.SmsMessageContext}
   */
  /* jshint ignore:end */
  function SmsMessageListInstance(sid) {
    return SmsMessageListInstance.get(sid);
  }

  SmsMessageListInstance._version = version;
  // Path Solution
  SmsMessageListInstance._solution = {
    accountSid: accountSid
  };
  SmsMessageListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/SMS/Messages.json' // jshint ignore:line
  )(SmsMessageListInstance._solution);
  /* jshint ignore:start */
  /**
   * create a SmsMessageInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.SmsContext.SmsMessageList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.to - The to
   * @param {string} opts.from - The from
   * @param {string} [opts.statusCallback] - The status_callback
   * @param {string} [opts.applicationSid] - The application_sid
   * @param {string} [opts.body] - The body
   * @param {string} [opts.mediaUrl] - The media_url
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed SmsMessageInstance
   */
  /* jshint ignore:end */
  SmsMessageListInstance.create = function create(opts, callback) {
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
      deferred.resolve(new SmsMessageInstance(
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
   * Streams SmsMessageInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.SmsContext.SmsMessageList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.to] - The to
   * @param {string} [opts.from] - The from
   * @param {Date} [opts.dateSentBefore] - The date_sent
   * @param {Date} [opts.dateSent] - The date_sent
   * @param {Date} [opts.dateSentAfter] - The date_sent
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
  SmsMessageListInstance.each = function each(opts, callback) {
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
   * @description Lists SmsMessageInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.SmsContext.SmsMessageList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.to] - The to
   * @param {string} [opts.from] - The from
   * @param {Date} [opts.dateSentBefore] - The date_sent
   * @param {Date} [opts.dateSent] - The date_sent
   * @param {Date} [opts.dateSentAfter] - The date_sent
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
  SmsMessageListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of SmsMessageInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.SmsContext.SmsMessageList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.to] - The to
   * @param {string} [opts.from] - The from
   * @param {Date} [opts.dateSentBefore] - The date_sent
   * @param {Date} [opts.dateSent] - The date_sent
   * @param {Date} [opts.dateSentAfter] - The date_sent
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  SmsMessageListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new SmsMessagePage(
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
   * Constructs a sms_message
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.SmsContext.SmsMessageList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Api.V2010.AccountContext.SmsContext.SmsMessageContext}
   */
  /* jshint ignore:end */
  SmsMessageListInstance.get = function get(sid) {
    return new SmsMessageContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return SmsMessageListInstance;
}


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.SmsContext.SmsMessageInstance
 * @description Initialize the SmsMessageContext
 *
 * @property {string} accountSid - The account_sid
 * @property {string} apiVersion - The api_version
 * @property {string} body - The body
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {Date} dateSent - The date_sent
 * @property {sms_message.direction} direction - The direction
 * @property {string} from - The from
 * @property {number} price - The price
 * @property {string} priceUnit - The price_unit
 * @property {string} sid - The sid
 * @property {sms_message.status} status - The status
 * @property {string} to - The to
 * @property {string} uri - The uri
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
function SmsMessageInstance(version, payload, accountSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.apiVersion = payload.api_version; // jshint ignore:line
  this.body = payload.body; // jshint ignore:line
  this.dateCreated = deserialize.rfc2822DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated); // jshint ignore:line
  this.dateSent = deserialize.rfc2822DateTime(payload.date_sent); // jshint ignore:line
  this.direction = payload.direction; // jshint ignore:line
  this.from = payload.from; // jshint ignore:line
  this.price = deserialize.decimal(payload.price); // jshint ignore:line
  this.priceUnit = payload.price_unit; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.to = payload.to; // jshint ignore:line
  this.uri = payload.uri; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this.sid,
  };
}

Object.defineProperty(SmsMessageInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new SmsMessageContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

/* jshint ignore:start */
/**
 * remove a SmsMessageInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.SmsContext.SmsMessageInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SmsMessageInstance
 */
/* jshint ignore:end */
SmsMessageInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * fetch a SmsMessageInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.SmsContext.SmsMessageInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SmsMessageInstance
 */
/* jshint ignore:end */
SmsMessageInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a SmsMessageInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.SmsContext.SmsMessageInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.body] - The body
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SmsMessageInstance
 */
/* jshint ignore:end */
SmsMessageInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.SmsContext.SmsMessageContext
 * @description Initialize the SmsMessageContext
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
function SmsMessageContext(version, accountSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/SMS/Messages/<%= sid %>.json' // jshint ignore:line
  )(this._solution);
}

/* jshint ignore:start */
/**
 * remove a SmsMessageInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.SmsContext.SmsMessageContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SmsMessageInstance
 */
/* jshint ignore:end */
SmsMessageContext.prototype.remove = function remove(callback) {
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
 * fetch a SmsMessageInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.SmsContext.SmsMessageContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SmsMessageInstance
 */
/* jshint ignore:end */
SmsMessageContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new SmsMessageInstance(
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
 * update a SmsMessageInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.SmsContext.SmsMessageContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.body] - The body
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SmsMessageInstance
 */
/* jshint ignore:end */
SmsMessageContext.prototype.update = function update(opts, callback) {
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
    deferred.resolve(new SmsMessageInstance(
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

module.exports = {
  SmsMessagePage: SmsMessagePage,
  SmsMessageList: SmsMessageList,
  SmsMessageInstance: SmsMessageInstance,
  SmsMessageContext: SmsMessageContext
};
