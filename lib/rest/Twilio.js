'use strict';

var _ = require('lodash');
var moduleInfo = require('../../package.json');
var Api = require('./Api');
var Chat = require('./Chat');
var IpMessaging = require('./IpMessaging');
var Lookups = require('./Lookups');
var Monitor = require('./Monitor');
var Notify = require('./Notify');
var Preview = require('./Preview');
var Pricing = require('./Pricing');
var RequestClient = require('../base/RequestClient');
var Taskrouter = require('./Taskrouter');
var Trunking = require('./Trunking');


/* jshint ignore:start */
/**
 * Twilio Client to interact with the Rest API
 *
 * @constructor Twilio
 *
 * @property {Twilio.Api} api - api domain
 * @property {Twilio.Chat} chat - chat domain
 * @property {Twilio.IpMessaging} ip_messaging - ip_messaging domain
 * @property {Twilio.Lookups} lookups - lookups domain
 * @property {Twilio.Monitor} monitor - monitor domain
 * @property {Twilio.Notify} notify - notify domain
 * @property {Twilio.Preview} preview - preview domain
 * @property {Twilio.Pricing} pricing - pricing domain
 * @property {Twilio.Taskrouter} taskrouter - taskrouter domain
 * @property {Twilio.Trunking} trunking - trunking domain
 * @property {Twilio.Api.V2010.AccountContext.AddressList} addresses -
 *          addresses resource
 * @property {Twilio.Api.V2010.AccountContext.ApplicationList} applications -
 *          applications resource
 * @property {Twilio.Api.V2010.AccountContext.AuthorizedConnectAppList} authorizedConnectApps -
 *          authorizedConnectApps resource
 * @property {Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryList} availablePhoneNumbers -
 *          availablePhoneNumbers resource
 * @property {Twilio.Api.V2010.AccountContext.CallList} calls - calls resource
 * @property {Twilio.Api.V2010.AccountContext.ConferenceList} conferences -
 *          conferences resource
 * @property {Twilio.Api.V2010.AccountContext.ConnectAppList} connectApps -
 *          connectApps resource
 * @property {Twilio.Api.V2010.AccountContext.IncomingPhoneNumberList} incomingPhoneNumbers -
 *          incomingPhoneNumbers resource
 * @property {Twilio.Api.V2010.AccountContext.KeyList} keys - keys resource
 * @property {Twilio.Api.V2010.AccountContext.MessageList} messages -
 *          messages resource
 * @property {Twilio.Api.V2010.AccountContext.NewKeyList} newKeys -
 *          newKeys resource
 * @property {Twilio.Api.V2010.AccountContext.NewSigningKeyList} newSigningKeys -
 *          newSigningKeys resource
 * @property {Twilio.Api.V2010.AccountContext.NotificationList} notifications -
 *          notifications resource
 * @property {Twilio.Api.V2010.AccountContext.OutgoingCallerIdList} outgoingCallerIds -
 *          outgoingCallerIds resource
 * @property {Twilio.Api.V2010.AccountContext.QueueList} queues - queues resource
 * @property {Twilio.Api.V2010.AccountContext.RecordingList} recordings -
 *          recordings resource
 * @property {Twilio.Api.V2010.AccountContext.SandboxList} sandbox -
 *          sandbox resource
 * @property {Twilio.Api.V2010.AccountContext.SigningKeyList} signingKeys -
 *          signingKeys resource
 * @property {Twilio.Api.V2010.AccountContext.SipList} sip - sip resource
 * @property {Twilio.Api.V2010.AccountContext.ShortCodeList} shortCodes -
 *          shortCodes resource
 * @property {Twilio.Api.V2010.AccountContext.TokenList} tokens - tokens resource
 * @property {Twilio.Api.V2010.AccountContext.TranscriptionList} transcriptions -
 *          transcriptions resource
 * @property {Twilio.Api.V2010.AccountContext.UsageList} usage - usage resource
 * @property {Twilio.Api.V2010.AccountContext.ValidationRequestList} validationRequests -
 *          validationRequests resource
 *
 * @param {string} username - The username used for authentication
 * @param {string} password - The password used for authentication
 * @param {HttpClient} [httpClient] - The client used for http requests
 * @param {string} [opts.accountSid] -
 *          The default accountSid.
 *                This is set to username if not provided
 * @param {Environment} [opts.env] -
 *          The environment object.
 *                Defaults to process.env
 *
 * @returns {Twilio} A new instance of Twilio client
 */
