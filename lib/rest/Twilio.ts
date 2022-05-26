'use strict'

import { BaseTwilio, opts } from '../base/BaseTwilio';

/* jshint ignore:start */
/**
 * Twilio Client to interact with the Rest API
 *
 * @constructor Twilio
 * @property (Twilio.NumbersV2) numbersv2 - numbersv2 domain
 * @property (Twilio.ChatV1) chatv1 - chatv1 domain
 * @property (Twilio.ConversationsV1) conversationsv1 - conversationsv1 domain
 * @property (Twilio.BulkexportsV1) bulkexportsv1 - bulkexportsv1 domain
 * @property (Twilio.InsightsV1) insightsv1 - insightsv1 domain
 * @property (Twilio.TrusthubV1) trusthubv1 - trusthubv1 domain
 * @property (Twilio.FlexV1) flexv1 - flexv1 domain
 * @property (Twilio.VideoV1) videov1 - videov1 domain
 * @property (Twilio.FrontlineV1) frontlinev1 - frontlinev1 domain
 * @property (Twilio.TrunkingV1) trunkingv1 - trunkingv1 domain
 * @property (Twilio.NotifyV1) notifyv1 - notifyv1 domain
 * @property (Twilio.PricingV2) pricingv2 - pricingv2 domain
 * @property (Twilio.Api) api - api domain
 * @property (Twilio.StudioV1) studiov1 - studiov1 domain
 * @property (Twilio.SupersimV1) supersimv1 - supersimv1 domain
 * @property (Twilio.MonitorV1) monitorv1 - monitorv1 domain
 * @property (Twilio.VerifyV2) verifyv2 - verifyv2 domain
 * @property (Twilio.EventsV1) eventsv1 - eventsv1 domain
 * @property (Twilio.VoiceV1) voicev1 - voicev1 domain
 * @property (Twilio.IpMessagingV1) ipmessagingv1 - ipmessagingv1 domain
 * @property (Twilio.MediaV1) mediav1 - mediav1 domain
 * @property (Twilio.FaxV1) faxv1 - faxv1 domain
 * @property (Twilio.ServerlessV1) serverlessv1 - serverlessv1 domain
 * @property (Twilio.SyncV1) syncv1 - syncv1 domain
 * @property (Twilio.StudioV2) studiov2 - studiov2 domain
 * @property (Twilio.ChatV2) chatv2 - chatv2 domain
 * @property (Twilio.AccountsV1) accountsv1 - accountsv1 domain
 * @property (Twilio.ChatV3) chatv3 - chatv3 domain
 * @property (Twilio.MessagingV1) messagingv1 - messagingv1 domain
 * @property (Twilio.LookupsV1) lookupsv1 - lookupsv1 domain
 * @property (Twilio.AutopilotV1) autopilotv1 - autopilotv1 domain
 * @property (Twilio.TaskrouterV1) taskrouterv1 - taskrouterv1 domain
 * @property (Twilio.WirelessV1) wirelessv1 - wirelessv1 domain
 * @property (Twilio.ProxyV1) proxyv1 - proxyv1 domain
 * @property (Twilio.IpMessagingV2) ipmessagingv2 - ipmessagingv2 domain
 * @property (Twilio.PricingV1) pricingv1 - pricingv1 domain
 * @property (Twilio.Api.V2010.AccountContext.AddressesList) addresses - addresses resource
 * @property (Twilio.Api.V2010.AccountContext.ApplicationsList) applications - applications resource
 * @property (Twilio.Api.V2010.AccountContext.AuthorizedConnectAppsList) authorizedConnectApps - authorizedConnectApps resource
 * @property (Twilio.Api.V2010.AccountContext.AvailablePhoneNumbersList) availablePhoneNumbers - availablePhoneNumbers resource
 * @property (Twilio.Api.V2010.AccountContext.BalanceList) balance - balance resource
 * @property (Twilio.Api.V2010.AccountContext.CallsList) calls - calls resource
 * @property (Twilio.Api.V2010.AccountContext.ConferencesList) conferences - conferences resource
 * @property (Twilio.Api.V2010.AccountContext.ConnectAppsList) connectApps - connectApps resource
 * @property (Twilio.Api.V2010.AccountContext.IncomingPhoneNumbersList) incomingPhoneNumbers - incomingPhoneNumbers resource
 * @property (Twilio.Api.V2010.AccountContext.KeysList) keys - keys resource
 * @property (Twilio.Api.V2010.AccountContext.MessagesList) messages - messages resource
 * @property (Twilio.Api.V2010.AccountContext.NotificationsList) notifications - notifications resource
 * @property (Twilio.Api.V2010.AccountContext.OutgoingCallerIdsList) outgoingCallerIds - outgoingCallerIds resource
 * @property (Twilio.Api.V2010.AccountContext.QueuesList) queues - queues resource
 * @property (Twilio.Api.V2010.AccountContext.RecordingsList) recordings - recordings resource
 * @property (Twilio.Api.V2010.AccountContext.SIPList) sip - sip resource
 * @property (Twilio.Api.V2010.AccountContext.ShortCodesList) shortCodes - shortCodes resource
 * @property (Twilio.Api.V2010.AccountContext.SigningKeysList) signingKeys - signingKeys resource
 * @property (Twilio.Api.V2010.AccountContext.TokensList) tokens - tokens resource
 * @property (Twilio.Api.V2010.AccountContext.TranscriptionsList) transcriptions - transcriptions resource
 * @property (Twilio.Api.V2010.AccountContext.UsageList) usage - usage resource
 *
 * @param {string} username -
 *          The username used for authentication. This is normally account sid, but if using key/secret auth will be the api key sid.
 * @param {string} password -
 *          The password used for authentication. This is normally auth token, but if using key/secret auth will be the secret.
 * @param {opts} [opts] - The options argument
 *
 * @returns {Twilio} A new instance of Twilio client
 */
