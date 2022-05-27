'use strict'

import { BaseTwilio, ClientOpts } from '../base/BaseTwilio';

/* jshint ignore:start */
/**
 * Twilio Client to interact with the Rest API
 *
 * @constructor Twilio
 * @property (Twilio.AccountsV1) accountsv1 - accountsv1 domain
 * @property (Twilio.Api) api - api domain
 * @property (Twilio.AutopilotV1) autopilotv1 - autopilotv1 domain
 * @property (Twilio.BulkexportsV1) bulkexportsv1 - bulkexportsv1 domain
 * @property (Twilio.ChatV1) chatv1 - chatv1 domain
 * @property (Twilio.ChatV2) chatv2 - chatv2 domain
 * @property (Twilio.ChatV3) chatv3 - chatv3 domain
 * @property (Twilio.ConversationsV1) conversationsv1 - conversationsv1 domain
 * @property (Twilio.EventsV1) eventsv1 - eventsv1 domain
 * @property (Twilio.FaxV1) faxv1 - faxv1 domain
 * @property (Twilio.FlexV1) flexv1 - flexv1 domain
 * @property (Twilio.FrontlineV1) frontlinev1 - frontlinev1 domain
 * @property (Twilio.InsightsV1) insightsv1 - insightsv1 domain
 * @property (Twilio.IpMessagingV1) ipmessagingv1 - ipmessagingv1 domain
 * @property (Twilio.IpMessagingV2) ipmessagingv2 - ipmessagingv2 domain
 * @property (Twilio.LookupsV1) lookupsv1 - lookupsv1 domain
 * @property (Twilio.MediaV1) mediav1 - mediav1 domain
 * @property (Twilio.MessagingV1) messagingv1 - messagingv1 domain
 * @property (Twilio.MonitorV1) monitorv1 - monitorv1 domain
 * @property (Twilio.NotifyV1) notifyv1 - notifyv1 domain
 * @property (Twilio.NumbersV2) numbersv2 - numbersv2 domain
 * @property (Twilio.PricingV1) pricingv1 - pricingv1 domain
 * @property (Twilio.PricingV2) pricingv2 - pricingv2 domain
 * @property (Twilio.ProxyV1) proxyv1 - proxyv1 domain
 * @property (Twilio.ServerlessV1) serverlessv1 - serverlessv1 domain
 * @property (Twilio.StudioV1) studiov1 - studiov1 domain
 * @property (Twilio.StudioV2) studiov2 - studiov2 domain
 * @property (Twilio.SupersimV1) supersimv1 - supersimv1 domain
 * @property (Twilio.SyncV1) syncv1 - syncv1 domain
 * @property (Twilio.TaskrouterV1) taskrouterv1 - taskrouterv1 domain
 * @property (Twilio.TrunkingV1) trunkingv1 - trunkingv1 domain
 * @property (Twilio.TrusthubV1) trusthubv1 - trusthubv1 domain
 * @property (Twilio.VerifyV2) verifyv2 - verifyv2 domain
 * @property (Twilio.VideoV1) videov1 - videov1 domain
 * @property (Twilio.VoiceV1) voicev1 - voicev1 domain
 * @property (Twilio.WirelessV1) wirelessv1 - wirelessv1 domain
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
 * @param {ClientOpts} [opts] - The options argument
 *
 * @returns {Twilio} A new instance of Twilio client
 */
/* jshint ignore:end */


export class Twilio extends BaseTwilio {
  _accountsv1: any
  _api: any
  _autopilotv1: any
  _bulkexportsv1: any
  _chatv1: any
  _chatv2: any
  _chatv3: any
  _conversationsv1: any
  _eventsv1: any
  _faxv1: any
  _flexv1: any
  _frontlinev1: any
  _insightsv1: any
  _ipmessagingv1: any
  _ipmessagingv2: any
  _lookupsv1: any
  _mediav1: any
  _messagingv1: any
  _monitorv1: any
  _notifyv1: any
  _numbersv2: any
  _pricingv1: any
  _pricingv2: any
  _proxyv1: any
  _serverlessv1: any
  _studiov1: any
  _studiov2: any
  _supersimv1: any
  _syncv1: any
  _taskrouterv1: any
  _trunkingv1: any
  _trusthubv1: any
  _verifyv2: any
  _videov1: any
  _voicev1: any
  _wirelessv1: any