/* jshint ignore:end */
function Twilio(username, password, httpClient, opts) {
  opts = opts || {};
  var env = opts.env || process.env;

  this.username = username || env.TWILIO_ACCOUNT_SID;
  this.password = password || env.TWILIO_AUTH_TOKEN;
  this.accountSid = opts.accountSid || this.username;
  this.httpClient = httpClient || new RequestClient();

  if (!this.username) {
    throw new Error('username is required');
  }

  if (!this.password) {
    throw new Error('password is required');
  }

  if (!_.startsWith(this.accountSid, 'AC')) {
    throw new Error('accountSid is required');
  }

  // Domains
  this._api = undefined;
  this._chat = undefined;
  this._ipMessaging = undefined;
  this._lookups = undefined;
  this._monitor = undefined;
  this._notify = undefined;
  this._preview = undefined;
  this._pricing = undefined;
  this._taskrouter = undefined;
  this._trunking = undefined;
}

/* jshint ignore:start */
/**
 * Makes a request to the Twilio API using the configured http client.
 * Authentication information is automatically added if none is provided.
 *
 * @param {object} opts - The options argument
 * @param {string} opts.method - The http method
 * @param {string} opts.uri - The request uri
 * @param {string} [opts.username] - The username used for auth
 * @param {string} [opts.password] - The password used for auth
 * @param {object} [opts.headers] - The request headers
 * @param {object} [opts.params] - The request params
 * @param {object} [opts.data] - The request data
 * @param {int} [opts.timeout] - The request timeout in milliseconds
 * @param {boolean} [opts.allowRedirects] - Should the client follow redirects
 */
/* jshint ignore:end */
Twilio.prototype.request = function request(opts) {
  opts = opts || {};

  if (!opts.method) {
    throw new Error('method is required');
  }

  if (!opts.uri) {
    throw new Error('uri is required');
  }

  var username = opts.username || this.username;
  var password = opts.password || this.password;

  var headers = opts.headers || {};
  headers['User-Agent'] = 'twilio-node/' + moduleInfo.version;
  headers['Accept-Charset'] = 'utf-8';

  if (opts.method === 'POST' && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
  }

  if (!headers.Accept) {
    headers.Accept = 'application/json';
  }

  return this.httpClient.request({
    method: opts.method,
    uri: opts.uri,
    username: username,
    password: password,
    headers: headers,
    params: opts.params,
    data: opts.data,
    timeout: opts.timeout,
    allowRedirects: opts.allowRedirects,
  });
};

Object.defineProperty(Twilio.prototype,
  'api', {
  get: function() {
    this._api = this._api || new Api(this);
    return this._api;
  },
});

Object.defineProperty(Twilio.prototype,
  'chat', {
  get: function() {
    this._chat = this._chat || new Chat(this);
    return this._chat;
  },
});

Object.defineProperty(Twilio.prototype,
  'ipMessaging', {
  get: function() {
    this._ipMessaging = this._ipMessaging || new IpMessaging(this);
    return this._ipMessaging;
  },
});

Object.defineProperty(Twilio.prototype,
  'lookups', {
  get: function() {
    this._lookups = this._lookups || new Lookups(this);
    return this._lookups;
  },
});

Object.defineProperty(Twilio.prototype,
  'monitor', {
  get: function() {
    this._monitor = this._monitor || new Monitor(this);
    return this._monitor;
  },
});

Object.defineProperty(Twilio.prototype,
  'notify', {
  get: function() {
    this._notify = this._notify || new Notify(this);
    return this._notify;
  },
});

Object.defineProperty(Twilio.prototype,
  'preview', {
  get: function() {
    this._preview = this._preview || new Preview(this);
    return this._preview;
  },
});

