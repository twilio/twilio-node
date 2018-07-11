/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import Response = require('../../../../../../http/response');
import V2010 = require('../../../../V2010');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../../interfaces';
import { SerializableClass } from '../../../../../../interfaces';

declare function TodayList(version: V2010, accountSid: string): TodayListInstance

type TodayCategory = 'answering-machine-detection'|'authy-authentications'|'authy-calls-outbound'|'authy-monthly-fees'|'authy-phone-intelligence'|'authy-phone-verifications'|'authy-sms-outbound'|'call-progess-events'|'calleridlookups'|'calls'|'calls-client'|'calls-globalconference'|'calls-inbound'|'calls-inbound-local'|'calls-inbound-mobile'|'calls-inbound-tollfree'|'calls-outbound'|'calls-recordings'|'calls-sip'|'calls-sip-inbound'|'calls-sip-outbound'|'carrier-lookups'|'conversations'|'conversations-api-requests'|'conversations-conversation-events'|'conversations-endpoint-connectivity'|'conversations-events'|'conversations-participant-events'|'conversations-participants'|'cps'|'fraud-lookups'|'group-rooms'|'group-rooms-data-track'|'group-rooms-encrypted-media-recorded'|'group-rooms-media-downloaded'|'group-rooms-media-recorded'|'group-rooms-media-routed'|'group-rooms-media-stored'|'group-rooms-participant-minutes'|'group-rooms-recorded-minutes'|'ip-messaging'|'ip-messaging-commands'|'ip-messaging-data-storage'|'ip-messaging-data-transfer'|'ip-messaging-endpoint-connectivity'|'lookups'|'marketplace'|'marketplace-algorithmia-named-entity-recognition'|'marketplace-digital-segment-business-info'|'marketplace-google-speech-to-text'|'marketplace-ibm-watson-message-insights'|'marketplace-ibm-watson-message-sentiment'|'marketplace-ibm-watson-recording-analysis'|'marketplace-icehook-systems-scout'|'marketplace-infogroup-dataaxle-bizinfo'|'marketplace-cadence-transcription'|'marketplace-cadence-translation'|'marketplace-capio-speech-to-text'|'marketplace-facebook-offline-conversions'|'marketplace-keen-io-contact-center-analytics'|'marketplace-marchex-cleancall'|'marketplace-marchex-sentiment-analysis-for-sms'|'marketplace-marketplace-nextcaller-social-id'|'marketplace-mobile-commons-opt-out-classifier'|'marketplace-nexiwave-voicemail-to-text'|'marketplace-nextcaller-advanced-caller-identification'|'marketplace-nomorobo-spam-score'|'marketplace-payfone-tcpa-compliance'|'marketplace-telo-opencnam'|'marketplace-truecnam-true-spam'|'marketplace-twilio-caller-name-lookup-us'|'marketplace-twilio-carrier-information-lookup'|'marketplace-voicebase-pci'|'marketplace-voicebase-transcription'|'marketplace-whitepages-pro-caller-identification'|'marketplace-whitepages-pro-phone-intelligence'|'marketplace-whitepages-pro-phone-reputation'|'marketplace-wolfram-short-answer'|'marketplace-wolfarm-spoken-results'|'marketplace-deepgram-phrase-detector'|'marketplace-convriza-ababa'|'marketplace-ibm-watson-tone-analyzer'|'marketplace-remeeting-automatic-speech-recognition'|'marketplace-tcpa-defense-solutions-blacklist-feed'|'marketplace-voicebase-transcription-custom-vocabulary'|'marketplace-ytica-contact-center-reporting-analytics'|'mediastorage'|'mms'|'mms-inbound'|'mms-inbound-longcode'|'mms-inbound-shortcode'|'mms-outbound'|'mms-outbound-longcode'|'mms-outbound-shortcode'|'monitor-reads'|'monitor-storage'|'monitor-writes'|'notify'|'notify-actions-attempts'|'notify-channels'|'number-format-lookups'|'pchat'|'pchat-actions'|'pchat-aps'|'pchat-notifications'|'pchat-reads'|'pchat-users'|'pchat-messages'|'peer-to-peer-rooms-participant-minutes'|'pfax'|'pfax-minutes'|'pfax-minutes-inbound'|'pfax-minutes-outbound'|'pfax-pages'|'phonenumbers'|'phonenumbers-cps'|'phonenumbers-emergency'|'phonenumbers-local'|'phonenumbers-mobile'|'phonenumbers-setups'|'phonenumbers-tollfree'|'premiumsupport'|'proxy'|'pv'|'pv-composition-media-downloaded'|'pv-composition-media-encrypted'|'pv-composition-media-stored'|'pv-composition-minutes'|'pv-recording-compositions'|'pv-room-participants'|'pv-room-participants-au1'|'pv-room-participants-br1'|'pv-room-participants-ie1'|'pv-room-participants-jp1'|'pv-room-participants-sg1'|'pv-room-participants-us1'|'pv-room-participants-us2'|'pv-rooms'|'pv-sip-endpoint-registrations'|'recordings'|'recordingstorage'|'rooms-group-minutes'|'rooms-group-bandwidth'|'rooms-peer-to-peer-minutes'|'shortcodes'|'shortcodes-customerowned'|'shortcodes-mms-enablement'|'shortcodes-mps'|'shortcodes-random'|'shortcodes-uk'|'shortcodes-vanity'|'sms'|'sms-inbound'|'sms-inbound-longcode'|'sms-inbound-shortcode'|'sms-outbound'|'sms-outbound-content-inspection'|'sms-outbound-longcode'|'sms-outbound-shortcode'|'sms-messages-features'|'sms-messages-features-senderid'|'speech-recognition'|'studio-engagements'|'sync'|'sync-actions'|'sync-endpoint-hours'|'sync-endpoint-hours-above-daily-cap'|'taskrouter-tasks'|'totalprice'|'transcriptions'|'trunking-cps'|'trunking-emergency-calls'|'trunking-origination'|'trunking-origination-local'|'trunking-origination-mobile'|'trunking-origination-tollfree'|'trunking-recordings'|'trunking-secure'|'trunking-termination'|'turnmegabytes'|'turnmegabytes-australia'|'turnmegabytes-brasil'|'turnmegabytes-india'|'turnmegabytes-ireland'|'turnmegabytes-japan'|'turnmegabytes-singapore'|'turnmegabytes-useast'|'turnmegabytes-uswest'|'twilio-interconnect'|'video-recordings'|'voice-insights'|'voice-insights-client-insights-on-demand-minute'|'voice-insights-ptsn-insights-on-demand-minute'|'voice-insights-sip-interface-insights-on-demand-minute'|'voice-insights-sip-trunking-insights-on-demand-minute'|'wireless'|'wireless-orders'|'wireless-orders-artwork'|'wireless-orders-bulk'|'wireless-orders-esim'|'wireless-orders-starter'|'wireless-usage'|'wireless-usage-commands'|'wireless-usage-commands-africa'|'wireless-usage-commands-asia'|'wireless-usage-commands-centralandsouthamerica'|'wireless-usage-commands-europe'|'wireless-usage-commands-home'|'wireless-usage-commands-northamerica'|'wireless-usage-commands-oceania'|'wireless-usage-commands-roaming'|'wireless-usage-data'|'wireless-usage-data-africa'|'wireless-usage-data-asia'|'wireless-usage-data-centralandsouthamerica'|'wireless-usage-data-custom-additionalmb'|'wireless-usage-data-custom-first5mb'|'wireless-usage-data-domestic-roaming'|'wireless-usage-data-europe'|'wireless-usage-data-individual-additionalgb'|'wireless-usage-data-individual-firstgb'|'wireless-usage-data-international-roaming-canada'|'wireless-usage-data-international-roaming-india'|'wireless-usage-data-international-roaming-mexico'|'wireless-usage-data-northamerica'|'wireless-usage-data-oceania'|'wireless-usage-data-pooled'|'wireless-usage-data-pooled-downlink'|'wireless-usage-data-pooled-uplink'|'wireless-usage-mrc'|'wireless-usage-mrc-custom'|'wireless-usage-mrc-individual'|'wireless-usage-mrc-pooled'|'wireless-usage-mrc-suspended'|'wireless-usage-voice'|'wireless-usage-sms';

