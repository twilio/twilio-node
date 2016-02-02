'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceResource = require('../../../../../base/InstanceResource');
var Page = require('../../../../../base/Page');
var deserialize = require('../../../../../base/deserialize');
var values = require('../../../../../base/values');

var TollFreePage;
var TollFreeList;
var TollFreeInstance;
var TollFreeContext;

/**
 * Initialize the TollFreePage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 * @param {string} ownerAccountSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns TollFreePage
 */
function TollFreePage(version, response, ownerAccountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    ownerAccountSid: ownerAccountSid
  };
}

_.extend(TollFreePage.prototype, Page.prototype);
TollFreePage.prototype.constructor = TollFreePage;

/**
 * Build an instance of TollFreeInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns TollFreeInstance
 */
TollFreePage.prototype.getInstance = function getInstance(payload) {
  return new TollFreeInstance(
    this._version,
    payload,
    this._solution.ownerAccountSid
  );
};


/**
 * Initialize the TollFreeList
 *
 * @param {Version} version - Version that contains the resource
 * @param {string} ownerAccountSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns TollFreeList
 */
function TollFreeList(version, ownerAccountSid) {
  function TollFreeListInstance(sid) {
    return TollFreeListInstance.get(sid);
  }

  TollFreeListInstance._version = version;
  // Path Solution
  TollFreeListInstance._solution = {
    ownerAccountSid: ownerAccountSid
  };
  TollFreeListInstance._uri = _.template(
    '/Accounts/<%= ownerAccountSid %>/IncomingPhoneNumbers/TollFree.json' // jshint ignore:line
  )(TollFreeListInstance._solution);
  /**
   * Streams TollFreeInstance records from the API.
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
  TollFreeListInstance.each = function each(opts, callback) {
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
   * Lists TollFreeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {string} [opts.beta] - The beta
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.phoneNumber] - The phone_number
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
  TollFreeListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of TollFreeInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {string} [opts.beta] - The beta
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.phoneNumber] - The phone_number
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {Function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  TollFreeListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Beta': opts.beta,
      'FriendlyName': opts.friendlyName,
      'PhoneNumber': opts.phoneNumber,
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
      deferred.resolve(new TollFreePage(
        this._version,
        payload,
        this._solution.ownerAccountSid
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
   * Create a new TollFreeInstance
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {string} opts.phoneNumber - The phone_number
   * @param {string} [opts.apiVersion] - The api_version
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.smsApplicationSid] - The sms_application_sid
   * @param {string} [opts.smsFallbackMethod] - The sms_fallback_method
   * @param {string} [opts.smsFallbackUrl] - The sms_fallback_url
   * @param {string} [opts.smsMethod] - The sms_method
   * @param {string} [opts.smsUrl] - The sms_url
   * @param {string} [opts.statusCallback] - The status_callback
   * @param {string} [opts.statusCallbackMethod] - The status_callback_method
   * @param {string} [opts.voiceApplicationSid] - The voice_application_sid
   * @param {string} [opts.voiceCallerIdLookup] - The voice_caller_id_lookup
   * @param {string} [opts.voiceFallbackMethod] - The voice_fallback_method
   * @param {string} [opts.voiceFallbackUrl] - The voice_fallback_url
   * @param {string} [opts.voiceMethod] - The voice_method
   * @param {string} [opts.voiceUrl] - The voice_url
   * @param {Function} [callback] - Callback to handle created record
   *
   * @returns {Promise} Resolves to newly created TollFreeInstance
   */
  TollFreeListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameters phoneNumber are missing.');  // jshint ignore:line
    }
    if (_.isUndefined(opts.phoneNumber)) {
      throw new Error('Required parameter "phoneNumber" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'PhoneNumber': opts.phoneNumber,
      'ApiVersion': opts.apiVersion,
      'FriendlyName': opts.friendlyName,
      'SmsApplicationSid': opts.smsApplicationSid,
      'SmsFallbackMethod': opts.smsFallbackMethod,
      'SmsFallbackUrl': opts.smsFallbackUrl,
      'SmsMethod': opts.smsMethod,
      'SmsUrl': opts.smsUrl,
      'StatusCallback': opts.statusCallback,
      'StatusCallbackMethod': opts.statusCallbackMethod,
      'VoiceApplicationSid': opts.voiceApplicationSid,
      'VoiceCallerIdLookup': opts.voiceCallerIdLookup,
      'VoiceFallbackMethod': opts.voiceFallbackMethod,
      'VoiceFallbackUrl': opts.voiceFallbackUrl,
      'VoiceMethod': opts.voiceMethod,
      'VoiceUrl': opts.voiceUrl
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new TollFreeInstance(
        this._version,
        payload,
        this._solution.ownerAccountSid
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

  return TollFreeListInstance;
}


/**
 * Initialize the TollFreeContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {TollFreeContext}
 */
function TollFreeInstance(version, payload, ownerAccountSid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    addressRequirements: payload.address_requirements, // jshint ignore:line,
    apiVersion: payload.api_version, // jshint ignore:line,
    beta: payload.beta, // jshint ignore:line,
    capabilities: payload.capabilities, // jshint ignore:line,
    dateCreated: deserialize.rfc2822DateTime(payload.date_created), // jshint ignore:line,
    dateUpdated: deserialize.rfc2822DateTime(payload.date_updated), // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    phoneNumber: payload.phone_number, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    smsApplicationSid: payload.sms_application_sid, // jshint ignore:line,
    smsFallbackMethod: payload.sms_fallback_method, // jshint ignore:line,
    smsFallbackUrl: payload.sms_fallback_url, // jshint ignore:line,
    smsMethod: payload.sms_method, // jshint ignore:line,
    smsUrl: payload.sms_url, // jshint ignore:line,
    statusCallback: payload.status_callback, // jshint ignore:line,
    statusCallbackMethod: payload.status_callback_method, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
    voiceApplicationSid: payload.voice_application_sid, // jshint ignore:line,
    voiceCallerIdLookup: payload.voice_caller_id_lookup, // jshint ignore:line,
    voiceFallbackMethod: payload.voice_fallback_method, // jshint ignore:line,
    voiceFallbackUrl: payload.voice_fallback_url, // jshint ignore:line,
    voiceMethod: payload.voice_method, // jshint ignore:line,
    voiceUrl: payload.voice_url, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    ownerAccountSid: ownerAccountSid,
  };
}

_.extend(TollFreeInstance.prototype, InstanceResource.prototype);
TollFreeInstance.prototype.constructor = TollFreeInstance;

Object.defineProperty(TollFreeInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'addressRequirements', {
  get: function() {
    return this._properties.addressRequirements;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'beta', {
  get: function() {
    return this._properties.beta;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'capabilities', {
  get: function() {
    return this._properties.capabilities;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'phoneNumber', {
  get: function() {
    return this._properties.phoneNumber;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'smsApplicationSid', {
  get: function() {
    return this._properties.smsApplicationSid;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'smsFallbackMethod', {
  get: function() {
    return this._properties.smsFallbackMethod;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'smsFallbackUrl', {
  get: function() {
    return this._properties.smsFallbackUrl;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'smsMethod', {
  get: function() {
    return this._properties.smsMethod;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'smsUrl', {
  get: function() {
    return this._properties.smsUrl;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'statusCallback', {
  get: function() {
    return this._properties.statusCallback;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'statusCallbackMethod', {
  get: function() {
    return this._properties.statusCallbackMethod;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'voiceApplicationSid', {
  get: function() {
    return this._properties.voiceApplicationSid;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'voiceCallerIdLookup', {
  get: function() {
    return this._properties.voiceCallerIdLookup;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'voiceFallbackMethod', {
  get: function() {
    return this._properties.voiceFallbackMethod;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'voiceFallbackUrl', {
  get: function() {
    return this._properties.voiceFallbackUrl;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'voiceMethod', {
  get: function() {
    return this._properties.voiceMethod;
  },
});

Object.defineProperty(TollFreeInstance.prototype,
  'voiceUrl', {
  get: function() {
    return this._properties.voiceUrl;
  },
});

module.exports = {
  TollFreePage: TollFreePage,
  TollFreeList: TollFreeList,
  TollFreeInstance: TollFreeInstance,
  TollFreeContext: TollFreeContext
};
