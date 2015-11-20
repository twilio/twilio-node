'use strict';

var _ = require('lodash');
var AccountContext = require('lib/rest/api/v2010/account').AccountContext;
var AccountList = require('lib/rest/api/v2010/account').AccountList;
var Version = require('lib/base/Version');


/**
 * Initialize the V2010 version of Api
 * 
 * @constructor
 * 
 * @param {Domain} domain - The twilio domain
 * 
 * @returns V2010 version of Api
 */
function V2010(domain) {
    Version.constructor.call(this, domain, '2010-04-01');
    
    // Resources
    this._accounts = undefined;
    this._account = undefined;
}
_.extend(V2010.prototype, Version.prototype);
V2010.prototype.constructor = V2010;

Object.defineProperty(V2010.prototype, 'accounts', {
    get: function() {
        this._accounts = this._accounts || new AccountList();
        return this._accounts;
    }
});

Object.defineProperty(V2010.prototype, 'account', {
    get: function() {
        if (!this._account) {
        this._account = new AccountContext(this, this._domain.twilio);
        }
        return this._account;
    },

    set: function(accountContext) {
        this._account = accountContext;
    }
});

Object.defineProperty(V2010.prototype, 'addresses', {
    get: function() {
        return this.account.addresses;
    }
});

Object.defineProperty(V2010.prototype, 'applications', {
    get: function() {
        return this.account.applications;
    }
});

Object.defineProperty(V2010.prototype, 'authorizedConnectApps', {
    get: function() {
        return this.account.authorizedConnectApps;
    }
});

Object.defineProperty(V2010.prototype, 'availablePhoneNumbers', {
    get: function() {
        return this.account.availablePhoneNumbers;
    }
});

Object.defineProperty(V2010.prototype, 'calls', {
    get: function() {
        return this.account.calls;
    }
});

Object.defineProperty(V2010.prototype, 'conferences', {
    get: function() {
        return this.account.conferences;
    }
});

Object.defineProperty(V2010.prototype, 'connectApps', {
    get: function() {
        return this.account.connectApps;
    }
});

Object.defineProperty(V2010.prototype, 'incomingPhoneNumbers', {
    get: function() {
        return this.account.incomingPhoneNumbers;
    }
});

Object.defineProperty(V2010.prototype, 'messages', {
    get: function() {
        return this.account.messages;
    }
});

Object.defineProperty(V2010.prototype, 'notifications', {
    get: function() {
        return this.account.notifications;
    }
});

Object.defineProperty(V2010.prototype, 'outgoingCallerIds', {
    get: function() {
        return this.account.outgoingCallerIds;
    }
});

Object.defineProperty(V2010.prototype, 'queues', {
    get: function() {
        return this.account.queues;
    }
});

Object.defineProperty(V2010.prototype, 'recordings', {
    get: function() {
        return this.account.recordings;
    }
});

Object.defineProperty(V2010.prototype, 'sandbox', {
    get: function() {
        return this.account.sandbox;
    }
});

Object.defineProperty(V2010.prototype, 'sip', {
    get: function() {
        return this.account.sip;
    }
});

Object.defineProperty(V2010.prototype, 'sms', {
    get: function() {
        return this.account.sms;
    }
});

Object.defineProperty(V2010.prototype, 'tokens', {
    get: function() {
        return this.account.tokens;
    }
});

Object.defineProperty(V2010.prototype, 'transcriptions', {
    get: function() {
        return this.account.transcriptions;
    }
});

Object.defineProperty(V2010.prototype, 'usage', {
    get: function() {
        return this.account.usage;
    }
});

Object.defineProperty(V2010.prototype, 'validationRequests', {
    get: function() {
        return this.account.validationRequests;
    }
});

module.exports = V2010;