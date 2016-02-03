'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var Page = require('../../../../base/Page');
var deserialize = require('../../../../base/deserialize');
var values = require('../../../../base/values');

var ApplicationPage;
var ApplicationList;
var ApplicationInstance;
var ApplicationContext;

/**
 * @constructor Twilio.Api.V2010.AccountContext.ApplicationPage
 * @augments Page
 * @description Initialize the ApplicationPage
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} response - Response from the API
 * @param {string} accountSid - A string that uniquely identifies this resource
 *
 * @returns ApplicationPage
 */
function ApplicationPage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(ApplicationPage.prototype, Page.prototype);
ApplicationPage.prototype.constructor = ApplicationPage;

/**
 * Build an instance of ApplicationInstance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns ApplicationInstance
 */
ApplicationPage.prototype.getInstance = function getInstance(payload) {
  return new ApplicationInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/**
 * @constructor Twilio.Api.V2010.AccountContext.ApplicationList
 * @description Initialize the ApplicationList
 *
 * @param {V2010} version - Version that contains the resource
 * @param {string} accountSid - A string that uniquely identifies this resource
 *
 * @returns {function} - ApplicationListInstance
 */
function ApplicationList(version, accountSid) {
  /**
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationList
   *
   * @param {string} sid - sid of instance
   *
   * @returns ApplicationContext
   */
  function ApplicationListInstance(sid) {
    return ApplicationListInstance.get(sid);
  }

  ApplicationListInstance._version = version;
  // Path Solution
  ApplicationListInstance._solution = {
    accountSid: accountSid
  };
  ApplicationListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Applications.json' // jshint ignore:line
  )(ApplicationListInstance._solution);
  /**
   * @memberof ApplicationList
   *
   * @description Create a new ApplicationInstance
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object} opts - ...
   * @param {string} opts.friendlyName - Human readable description of this resource
   * @param {string} [opts.apiVersion] - The API version to use
   * @param {string} [opts.voiceUrl] -
   *          URL Twilio will make requests to when relieving a call
   * @param {string} [opts.voiceMethod] - HTTP method to use with the URL
   * @param {string} [opts.voiceFallbackUrl] - Fallback URL
   * @param {string} [opts.voiceFallbackMethod] -
   *          HTTP method to use with the fallback url
   * @param {string} [opts.statusCallback] - URL to hit with status updates
   * @param {string} [opts.statusCallbackMethod] -
   *          HTTP method to use with the status callback
   * @param {string} [opts.voiceCallerIdLookup] - True or False
   * @param {string} [opts.smsUrl] - URL Twilio will request when receiving an SMS
   * @param {string} [opts.smsMethod] - HTTP method to use with sms_url
   * @param {string} [opts.smsFallbackUrl] -
   *          Fallback URL if there's an error parsing TwiML
   * @param {string} [opts.smsFallbackMethod] -
   *          HTTP method to use with sms_fallback_method
   * @param {string} [opts.smsStatusCallback] -
   *          URL Twilio with request with status updates
   * @param {string} [opts.messageStatusCallback] -
   *          URL to make requests to with status updates
   * @param {function} [callback] - Callback to handle created record
   *
   * @returns {Promise} Resolves to newly created ApplicationInstance
   */
  ApplicationListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameters friendlyName are missing.');  // jshint ignore:line
    }
    if (_.isUndefined(opts.friendlyName)) {
      throw new Error('Required parameter "friendlyName" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': opts.friendlyName,
      'ApiVersion': opts.apiVersion,
      'VoiceUrl': opts.voiceUrl,
      'VoiceMethod': opts.voiceMethod,
      'VoiceFallbackUrl': opts.voiceFallbackUrl,
      'VoiceFallbackMethod': opts.voiceFallbackMethod,
      'StatusCallback': opts.statusCallback,
      'StatusCallbackMethod': opts.statusCallbackMethod,
      'VoiceCallerIdLookup': opts.voiceCallerIdLookup,
      'SmsUrl': opts.smsUrl,
      'SmsMethod': opts.smsMethod,
      'SmsFallbackUrl': opts.smsFallbackUrl,
      'SmsFallbackMethod': opts.smsFallbackMethod,
      'SmsStatusCallback': opts.smsStatusCallback,
      'MessageStatusCallback': opts.messageStatusCallback
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new ApplicationInstance(
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
   * @memberof ApplicationList
   *
   * @description Streams ApplicationInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.friendlyName] - Filter by friendly name
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
  ApplicationListInstance.each = function each(opts, callback) {
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
   * @memberof ApplicationList
   *
   * @description Lists ApplicationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.friendlyName] - Filter by friendly name
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
  ApplicationListInstance.list = function list(opts, callback) {
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
   * @memberof ApplicationList
   *
   * @description Retrieve a single page of ApplicationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.friendlyName] - Filter by friendly name
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  ApplicationListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': opts.friendlyName,
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
      deferred.resolve(new ApplicationPage(
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
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationList
   *
   * @description Constructs a ApplicationContext
   *
   * @param {string} sid - Fetch by unique Application Sid
   *
   * @returns ApplicationContext
   */
  ApplicationListInstance.get = function get(sid) {
    return new ApplicationContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return ApplicationListInstance;
}


/**
 * @constructor Twilio.Api.V2010.AccountContext.ApplicationInstance
 * @augments InstanceResource
 * @description Initialize the ApplicationContext
 *
 * @property {string} accountSid - A string that uniquely identifies this resource
 * @property {string} apiVersion - The API version to use
 * @property {Date} dateCreated - Date this resource was created
 * @property {Date} dateUpdated - Date this resource was last updated
 * @property {string} friendlyName - Human readable description of this resource
 * @property {string} messageStatusCallback -
 *          URL to make requests to with status updates
 * @property {string} sid - A string that uniquely identifies this resource
 * @property {string} smsFallbackMethod -
 *          HTTP method to use with sms_fallback_method
 * @property {string} smsFallbackUrl -
 *          Fallback URL if there's an error parsing TwiML
 * @property {string} smsMethod - HTTP method to use with sms_url
 * @property {string} smsStatusCallback -
 *          URL Twilio with request with status updates
 * @property {string} smsUrl - URL Twilio will request when receiving an SMS
 * @property {string} statusCallback - URL to hit with status updates
 * @property {string} statusCallbackMethod -
 *          HTTP method to use with the status callback
 * @property {string} uri - URI for this resource
 * @property {string} voiceCallerIdLookup - True or False
 * @property {string} voiceFallbackMethod -
 *          HTTP method to use with the fallback url
 * @property {string} voiceFallbackUrl - Fallback URL
 * @property {string} voiceMethod - HTTP method to use with the URL
 * @property {string} voiceUrl -
 *          URL Twilio will make requests to when relieving a call
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique Application Sid
 */
function ApplicationInstance(version, payload, accountSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    apiVersion: payload.api_version, // jshint ignore:line,
    dateCreated: deserialize.rfc2822DateTime(payload.date_created), // jshint ignore:line,
    dateUpdated: deserialize.rfc2822DateTime(payload.date_updated), // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    messageStatusCallback: payload.message_status_callback, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    smsFallbackMethod: payload.sms_fallback_method, // jshint ignore:line,
    smsFallbackUrl: payload.sms_fallback_url, // jshint ignore:line,
    smsMethod: payload.sms_method, // jshint ignore:line,
    smsStatusCallback: payload.sms_status_callback, // jshint ignore:line,
    smsUrl: payload.sms_url, // jshint ignore:line,
    statusCallback: payload.status_callback, // jshint ignore:line,
    statusCallbackMethod: payload.status_callback_method, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
    voiceCallerIdLookup: payload.voice_caller_id_lookup, // jshint ignore:line,
    voiceFallbackMethod: payload.voice_fallback_method, // jshint ignore:line,
    voiceFallbackUrl: payload.voice_fallback_url, // jshint ignore:line,
    voiceMethod: payload.voice_method, // jshint ignore:line,
    voiceUrl: payload.voice_url, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(ApplicationInstance.prototype, InstanceResource.prototype);
ApplicationInstance.prototype.constructor = ApplicationInstance;

Object.defineProperty(ApplicationInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ApplicationContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(ApplicationInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(ApplicationInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(ApplicationInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(ApplicationInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(ApplicationInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(ApplicationInstance.prototype,
  'messageStatusCallback', {
  get: function() {
    return this._properties.messageStatusCallback;
  },
});

Object.defineProperty(ApplicationInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(ApplicationInstance.prototype,
  'smsFallbackMethod', {
  get: function() {
    return this._properties.smsFallbackMethod;
  },
});

Object.defineProperty(ApplicationInstance.prototype,
  'smsFallbackUrl', {
  get: function() {
    return this._properties.smsFallbackUrl;
  },
});

Object.defineProperty(ApplicationInstance.prototype,
  'smsMethod', {
  get: function() {
    return this._properties.smsMethod;
  },
});

Object.defineProperty(ApplicationInstance.prototype,
  'smsStatusCallback', {
  get: function() {
    return this._properties.smsStatusCallback;
  },
});

Object.defineProperty(ApplicationInstance.prototype,
  'smsUrl', {
  get: function() {
    return this._properties.smsUrl;
  },
});

Object.defineProperty(ApplicationInstance.prototype,
  'statusCallback', {
  get: function() {
    return this._properties.statusCallback;
  },
});

Object.defineProperty(ApplicationInstance.prototype,
  'statusCallbackMethod', {
  get: function() {
    return this._properties.statusCallbackMethod;
  },
});

Object.defineProperty(ApplicationInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

Object.defineProperty(ApplicationInstance.prototype,
  'voiceCallerIdLookup', {
  get: function() {
    return this._properties.voiceCallerIdLookup;
  },
});

Object.defineProperty(ApplicationInstance.prototype,
  'voiceFallbackMethod', {
  get: function() {
    return this._properties.voiceFallbackMethod;
  },
});

Object.defineProperty(ApplicationInstance.prototype,
  'voiceFallbackUrl', {
  get: function() {
    return this._properties.voiceFallbackUrl;
  },
});

Object.defineProperty(ApplicationInstance.prototype,
  'voiceMethod', {
  get: function() {
    return this._properties.voiceMethod;
  },
});

Object.defineProperty(ApplicationInstance.prototype,
  'voiceUrl', {
  get: function() {
    return this._properties.voiceUrl;
  },
});

/**
 * @description Deletes the ApplicationInstance
 *
 * @param {function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
ApplicationInstance.prototype.remove = function remove(callback) {
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
 * @description Fetch a ApplicationInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched ApplicationInstance
 */
ApplicationInstance.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ApplicationInstance(
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
 * @description Update the ApplicationInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] -
 *          Human readable description of this resource
 * @param {string} [opts.apiVersion] - The API version to use
 * @param {string} [opts.voiceUrl] -
 *          URL Twilio will make requests to when relieving a call
 * @param {string} [opts.voiceMethod] - HTTP method to use with the URL
 * @param {string} [opts.voiceFallbackUrl] - Fallback URL
 * @param {string} [opts.voiceFallbackMethod] -
 *          HTTP method to use with the fallback url
 * @param {string} [opts.statusCallback] - URL to hit with status updates
 * @param {string} [opts.statusCallbackMethod] -
 *          HTTP method to use with the status callback
 * @param {string} [opts.voiceCallerIdLookup] - True or False
 * @param {string} [opts.smsUrl] - URL Twilio will request when receiving an SMS
 * @param {string} [opts.smsMethod] - HTTP method to use with sms_url
 * @param {string} [opts.smsFallbackUrl] -
 *          Fallback URL if there's an error parsing TwiML
 * @param {string} [opts.smsFallbackMethod] -
 *          HTTP method to use with sms_fallback_method
 * @param {string} [opts.smsStatusCallback] -
 *          URL Twilio with request with status updates
 * @param {string} [opts.messageStatusCallback] -
 *          URL to make requests to with status updates
 * @param {function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated ApplicationInstance
 */
ApplicationInstance.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': opts.friendlyName,
    'ApiVersion': opts.apiVersion,
    'VoiceUrl': opts.voiceUrl,
    'VoiceMethod': opts.voiceMethod,
    'VoiceFallbackUrl': opts.voiceFallbackUrl,
    'VoiceFallbackMethod': opts.voiceFallbackMethod,
    'StatusCallback': opts.statusCallback,
    'StatusCallbackMethod': opts.statusCallbackMethod,
    'VoiceCallerIdLookup': opts.voiceCallerIdLookup,
    'SmsUrl': opts.smsUrl,
    'SmsMethod': opts.smsMethod,
    'SmsFallbackUrl': opts.smsFallbackUrl,
    'SmsFallbackMethod': opts.smsFallbackMethod,
    'SmsStatusCallback': opts.smsStatusCallback,
    'MessageStatusCallback': opts.messageStatusCallback
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ApplicationInstance(
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
 * @constructor Twilio.Api.V2010.AccountContext.ApplicationContext
 * @augments InstanceContext
 * @description Initialize the ApplicationContext
 *
 * @param {V2010} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique Application Sid
 */
function ApplicationContext(version, accountSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Applications/<%= sid %>.json' // jshint ignore:line
  )(this._solution);
}

_.extend(ApplicationContext.prototype, InstanceContext.prototype);
ApplicationContext.prototype.constructor = ApplicationContext;

/**
 * @description Deletes the ApplicationInstance
 *
 * @param {function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
ApplicationContext.prototype.remove = function remove(callback) {
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
 * @description Fetch a ApplicationInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched ApplicationInstance
 */
ApplicationContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ApplicationInstance(
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
 * @description Update the ApplicationInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] -
 *          Human readable description of this resource
 * @param {string} [opts.apiVersion] - The API version to use
 * @param {string} [opts.voiceUrl] -
 *          URL Twilio will make requests to when relieving a call
 * @param {string} [opts.voiceMethod] - HTTP method to use with the URL
 * @param {string} [opts.voiceFallbackUrl] - Fallback URL
 * @param {string} [opts.voiceFallbackMethod] -
 *          HTTP method to use with the fallback url
 * @param {string} [opts.statusCallback] - URL to hit with status updates
 * @param {string} [opts.statusCallbackMethod] -
 *          HTTP method to use with the status callback
 * @param {string} [opts.voiceCallerIdLookup] - True or False
 * @param {string} [opts.smsUrl] - URL Twilio will request when receiving an SMS
 * @param {string} [opts.smsMethod] - HTTP method to use with sms_url
 * @param {string} [opts.smsFallbackUrl] -
 *          Fallback URL if there's an error parsing TwiML
 * @param {string} [opts.smsFallbackMethod] -
 *          HTTP method to use with sms_fallback_method
 * @param {string} [opts.smsStatusCallback] -
 *          URL Twilio with request with status updates
 * @param {string} [opts.messageStatusCallback] -
 *          URL to make requests to with status updates
 * @param {function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated ApplicationInstance
 */
ApplicationContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': opts.friendlyName,
    'ApiVersion': opts.apiVersion,
    'VoiceUrl': opts.voiceUrl,
    'VoiceMethod': opts.voiceMethod,
    'VoiceFallbackUrl': opts.voiceFallbackUrl,
    'VoiceFallbackMethod': opts.voiceFallbackMethod,
    'StatusCallback': opts.statusCallback,
    'StatusCallbackMethod': opts.statusCallbackMethod,
    'VoiceCallerIdLookup': opts.voiceCallerIdLookup,
    'SmsUrl': opts.smsUrl,
    'SmsMethod': opts.smsMethod,
    'SmsFallbackUrl': opts.smsFallbackUrl,
    'SmsFallbackMethod': opts.smsFallbackMethod,
    'SmsStatusCallback': opts.smsStatusCallback,
    'MessageStatusCallback': opts.messageStatusCallback
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ApplicationInstance(
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
  ApplicationPage: ApplicationPage,
  ApplicationList: ApplicationList,
  ApplicationInstance: ApplicationInstance,
  ApplicationContext: ApplicationContext
};