Object.defineProperty(Twilio.prototype,
  'pricing', {
  get: function() {
    this._pricing = this._pricing || new Pricing(this);
    return this._pricing;
  },
});

Object.defineProperty(Twilio.prototype,
  'taskrouter', {
  get: function() {
    this._taskrouter = this._taskrouter || new Taskrouter(this);
    return this._taskrouter;
  },
});

Object.defineProperty(Twilio.prototype,
  'trunking', {
  get: function() {
    this._trunking = this._trunking || new Trunking(this);
    return this._trunking;
  },
});

Object.defineProperty(Twilio.prototype,
  'account', {
  get: function() {
    return this.api.account;
  },
});

Object.defineProperty(Twilio.prototype,
  'accounts', {
  get: function() {
    return this.api.accounts;
  },
});

Object.defineProperty(Twilio.prototype,
  'addresses', {
  get: function() {
    return this.account.addresses;
  },
});

Object.defineProperty(Twilio.prototype,
  'applications', {
  get: function() {
    return this.account.applications;
  },
});

Object.defineProperty(Twilio.prototype,
  'authorizedConnectApps', {
  get: function() {
    return this.account.authorizedConnectApps;
  },
});

Object.defineProperty(Twilio.prototype,
  'availablePhoneNumbers', {
  get: function() {
    return this.account.availablePhoneNumbers;
  },
});

Object.defineProperty(Twilio.prototype,
  'calls', {
  get: function() {
    return this.account.calls;
  },
});

Object.defineProperty(Twilio.prototype,
  'conferences', {
  get: function() {
    return this.account.conferences;
  },
});

Object.defineProperty(Twilio.prototype,
  'connectApps', {
  get: function() {
    return this.account.connectApps;
  },
});

Object.defineProperty(Twilio.prototype,
  'incomingPhoneNumbers', {
  get: function() {
    return this.account.incomingPhoneNumbers;
  },
});

Object.defineProperty(Twilio.prototype,
  'keys', {
  get: function() {
    return this.account.keys;
  },
});

Object.defineProperty(Twilio.prototype,
  'messages', {
  get: function() {
    return this.account.messages;
  },
});

Object.defineProperty(Twilio.prototype,
  'newKeys', {
  get: function() {
    return this.account.newKeys;
  },
});

Object.defineProperty(Twilio.prototype,
  'newSigningKeys', {
  get: function() {
    return this.account.newSigningKeys;
  },
});

Object.defineProperty(Twilio.prototype,
  'notifications', {
  get: function() {
    return this.account.notifications;
  },
});

Object.defineProperty(Twilio.prototype,
  'outgoingCallerIds', {
  get: function() {
    return this.account.outgoingCallerIds;
  },
});

Object.defineProperty(Twilio.prototype,
  'queues', {
  get: function() {
    return this.account.queues;
  },
});

Object.defineProperty(Twilio.prototype,
  'recordings', {
  get: function() {
    return this.account.recordings;
  },
});

Object.defineProperty(Twilio.prototype,
  'sandbox', {
  get: function() {
    return this.account.sandbox;
  },
});

Object.defineProperty(Twilio.prototype,
  'signingKeys', {
  get: function() {
    return this.account.signingKeys;
  },
});

Object.defineProperty(Twilio.prototype,
  'sip', {
  get: function() {
    return this.account.sip;
  },
});

Object.defineProperty(Twilio.prototype,
  'shortCodes', {
  get: function() {
    return this.account.shortCodes;
  },
});

Object.defineProperty(Twilio.prototype,
  'tokens', {
  get: function() {
    return this.account.tokens;
  },
});

Object.defineProperty(Twilio.prototype,
  'transcriptions', {
  get: function() {
    return this.account.transcriptions;
  },
});

Object.defineProperty(Twilio.prototype,
  'usage', {
  get: function() {
    return this.account.usage;
  },
});

Object.defineProperty(Twilio.prototype,
  'validationRequests', {
  get: function() {
    return this.account.validationRequests;
  },
});

module.exports = Twilio;
