'use strict';

var _ = require('lodash');
var Q = require('q');
var AddressList = require('./account/address').AddressList;
var ApplicationList = require('./account/application').ApplicationList;
var AuthorizedConnectAppList = require(
    './account/authorizedConnectApp').AuthorizedConnectAppList;
var AvailablePhoneNumberCountryList = require(
    './account/availablePhoneNumber').AvailablePhoneNumberCountryList;
var CallList = require('./account/call').CallList;
var ConferenceList = require('./account/conference').ConferenceList;
var ConnectAppList = require('./account/connectApp').ConnectAppList;
var IncomingPhoneNumberList = require(
    './account/incomingPhoneNumber').IncomingPhoneNumberList;
var InstanceContext = require('../../../base/InstanceContext');
var InstanceResource = require('../../../base/InstanceResource');
var MessageList = require('./account/message').MessageList;
var NotificationList = require('./account/notification').NotificationList;
var OutgoingCallerIdList = require(
    './account/outgoingCallerId').OutgoingCallerIdList;
var Page = require('../../../base/Page');
var QueueList = require('./account/queue').QueueList;
var RecordingList = require('./account/recording').RecordingList;
var SandboxList = require('./account/sandbox').SandboxList;
var SipList = require('./account/sip').SipList;
var SmsList = require('./account/sms').SmsList;
var TokenList = require('./account/token').TokenList;
var TranscriptionList = require('./account/transcription').TranscriptionList;
var UsageList = require('./account/usage').UsageList;
var ValidationRequestList = require(
    './account/validationRequest').ValidationRequestList;
var deserialize = require('../../../base/deserialize');
var values = require('../../../base/values');

var AccountPage;
var AccountList;
var AccountInstance;
var AccountContext;

/**
 * Initialize the AccountPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 *
 * @returns AccountPage
 */
function AccountPage(version, response) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {};
}

_.extend(AccountPage.prototype, Page.prototype);
AccountPage.prototype.constructor = AccountPage;

/**
 * Build an instance of AccountInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns AccountInstance
 */
AccountPage.prototype.getInstance = function getInstance(payload) {
  return new AccountInstance(
    this._version,
    payload
  );
};


/**
 * Initialize the AccountList
 *
 * @param {Version} version - Version that contains the resource
 *
 * @returns AccountList
 */