  constructor(username: string, password: string, opts: ClientOpts) {
    super(username, password, opts);

    if (this.opts.lazyLoading === false) {
        this.accountsv1;
        this.api;
        this.autopilotv1;
        this.bulkexportsv1;
        this.chatv1;
        this.chatv2;
        this.chatv3;
        this.conversationsv1;
        this.eventsv1;
        this.faxv1;
        this.flexv1;
        this.frontlinev1;
        this.insightsv1;
        this.ipmessagingv1;
        this.ipmessagingv2;
        this.lookupsv1;
        this.mediav1;
        this.messagingv1;
        this.monitorv1;
        this.notifyv1;
        this.numbersv2;
        this.pricingv1;
        this.pricingv2;
        this.proxyv1;
        this.serverlessv1;
        this.studiov1;
        this.studiov2;
        this.supersimv1;
        this.syncv1;
        this.taskrouterv1;
        this.trunkingv1;
        this.trusthubv1;
        this.verifyv2;
        this.videov1;
        this.voicev1;
        this.wirelessv1;
    }

  }

  //Domains
  get accountsv1() {
    if (!this._accountsv1) {
      const AccountsV1 = require('./AccountsV1');  /* jshint ignore:line */
      this._accountsv1 = new AccountsV1(this);
    }
    return this._accountsv1;
  }
  get api() {
    if (!this._api) {
      const Api = require('./Api');  /* jshint ignore:line */
      this._api = new Api(this);
    }
    return this._api;
  }
  get autopilotv1() {
    if (!this._autopilotv1) {
      const AutopilotV1 = require('./AutopilotV1');  /* jshint ignore:line */
      this._autopilotv1 = new AutopilotV1(this);
    }
    return this._autopilotv1;
  }
  get bulkexportsv1() {
    if (!this._bulkexportsv1) {
      const BulkexportsV1 = require('./BulkexportsV1');  /* jshint ignore:line */
      this._bulkexportsv1 = new BulkexportsV1(this);
    }
    return this._bulkexportsv1;
  }
  get chatv1() {
    if (!this._chatv1) {
      const ChatV1 = require('./ChatV1');  /* jshint ignore:line */
      this._chatv1 = new ChatV1(this);
    }
    return this._chatv1;
  }
  get chatv2() {
    if (!this._chatv2) {
      const ChatV2 = require('./ChatV2');  /* jshint ignore:line */
      this._chatv2 = new ChatV2(this);
    }
    return this._chatv2;
  }
  get chatv3() {
    if (!this._chatv3) {
      const ChatV3 = require('./ChatV3');  /* jshint ignore:line */
      this._chatv3 = new ChatV3(this);
    }
    return this._chatv3;
  }
  get conversationsv1() {
    if (!this._conversationsv1) {
      const ConversationsV1 = require('./ConversationsV1');  /* jshint ignore:line */
      this._conversationsv1 = new ConversationsV1(this);
    }
    return this._conversationsv1;
  }
  get eventsv1() {
    if (!this._eventsv1) {
      const EventsV1 = require('./EventsV1');  /* jshint ignore:line */
      this._eventsv1 = new EventsV1(this);
    }
    return this._eventsv1;
  }
  get faxv1() {
    if (!this._faxv1) {
      const FaxV1 = require('./FaxV1');  /* jshint ignore:line */
      this._faxv1 = new FaxV1(this);
    }
    return this._faxv1;
  }
  get flexv1() {
    if (!this._flexv1) {
      const FlexV1 = require('./FlexV1');  /* jshint ignore:line */
      this._flexv1 = new FlexV1(this);
    }
    return this._flexv1;
  }
  get frontlinev1() {
    if (!this._frontlinev1) {
      const FrontlineV1 = require('./FrontlineV1');  /* jshint ignore:line */
      this._frontlinev1 = new FrontlineV1(this);
    }
    return this._frontlinev1;
  }
  get insightsv1() {
    if (!this._insightsv1) {
      const InsightsV1 = require('./InsightsV1');  /* jshint ignore:line */
      this._insightsv1 = new InsightsV1(this);
    }
    return this._insightsv1;
  }
  get ipmessagingv1() {
    if (!this._ipmessagingv1) {
      const IpMessagingV1 = require('./IpMessagingV1');  /* jshint ignore:line */
      this._ipmessagingv1 = new IpMessagingV1(this);
    }
    return this._ipmessagingv1;
  }
  get ipmessagingv2() {
    if (!this._ipmessagingv2) {
      const IpMessagingV2 = require('./IpMessagingV2');  /* jshint ignore:line */
      this._ipmessagingv2 = new IpMessagingV2(this);
    }
    return this._ipmessagingv2;
  }
  get lookupsv1() {
    if (!this._lookupsv1) {
      const LookupsV1 = require('./LookupsV1');  /* jshint ignore:line */
      this._lookupsv1 = new LookupsV1(this);
    }
    return this._lookupsv1;
  }
  get mediav1() {
    if (!this._mediav1) {
      const MediaV1 = require('./MediaV1');  /* jshint ignore:line */
      this._mediav1 = new MediaV1(this);
    }
    return this._mediav1;
  }
  get messagingv1() {
    if (!this._messagingv1) {
      const MessagingV1 = require('./MessagingV1');  /* jshint ignore:line */
      this._messagingv1 = new MessagingV1(this);
    }
    return this._messagingv1;
  }
  get monitorv1() {
    if (!this._monitorv1) {
      const MonitorV1 = require('./MonitorV1');  /* jshint ignore:line */
      this._monitorv1 = new MonitorV1(this);
    }
    return this._monitorv1;
  }
  get notifyv1() {
    if (!this._notifyv1) {
      const NotifyV1 = require('./NotifyV1');  /* jshint ignore:line */
      this._notifyv1 = new NotifyV1(this);
    }
    return this._notifyv1;
  }
  get numbersv2() {
    if (!this._numbersv2) {
      const NumbersV2 = require('./NumbersV2');  /* jshint ignore:line */
      this._numbersv2 = new NumbersV2(this);
    }
    return this._numbersv2;
  }
  get pricingv1() {
    if (!this._pricingv1) {
      const PricingV1 = require('./PricingV1');  /* jshint ignore:line */
      this._pricingv1 = new PricingV1(this);
    }
    return this._pricingv1;
  }
  get pricingv2() {
    if (!this._pricingv2) {
      const PricingV2 = require('./PricingV2');  /* jshint ignore:line */
      this._pricingv2 = new PricingV2(this);
    }
    return this._pricingv2;
  }
  get proxyv1() {
    if (!this._proxyv1) {
      const ProxyV1 = require('./ProxyV1');  /* jshint ignore:line */
      this._proxyv1 = new ProxyV1(this);
    }
    return this._proxyv1;
  }
  get serverlessv1() {
    if (!this._serverlessv1) {
      const ServerlessV1 = require('./ServerlessV1');  /* jshint ignore:line */
      this._serverlessv1 = new ServerlessV1(this);
    }
    return this._serverlessv1;
  }
  get studiov1() {
    if (!this._studiov1) {
      const StudioV1 = require('./StudioV1');  /* jshint ignore:line */
      this._studiov1 = new StudioV1(this);
    }
    return this._studiov1;
  }
  get studiov2() {
    if (!this._studiov2) {
      const StudioV2 = require('./StudioV2');  /* jshint ignore:line */
      this._studiov2 = new StudioV2(this);
    }
    return this._studiov2;
  }
  get supersimv1() {
    if (!this._supersimv1) {
      const SupersimV1 = require('./SupersimV1');  /* jshint ignore:line */
      this._supersimv1 = new SupersimV1(this);
    }
    return this._supersimv1;
  }
  get syncv1() {
    if (!this._syncv1) {
      const SyncV1 = require('./SyncV1');  /* jshint ignore:line */
      this._syncv1 = new SyncV1(this);
    }
    return this._syncv1;
  }
  get taskrouterv1() {
    if (!this._taskrouterv1) {
      const TaskrouterV1 = require('./TaskrouterV1');  /* jshint ignore:line */
      this._taskrouterv1 = new TaskrouterV1(this);
    }
    return this._taskrouterv1;
  }
  get trunkingv1() {
    if (!this._trunkingv1) {
      const TrunkingV1 = require('./TrunkingV1');  /* jshint ignore:line */
      this._trunkingv1 = new TrunkingV1(this);
    }
    return this._trunkingv1;
  }
  get trusthubv1() {
    if (!this._trusthubv1) {
      const TrusthubV1 = require('./TrusthubV1');  /* jshint ignore:line */
      this._trusthubv1 = new TrusthubV1(this);
    }
    return this._trusthubv1;
  }
  get verifyv2() {
    if (!this._verifyv2) {
      const VerifyV2 = require('./VerifyV2');  /* jshint ignore:line */
      this._verifyv2 = new VerifyV2(this);
    }
    return this._verifyv2;
  }
  get videov1() {
    if (!this._videov1) {
      const VideoV1 = require('./VideoV1');  /* jshint ignore:line */
      this._videov1 = new VideoV1(this);
    }
    return this._videov1;
  }
  get voicev1() {
    if (!this._voicev1) {
      const VoiceV1 = require('./VoiceV1');  /* jshint ignore:line */
      this._voicev1 = new VoiceV1(this);
    }
    return this._voicev1;
  }
  get wirelessv1() {
    if (!this._wirelessv1) {
      const WirelessV1 = require('./WirelessV1');  /* jshint ignore:line */
      this._wirelessv1 = new WirelessV1(this);
    }
    return this._wirelessv1;
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
