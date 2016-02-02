'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var LocalList = require('./incomingPhoneNumber/local').LocalList;
var MobileList = require('./incomingPhoneNumber/mobile').MobileList;
var Page = require('../../../../base/Page');
var TollFreeList = require('./incomingPhoneNumber/tollFree').TollFreeList;
var deserialize = require('../../../../base/deserialize');
var values = require('../../../../base/values');

var IncomingPhoneNumberPage;
var IncomingPhoneNumberList;
var IncomingPhoneNumberInstance;
var IncomingPhoneNumberContext;

/**
 * Initialize the IncomingPhoneNumberPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 * @param {string} ownerAccountSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns IncomingPhoneNumberPage
 */
function IncomingPhoneNumberPage(version, response, ownerAccountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    ownerAccountSid: ownerAccountSid
  };
}

_.extend(IncomingPhoneNumberPage.prototype, Page.prototype);
IncomingPhoneNumberPage.prototype.constructor = IncomingPhoneNumberPage;

/**
 * Build an instance of IncomingPhoneNumberInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns IncomingPhoneNumberInstance
 */
IncomingPhoneNumberPage.prototype.getInstance = function getInstance(payload) {
  return new IncomingPhoneNumberInstance(
    this._version,
    payload,
    this._solution.ownerAccountSid
  );
};


/**
 * Initialize the IncomingPhoneNumberList
 *
 * @param {Version} version - Version that contains the resource
 * @param {string} ownerAccountSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns IncomingPhoneNumberList
 */
function IncomingPhoneNumberList(version, ownerAccountSid) {
  function IncomingPhoneNumberListInstance(sid) {
    return IncomingPhoneNumberListInstance.get(sid);
  }

  IncomingPhoneNumberListInstance._version = version;
  // Path Solution
  IncomingPhoneNumberListInstance._solution = {
    ownerAccountSid: ownerAccountSid
  };
  IncomingPhoneNumberListInstance._uri = _.template(
    '/Accounts/<%= ownerAccountSid %>/IncomingPhoneNumbers.json' // jshint ignore:line
  )(IncomingPhoneNumberListInstance._solution);

  // Components
  IncomingPhoneNumberListInstance._local = undefined;
  IncomingPhoneNumberListInstance._mobile = undefined;
  IncomingPhoneNumberListInstance._tollFree = undefined;

  /**
   * Streams IncomingPhoneNumberInstance records from the API.
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
  IncomingPhoneNumberListInstance.each = function each(opts, callback) {
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
   * Lists IncomingPhoneNumberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {string} [opts.beta] - Include new phone numbers
   * @param {string} [opts.friendlyName] - Filter by friendly name
   * @param {string} [opts.phoneNumber] - Filter by incoming phone number
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
  IncomingPhoneNumberListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of IncomingPhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {string} [opts.beta] - Include new phone numbers
   * @param {string} [opts.friendlyName] - Filter by friendly name
   * @param {string} [opts.phoneNumber] - Filter by incoming phone number
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {Function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  IncomingPhoneNumberListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new IncomingPhoneNumberPage(
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
   * Create a new IncomingPhoneNumberInstance
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {string} [opts.apiVersion] - The Twilio Rest API version to use
   * @param {string} [opts.friendlyName] -
   *          A human readable description of this resource
   * @param {string} [opts.smsApplicationSid] -
   *          Unique string that identifies the application
   * @param {string} [opts.smsFallbackMethod] -
   *          HTTP method used with sms fallback url
   * @param {string} [opts.smsFallbackUrl] -
   *          URL Twilio will request if an error occurs in executing TwiML
   * @param {string} [opts.smsMethod] - HTTP method to use with sms url
   * @param {string} [opts.smsUrl] - URL Twilio will request when receiving an SMS
   * @param {string} [opts.statusCallback] -
   *          URL Twilio will use to pass status parameters
   * @param {string} [opts.statusCallbackMethod] -
   *          HTTP method twilio will use with status callback
   * @param {string} [opts.voiceApplicationSid] -
   *          The unique sid of the application to handle this number
   * @param {string} [opts.voiceCallerIdLookup] - Look up the caller's caller-ID
   * @param {string} [opts.voiceFallbackMethod] - HTTP method used with fallback_url
   * @param {string} [opts.voiceFallbackUrl] -
   *          URL Twilio will request when an error occurs in TwiML
   * @param {string} [opts.voiceMethod] - HTTP method used with the voice url
   * @param {string} [opts.voiceUrl] - URL Twilio will request when receiving a call
   * @param {string} [opts.phoneNumber] - The phone number
   * @param {string} [opts.areaCode] - The desired area code for the new number
   * @param {Function} [callback] - Callback to handle created record
   *
   * @returns {Promise} Resolves to newly created IncomingPhoneNumberInstance
   */
  IncomingPhoneNumberListInstance.create = function create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
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
      'VoiceUrl': opts.voiceUrl,
      'PhoneNumber': opts.phoneNumber,
      'AreaCode': opts.areaCode
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new IncomingPhoneNumberInstance(
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

  Object.defineProperty(IncomingPhoneNumberListInstance,
    'local', {
    get: function local() {
      if (!this._local) {
        this._local = new LocalList(
          this._version,
          this._solution.ownerAccountSid
        );
      }

      return this._local;
    },
  });

  Object.defineProperty(IncomingPhoneNumberListInstance,
    'mobile', {
    get: function mobile() {
      if (!this._mobile) {
        this._mobile = new MobileList(
          this._version,
          this._solution.ownerAccountSid
        );
      }

      return this._mobile;
    },
  });

  Object.defineProperty(IncomingPhoneNumberListInstance,
    'tollFree', {
    get: function tollFree() {
      if (!this._tollFree) {
        this._tollFree = new TollFreeList(
          this._version,
          this._solution.ownerAccountSid
        );
      }

      return this._tollFree;
    },
  });

  /**
   * Constructs a IncomingPhoneNumberContext
   *
   * @param {string} sid - Fetch by unique incoming-phone-number Sid
   *
   * @returns IncomingPhoneNumberContext
   */
  IncomingPhoneNumberListInstance.get = function get(sid) {
    return new IncomingPhoneNumberContext(
      this._version,
      this._solution.ownerAccountSid,
      sid
    );
  };

  return IncomingPhoneNumberListInstance;
}


/**
 * Initialize the IncomingPhoneNumberContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} ownerAccountSid - The owner_account_sid
 * @param {sid} sid - Fetch by unique incoming-phone-number Sid
 *
 * @returns {IncomingPhoneNumberContext}
 */
function IncomingPhoneNumberInstance(version, payload, ownerAccountSid, sid) {
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
    sid: sid || this._properties.sid,
  };
}

