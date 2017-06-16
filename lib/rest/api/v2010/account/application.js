'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var ApplicationList;
var ApplicationPage;
var ApplicationInstance;
var ApplicationContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.ApplicationList
 * @description Initialize the ApplicationList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid - A string that uniquely identifies this resource
 */
/* jshint ignore:end */
ApplicationList = function ApplicationList(version, accountSid) {
  /* jshint ignore:start */
  /**
   * @function applications
   * @memberof Twilio.Api.V2010.AccountContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.ApplicationContext}
   */
  /* jshint ignore:end */
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
  /* jshint ignore:start */
  /**
   * create a ApplicationInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.friendlyName - The friendly_name
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
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed ApplicationInstance
   */
  /* jshint ignore:end */
  ApplicationListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.friendlyName)) {
      throw new Error('Required parameter "opts.friendlyName" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': _.get(opts, 'friendlyName'),
      'ApiVersion': _.get(opts, 'apiVersion'),
      'VoiceUrl': _.get(opts, 'voiceUrl'),
      'VoiceMethod': _.get(opts, 'voiceMethod'),
      'VoiceFallbackUrl': _.get(opts, 'voiceFallbackUrl'),
      'VoiceFallbackMethod': _.get(opts, 'voiceFallbackMethod'),
      'StatusCallback': _.get(opts, 'statusCallback'),
      'StatusCallbackMethod': _.get(opts, 'statusCallbackMethod'),
      'VoiceCallerIdLookup': _.get(opts, 'voiceCallerIdLookup'),
      'SmsUrl': _.get(opts, 'smsUrl'),
      'SmsMethod': _.get(opts, 'smsMethod'),
      'SmsFallbackUrl': _.get(opts, 'smsFallbackUrl'),
      'SmsFallbackMethod': _.get(opts, 'smsFallbackMethod'),
      'SmsStatusCallback': _.get(opts, 'smsStatusCallback'),
      'MessageStatusCallback': _.get(opts, 'messageStatusCallback')
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
   * Streams ApplicationInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.friendlyName] - Filter by friendly name
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
   * @description Lists ApplicationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationList
   * @instance
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
  /* jshint ignore:end */
  ApplicationListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of ApplicationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationList
   * @instance
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
  /* jshint ignore:end */
  ApplicationListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': _.get(opts, 'friendlyName'),
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
   * Retrieve a single target page of ApplicationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationList
   * @instance
   *
   * @param {string} [opts.friendlyName] - Filter by friendly name
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ApplicationListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({
      method: 'GET',
      uri: targetUrl
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new ApplicationPage(
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
   * Constructs a application
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationList
   * @instance
   *
   * @param {string} sid - Fetch by unique Application Sid
   *
   * @returns {Twilio.Api.V2010.AccountContext.ApplicationContext}
   */
  /* jshint ignore:end */
  ApplicationListInstance.get = function get(sid) {
    return new ApplicationContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return ApplicationListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.ApplicationPage
 * @augments Page
 * @description Initialize the ApplicationPage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns ApplicationPage
 */
/* jshint ignore:end */
ApplicationPage = function ApplicationPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(ApplicationPage.prototype, Page.prototype);
ApplicationPage.prototype.constructor = ApplicationPage;

/* jshint ignore:start */
/**
 * Build an instance of ApplicationInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.ApplicationPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns ApplicationInstance
 */
/* jshint ignore:end */
ApplicationPage.prototype.getInstance = function getInstance(payload) {
  return new ApplicationInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.ApplicationInstance
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
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique Application Sid
 */
/* jshint ignore:end */
ApplicationInstance = function ApplicationInstance(version, payload, accountSid,
                                                    sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.apiVersion = payload.api_version; // jshint ignore:line
  this.dateCreated = deserialize.rfc2822DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated); // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.messageStatusCallback = payload.message_status_callback; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.smsFallbackMethod = payload.sms_fallback_method; // jshint ignore:line
  this.smsFallbackUrl = payload.sms_fallback_url; // jshint ignore:line
  this.smsMethod = payload.sms_method; // jshint ignore:line
  this.smsStatusCallback = payload.sms_status_callback; // jshint ignore:line
  this.smsUrl = payload.sms_url; // jshint ignore:line
  this.statusCallback = payload.status_callback; // jshint ignore:line
  this.statusCallbackMethod = payload.status_callback_method; // jshint ignore:line
  this.uri = payload.uri; // jshint ignore:line
  this.voiceCallerIdLookup = payload.voice_caller_id_lookup; // jshint ignore:line
  this.voiceFallbackMethod = payload.voice_fallback_method; // jshint ignore:line
  this.voiceFallbackUrl = payload.voice_fallback_url; // jshint ignore:line
  this.voiceMethod = payload.voice_method; // jshint ignore:line
  this.voiceUrl = payload.voice_url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this.sid,
  };
};

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
  }
});

/* jshint ignore:start */
/**
 * remove a ApplicationInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.ApplicationInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ApplicationInstance
 */
/* jshint ignore:end */
ApplicationInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * fetch a ApplicationInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.ApplicationInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ApplicationInstance
 */
/* jshint ignore:end */
ApplicationInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a ApplicationInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.ApplicationInstance
 * @instance
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
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ApplicationInstance
 */
/* jshint ignore:end */
ApplicationInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.ApplicationContext
 * @description Initialize the ApplicationContext
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique Application Sid
 */
/* jshint ignore:end */
ApplicationContext = function ApplicationContext(version, accountSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Applications/<%= sid %>.json' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * remove a ApplicationInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.ApplicationContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ApplicationInstance
 */
/* jshint ignore:end */
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

/* jshint ignore:start */
/**
 * fetch a ApplicationInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.ApplicationContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ApplicationInstance
 */
/* jshint ignore:end */
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

/* jshint ignore:start */
/**
 * update a ApplicationInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.ApplicationContext
 * @instance
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
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ApplicationInstance
 */
/* jshint ignore:end */
ApplicationContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': _.get(opts, 'friendlyName'),
    'ApiVersion': _.get(opts, 'apiVersion'),
    'VoiceUrl': _.get(opts, 'voiceUrl'),
    'VoiceMethod': _.get(opts, 'voiceMethod'),
    'VoiceFallbackUrl': _.get(opts, 'voiceFallbackUrl'),
    'VoiceFallbackMethod': _.get(opts, 'voiceFallbackMethod'),
    'StatusCallback': _.get(opts, 'statusCallback'),
    'StatusCallbackMethod': _.get(opts, 'statusCallbackMethod'),
    'VoiceCallerIdLookup': _.get(opts, 'voiceCallerIdLookup'),
    'SmsUrl': _.get(opts, 'smsUrl'),
    'SmsMethod': _.get(opts, 'smsMethod'),
    'SmsFallbackUrl': _.get(opts, 'smsFallbackUrl'),
    'SmsFallbackMethod': _.get(opts, 'smsFallbackMethod'),
    'SmsStatusCallback': _.get(opts, 'smsStatusCallback'),
    'MessageStatusCallback': _.get(opts, 'messageStatusCallback')
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
  ApplicationList: ApplicationList,
  ApplicationPage: ApplicationPage,
  ApplicationInstance: ApplicationInstance,
  ApplicationContext: ApplicationContext
};
