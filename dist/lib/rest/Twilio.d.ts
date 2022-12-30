import { BaseTwilio, ClientOpts } from "../base/BaseTwilio";
/**
 * Twilio Client to interact with the Rest API
 *
 * @constructor Twilio
 * @property (Twilio.Accounts) accounts - accounts domain
 * @property (Twilio.Api) api - api domain
 * @property (Twilio.Autopilot) autopilot - autopilot domain
 * @property (Twilio.Bulkexports) bulkexports - bulkexports domain
 * @property (Twilio.Chat) chat - chat domain
 * @property (Twilio.Content) content - content domain
 * @property (Twilio.Conversations) conversations - conversations domain
 * @property (Twilio.Events) events - events domain
 * @property (Twilio.FlexApi) flexApi - flexApi domain
 * @property (Twilio.FrontlineApi) frontlineApi - frontlineApi domain
 * @property (Twilio.Insights) insights - insights domain
 * @property (Twilio.IpMessaging) ipMessaging - ipMessaging domain
 * @property (Twilio.Lookups) lookups - lookups domain
 * @property (Twilio.Media) media - media domain
 * @property (Twilio.Messaging) messaging - messaging domain
 * @property (Twilio.Microvisor) microvisor - microvisor domain
 * @property (Twilio.Monitor) monitor - monitor domain
 * @property (Twilio.Notify) notify - notify domain
 * @property (Twilio.Numbers) numbers - numbers domain
 * @property (Twilio.Oauth) oauth - oauth domain
 * @property (Twilio.Preview) preview - preview domain
 * @property (Twilio.Pricing) pricing - pricing domain
 * @property (Twilio.Proxy) proxy - proxy domain
 * @property (Twilio.Routes) routes - routes domain
 * @property (Twilio.Serverless) serverless - serverless domain
 * @property (Twilio.Studio) studio - studio domain
 * @property (Twilio.Supersim) supersim - supersim domain
 * @property (Twilio.Sync) sync - sync domain
 * @property (Twilio.Taskrouter) taskrouter - taskrouter domain
 * @property (Twilio.Trunking) trunking - trunking domain
 * @property (Twilio.Trusthub) trusthub - trusthub domain
 * @property (Twilio.Verify) verify - verify domain
 * @property (Twilio.Video) video - video domain
 * @property (Twilio.Voice) voice - voice domain
 * @property (Twilio.Wireless) wireless - wireless domain
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
 * @property (Twilio.Api.V2010.AccountContext.NewKeysList) newKeys - newKeys resource
 * @property (Twilio.Api.V2010.AccountContext.NewSigningKeysList) newSigningKeys - newSigningKeys resource
 * @property (Twilio.Api.V2010.AccountContext.NotificationsList) notifications - notifications resource
 * @property (Twilio.Api.V2010.AccountContext.OutgoingCallerIdsList) outgoingCallerIds - outgoingCallerIds resource
 * @property (Twilio.Api.V2010.AccountContext.QueuesList) queues - queues resource
 * @property (Twilio.Api.V2010.AccountContext.RecordingsList) recordings - recordings resource
 * @property (Twilio.Api.V2010.AccountContext.ShortCodesList) shortCodes - shortCodes resource
 * @property (Twilio.Api.V2010.AccountContext.SigningKeysList) signingKeys - signingKeys resource
 * @property (Twilio.Api.V2010.AccountContext.SipList) sip - sip resource
 * @property (Twilio.Api.V2010.AccountContext.TokensList) tokens - tokens resource
 * @property (Twilio.Api.V2010.AccountContext.TranscriptionsList) transcriptions - transcriptions resource
 * @property (Twilio.Api.V2010.AccountContext.UsageList) usage - usage resource
 * @property (Twilio.Api.V2010.AccountContext.ValidationRequestsList) validationRequests - validationRequests resource
 *
 * @param {string} username -
 *          The username used for authentication. This is normally account sid, but if using key/secret auth will be the api key sid.
 * @param {string} password -
 *          The password used for authentication. This is normally auth token, but if using key/secret auth will be the secret.
 * @param {ClientOpts} [opts] - The options argument
 *
 * @returns {Twilio} A new instance of Twilio client
 */
declare class Twilio extends BaseTwilio {
    _accounts: any;
    _api: any;
    _autopilot: any;
    _bulkexports: any;
    _chat: any;
    _content: any;
    _conversations: any;
    _events: any;
    _flexApi: any;
    _frontlineApi: any;
    _insights: any;
    _ipMessaging: any;
    _lookups: any;
    _media: any;
    _messaging: any;
    _microvisor: any;
    _monitor: any;
    _notify: any;
    _numbers: any;
    _oauth: any;
    _preview: any;
    _pricing: any;
    _proxy: any;
    _routes: any;
    _serverless: any;
    _studio: any;
    _supersim: any;
    _sync: any;
    _taskrouter: any;
    _trunking: any;
    _trusthub: any;
    _verify: any;
    _video: any;
    _voice: any;
    _wireless: any;
    constructor(username?: string, password?: string, opts?: ClientOpts);
    get accounts(): any;
    get api(): any;
    get autopilot(): any;
    get bulkexports(): any;
    get chat(): any;
    get content(): any;
    get conversations(): any;
    get events(): any;
    get flexApi(): any;
    get frontlineApi(): any;
    get insights(): any;
    get ipMessaging(): any;
    get lookups(): any;
    get media(): any;
    get messaging(): any;
    get microvisor(): any;
    get monitor(): any;
    get notify(): any;
    get numbers(): any;
    get oauth(): any;
    get preview(): any;
    get pricing(): any;
    get proxy(): any;
    get routes(): any;
    get serverless(): any;
    get studio(): any;
    get supersim(): any;
    get sync(): any;
    get taskrouter(): any;
    get trunking(): any;
    get trusthub(): any;
    get verify(): any;
    get video(): any;
    get voice(): any;
    get wireless(): any;
    get addresses(): any;
    get applications(): any;
    get authorizedConnectApps(): any;
    get availablePhoneNumbers(): any;
    get balance(): any;
    get calls(): any;
    get conferences(): any;
    get connectApps(): any;
    get incomingPhoneNumbers(): any;
    get keys(): any;
    get messages(): any;
    get newKeys(): any;
    get newSigningKeys(): any;
    get notifications(): any;
    get outgoingCallerIds(): any;
    get queues(): any;
    get recordings(): any;
    get shortCodes(): any;
    get signingKeys(): any;
    get sip(): any;
    get tokens(): any;
    get transcriptions(): any;
    get usage(): any;
    get validationRequests(): any;
}
export = Twilio;