interface TodayResource {
  /**
   * The Account that accrued the usage.
   */
  account_sid: string;
  /**
   * The api_version
   */
  api_version: string;
  /**
   * The category of usage.  See [Usage Categories](https://www.twilio.com/docs/api/rest/usage-records#usage-categories) below.
   */
  category: TodayCategory;
  /**
   * The number of usage events (e.g. the number of calls).
   */
  count: string;
  /**
   * The units in which `Count` is measured.  For example `calls` for calls, `messages` for SMS.
   */
  count_unit: string;
  /**
   * A human-readable description of the usage category.
   */
  description: string;
  /**
   * The last date for which usage is included in this UsageRecord, formatted as YYYY-MM-DD.  All dates are in GMT.
   */
  end_date: Date;
  /**
   * The total price of the usage, in the currency associated with the account.
   */
  price: number;
  /**
   * The currency in which `Price` is measured, in [ISO 4127](http://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`).
   */
  price_unit: string;
  /**
   * The first date for which usage is included in this UsageRecord, formatted as YYYY-MM-DD.  All dates are in GMT.
   */
  start_date: Date;
  /**
   * Subresource Uris for this UsageRecord.  See [List Subresources](https://www.twilio.com/docs/api/rest/usage-records#list-subresources).
   */
  subresource_uris: string;
  /**
   * The URI that returns only this UsageRecord, relative to `https://api.twilio.com`.
   */
  uri: string;
  /**
   * The amount of billed usage (e.g. the number of call minutes billed for).  This is frequently the same as `Count`, but may be different for certain usage categories like calls, where `Count` represents the number of calls and `Usage` represents the number of rounded, billed minutes.
   */
  usage: string;
  /**
   * The units in which `Usage` is measured.  For example `minutes` for calls, `messages` for SMS.
   */
  usage_unit: string;
}

