'use strict';

var _ = require('lodash');
var Q = require('q');
var CredentialListMappingList = require(
    './domain/credentialListMapping').CredentialListMappingList;
var InstanceContext = require('../../../../../base/InstanceContext');
var InstanceResource = require('../../../../../base/InstanceResource');
var IpAccessControlListMappingList = require(
    './domain/ipAccessControlListMapping').IpAccessControlListMappingList;
var Page = require('../../../../../base/Page');
var deserialize = require('../../../../../base/deserialize');
var values = require('../../../../../base/values');

var DomainPage;
var DomainList;
var DomainInstance;
var DomainContext;

/**
 * @constructor
 * @augments Page
 * @description Initialize the DomainPage
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} response - Response from the API
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns DomainPage
 */
function DomainPage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(DomainPage.prototype, Page.prototype);
DomainPage.prototype.constructor = DomainPage;

/**
 * Build an instance of DomainInstance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns DomainInstance
 */
DomainPage.prototype.getInstance = function getInstance(payload) {
  return new DomainInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/**
 * @constructor
 * @description Initialize the DomainList
 *
 * @param {V2010} version - Version that contains the resource
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns {function} - DomainListInstance
 */
function DomainList(version, accountSid) {
  /**
   * @memberof DomainList
   *
   * @param {string} sid - sid of instance
   *
   * @returns DomainContext
   */
  function DomainListInstance(sid) {
    return DomainListInstance.get(sid);
  }

  DomainListInstance._version = version;
  // Path Solution
  DomainListInstance._solution = {
    accountSid: accountSid
  };
  DomainListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/SIP/Domains.json' // jshint ignore:line
  )(DomainListInstance._solution);
  /**
   * @memberof DomainList
   *
   * @description Streams DomainInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
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
  DomainListInstance.each = function each(opts, callback) {
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
   * @memberof DomainList
   *
   * @description Lists DomainInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
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
  DomainListInstance.list = function list(opts, callback) {
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
   * @memberof DomainList
   *
   * @description Retrieve a single page of DomainInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  DomainListInstance.page = function page(opts, callback) {
    var deferred = Q.defer();
    var data = values.of({
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
      deferred.resolve(new DomainPage(
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
   * @memberof DomainList
   *
   * @description Create a new DomainInstance
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object} opts - ...
   * @param {string} opts.domainName -
   *          The unique address on Twilio to route SIP traffic
   * @param {string} [opts.friendlyName] -
   *          A user-specified, human-readable name for the trigger.
   * @param {string} [opts.voiceUrl] - URL Twilio will request when receiving a call
   * @param {string} [opts.voiceMethod] - HTTP method to use with voice_url
   * @param {string} [opts.voiceFallbackUrl] -
   *          URL Twilio will request if an error occurs in executing TwiML
   * @param {string} [opts.voiceFallbackMethod] -
   *          HTTP method used with voice_fallback_url
   * @param {string} [opts.voiceStatusCallbackUrl] -
   *          URL that Twilio will request with status updates
   * @param {string} [opts.voiceStatusCallbackMethod] -
   *          The voice_status_callback_method
   * @param {function} [callback] - Callback to handle created record
   *
   * @returns {Promise} Resolves to newly created DomainInstance
   */
  DomainListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameters domainName are missing.');  // jshint ignore:line
    }
    if (_.isUndefined(opts.domainName)) {
      throw new Error('Required parameter "domainName" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'DomainName': opts.domainName,
      'FriendlyName': opts.friendlyName,
      'VoiceUrl': opts.voiceUrl,
      'VoiceMethod': opts.voiceMethod,
      'VoiceFallbackUrl': opts.voiceFallbackUrl,
      'VoiceFallbackMethod': opts.voiceFallbackMethod,
      'VoiceStatusCallbackUrl': opts.voiceStatusCallbackUrl,
      'VoiceStatusCallbackMethod': opts.voiceStatusCallbackMethod
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new DomainInstance(
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
   * @memberof DomainList
   *
   * @description Constructs a DomainContext
   *
   * @param {string} sid - Fetch by unique Domain Sid
   *
   * @returns DomainContext
   */
  DomainListInstance.get = function get(sid) {
    return new DomainContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return DomainListInstance;
}


/**
 * @constructor
 * @augments InstanceResource
 * @description Initialize the DomainContext
 *
 * @property {string} accountSid -
 *          The unique id of the account that sent the message
 * @property {string} apiVersion -
 *          The Twilio API version used to process the message
 * @property {string} authType - The types of authentication mapped to the domain
 * @property {Date} dateCreated - The date this resource was created
 * @property {Date} dateUpdated - The date this resource was last updated
 * @property {string} domainName -
 *          The unique address on Twilio to route SIP traffic
 * @property {string} friendlyName -
 *          A user-specified, human-readable name for the trigger.
 * @property {string} sid - A string that uniquely identifies the SIP Domain
 * @property {string} uri - The URI for this resource
 * @property {string} voiceFallbackMethod -
 *          HTTP method used with voice_fallback_url
 * @property {string} voiceFallbackUrl -
 *          URL Twilio will request if an error occurs in executing TwiML
 * @property {string} voiceMethod - HTTP method to use with voice_url
 * @property {string} voiceStatusCallbackMethod - The voice_status_callback_method
 * @property {string} voiceStatusCallbackUrl -
 *          URL that Twilio will request with status updates
 * @property {string} voiceUrl - URL Twilio will request when receiving a call
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique Domain Sid
 */
function DomainInstance(version, payload, accountSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    apiVersion: payload.api_version, // jshint ignore:line,
    authType: payload.auth_type, // jshint ignore:line,
    dateCreated: deserialize.rfc2822DateTime(payload.date_created), // jshint ignore:line,
    dateUpdated: deserialize.rfc2822DateTime(payload.date_updated), // jshint ignore:line,
    domainName: payload.domain_name, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
    voiceFallbackMethod: payload.voice_fallback_method, // jshint ignore:line,
    voiceFallbackUrl: payload.voice_fallback_url, // jshint ignore:line,
    voiceMethod: payload.voice_method, // jshint ignore:line,
    voiceStatusCallbackMethod: payload.voice_status_callback_method, // jshint ignore:line,
    voiceStatusCallbackUrl: payload.voice_status_callback_url, // jshint ignore:line,
    voiceUrl: payload.voice_url, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(DomainInstance.prototype, InstanceResource.prototype);
DomainInstance.prototype.constructor = DomainInstance;

Object.defineProperty(DomainInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new DomainContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'authType', {
  get: function() {
    return this._properties.authType;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'domainName', {
  get: function() {
    return this._properties.domainName;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'voiceFallbackMethod', {
  get: function() {
    return this._properties.voiceFallbackMethod;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'voiceFallbackUrl', {
  get: function() {
    return this._properties.voiceFallbackUrl;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'voiceMethod', {
  get: function() {
    return this._properties.voiceMethod;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'voiceStatusCallbackMethod', {
  get: function() {
    return this._properties.voiceStatusCallbackMethod;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'voiceStatusCallbackUrl', {
  get: function() {
    return this._properties.voiceStatusCallbackUrl;
  },
});

Object.defineProperty(DomainInstance.prototype,
  'voiceUrl', {
  get: function() {
    return this._properties.voiceUrl;
  },
});

/**
 * @description Fetch a DomainInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched DomainInstance
 */
DomainInstance.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new DomainInstance(
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
 * @description Update the DomainInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.apiVersion] - The api_version
 * @param {string} [opts.friendlyName] -
 *          A user-specified, human-readable name for the trigger.
 * @param {string} [opts.voiceFallbackMethod] - The voice_fallback_method
 * @param {string} [opts.voiceFallbackUrl] - The voice_fallback_url
 * @param {string} [opts.voiceMethod] - HTTP method to use with voice_url
 * @param {string} [opts.voiceStatusCallbackMethod] -
 *          The voice_status_callback_method
 * @param {string} [opts.voiceStatusCallbackUrl] - The voice_status_callback_url
 * @param {string} [opts.voiceUrl] - The voice_url
 * @param {function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated DomainInstance
 */
DomainInstance.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'ApiVersion': opts.apiVersion,
    'FriendlyName': opts.friendlyName,
    'VoiceFallbackMethod': opts.voiceFallbackMethod,
    'VoiceFallbackUrl': opts.voiceFallbackUrl,
    'VoiceMethod': opts.voiceMethod,
    'VoiceStatusCallbackMethod': opts.voiceStatusCallbackMethod,
    'VoiceStatusCallbackUrl': opts.voiceStatusCallbackUrl,
    'VoiceUrl': opts.voiceUrl
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new DomainInstance(
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
 * @description Deletes the DomainInstance
 *
 * @param {function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
DomainInstance.prototype.remove = function remove(callback) {
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
 * Access the ipAccessControlListMappings
 *
 * @returns ipAccessControlListMappings
 */
DomainInstance.prototype.ipAccessControlListMappings = function
    ipAccessControlListMappings() {
  return this._proxy.ipAccessControlListMappings;
};

/**
 * Access the credentialListMappings
 *
 * @returns credentialListMappings
 */
DomainInstance.prototype.credentialListMappings = function
    credentialListMappings() {
  return this._proxy.credentialListMappings;
};


/**
 * @constructor
 * @augments InstanceContext
 * @description Initialize the DomainContext
 *
 * @property {IpAccessControlListMappingList} ipAccessControlListMappings -
 *          ipAccessControlListMappings resource
 * @property {CredentialListMappingList} credentialListMappings -
 *          credentialListMappings resource
 *
 * @param {V2010} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique Domain Sid
 */
function DomainContext(version, accountSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/SIP/Domains/<%= sid %>.json' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._ipAccessControlListMappings = undefined;
  this._credentialListMappings = undefined;
}

_.extend(DomainContext.prototype, InstanceContext.prototype);
DomainContext.prototype.constructor = DomainContext;

/**
 * @description Fetch a DomainInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched DomainInstance
 */
DomainContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new DomainInstance(
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
 * @description Update the DomainInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.apiVersion] - The api_version
 * @param {string} [opts.friendlyName] -
 *          A user-specified, human-readable name for the trigger.
 * @param {string} [opts.voiceFallbackMethod] - The voice_fallback_method
 * @param {string} [opts.voiceFallbackUrl] - The voice_fallback_url
 * @param {string} [opts.voiceMethod] - HTTP method to use with voice_url
 * @param {string} [opts.voiceStatusCallbackMethod] -
 *          The voice_status_callback_method
 * @param {string} [opts.voiceStatusCallbackUrl] - The voice_status_callback_url
 * @param {string} [opts.voiceUrl] - The voice_url
 * @param {function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated DomainInstance
 */
DomainContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'ApiVersion': opts.apiVersion,
    'FriendlyName': opts.friendlyName,
    'VoiceFallbackMethod': opts.voiceFallbackMethod,
    'VoiceFallbackUrl': opts.voiceFallbackUrl,
    'VoiceMethod': opts.voiceMethod,
    'VoiceStatusCallbackMethod': opts.voiceStatusCallbackMethod,
    'VoiceStatusCallbackUrl': opts.voiceStatusCallbackUrl,
    'VoiceUrl': opts.voiceUrl
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new DomainInstance(
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
 * @description Deletes the DomainInstance
 *
 * @param {function} [callback] - Callback to handle deleted record
 *
 * @returns Resolves to true if delete succeeds, false otherwise
 */
DomainContext.prototype.remove = function remove(callback) {
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

Object.defineProperty(DomainContext.prototype,
  'ipAccessControlListMappings', {
  get: function() {
    if (!this._ipAccessControlListMappings) {
      this._ipAccessControlListMappings = new IpAccessControlListMappingList(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }
    return this._ipAccessControlListMappings;
  },
});

Object.defineProperty(DomainContext.prototype,
  'credentialListMappings', {
  get: function() {
    if (!this._credentialListMappings) {
      this._credentialListMappings = new CredentialListMappingList(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }
    return this._credentialListMappings;
  },
});

module.exports = {
  DomainPage: DomainPage,
  DomainList: DomainList,
  DomainInstance: DomainInstance,
  DomainContext: DomainContext
};
