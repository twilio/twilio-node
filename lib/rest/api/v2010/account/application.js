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
 * Initialize the ApplicationPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
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
 * @param {obj} payload - Payload response from the API
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
 * Initialize the ApplicationList
 *
 * @param {Version} version - Version that contains the resource
 * @param {string} accountSid - A string that uniquely identifies this resource
 *
 * @returns ApplicationList
 */
function ApplicationList(version, accountSid) {
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
   * Create a new ApplicationInstance
   *
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
   *
   * @returns Newly created ApplicationInstance
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
   * Streams ApplicationInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param {Function} callback - A callback function to process records
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
   * @param {string} [opts.friendlyName] - Filter by friendly name
   */
  ApplicationListInstance.each = function each(opts, callback) {
    opts = opts || {};
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    if (_.isUndefined(callback)) {
      throw new Error('Callback function must be provided');
    }

    var currentPage = 1;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var deferred = Q.defer();
    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        deferred.resolve();
      }

      promise.then(function(page) {
        if (_.isEmpty(page.instances)) {
          deferred.resolve();
        }

        _.each(page.instances, callback);

        if ((limits.pageLimit && limits.pageLimit <= currentPage)) {
          deferred.resolve();
        } else {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(deferred.reject);
    }

    fetchNextPage(_.bind(this.page, this, opts));

    return deferred.promise;
  };

  /**
   * Lists ApplicationInstance records from the API as a list.
   *
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
   *
   * @returns {Array} A list of records
   */
  ApplicationListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var allResources = [];
    var append = function(resource) {
      allResources.push(resource);
    };

    var deferred = Q.defer();
    var promise = this.each(opts, append);
    promise = promise.then(function() {
      deferred.resolve(allResources);
    });

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /**
   * Retrieve a single page of ApplicationInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.friendlyName] - Filter by friendly name
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of ApplicationInstance
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
   * Constructs a ApplicationContext
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
 * Initialize the ApplicationContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique Application Sid
 *
 * @returns {ApplicationContext}
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
 * Deletes the ApplicationInstance
 *
 * @returns true if delete succeeds, false otherwise
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
 * Fetch a ApplicationInstance
 *
 * @returns Fetched ApplicationInstance
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
 * Update the ApplicationInstance
 *
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
 *
 * @returns Updated ApplicationInstance
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
 * Initialize the ApplicationContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique Application Sid
 *
 * @returns {ApplicationContext}
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
 * Deletes the ApplicationInstance
 *
 * @returns true if delete succeeds, false otherwise
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
 * Fetch a ApplicationInstance
 *
 * @returns Fetched ApplicationInstance
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
 * Update the ApplicationInstance
 *
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
 *
 * @returns Updated ApplicationInstance
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