interface TodayPayload extends TodayResource, Page.TwilioResponsePayload {
}

interface TodaySolution {
  accountSid: string;
}

interface TodayListEachOptions extends ListEachOptions<TodayInstance> {
  /**
   * Only include usage of this [usage category](https://www.twilio.com/docs/api/rest/usage-records#usage-categories).
   */
  category?: TodayCategory;
  /**
   * Only include usage that has occurred on or before this date.  Format is YYYY-MM-DD.  All dates are in GMT.  As a convenience, you can also specify offsets to today.  For example, `EndDate=+30days` will make `EndDate` be 30 days from today.
   */
  endDate?: Date;
  /**
   * The include_subaccounts
   */
  includeSubaccounts?: boolean;
  /**
   * Only include usage that has occurred on or after this date.  Format is YYYY-MM-DD.  All dates are in GMT.  As a convenience, you can also specify offsets to today.  For example, `StartDate=-30days` will make `StartDate` be 30 days before today.
   */
  startDate?: Date;
}

interface TodayListOptions extends ListOptions<TodayInstance> {
  /**
   * Only include usage of this [usage category](https://www.twilio.com/docs/api/rest/usage-records#usage-categories).
   */
  category?: TodayCategory;
  /**
   * Only include usage that has occurred on or before this date.  Format is YYYY-MM-DD.  All dates are in GMT.  As a convenience, you can also specify offsets to today.  For example, `EndDate=+30days` will make `EndDate` be 30 days from today.
   */
  endDate?: Date;
  /**
   * The include_subaccounts
   */
  includeSubaccounts?: boolean;
  /**
   * Only include usage that has occurred on or after this date.  Format is YYYY-MM-DD.  All dates are in GMT.  As a convenience, you can also specify offsets to today.  For example, `StartDate=-30days` will make `StartDate` be 30 days before today.
   */
  startDate?: Date;
}

