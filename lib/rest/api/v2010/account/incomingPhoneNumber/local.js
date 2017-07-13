'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
var serialize = require(
    '../../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var LocalList;
var LocalPage;
var LocalInstance;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.LocalList
 * @description Initialize the LocalList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid - The unique sid that identifies this account
 */
/* jshint ignore:end */
LocalList = function LocalList(version, accountSid) {
  /* jshint ignore:start */
  /**
   * @function local
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.LocalContext}
   */
  /* jshint ignore:end */
  function LocalListInstance(sid) {
    return LocalListInstance.get(sid);
  }

  LocalListInstance._version = version;
  // Path Solution
  LocalListInstance._solution = {
    accountSid: accountSid
  };
  LocalListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/IncomingPhoneNumbers/Local.json' // jshint ignore:line
  )(LocalListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams LocalInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.LocalList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {boolean} [opts.beta] - The beta
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.phoneNumber] - The phone_number
   * @param {string} [opts.origin] - The origin
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
  LocalListInstance.each = function each(opts, callback) {
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
   * @description Lists LocalInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.LocalList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {boolean} [opts.beta] - The beta
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.phoneNumber] - The phone_number
   * @param {string} [opts.origin] - The origin
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
  LocalListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of LocalInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.LocalList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {boolean} [opts.beta] - The beta
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.phoneNumber] - The phone_number
   * @param {string} [opts.origin] - The origin
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  LocalListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Beta': serialize.bool(_.get(opts, 'beta')),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'PhoneNumber': _.get(opts, 'phoneNumber'),
      'Origin': _.get(opts, 'origin'),
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
      deferred.resolve(new LocalPage(
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
   * Retrieve a single target page of LocalInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.LocalList
   * @instance
   *
   * @param {boolean} [opts.beta] - The beta
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.phoneNumber] - The phone_number
   * @param {string} [opts.origin] - The origin
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  LocalListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({
      method: 'GET',
      uri: targetUrl
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new LocalPage(
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
   * create a LocalInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.LocalList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.accountSid - The account_sid
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
   * @param {boolean} [opts.voiceCallerIdLookup] - The voice_caller_id_lookup
   * @param {string} [opts.voiceFallbackMethod] - The voice_fallback_method
   * @param {string} [opts.voiceFallbackUrl] - The voice_fallback_url
   * @param {string} [opts.voiceMethod] - The voice_method
   * @param {string} [opts.voiceUrl] - The voice_url
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed LocalInstance
   */
  /* jshint ignore:end */
  LocalListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.phoneNumber)) {
      throw new Error('Required parameter "opts.phoneNumber" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'PhoneNumber': _.get(opts, 'phoneNumber'),
      'ApiVersion': _.get(opts, 'apiVersion'),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'SmsApplicationSid': _.get(opts, 'smsApplicationSid'),
      'SmsFallbackMethod': _.get(opts, 'smsFallbackMethod'),
      'SmsFallbackUrl': _.get(opts, 'smsFallbackUrl'),
      'SmsMethod': _.get(opts, 'smsMethod'),
      'SmsUrl': _.get(opts, 'smsUrl'),
      'StatusCallback': _.get(opts, 'statusCallback'),
      'StatusCallbackMethod': _.get(opts, 'statusCallbackMethod'),
      'VoiceApplicationSid': _.get(opts, 'voiceApplicationSid'),
      'VoiceCallerIdLookup': serialize.bool(_.get(opts, 'voiceCallerIdLookup')),
      'VoiceFallbackMethod': _.get(opts, 'voiceFallbackMethod'),
      'VoiceFallbackUrl': _.get(opts, 'voiceFallbackUrl'),
      'VoiceMethod': _.get(opts, 'voiceMethod'),
      'VoiceUrl': _.get(opts, 'voiceUrl')
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new LocalInstance(
        this._version,
        payload
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

  return LocalListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.LocalPage
 * @augments Page
 * @description Initialize the LocalPage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns LocalPage
 */
/* jshint ignore:end */
LocalPage = function LocalPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(LocalPage.prototype, Page.prototype);
LocalPage.prototype.constructor = LocalPage;

/* jshint ignore:start */
/**
 * Build an instance of LocalInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.LocalPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns LocalInstance
 */
/* jshint ignore:end */
LocalPage.prototype.getInstance = function getInstance(payload) {
  return new LocalInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.LocalInstance
 * @description Initialize the LocalContext
 *
 * @property {string} accountSid - The account_sid
 * @property {local.address_requirement} addressRequirements -
 *          The address_requirements
 * @property {string} apiVersion - The api_version
 * @property {boolean} beta - The beta
 * @property {string} capabilities - The capabilities
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} friendlyName - The friendly_name
 * @property {string} phoneNumber - The phone_number
 * @property {string} origin - The origin
 * @property {string} sid - The sid
 * @property {string} smsApplicationSid - The sms_application_sid
 * @property {string} smsFallbackMethod - The sms_fallback_method
 * @property {string} smsFallbackUrl - The sms_fallback_url
 * @property {string} smsMethod - The sms_method
 * @property {string} smsUrl - The sms_url
 * @property {string} statusCallback - The status_callback
 * @property {string} statusCallbackMethod - The status_callback_method
 * @property {string} trunkSid - The trunk_sid
 * @property {string} uri - The uri
 * @property {string} voiceApplicationSid - The voice_application_sid
 * @property {boolean} voiceCallerIdLookup - The voice_caller_id_lookup
 * @property {string} voiceFallbackMethod - The voice_fallback_method
 * @property {string} voiceFallbackUrl - The voice_fallback_url
 * @property {string} voiceMethod - The voice_method
 * @property {string} voiceUrl - The voice_url
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 */
/* jshint ignore:end */
LocalInstance = function LocalInstance(version, payload, accountSid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.addressRequirements = payload.address_requirements; // jshint ignore:line
  this.apiVersion = payload.api_version; // jshint ignore:line
  this.beta = payload.beta; // jshint ignore:line
  this.capabilities = payload.capabilities; // jshint ignore:line
  this.dateCreated = deserialize.rfc2822DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated); // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.phoneNumber = payload.phone_number; // jshint ignore:line
  this.origin = payload.origin; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.smsApplicationSid = payload.sms_application_sid; // jshint ignore:line
  this.smsFallbackMethod = payload.sms_fallback_method; // jshint ignore:line
  this.smsFallbackUrl = payload.sms_fallback_url; // jshint ignore:line
  this.smsMethod = payload.sms_method; // jshint ignore:line
  this.smsUrl = payload.sms_url; // jshint ignore:line
  this.statusCallback = payload.status_callback; // jshint ignore:line
  this.statusCallbackMethod = payload.status_callback_method; // jshint ignore:line
  this.trunkSid = payload.trunk_sid; // jshint ignore:line
  this.uri = payload.uri; // jshint ignore:line
  this.voiceApplicationSid = payload.voice_application_sid; // jshint ignore:line
  this.voiceCallerIdLookup = payload.voice_caller_id_lookup; // jshint ignore:line
  this.voiceFallbackMethod = payload.voice_fallback_method; // jshint ignore:line
  this.voiceFallbackUrl = payload.voice_fallback_url; // jshint ignore:line
  this.voiceMethod = payload.voice_method; // jshint ignore:line
  this.voiceUrl = payload.voice_url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
  };
};

module.exports = {
  LocalList: LocalList,
  LocalPage: LocalPage,
  LocalInstance: LocalInstance
};