/* jshint ignore:end */


export class Twilio extends BaseTwilio {
  username: string
  password: string
  opts: opts
  _numbersv2: any
  _chatv1: any
  _conversationsv1: any
  _bulkexportsv1: any
  _insightsv1: any
  _trusthubv1: any
  _flexv1: any
  _videov1: any
  _frontlinev1: any
  _trunkingv1: any
  _notifyv1: any
  _pricingv2: any
  _api: any
  _studiov1: any
  _supersimv1: any
  _monitorv1: any
  _verifyv2: any
  _eventsv1: any
  _voicev1: any
  _ipmessagingv1: any
  _mediav1: any
  _faxv1: any
  _serverlessv1: any
  _syncv1: any
  _studiov2: any
  _chatv2: any
  _accountsv1: any
  _chatv3: any
  _messagingv1: any
  _lookupsv1: any
  _autopilotv1: any
  _taskrouterv1: any
  _wirelessv1: any
  _proxyv1: any
  _ipmessagingv2: any
  _pricingv1: any

  constructor(username: string, password: string, opts: opts) {
    super(username, password, opts);

    //Domains
    this._numbersv2 = undefined
    this._chatv1 = undefined
    this._conversationsv1 = undefined
    this._bulkexportsv1 = undefined
    this._insightsv1 = undefined
    this._trusthubv1 = undefined
    this._flexv1 = undefined
    this._videov1 = undefined
    this._frontlinev1 = undefined
    this._trunkingv1 = undefined
    this._notifyv1 = undefined
    this._pricingv2 = undefined
    this._api = undefined
    this._studiov1 = undefined
    this._supersimv1 = undefined
    this._monitorv1 = undefined
    this._verifyv2 = undefined
    this._eventsv1 = undefined
    this._voicev1 = undefined
    this._ipmessagingv1 = undefined
    this._mediav1 = undefined
    this._faxv1 = undefined
    this._serverlessv1 = undefined
    this._syncv1 = undefined
    this._studiov2 = undefined
    this._chatv2 = undefined
    this._accountsv1 = undefined
    this._chatv3 = undefined
    this._messagingv1 = undefined
    this._lookupsv1 = undefined
    this._autopilotv1 = undefined
    this._taskrouterv1 = undefined
    this._wirelessv1 = undefined
    this._proxyv1 = undefined
    this._ipmessagingv2 = undefined
    this._pricingv1 = undefined

    if (!opts.lazyLoading) {
        this._numbersv2
        this._chatv1
        this._conversationsv1
        this._bulkexportsv1
        this._insightsv1
        this._trusthubv1
        this._flexv1
        this._videov1
        this._frontlinev1
        this._trunkingv1
        this._notifyv1
        this._pricingv2
        this._api
        this._studiov1
        this._supersimv1
        this._monitorv1
        this._verifyv2
        this._eventsv1
        this._voicev1
        this._ipmessagingv1
        this._mediav1
        this._faxv1
        this._serverlessv1
        this._syncv1
        this._studiov2
        this._chatv2
        this._accountsv1
        this._chatv3
        this._messagingv1
        this._lookupsv1
        this._autopilotv1
        this._taskrouterv1
        this._wirelessv1
        this._proxyv1
        this._ipmessagingv2
        this._pricingv1
    }

  }

