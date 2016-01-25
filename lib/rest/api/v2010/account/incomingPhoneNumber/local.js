'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceResource = require('../../../../../base/InstanceResource');
var Page = require('../../../../../base/Page');
var values = require('../../../../../base/values');

var LocalPage;
var LocalList;
var LocalInstance;
var LocalContext;

/**
 * Initialize the LocalPage
 *
 * :param Version version: Version that contains the resource
 * :param Response response: Response from the API
 * :param ownerAccountSid: A 34 character string that uniquely identifies this resource.
 *
 * @returns LocalPage
 */
function LocalPage(version, response, ownerAccountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    ownerAccountSid: ownerAccountSid
  };
}

_.extend(LocalPage.prototype, Page.prototype);
LocalPage.prototype.constructor = LocalPage;

/**
 * Build an instance of LocalInstance
 *
 * :param dict payload: Payload response from the API
 *
 * @returns LocalInstance
 */
LocalPage.prototype.getInstance = function getInstance(payload) {
  return new LocalInstance(
    this._version,
    payload,
    this._solution.ownerAccountSid
  );
};


/**
 * Initialize the LocalList
 *
 * :param Version version: Version that contains the resource
 * :param ownerAccountSid: A 34 character string that uniquely identifies this resource.
 *
 * @returns LocalList
 */
function LocalList(version, ownerAccountSid) {
  function LocalListInstance(sid) {
    return LocalListInstance.get(sid);
  }

  LocalListInstance._version = version;
  // Path Solution
  LocalListInstance._solution = {
    ownerAccountSid: ownerAccountSid
  };
  LocalListInstance._uri = _.template(
    '/Accounts/<%= ownerAccountSid %>/IncomingPhoneNumbers/Local.json' // jshint ignore:line
  )(LocalListInstance._solution);
  /**
   * Streams LocalInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param {Function} opts.callback - A callback function to process records
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
   * @param string [opts.beta] - The beta
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.phoneNumber] - The phone_number
   */
  LocalListInstance.each = function each(opts) {
    if (!(opts && 'callback' in opts)) {
      throw new Error('opts.callback parameter required');
    }

    var currentPage = 1;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var deferred = Q.defer();
    function fetchNextPage(fn) {
      var promise = fn();

      promise.then(function(page) {
        if (_.isEmpty(page.instances)) {
          deferred.resolve();
        }

        _.each(page.instances, opts.callback);

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
   * Lists LocalInstance records from the API as a list.
   *
   * @param string [opts.beta] - The beta
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.phoneNumber] - The phone_number
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
  LocalListInstance.list = function list(opts) {
    opts = opts || {};

    var allResources = [];
    opts.callback = function(resource) {
      allResources.push(resource);
    };

    var promise = this.each(opts);
    promise = promise.then(function() {
      return allResources;
    });

    return promise;
  };

  /**
   * Retrieve a single page of LocalInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.beta] - The beta
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.phoneNumber] - The phone_number
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of LocalInstance
   */
  LocalListInstance.page = function page(opts) {
    opts = opts || {};
    var params = values.of({
      'Beta': opts.beta,
      'FriendlyName': opts.friendlyName,
      'PhoneNumber': opts.phoneNumber,
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = version.page(
      'GET',
      this._uri,
      { params: params }
    );

    promise = promise.then(function(response) {
      return new LocalPage(
        this._version,
        response,
        this._solution.ownerAccountSid
      );
    }.bind(this));

    return promise;
  };

  /**
   * Create a new LocalInstance
   *
   * @param string phoneNumber - The phone_number
   * @param string [opts.apiVersion] - The api_version
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.smsApplicationSid] - The sms_application_sid
   * @param string [opts.smsFallbackMethod] - The sms_fallback_method
   * @param string [opts.smsFallbackUrl] - The sms_fallback_url
   * @param string [opts.smsMethod] - The sms_method
   * @param string [opts.smsUrl] - The sms_url
   * @param string [opts.statusCallback] - The status_callback
   * @param string [opts.statusCallbackMethod] - The status_callback_method
   * @param string [opts.voiceApplicationSid] - The voice_application_sid
   * @param string [opts.voiceCallerIdLookup] - The voice_caller_id_lookup
   * @param string [opts.voiceFallbackMethod] - The voice_fallback_method
   * @param string [opts.voiceFallbackUrl] - The voice_fallback_url
   * @param string [opts.voiceMethod] - The voice_method
   * @param string [opts.voiceUrl] - The voice_url
   *
   * @returns Newly created LocalInstance
   */
  LocalListInstance.create = function create(phoneNumber, opts) {
    opts = opts || {};
    var data = values.of({
      'PhoneNumber': phoneNumber,
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
      data: data,
    });

    promise = promise.then(function(payload) {
      return new LocalInstance(
        this._version,
        payload,
        this._solution.ownerAccountSid
      );
    }.bind(this));

    return promise;
  };

  return LocalListInstance;
}


/**
 * Initialize the LocalContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {LocalContext}
 */
function LocalInstance(version, payload, ownerAccountSid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    addressRequirements: payload.address_requirements, // jshint ignore:line,
    apiVersion: payload.api_version, // jshint ignore:line,
    beta: payload.beta, // jshint ignore:line,
    capabilities: payload.capabilities, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
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

_.extend(LocalInstance.prototype, InstanceResource.prototype);
LocalInstance.prototype.constructor = LocalInstance;

Object.defineProperty(LocalInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'addressRequirements', {
  get: function() {
    return this._properties.addressRequirements;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'beta', {
  get: function() {
    return this._properties.beta;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'capabilities', {
  get: function() {
    return this._properties.capabilities;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'phoneNumber', {
  get: function() {
    return this._properties.phoneNumber;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'smsApplicationSid', {
  get: function() {
    return this._properties.smsApplicationSid;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'smsFallbackMethod', {
  get: function() {
    return this._properties.smsFallbackMethod;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'smsFallbackUrl', {
  get: function() {
    return this._properties.smsFallbackUrl;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'smsMethod', {
  get: function() {
    return this._properties.smsMethod;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'smsUrl', {
  get: function() {
    return this._properties.smsUrl;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'statusCallback', {
  get: function() {
    return this._properties.statusCallback;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'statusCallbackMethod', {
  get: function() {
    return this._properties.statusCallbackMethod;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'voiceApplicationSid', {
  get: function() {
    return this._properties.voiceApplicationSid;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'voiceCallerIdLookup', {
  get: function() {
    return this._properties.voiceCallerIdLookup;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'voiceFallbackMethod', {
  get: function() {
    return this._properties.voiceFallbackMethod;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'voiceFallbackUrl', {
  get: function() {
    return this._properties.voiceFallbackUrl;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'voiceMethod', {
  get: function() {
    return this._properties.voiceMethod;
  },
});

Object.defineProperty(LocalInstance.prototype,
  'voiceUrl', {
  get: function() {
    return this._properties.voiceUrl;
  },
});

module.exports = {
  LocalPage: LocalPage,
  LocalList: LocalList,
  LocalInstance: LocalInstance,
  LocalContext: LocalContext
};
