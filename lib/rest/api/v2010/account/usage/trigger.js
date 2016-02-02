'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var Page = require('../../../../../base/Page');
var deserialize = require('../../../../../base/deserialize');
var values = require('../../../../../base/values');

var TriggerPage;
var TriggerList;
var TriggerInstance;
var TriggerContext;

/**
 * Initialize the TriggerPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns TriggerPage
 */
function TriggerPage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(TriggerPage.prototype, Page.prototype);
TriggerPage.prototype.constructor = TriggerPage;

/**
 * Build an instance of TriggerInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns TriggerInstance
 */
TriggerPage.prototype.getInstance = function getInstance(payload) {
  return new TriggerInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/**
 * Initialize the TriggerList
 *
 * @param {Version} version - Version that contains the resource
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns TriggerList
 */
function TriggerList(version, accountSid) {
  function TriggerListInstance(sid) {
    return TriggerListInstance.get(sid);
  }

  TriggerListInstance._version = version;
  // Path Solution
  TriggerListInstance._solution = {
    accountSid: accountSid
  };
  TriggerListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Usage/Triggers.json' // jshint ignore:line
  )(TriggerListInstance._solution);
  /**
   * Create a new TriggerInstance
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {string} opts.callbackUrl -
   *          URL Twilio will request when the trigger fires
   * @param {string} opts.triggerValue - the value at which the trigger will fire
   * @param {trigger.usage_category} opts.usageCategory -
   *          The usage category the trigger watches
   * @param {string} [opts.callbackMethod] - HTTP method to use with callback_url
   * @param {string} [opts.friendlyName] -
   *          A user-specified, human-readable name for the trigger.
   * @param {trigger.recurring} [opts.recurring] - How this trigger recurs
   * @param {trigger.trigger_field} [opts.triggerBy] -
   *          The field in the UsageRecord that fires the trigger
   * @param {Function} [callback] - Callback to handle created record
   *
   * @returns {Promise} Resolves to newly created TriggerInstance
   */
  TriggerListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameters callbackUrl, triggerValue, usageCategory are missing.');  // jshint ignore:line
    }
    if (_.isUndefined(opts.callbackUrl)) {
      throw new Error('Required parameter "callbackUrl" missing.');
    }
    if (_.isUndefined(opts.triggerValue)) {
      throw new Error('Required parameter "triggerValue" missing.');
    }
    if (_.isUndefined(opts.usageCategory)) {
      throw new Error('Required parameter "usageCategory" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'CallbackUrl': opts.callbackUrl,
      'TriggerValue': opts.triggerValue,
      'UsageCategory': opts.usageCategory,
      'CallbackMethod': opts.callbackMethod,
      'FriendlyName': opts.friendlyName,
      'Recurring': opts.recurring,
      'TriggerBy': opts.triggerBy
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new TriggerInstance(
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
   * Streams TriggerInstance records from the API.
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
  TriggerListInstance.each = function each(opts, callback) {
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
   * Lists TriggerInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {trigger.recurring} [opts.recurring] - Filter by recurring
   * @param {trigger.trigger_field} [opts.triggerBy] - Filter by trigger by
   * @param {trigger.usage_category} [opts.usageCategory] - Filter by Usage Category
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
  TriggerListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of TriggerInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {trigger.recurring} [opts.recurring] - Filter by recurring
   * @param {trigger.trigger_field} [opts.triggerBy] - Filter by trigger by
   * @param {trigger.usage_category} [opts.usageCategory] - Filter by Usage Category
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {Function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  TriggerListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Recurring': opts.recurring,
      'TriggerBy': opts.triggerBy,
      'UsageCategory': opts.usageCategory,
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
      deferred.resolve(new TriggerPage(
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
   * Constructs a TriggerContext
   *
   * @param {string} sid - Fetch by unique usage-trigger Sid
   *
   * @returns TriggerContext
   */
  TriggerListInstance.get = function get(sid) {
    return new TriggerContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return TriggerListInstance;
}


/**
 * Initialize the TriggerContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique usage-trigger Sid
 *
 * @returns {TriggerContext}
 */
function TriggerInstance(version, payload, accountSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    apiVersion: payload.api_version, // jshint ignore:line,
    callbackMethod: payload.callback_method, // jshint ignore:line,
    callbackUrl: payload.callback_url, // jshint ignore:line,
    currentValue: payload.current_value, // jshint ignore:line,
    dateCreated: deserialize.rfc2822DateTime(payload.date_created), // jshint ignore:line,
    dateFired: deserialize.rfc2822DateTime(payload.date_fired), // jshint ignore:line,
    dateUpdated: deserialize.rfc2822DateTime(payload.date_updated), // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    recurring: payload.recurring, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    triggerBy: payload.trigger_by, // jshint ignore:line,
    triggerValue: payload.trigger_value, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
    usageCategory: payload.usage_category, // jshint ignore:line,
    usageRecordUri: payload.usage_record_uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(TriggerInstance.prototype, InstanceResource.prototype);
TriggerInstance.prototype.constructor = TriggerInstance;

Object.defineProperty(TriggerInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new TriggerContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'callbackMethod', {
  get: function() {
    return this._properties.callbackMethod;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'callbackUrl', {
  get: function() {
    return this._properties.callbackUrl;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'currentValue', {
  get: function() {
    return this._properties.currentValue;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'dateFired', {
  get: function() {
    return this._properties.dateFired;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'recurring', {
  get: function() {
    return this._properties.recurring;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'triggerBy', {
  get: function() {
    return this._properties.triggerBy;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'triggerValue', {
  get: function() {
    return this._properties.triggerValue;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'usageCategory', {
  get: function() {
    return this._properties.usageCategory;
  },
});

Object.defineProperty(TriggerInstance.prototype,
  'usageRecordUri', {
  get: function() {
    return this._properties.usageRecordUri;
  },
});

/**
 * Fetch a TriggerInstance
 *
 * @param {Function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched TriggerInstance
 */
TriggerInstance.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new TriggerInstance(
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
 * Update the TriggerInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {string} [opts.callbackMethod] - HTTP method to use with callback_url
 * @param {string} [opts.callbackUrl] -
 *          URL Twilio will request when the trigger fires
 * @param {string} [opts.friendlyName] -
 *          A user-specified, human-readable name for the trigger.
 * @param {Function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated TriggerInstance
 */
TriggerInstance.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'CallbackMethod': opts.callbackMethod,
    'CallbackUrl': opts.callbackUrl,
    'FriendlyName': opts.friendlyName
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new TriggerInstance(
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
 * Deletes the TriggerInstance
 *
 * @param {Function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
TriggerInstance.prototype.remove = function remove(callback) {
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
 * Initialize the TriggerContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique usage-trigger Sid
 *
 * @returns {TriggerContext}
 */
function TriggerContext(version, accountSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Usage/Triggers/<%= sid %>.json' // jshint ignore:line
  )(this._solution);
}

_.extend(TriggerContext.prototype, InstanceContext.prototype);
TriggerContext.prototype.constructor = TriggerContext;

/**
 * Fetch a TriggerInstance
 *
 * @param {Function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched TriggerInstance
 */
TriggerContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new TriggerInstance(
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
 * Update the TriggerInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {string} [opts.callbackMethod] - HTTP method to use with callback_url
 * @param {string} [opts.callbackUrl] -
 *          URL Twilio will request when the trigger fires
 * @param {string} [opts.friendlyName] -
 *          A user-specified, human-readable name for the trigger.
 * @param {Function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated TriggerInstance
 */
TriggerContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'CallbackMethod': opts.callbackMethod,
    'CallbackUrl': opts.callbackUrl,
    'FriendlyName': opts.friendlyName
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new TriggerInstance(
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
 * Deletes the TriggerInstance
 *
 * @param {Function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
TriggerContext.prototype.remove = function remove(callback) {
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

module.exports = {
  TriggerPage: TriggerPage,
  TriggerList: TriggerList,
  TriggerInstance: TriggerInstance,
  TriggerContext: TriggerContext
};