  get numbersv2() {
    if (!this._numbersv2) {
      var NumbersV2 = require('./NumbersV2');  /* jshint ignore:line */
      this._numbersv2 = new NumbersV2(this);
    }
    return this._numbersv2;
  }
  get chatv1() {
    if (!this._chatv1) {
      var ChatV1 = require('./ChatV1');  /* jshint ignore:line */
      this._chatv1 = new ChatV1(this);
    }
    return this._chatv1;
  }
  get conversationsv1() {
    if (!this._conversationsv1) {
      var ConversationsV1 = require('./ConversationsV1');  /* jshint ignore:line */
      this._conversationsv1 = new ConversationsV1(this);
    }
    return this._conversationsv1;
  }
  get bulkexportsv1() {
    if (!this._bulkexportsv1) {
      var BulkexportsV1 = require('./BulkexportsV1');  /* jshint ignore:line */
      this._bulkexportsv1 = new BulkexportsV1(this);
    }
    return this._bulkexportsv1;
  }
  get insightsv1() {
    if (!this._insightsv1) {
      var InsightsV1 = require('./InsightsV1');  /* jshint ignore:line */
      this._insightsv1 = new InsightsV1(this);
    }
    return this._insightsv1;
  }
  get trusthubv1() {
    if (!this._trusthubv1) {
      var TrusthubV1 = require('./TrusthubV1');  /* jshint ignore:line */
      this._trusthubv1 = new TrusthubV1(this);
    }
    return this._trusthubv1;
  }
  get flexv1() {
    if (!this._flexv1) {
      var FlexV1 = require('./FlexV1');  /* jshint ignore:line */
      this._flexv1 = new FlexV1(this);
    }
    return this._flexv1;
  }
  get videov1() {
    if (!this._videov1) {
      var VideoV1 = require('./VideoV1');  /* jshint ignore:line */
      this._videov1 = new VideoV1(this);
    }
    return this._videov1;
  }
  get frontlinev1() {
    if (!this._frontlinev1) {
      var FrontlineV1 = require('./FrontlineV1');  /* jshint ignore:line */
      this._frontlinev1 = new FrontlineV1(this);
    }
    return this._frontlinev1;
  }
  get trunkingv1() {
    if (!this._trunkingv1) {
      var TrunkingV1 = require('./TrunkingV1');  /* jshint ignore:line */
      this._trunkingv1 = new TrunkingV1(this);
    }
    return this._trunkingv1;
  }
  get notifyv1() {
    if (!this._notifyv1) {
      var NotifyV1 = require('./NotifyV1');  /* jshint ignore:line */
      this._notifyv1 = new NotifyV1(this);
    }
    return this._notifyv1;
  }
  get pricingv2() {
    if (!this._pricingv2) {
      var PricingV2 = require('./PricingV2');  /* jshint ignore:line */
      this._pricingv2 = new PricingV2(this);
    }
    return this._pricingv2;
  }
  get api() {
    if (!this._api) {
      var Api = require('./Api');  /* jshint ignore:line */
      this._api = new Api(this);
    }
    return this._api;
  }
  get studiov1() {
    if (!this._studiov1) {
      var StudioV1 = require('./StudioV1');  /* jshint ignore:line */
      this._studiov1 = new StudioV1(this);
    }
    return this._studiov1;
  }
  get supersimv1() {
    if (!this._supersimv1) {
      var SupersimV1 = require('./SupersimV1');  /* jshint ignore:line */
      this._supersimv1 = new SupersimV1(this);
    }
    return this._supersimv1;
  }
  get monitorv1() {
    if (!this._monitorv1) {
      var MonitorV1 = require('./MonitorV1');  /* jshint ignore:line */
      this._monitorv1 = new MonitorV1(this);
    }
    return this._monitorv1;
  }
  get verifyv2() {
    if (!this._verifyv2) {
      var VerifyV2 = require('./VerifyV2');  /* jshint ignore:line */
      this._verifyv2 = new VerifyV2(this);
    }
    return this._verifyv2;
  }
  get eventsv1() {
    if (!this._eventsv1) {
      var EventsV1 = require('./EventsV1');  /* jshint ignore:line */
      this._eventsv1 = new EventsV1(this);
    }
    return this._eventsv1;
  }
  get voicev1() {
    if (!this._voicev1) {
      var VoiceV1 = require('./VoiceV1');  /* jshint ignore:line */
      this._voicev1 = new VoiceV1(this);
    }
    return this._voicev1;
  }
  get ipmessagingv1() {
    if (!this._ipmessagingv1) {
      var IpMessagingV1 = require('./IpMessagingV1');  /* jshint ignore:line */
      this._ipmessagingv1 = new IpMessagingV1(this);
    }
    return this._ipmessagingv1;
  }
  get mediav1() {
    if (!this._mediav1) {
      var MediaV1 = require('./MediaV1');  /* jshint ignore:line */
      this._mediav1 = new MediaV1(this);
    }
    return this._mediav1;
  }
  get faxv1() {
    if (!this._faxv1) {
      var FaxV1 = require('./FaxV1');  /* jshint ignore:line */
      this._faxv1 = new FaxV1(this);
    }
    return this._faxv1;
  }
  get serverlessv1() {
    if (!this._serverlessv1) {
      var ServerlessV1 = require('./ServerlessV1');  /* jshint ignore:line */
      this._serverlessv1 = new ServerlessV1(this);
    }
    return this._serverlessv1;
  }
  get syncv1() {
    if (!this._syncv1) {
      var SyncV1 = require('./SyncV1');  /* jshint ignore:line */
      this._syncv1 = new SyncV1(this);
    }
    return this._syncv1;
  }
  get studiov2() {
    if (!this._studiov2) {
      var StudioV2 = require('./StudioV2');  /* jshint ignore:line */
      this._studiov2 = new StudioV2(this);
    }
    return this._studiov2;
  }
  get chatv2() {
    if (!this._chatv2) {
      var ChatV2 = require('./ChatV2');  /* jshint ignore:line */
      this._chatv2 = new ChatV2(this);
    }
    return this._chatv2;
  }
  get accountsv1() {
    if (!this._accountsv1) {
      var AccountsV1 = require('./AccountsV1');  /* jshint ignore:line */
      this._accountsv1 = new AccountsV1(this);
    }
    return this._accountsv1;
  }
  get chatv3() {
    if (!this._chatv3) {
      var ChatV3 = require('./ChatV3');  /* jshint ignore:line */
      this._chatv3 = new ChatV3(this);
    }
    return this._chatv3;
  }
  get messagingv1() {
    if (!this._messagingv1) {
      var MessagingV1 = require('./MessagingV1');  /* jshint ignore:line */
      this._messagingv1 = new MessagingV1(this);
    }
    return this._messagingv1;
  }
  get lookupsv1() {
    if (!this._lookupsv1) {
      var LookupsV1 = require('./LookupsV1');  /* jshint ignore:line */
      this._lookupsv1 = new LookupsV1(this);
    }
    return this._lookupsv1;
  }
  get autopilotv1() {
    if (!this._autopilotv1) {
      var AutopilotV1 = require('./AutopilotV1');  /* jshint ignore:line */
      this._autopilotv1 = new AutopilotV1(this);
    }
    return this._autopilotv1;
  }
  get taskrouterv1() {
    if (!this._taskrouterv1) {
      var TaskrouterV1 = require('./TaskrouterV1');  /* jshint ignore:line */
      this._taskrouterv1 = new TaskrouterV1(this);
    }
    return this._taskrouterv1;
  }
  get wirelessv1() {
    if (!this._wirelessv1) {
      var WirelessV1 = require('./WirelessV1');  /* jshint ignore:line */
      this._wirelessv1 = new WirelessV1(this);
    }
    return this._wirelessv1;
  }
  get proxyv1() {
    if (!this._proxyv1) {
      var ProxyV1 = require('./ProxyV1');  /* jshint ignore:line */
      this._proxyv1 = new ProxyV1(this);
    }
    return this._proxyv1;
  }
  get ipmessagingv2() {
    if (!this._ipmessagingv2) {
      var IpMessagingV2 = require('./IpMessagingV2');  /* jshint ignore:line */
      this._ipmessagingv2 = new IpMessagingV2(this);
    }
    return this._ipmessagingv2;
  }
  get pricingv1() {
    if (!this._pricingv1) {
      var PricingV1 = require('./PricingV1');  /* jshint ignore:line */
      this._pricingv1 = new PricingV1(this);
    }
    return this._pricingv1;
  }

