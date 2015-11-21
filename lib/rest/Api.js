'use strict';

var _ = require('lodash');
var Domain = require('lib/base/domain').Domain;
var V2010 = require('lib/rest/api/V2010').V2010;

/**
 * Initialize api domain
 *
 * @constructor
 *
 * @params {Twilio} twilio - The twilio client
 *
 * @returns api domain
 */
function Api(twilio) {
  Domain.constructor.call(twilio, 'https://api.twilio.com');

  // Versions
  this._v2010 = undefined;
}

_.extend(Api.prototype, Domain.prototype);
Api.prototype.constructor = Api;

Object.defineProperty(Api.prototype, 'v2010', {
  get: function() {
    this._v2010 = this._v2010 || new V2010();
    return this._v2010;
  },
});

Object.defineProperty(Api.prototype, 'account', {
  get: function() {
    return this.v2010.account;
  },
});

Object.defineProperty(Api.prototype, 'accounts', {
  get: function() {
    return this.v2010.accounts;
  },
});

Object.defineProperty(Api.prototype, 'addresses', {
  get: function() {
    return this.account.addresses;
  },
});

Object.defineProperty(Api.prototype, 'applications', {
  get: function() {
    return this.account.applications;
  },
});

Object.defineProperty(Api.prototype, 'authorizedConnectApps', {
  get: function() {
    return this.account.authorizedConnectApps;
  },
});

Object.defineProperty(Api.prototype, 'availablePhoneNumbers', {
  get: function() {
    return this.account.availablePhoneNumbers;
  },
});

Object.defineProperty(Api.prototype, 'calls', {
  get: function() {
    return this.account.calls;
  },
});

Object.defineProperty(Api.prototype, 'conferences', {
  get: function() {
    return this.account.conferences;
  },
});

Object.defineProperty(Api.prototype, 'connectApps', {
  get: function() {
    return this.account.connectApps;
  },
});

Object.defineProperty(Api.prototype, 'incomingPhoneNumbers', {
  get: function() {
    return this.account.incomingPhoneNumbers;
  },
});

Object.defineProperty(Api.prototype, 'messages', {
  get: function() {
    return this.account.messages;
  },
});

Object.defineProperty(Api.prototype, 'notifications', {
  get: function() {
    return this.account.notifications;
  },
});

Object.defineProperty(Api.prototype, 'outgoingCallerIds', {
  get: function() {
    return this.account.outgoingCallerIds;
  },
});

Object.defineProperty(Api.prototype, 'queues', {
  get: function() {
    return this.account.queues;
  },
});

Object.defineProperty(Api.prototype, 'recordings', {
  get: function() {
    return this.account.recordings;
  },
});

Object.defineProperty(Api.prototype, 'sandbox', {
  get: function() {
    return this.account.sandbox;
  },
});

Object.defineProperty(Api.prototype, 'sip', {
  get: function() {
    return this.account.sip;
  },
});

Object.defineProperty(Api.prototype, 'sms', {
  get: function() {
    return this.account.sms;
  },
});

Object.defineProperty(Api.prototype, 'tokens', {
  get: function() {
    return this.account.tokens;
  },
});

Object.defineProperty(Api.prototype, 'transcriptions', {
  get: function() {
    return this.account.transcriptions;
  },
});

Object.defineProperty(Api.prototype, 'usage', {
  get: function() {
    return this.account.usage;
  },
});

Object.defineProperty(Api.prototype, 'validationRequests', {
  get: function() {
    return this.account.validationRequests;
  },
});

module.exports = Api;