function AccountList(version) {
  function AccountListInstance(sid) {
    return AccountListInstance.get(sid);
  }

  AccountListInstance._version = version;
  // Path Solution
  AccountListInstance._solution = {};
  AccountListInstance._uri = _.template(
    '/Accounts.json' // jshint ignore:line
  )(AccountListInstance._solution);
  /**
   * Create a new AccountInstance
   *
   * @param {string} [opts.friendlyName] -
   *          A human readable description of the account
   *
   * @returns Newly created AccountInstance
   */
  AccountListInstance.create = function create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': opts.friendlyName
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new AccountInstance(
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

  /**
   * Streams AccountInstance records from the API.
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
   * @param {string} [opts.friendlyName] - FriendlyName to filter on
   * @param {account.status} [opts.status] - Status to filter on
   */
  AccountListInstance.each = function each(opts, callback) {
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
   * Lists AccountInstance records from the API as a list.
   *
   * @param {string} [opts.friendlyName] - FriendlyName to filter on
   * @param {account.status} [opts.status] - Status to filter on
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
  AccountListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of AccountInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.friendlyName] - FriendlyName to filter on
   * @param {account.status} [opts.status] - Status to filter on
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of AccountInstance
   */
  AccountListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': opts.friendlyName,
      'Status': opts.status,
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
      deferred.resolve(new AccountPage(
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

  /**
   * Constructs a AccountContext
   *
   * @param {string} sid - Fetch by unique Account Sid
   *
   * @returns AccountContext
   */
  AccountListInstance.get = function get(sid) {
    return new AccountContext(
      this._version,
      sid
    );
  };

  return AccountListInstance;
}


/**
 * Initialize the AccountContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} sid - Fetch by unique Account Sid
 *
 * @returns {AccountContext}
 */
function AccountInstance(version, payload, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    authToken: payload.auth_token, // jshint ignore:line,
    dateCreated: deserialize.rfc2822DateTime(payload.date_created), // jshint ignore:line,
    dateUpdated: deserialize.rfc2822DateTime(payload.date_updated), // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    ownerAccountSid: payload.owner_account_sid, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    status: payload.status, // jshint ignore:line,
    subresourceUris: payload.subresource_uris, // jshint ignore:line,
    type: payload.type, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    sid: sid || this._properties.sid,
  };
}

_.extend(AccountInstance.prototype, InstanceResource.prototype);
AccountInstance.prototype.constructor = AccountInstance;

Object.defineProperty(AccountInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new AccountContext(
        this._version,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(AccountInstance.prototype,
  'authToken', {
  get: function() {
    return this._properties.authToken;
  },
});

Object.defineProperty(AccountInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(AccountInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(AccountInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(AccountInstance.prototype,
  'ownerAccountSid', {
  get: function() {
    return this._properties.ownerAccountSid;
  },
});

Object.defineProperty(AccountInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(AccountInstance.prototype,
  'status', {
  get: function() {
    return this._properties.status;
  },
});

Object.defineProperty(AccountInstance.prototype,
  'subresourceUris', {
  get: function() {
    return this._properties.subresourceUris;
  },
});

Object.defineProperty(AccountInstance.prototype,
  'type', {
  get: function() {
    return this._properties.type;
  },
});

Object.defineProperty(AccountInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Fetch a AccountInstance
 *
 * @returns Fetched AccountInstance
 */
AccountInstance.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new AccountInstance(
      this._version,
      payload,
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
 * Update the AccountInstance
 *
 * @param {string} [opts.friendlyName] - FriendlyName to update
 * @param {account.status} [opts.status] - Status to update the Account with
 *
 * @returns Updated AccountInstance
 */
AccountInstance.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': opts.friendlyName,
    'Status': opts.status
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new AccountInstance(
      this._version,
      payload,
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
 * Access the addresses
 *
 * @returns addresses
 */
AccountInstance.prototype.addresses = function addresses() {
  return this._proxy.addresses;
};

/**
 * Access the applications
 *
 * @returns applications
 */
AccountInstance.prototype.applications = function applications() {
  return this._proxy.applications;
};

/**
 * Access the authorizedConnectApps
 *
 * @returns authorizedConnectApps
 */
AccountInstance.prototype.authorizedConnectApps = function
    authorizedConnectApps() {
  return this._proxy.authorizedConnectApps;
};

/**
 * Access the availablePhoneNumbers
 *
 * @returns availablePhoneNumbers
 */
AccountInstance.prototype.availablePhoneNumbers = function
    availablePhoneNumbers() {
  return this._proxy.availablePhoneNumbers;
};

/**
 * Access the calls
 *
 * @returns calls
 */
AccountInstance.prototype.calls = function calls() {
  return this._proxy.calls;
};

/**
 * Access the conferences
 *
 * @returns conferences
 */
AccountInstance.prototype.conferences = function conferences() {
  return this._proxy.conferences;
};

/**
 * Access the connectApps
 *
 * @returns connectApps
 */
AccountInstance.prototype.connectApps = function connectApps() {
  return this._proxy.connectApps;
};

/**
 * Access the incomingPhoneNumbers
 *
 * @returns incomingPhoneNumbers
 */
AccountInstance.prototype.incomingPhoneNumbers = function incomingPhoneNumbers()
    {
  return this._proxy.incomingPhoneNumbers;
};

/**
 * Access the messages
 *
 * @returns messages
 */
AccountInstance.prototype.messages = function messages() {
  return this._proxy.messages;
};

/**
 * Access the notifications
 *
 * @returns notifications
 */
AccountInstance.prototype.notifications = function notifications() {
  return this._proxy.notifications;
};

/**
 * Access the outgoingCallerIds
 *
 * @returns outgoingCallerIds
 */
AccountInstance.prototype.outgoingCallerIds = function outgoingCallerIds() {
  return this._proxy.outgoingCallerIds;
};

/**
 * Access the queues
 *
 * @returns queues
 */
AccountInstance.prototype.queues = function queues() {
  return this._proxy.queues;
};

/**
 * Access the recordings
 *
 * @returns recordings
 */
AccountInstance.prototype.recordings = function recordings() {
  return this._proxy.recordings;
};

/**
 * Access the sandbox
 *
 * @returns sandbox
 */
AccountInstance.prototype.sandbox = function sandbox() {
  return this._proxy.sandbox;
};

/**
 * Access the sip
 *
 * @returns sip
 */
AccountInstance.prototype.sip = function sip() {
  return this._proxy.sip;
};

/**
 * Access the sms
 *
 * @returns sms
 */
AccountInstance.prototype.sms = function sms() {
  return this._proxy.sms;
};

/**
 * Access the tokens
 *
 * @returns tokens
 */
AccountInstance.prototype.tokens = function tokens() {
  return this._proxy.tokens;
};

/**
 * Access the transcriptions
 *
 * @returns transcriptions
 */
AccountInstance.prototype.transcriptions = function transcriptions() {
  return this._proxy.transcriptions;
};

/**
 * Access the usage
 *
 * @returns usage
 */
AccountInstance.prototype.usage = function usage() {
  return this._proxy.usage;
};

/**
 * Access the validationRequests
 *
 * @returns validationRequests
 */
AccountInstance.prototype.validationRequests = function validationRequests() {
  return this._proxy.validationRequests;
};


/**
 * Initialize the AccountContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} sid - Fetch by unique Account Sid
 *
 * @returns {AccountContext}
 */
function AccountContext(version, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= sid %>.json' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._addresses = undefined;
  this._applications = undefined;
  this._authorizedConnectApps = undefined;
  this._availablePhoneNumbers = undefined;
  this._calls = undefined;
  this._conferences = undefined;
  this._connectApps = undefined;
  this._incomingPhoneNumbers = undefined;
  this._messages = undefined;
  this._notifications = undefined;
  this._outgoingCallerIds = undefined;
  this._queues = undefined;
  this._recordings = undefined;
  this._sandbox = undefined;
  this._sip = undefined;
  this._sms = undefined;
  this._tokens = undefined;
  this._transcriptions = undefined;
  this._usage = undefined;
  this._validationRequests = undefined;
}

_.extend(AccountContext.prototype, InstanceContext.prototype);
AccountContext.prototype.constructor = AccountContext;

/**
 * Fetch a AccountInstance
 *
 * @returns Fetched AccountInstance
 */
AccountContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new AccountInstance(
      this._version,
      payload,
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
 * Update the AccountInstance
 *
 * @param {string} [opts.friendlyName] - FriendlyName to update
 * @param {account.status} [opts.status] - Status to update the Account with
 *
 * @returns Updated AccountInstance
 */
AccountContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': opts.friendlyName,
    'Status': opts.status
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new AccountInstance(
      this._version,
      payload,
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

Object.defineProperty(AccountContext.prototype,
  'addresses', {
  get: function() {
    if (!this._addresses) {
      this._addresses = new AddressList(
        this._version,
        this._solution.sid
      );
    }
    return this._addresses;
  },
});

Object.defineProperty(AccountContext.prototype,
  'applications', {
  get: function() {
    if (!this._applications) {
      this._applications = new ApplicationList(
        this._version,
        this._solution.sid
      );
    }
    return this._applications;
  },
});

Object.defineProperty(AccountContext.prototype,
  'authorizedConnectApps', {
  get: function() {
    if (!this._authorizedConnectApps) {
      this._authorizedConnectApps = new AuthorizedConnectAppList(
        this._version,
        this._solution.sid
      );
    }
    return this._authorizedConnectApps;
  },
});

Object.defineProperty(AccountContext.prototype,
  'availablePhoneNumbers', {
  get: function() {
    if (!this._availablePhoneNumbers) {
      this._availablePhoneNumbers = new AvailablePhoneNumberCountryList(
        this._version,
        this._solution.sid
      );
    }
    return this._availablePhoneNumbers;
  },
});

Object.defineProperty(AccountContext.prototype,
  'calls', {
  get: function() {
    if (!this._calls) {
      this._calls = new CallList(
        this._version,
        this._solution.sid
      );
    }
    return this._calls;
  },
});

Object.defineProperty(AccountContext.prototype,
  'conferences', {
  get: function() {
    if (!this._conferences) {
      this._conferences = new ConferenceList(
        this._version,
        this._solution.sid
      );
    }
    return this._conferences;
  },
});

Object.defineProperty(AccountContext.prototype,
  'connectApps', {
  get: function() {
    if (!this._connectApps) {
      this._connectApps = new ConnectAppList(
        this._version,
        this._solution.sid
      );
    }
    return this._connectApps;
  },
});

Object.defineProperty(AccountContext.prototype,
  'incomingPhoneNumbers', {
  get: function() {
    if (!this._incomingPhoneNumbers) {
      this._incomingPhoneNumbers = new IncomingPhoneNumberList(
        this._version,
        this._solution.sid
      );
    }
    return this._incomingPhoneNumbers;
  },
});

Object.defineProperty(AccountContext.prototype,
  'messages', {
  get: function() {
    if (!this._messages) {
      this._messages = new MessageList(
        this._version,
        this._solution.sid
      );
    }
    return this._messages;
  },
});

Object.defineProperty(AccountContext.prototype,
  'notifications', {
  get: function() {
    if (!this._notifications) {
      this._notifications = new NotificationList(
        this._version,
        this._solution.sid
      );
    }
    return this._notifications;
  },
});

Object.defineProperty(AccountContext.prototype,
  'outgoingCallerIds', {
  get: function() {
    if (!this._outgoingCallerIds) {
      this._outgoingCallerIds = new OutgoingCallerIdList(
        this._version,
        this._solution.sid
      );
    }
    return this._outgoingCallerIds;
  },
});

Object.defineProperty(AccountContext.prototype,
  'queues', {
  get: function() {
    if (!this._queues) {
      this._queues = new QueueList(
        this._version,
        this._solution.sid
      );
    }
    return this._queues;
  },
});

Object.defineProperty(AccountContext.prototype,
  'recordings', {
  get: function() {
    if (!this._recordings) {
      this._recordings = new RecordingList(
        this._version,
        this._solution.sid
      );
    }
    return this._recordings;
  },
});

Object.defineProperty(AccountContext.prototype,
  'sandbox', {
  get: function() {
    if (!this._sandbox) {
      this._sandbox = new SandboxList(
        this._version,
        this._solution.sid
      );
    }
    return this._sandbox;
  },
});

Object.defineProperty(AccountContext.prototype,
  'sip', {
  get: function() {
    if (!this._sip) {
      this._sip = new SipList(
        this._version,
        this._solution.sid
      );
    }
    return this._sip;
  },
});

Object.defineProperty(AccountContext.prototype,
  'sms', {
  get: function() {
    if (!this._sms) {
      this._sms = new SmsList(
        this._version,
        this._solution.sid
      );
    }
    return this._sms;
  },
});

Object.defineProperty(AccountContext.prototype,
  'tokens', {
  get: function() {
    if (!this._tokens) {
      this._tokens = new TokenList(
        this._version,
        this._solution.sid
      );
    }
    return this._tokens;
  },
});

Object.defineProperty(AccountContext.prototype,
  'transcriptions', {
  get: function() {
    if (!this._transcriptions) {
      this._transcriptions = new TranscriptionList(
        this._version,
        this._solution.sid
      );
    }
    return this._transcriptions;
  },
});

Object.defineProperty(AccountContext.prototype,
  'usage', {
  get: function() {
    if (!this._usage) {
      this._usage = new UsageList(
        this._version,
        this._solution.sid
      );
    }
    return this._usage;
  },
});

Object.defineProperty(AccountContext.prototype,
  'validationRequests', {
  get: function() {
    if (!this._validationRequests) {
      this._validationRequests = new ValidationRequestList(
        this._version,
        this._solution.sid
      );
    }
    return this._validationRequests;
  },
});

module.exports = {
  AccountPage: AccountPage,
  AccountList: AccountList,
  AccountInstance: AccountInstance,
  AccountContext: AccountContext
};