_.extend(IncomingPhoneNumberInstance.prototype, InstanceResource.prototype);
IncomingPhoneNumberInstance.prototype.constructor = IncomingPhoneNumberInstance;

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new IncomingPhoneNumberContext(
        this._version,
        this._solution.ownerAccountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'addressRequirements', {
  get: function() {
    return this._properties.addressRequirements;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'beta', {
  get: function() {
    return this._properties.beta;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'capabilities', {
  get: function() {
    return this._properties.capabilities;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'phoneNumber', {
  get: function() {
    return this._properties.phoneNumber;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'smsApplicationSid', {
  get: function() {
    return this._properties.smsApplicationSid;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'smsFallbackMethod', {
  get: function() {
    return this._properties.smsFallbackMethod;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'smsFallbackUrl', {
  get: function() {
    return this._properties.smsFallbackUrl;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'smsMethod', {
  get: function() {
    return this._properties.smsMethod;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'smsUrl', {
  get: function() {
    return this._properties.smsUrl;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'statusCallback', {
  get: function() {
    return this._properties.statusCallback;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'statusCallbackMethod', {
  get: function() {
    return this._properties.statusCallbackMethod;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'voiceApplicationSid', {
  get: function() {
    return this._properties.voiceApplicationSid;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'voiceCallerIdLookup', {
  get: function() {
    return this._properties.voiceCallerIdLookup;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'voiceFallbackMethod', {
  get: function() {
    return this._properties.voiceFallbackMethod;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'voiceFallbackUrl', {
  get: function() {
    return this._properties.voiceFallbackUrl;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'voiceMethod', {
  get: function() {
    return this._properties.voiceMethod;
  },
});

Object.defineProperty(IncomingPhoneNumberInstance.prototype,
  'voiceUrl', {
  get: function() {
    return this._properties.voiceUrl;
  },
});

/**
 * Update the IncomingPhoneNumberInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {string} [opts.accountSid] - The new owner of the phone number
 * @param {string} [opts.apiVersion] - The Twilio REST API version to use
 * @param {string} [opts.friendlyName] -
 *          A human readable description of this resource
 * @param {string} [opts.smsApplicationSid] -
 *          Unique string that identifies the application
 * @param {string} [opts.smsFallbackMethod] -
 *          HTTP method used with sms fallback url
 * @param {string} [opts.smsFallbackUrl] -
 *          URL Twilio will request if an error occurs in executing TwiML
 * @param {string} [opts.smsMethod] - HTTP method to use with sms url
 * @param {string} [opts.smsUrl] - URL Twilio will request when receiving an SMS
 * @param {string} [opts.statusCallback] -
 *          URL Twilio will use to pass status parameters
 * @param {string} [opts.statusCallbackMethod] -
 *          HTTP method twilio will use with status callback
 * @param {string} [opts.voiceApplicationSid] -
 *          The unique sid of the application to handle this number
 * @param {string} [opts.voiceCallerIdLookup] - Look up the caller's caller-ID
 * @param {string} [opts.voiceFallbackMethod] - HTTP method used with fallback_url
 * @param {string} [opts.voiceFallbackUrl] -
 *          URL Twilio will request when an error occurs in TwiML
 * @param {string} [opts.voiceMethod] - HTTP method used with the voice url
 * @param {string} [opts.voiceUrl] - URL Twilio will request when receiving a call
 * @param {Function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated IncomingPhoneNumberInstance
 */
IncomingPhoneNumberInstance.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'AccountSid': opts.accountSid,
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

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new IncomingPhoneNumberInstance(
      this._version,
      payload,
      this._solution.ownerAccountSid,
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
 * Fetch a IncomingPhoneNumberInstance
 *
 * @param {Function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched IncomingPhoneNumberInstance
 */
IncomingPhoneNumberInstance.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new IncomingPhoneNumberInstance(
      this._version,
      payload,
      this._solution.ownerAccountSid,
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
 * Deletes the IncomingPhoneNumberInstance
 *
 * @param {Function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
IncomingPhoneNumberInstance.prototype.remove = function remove(callback) {
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
 * Initialize the IncomingPhoneNumberContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} ownerAccountSid - The owner_account_sid
 * @param {sid} sid - Fetch by unique incoming-phone-number Sid
 *
 * @returns {IncomingPhoneNumberContext}
 */
function IncomingPhoneNumberContext(version, ownerAccountSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    ownerAccountSid: ownerAccountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= ownerAccountSid %>/IncomingPhoneNumbers/<%= sid %>.json' // jshint ignore:line
  )(this._solution);
}

_.extend(IncomingPhoneNumberContext.prototype, InstanceContext.prototype);
IncomingPhoneNumberContext.prototype.constructor = IncomingPhoneNumberContext;

/**
 * Update the IncomingPhoneNumberInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {string} [opts.accountSid] - The new owner of the phone number
 * @param {string} [opts.apiVersion] - The Twilio REST API version to use
 * @param {string} [opts.friendlyName] -
 *          A human readable description of this resource
 * @param {string} [opts.smsApplicationSid] -
 *          Unique string that identifies the application
 * @param {string} [opts.smsFallbackMethod] -
 *          HTTP method used with sms fallback url
 * @param {string} [opts.smsFallbackUrl] -
 *          URL Twilio will request if an error occurs in executing TwiML
 * @param {string} [opts.smsMethod] - HTTP method to use with sms url
 * @param {string} [opts.smsUrl] - URL Twilio will request when receiving an SMS
 * @param {string} [opts.statusCallback] -
 *          URL Twilio will use to pass status parameters
 * @param {string} [opts.statusCallbackMethod] -
 *          HTTP method twilio will use with status callback
 * @param {string} [opts.voiceApplicationSid] -
 *          The unique sid of the application to handle this number
 * @param {string} [opts.voiceCallerIdLookup] - Look up the caller's caller-ID
 * @param {string} [opts.voiceFallbackMethod] - HTTP method used with fallback_url
 * @param {string} [opts.voiceFallbackUrl] -
 *          URL Twilio will request when an error occurs in TwiML
 * @param {string} [opts.voiceMethod] - HTTP method used with the voice url
 * @param {string} [opts.voiceUrl] - URL Twilio will request when receiving a call
 * @param {Function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated IncomingPhoneNumberInstance
 */
IncomingPhoneNumberContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'AccountSid': opts.accountSid,
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

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new IncomingPhoneNumberInstance(
      this._version,
      payload,
      this._solution.ownerAccountSid,
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
 * Fetch a IncomingPhoneNumberInstance
 *
 * @param {Function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched IncomingPhoneNumberInstance
 */
IncomingPhoneNumberContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new IncomingPhoneNumberInstance(
      this._version,
      payload,
      this._solution.ownerAccountSid,
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
 * Deletes the IncomingPhoneNumberInstance
 *
 * @param {Function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
IncomingPhoneNumberContext.prototype.remove = function remove(callback) {
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
  IncomingPhoneNumberPage: IncomingPhoneNumberPage,
  IncomingPhoneNumberList: IncomingPhoneNumberList,
  IncomingPhoneNumberInstance: IncomingPhoneNumberInstance,
  IncomingPhoneNumberContext: IncomingPhoneNumberContext
};
