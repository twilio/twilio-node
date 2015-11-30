'use strict';

var AddressList = require('./account/address');
var ApplicationList = require('./account/application');
var AuthorizedConnectAppList = require('./account/authorizedConnectApp');
var AvailablePhoneNumberCountryList = require('./account/availablePhoneNumber');
var CallList = require('./account/call');
var ConferenceList = require('./account/conference');
var ConnectAppList = require('./account/connectApp');
var IncomingPhoneNumberList = require('./account/incomingPhoneNumber');
var InstanceContext = require('../../../base/InstanceContext');
var MessageList = require('./account/message');
var NotificationList = require('./account/notification');
var OutgoingCallerIdList = require('./account/outgoingCallerId');
var QueueList = require('./account/queue');
var RecordingList = require('./account/recording');
var SandboxList = require('./account/sandbox');
var SipList = require('./account/sip');
var SmsList = require('./account/sms');
var TokenList = require('./account/token');
var TranscriptionList = require('./account/transcription');
var UsageList = require('./account/usage');
var ValidationRequestList = require('./account/validationRequest');
var values = require('../../../base/values');

/**
 * Initialize the AccountContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} sid: Fetch by unique Account Sid
 *
 * @returns {class_name}
 */
function AccountContext(version, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% sid %>.json', this._solution);

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

Object.defineProperty(AccountContext.prototype, 'addresses', {
  get: function() {
    if (!this._addresses) {
      this._addresses = new AddressList(
        this._version,
        this._solution.accountSid,
      );
    }
    return this._addresses;
  },
});

Object.defineProperty(AccountContext.prototype, 'applications', {
  get: function() {
    if (!this._applications) {
      this._applications = new ApplicationList(
        this._version,
        this._solution.accountSid,
      );
    }
    return this._applications;
  },
});

Object.defineProperty(AccountContext.prototype, 'authorizedConnectApps', {
  get: function() {
    if (!this._authorizedConnectApps) {
      this._authorizedConnectApps = new AuthorizedConnectAppList(
        this._version,
        this._solution.accountSid,
      );
    }
    return this._authorizedConnectApps;
  },
});

Object.defineProperty(AccountContext.prototype, 'availablePhoneNumbers', {
  get: function() {
    if (!this._availablePhoneNumbers) {
      this._availablePhoneNumbers = new AvailablePhoneNumberCountryList(
        this._version,
        this._solution.accountSid,
      );
    }
    return this._availablePhoneNumbers;
  },
});

Object.defineProperty(AccountContext.prototype, 'calls', {
  get: function() {
    if (!this._calls) {
      this._calls = new CallList(
        this._version,
        this._solution.accountSid,
      );
    }
    return this._calls;
  },
});

Object.defineProperty(AccountContext.prototype, 'conferences', {
  get: function() {
    if (!this._conferences) {
      this._conferences = new ConferenceList(
        this._version,
        this._solution.accountSid,
      );
    }
    return this._conferences;
  },
});

Object.defineProperty(AccountContext.prototype, 'connectApps', {
  get: function() {
    if (!this._connectApps) {
      this._connectApps = new ConnectAppList(
        this._version,
        this._solution.accountSid,
      );
    }
    return this._connectApps;
  },
});

Object.defineProperty(AccountContext.prototype, 'incomingPhoneNumbers', {
  get: function() {
    if (!this._incomingPhoneNumbers) {
      this._incomingPhoneNumbers = new IncomingPhoneNumberList(
        this._version,
        this._solution.ownerAccountSid,
      );
    }
    return this._incomingPhoneNumbers;
  },
});

Object.defineProperty(AccountContext.prototype, 'messages', {
  get: function() {
    if (!this._messages) {
      this._messages = new MessageList(
        this._version,
        this._solution.accountSid,
      );
    }
    return this._messages;
  },
});

Object.defineProperty(AccountContext.prototype, 'notifications', {
  get: function() {
    if (!this._notifications) {
      this._notifications = new NotificationList(
        this._version,
        this._solution.accountSid,
      );
    }
    return this._notifications;
  },
});

Object.defineProperty(AccountContext.prototype, 'outgoingCallerIds', {
  get: function() {
    if (!this._outgoingCallerIds) {
      this._outgoingCallerIds = new OutgoingCallerIdList(
        this._version,
        this._solution.accountSid,
      );
    }
    return this._outgoingCallerIds;
  },
});

Object.defineProperty(AccountContext.prototype, 'queues', {
  get: function() {
    if (!this._queues) {
      this._queues = new QueueList(
        this._version,
        this._solution.accountSid,
      );
    }
    return this._queues;
  },
});

Object.defineProperty(AccountContext.prototype, 'recordings', {
  get: function() {
    if (!this._recordings) {
      this._recordings = new RecordingList(
        this._version,
        this._solution.accountSid,
      );
    }
    return this._recordings;
  },
});

Object.defineProperty(AccountContext.prototype, 'sandbox', {
  get: function() {
    if (!this._sandbox) {
      this._sandbox = new SandboxList(
        this._version,
        this._solution.accountSid,
      );
    }
    return this._sandbox;
  },
});

Object.defineProperty(AccountContext.prototype, 'sip', {
  get: function() {
    if (!this._sip) {
      this._sip = new SipList(
        this._version,
        this._solution.accountSid,
      );
    }
    return this._sip;
  },
});

Object.defineProperty(AccountContext.prototype, 'sms', {
  get: function() {
    if (!this._sms) {
      this._sms = new SmsList(
        this._version,
        this._solution.accountSid,
      );
    }
    return this._sms;
  },
});

Object.defineProperty(AccountContext.prototype, 'tokens', {
  get: function() {
    if (!this._tokens) {
      this._tokens = new TokenList(
        this._version,
        this._solution.accountSid,
      );
    }
    return this._tokens;
  },
});

Object.defineProperty(AccountContext.prototype, 'transcriptions', {
  get: function() {
    if (!this._transcriptions) {
      this._transcriptions = new TranscriptionList(
        this._version,
        this._solution.accountSid,
      );
    }
    return this._transcriptions;
  },
});

Object.defineProperty(AccountContext.prototype, 'usage', {
  get: function() {
    if (!this._usage) {
      this._usage = new UsageList(
        this._version,
        this._solution.accountSid,
      );
    }
    return this._usage;
  },
});

Object.defineProperty(AccountContext.prototype, 'validationRequests', {
  get: function() {
    if (!this._validationRequests) {
      this._validationRequests = new ValidationRequestList(
        this._version,
        this._solution.accountSid,
      );
    }
    return this._validationRequests;
  },
});

/**
 * Fetch a AccountInstance
 *
 * @returns Fetched AccountInstance
 */
AccountContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return AccountInstance(
    this._version,
    payload,
    sid=self._solution['sid'],
  );
};

/**
 * Update the AccountInstance
 *
 * @param string [opts.friendlyName] - FriendlyName to update
 * @param account.status [opts.status] - Status to update the Account with
 *
 * @returns Updated AccountInstance
 */
AccountContext.prototype.update = function update(self, opts) {
  var data = values.of({
    'Friendlyname': friendlyName,
    'Status': status,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return AccountInstance(
    this._version,
    payload,
    sid=self._solution['sid'],
  );
};