interface TodayListPageOptions extends PageOptions<TodayPage> {
  /**
   * Only include usage of this [usage category](https://www.twilio.com/docs/api/rest/usage-records#usage-categories).
   */
  category?: TodayCategory;
  /**
   * Only include usage that has occurred on or before this date.  Format is YYYY-MM-DD.  All dates are in GMT.  As a convenience, you can also specify offsets to today.  For example, `EndDate=+30days` will make `EndDate` be 30 days from today.
   */
  endDate?: Date;
  /**
   * The include_subaccounts
   */
  includeSubaccounts?: boolean;
  /**
   * Only include usage that has occurred on or after this date.  Format is YYYY-MM-DD.  All dates are in GMT.  As a convenience, you can also specify offsets to today.  For example, `StartDate=-30days` will make `StartDate` be 30 days before today.
   */
  startDate?: Date;
}

interface TodayListInstance {
  /**
   * Streams TodayInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  each(opts?: TodayListEachOptions): void;
  /**
   * Streams TodayInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  each(callback: (item: TodayInstance, done: (err?: Error) => void) => void): any;
  /**
   * Retrieve a single target page of TodayInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<TodayPage>;
  /**
   * Retrieve a single target page of TodayInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: TodayPage) => any): void;
  /**
   * Lists TodayInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: TodayListOptions): Promise<TodayInstance[]>;
  /**
   * Lists TodayInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: TodayListOptions, callback: (error: Error | null, items: TodayInstance[]) => any): void;
  /**
   * Lists TodayInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: TodayInstance[]) => any): void;
  /**
   * Retrieve a single page of TodayInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: TodayListPageOptions): Promise<TodayPage>;
  /**
   * Retrieve a single page of TodayInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: TodayListPageOptions, callback: (error: Error | null, items: TodayPage) => any): void;
  /**
   * Retrieve a single page of TodayInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: TodayPage) => any): void;
}

declare class TodayPage extends Page<V2010, TodayPayload, TodayResource, TodayInstance> {
  constructor(version: V2010, response: Response<string>, solution: TodaySolution);

  /**
   * Build an instance of TodayInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TodayPayload): TodayInstance;
}

declare class TodayInstance extends SerializableClass {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: V2010, payload: TodayPayload);

  /**
   * The Account that accrued the usage.
   */
  accountSid: string;
  /**
   * The api_version
   */
  apiVersion: string;
  /**
   * The category of usage.  See [Usage Categories](https://www.twilio.com/docs/api/rest/usage-records#usage-categories) below.
   */
  category: TodayCategory;
  /**
   * The number of usage events (e.g. the number of calls).
   */
  count: string;
  /**
   * The units in which `Count` is measured.  For example `calls` for calls, `messages` for SMS.
   */
  countUnit: string;
  /**
   * A human-readable description of the usage category.
   */
  description: string;
  /**
   * The last date for which usage is included in this UsageRecord, formatted as YYYY-MM-DD.  All dates are in GMT.
   */
  endDate: Date;
  /**
   * The total price of the usage, in the currency associated with the account.
   */
  price: number;
  /**
   * The currency in which `Price` is measured, in [ISO 4127](http://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`).
   */
  priceUnit: string;
  /**
   * The first date for which usage is included in this UsageRecord, formatted as YYYY-MM-DD.  All dates are in GMT.
   */
  startDate: Date;
  /**
   * Subresource Uris for this UsageRecord.  See [List Subresources](https://www.twilio.com/docs/api/rest/usage-records#list-subresources).
   */
  subresourceUris: string;
  /**
   * The URI that returns only this UsageRecord, relative to `https://api.twilio.com`.
   */
  uri: string;
  /**
   * The amount of billed usage (e.g. the number of call minutes billed for).  This is frequently the same as `Count`, but may be different for certain usage categories like calls, where `Count` represents the number of calls and `Usage` represents the number of rounded, billed minutes.
   */
  usage: string;
  /**
   * The units in which `Usage` is measured.  For example `minutes` for calls, `messages` for SMS.
   */
  usageUnit: string;
}

export { TodayCategory, TodayInstance, TodayList, TodayListEachOptions, TodayListInstance, TodayListOptions, TodayListPageOptions, TodayPage, TodayPayload, TodayResource, TodaySolution }