  get addresses() {
    return this.api.account.addresses;
  }
  get applications() {
    return this.api.account.applications;
  }
  get authorizedConnectApps() {
    return this.api.account.authorizedConnectApps;
  }
  get availablePhoneNumbers() {
    return this.api.account.availablePhoneNumbers;
  }
  get balance() {
    return this.api.account.balance;
  }
  get calls() {
    return this.api.account.calls;
  }
  get conferences() {
    return this.api.account.conferences;
  }
  get connectApps() {
    return this.api.account.connectApps;
  }
  get incomingPhoneNumbers() {
    return this.api.account.incomingPhoneNumbers;
  }
  get keys() {
    return this.api.account.keys;
  }
  get messages() {
    return this.api.account.messages;
  }
  get notifications() {
    return this.api.account.notifications;
  }
  get outgoingCallerIds() {
    return this.api.account.outgoingCallerIds;
  }
  get queues() {
    return this.api.account.queues;
  }
  get recordings() {
    return this.api.account.recordings;
  }
  get sip() {
    return this.api.account.sip;
  }
  get shortCodes() {
    return this.api.account.shortCodes;
  }
  get signingKeys() {
    return this.api.account.signingKeys;
  }
  get tokens() {
    return this.api.account.tokens;
  }
  get transcriptions() {
    return this.api.account.transcriptions;
  }
  get usage() {
    return this.api.account.usage;
  }
}
