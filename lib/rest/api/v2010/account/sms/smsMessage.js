'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var Page = require('../../../../../base/Page');
var deserialize = require('../../../../../base/deserialize');
var serialize = require('../../../../../base/serialize');
var values = require('../../../../../base/values');

var SmsMessagePage;
var SmsMessageList;
var SmsMessageInstance;
var SmsMessageContext;

/**
 * Initialize the SmsMessagePage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns SmsMessagePage
 */
function SmsMessagePage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(SmsMessagePage.prototype, Page.prototype);
SmsMessagePage.prototype.constructor = SmsMessagePage;

/**
 * Build an instance of SmsMessageInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns SmsMessageInstance
 */
SmsMessagePage.prototype.getInstance = function getInstance(payload) {
  return new SmsMessageInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/**
 * Initialize the SmsMessageList
 *
 * @param {Version} version - Version that contains the resource
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns SmsMessageList
 */
function SmsMessageList(version, accountSid) {
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
  /**
   * Create a new SmsMessageInstance
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {string} opts.to - The to
   * @param {string} opts.from - The from
   * @param {string} [opts.statusCallback] - The status_callback
   * @param {string} [opts.applicationSid] - The application_sid
   * @param {string} [opts.body] - The body
   * @param {string} [opts.mediaUrl] - The media_url
   * @param {Function} [callback] - Callback to handle created record
   *
   * @returns {Promise} Resolves to newly created SmsMessageInstance
   */
  SmsMessageListInstance.create = function create(opts, callback) {
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
      deferred.resolve(new SmsMessageInstance(
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
   * Streams SmsMessageInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
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

  /**
   * Lists SmsMessageInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
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
   * @param {Function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  SmsMessageListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of SmsMessageInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {string} [opts.to] - The to
   * @param {string} [opts.from] - The from
   * @param {Date} [opts.dateSentBefore] - The date_sent
   * @param {Date} [opts.dateSent] - The date_sent
   * @param {Date} [opts.dateSentAfter] - The date_sent
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {Function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
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
   * Constructs a SmsMessageContext
   *
   * @param {string} sid - The sid
   *
   * @returns SmsMessageContext
   */
  SmsMessageListInstance.get = function get(sid) {
    return new SmsMessageContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return SmsMessageListInstance;
}


/**
 * Initialize the SmsMessageContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - The sid
 *
 * @returns {SmsMessageContext}
 */
function SmsMessageInstance(version, payload, accountSid, sid) {
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
    from: payload.from, // jshint ignore:line,
    price: deserialize.decimal(payload.price), // jshint ignore:line,
    priceUnit: payload.price_unit, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    status: payload.status, // jshint ignore:line,
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

_.extend(SmsMessageInstance.prototype, InstanceResource.prototype);
SmsMessageInstance.prototype.constructor = SmsMessageInstance;

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

Object.defineProperty(SmsMessageInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'body', {
  get: function() {
    return this._properties.body;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'dateSent', {
  get: function() {
    return this._properties.dateSent;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'direction', {
  get: function() {
    return this._properties.direction;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'from', {
  get: function() {
    return this._properties.from;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'price', {
  get: function() {
    return this._properties.price;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'priceUnit', {
  get: function() {
    return this._properties.priceUnit;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'status', {
  get: function() {
    return this._properties.status;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'to', {
  get: function() {
    return this._properties.to;
  },
});

Object.defineProperty(SmsMessageInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Deletes the SmsMessageInstance
 *
 * @param {Function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
SmsMessageInstance.prototype.remove = function remove(callback) {
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
 * Fetch a SmsMessageInstance
 *
 * @param {Function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched SmsMessageInstance
 */
SmsMessageInstance.prototype.fetch = function fetch(callback) {
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

/**
 * Update the SmsMessageInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {string} [opts.body] - The body
 * @param {Function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated SmsMessageInstance
 */
SmsMessageInstance.prototype.update = function update(opts, callback) {
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


/**
 * Initialize the SmsMessageContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - The sid
 *
 * @returns {SmsMessageContext}
 */
function SmsMessageContext(version, accountSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/SMS/Messages/<%= sid %>.json' // jshint ignore:line
  )(this._solution);
}

_.extend(SmsMessageContext.prototype, InstanceContext.prototype);
SmsMessageContext.prototype.constructor = SmsMessageContext;

/**
 * Deletes the SmsMessageInstance
 *
 * @param {Function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
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

/**
 * Fetch a SmsMessageInstance
 *
 * @param {Function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched SmsMessageInstance
 */
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

/**
 * Update the SmsMessageInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {string} [opts.body] - The body
 * @param {Function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated SmsMessageInstance
 */
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
