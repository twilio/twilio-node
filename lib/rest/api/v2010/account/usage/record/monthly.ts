/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../../base/Page";
import Response from "../../../../../../http/response";
import V2010 from "../../../../V2010";
const deserialize = require("../../../../../../base/deserialize");
const serialize = require("../../../../../../base/serialize");
import { isValidPathParam } from "../../../../../../base/utility";

type UsageRecordMonthlyCategory =
  | "a2p-registration-fees"
  | "agent-conference"
  | "amazon-polly"
  | "answering-machine-detection"
  | "authy-authentications"
  | "authy-calls-outbound"
  | "authy-monthly-fees"
  | "authy-phone-intelligence"
  | "authy-phone-verifications"
  | "authy-sms-outbound"
  | "call-progess-events"
  | "calleridlookups"
  | "calls"
  | "calls-client"
  | "calls-globalconference"
  | "calls-inbound"
  | "calls-inbound-local"
  | "calls-inbound-mobile"
  | "calls-inbound-tollfree"
  | "calls-outbound"
  | "calls-pay-verb-transactions"
  | "calls-recordings"
  | "calls-sip"
  | "calls-sip-inbound"
  | "calls-sip-outbound"
  | "calls-transfers"
  | "carrier-lookups"
  | "conversations"
  | "conversations-api-requests"
  | "conversations-conversation-events"
  | "conversations-endpoint-connectivity"
  | "conversations-events"
  | "conversations-participant-events"
  | "conversations-participants"
  | "cps"
  | "flex-usage"
  | "fraud-lookups"
  | "group-rooms"
  | "group-rooms-data-track"
  | "group-rooms-encrypted-media-recorded"
  | "group-rooms-media-downloaded"
  | "group-rooms-media-recorded"
  | "group-rooms-media-routed"
  | "group-rooms-media-stored"
  | "group-rooms-participant-minutes"
  | "group-rooms-recorded-minutes"
  | "imp-v1-usage"
  | "lookups"
  | "marketplace"
  | "marketplace-algorithmia-named-entity-recognition"
  | "marketplace-cadence-transcription"
  | "marketplace-cadence-translation"
  | "marketplace-capio-speech-to-text"
  | "marketplace-convriza-ababa"
  | "marketplace-deepgram-phrase-detector"
  | "marketplace-digital-segment-business-info"
  | "marketplace-facebook-offline-conversions"
  | "marketplace-google-speech-to-text"
  | "marketplace-ibm-watson-message-insights"
  | "marketplace-ibm-watson-message-sentiment"
  | "marketplace-ibm-watson-recording-analysis"
  | "marketplace-ibm-watson-tone-analyzer"
  | "marketplace-icehook-systems-scout"
  | "marketplace-infogroup-dataaxle-bizinfo"
  | "marketplace-keen-io-contact-center-analytics"
  | "marketplace-marchex-cleancall"
  | "marketplace-marchex-sentiment-analysis-for-sms"
  | "marketplace-marketplace-nextcaller-social-id"
  | "marketplace-mobile-commons-opt-out-classifier"
  | "marketplace-nexiwave-voicemail-to-text"
  | "marketplace-nextcaller-advanced-caller-identification"
  | "marketplace-nomorobo-spam-score"
  | "marketplace-payfone-tcpa-compliance"
  | "marketplace-remeeting-automatic-speech-recognition"
  | "marketplace-tcpa-defense-solutions-blacklist-feed"
  | "marketplace-telo-opencnam"
  | "marketplace-truecnam-true-spam"
  | "marketplace-twilio-caller-name-lookup-us"
  | "marketplace-twilio-carrier-information-lookup"
  | "marketplace-voicebase-pci"
  | "marketplace-voicebase-transcription"
  | "marketplace-voicebase-transcription-custom-vocabulary"
  | "marketplace-whitepages-pro-caller-identification"
  | "marketplace-whitepages-pro-phone-intelligence"
  | "marketplace-whitepages-pro-phone-reputation"
  | "marketplace-wolfarm-spoken-results"
  | "marketplace-wolfram-short-answer"
  | "marketplace-ytica-contact-center-reporting-analytics"
  | "mediastorage"
  | "mms"
  | "mms-inbound"
  | "mms-inbound-longcode"
  | "mms-inbound-shortcode"
  | "mms-messages-carrierfees"
  | "mms-outbound"
  | "mms-outbound-longcode"
  | "mms-outbound-shortcode"
  | "monitor-reads"
  | "monitor-storage"
  | "monitor-writes"
  | "notify"
  | "notify-actions-attempts"
  | "notify-channels"
  | "number-format-lookups"
  | "pchat"
  | "pchat-users"
  | "peer-to-peer-rooms-participant-minutes"
  | "pfax"
  | "pfax-minutes"
  | "pfax-minutes-inbound"
  | "pfax-minutes-outbound"
  | "pfax-pages"
  | "phonenumbers"
  | "phonenumbers-cps"
  | "phonenumbers-emergency"
  | "phonenumbers-local"
  | "phonenumbers-mobile"
  | "phonenumbers-setups"
  | "phonenumbers-tollfree"
  | "premiumsupport"
  | "proxy"
  | "proxy-active-sessions"
  | "pstnconnectivity"
  | "pv"
  | "pv-composition-media-downloaded"
  | "pv-composition-media-encrypted"
  | "pv-composition-media-stored"
  | "pv-composition-minutes"
  | "pv-recording-compositions"
  | "pv-room-participants"
  | "pv-room-participants-au1"
  | "pv-room-participants-br1"
  | "pv-room-participants-ie1"
  | "pv-room-participants-jp1"
  | "pv-room-participants-sg1"
  | "pv-room-participants-us1"
  | "pv-room-participants-us2"
  | "pv-rooms"
  | "pv-sip-endpoint-registrations"
  | "recordings"
  | "recordingstorage"
  | "rooms-group-bandwidth"
  | "rooms-group-minutes"
  | "rooms-peer-to-peer-minutes"
  | "shortcodes"
  | "shortcodes-customerowned"
  | "shortcodes-mms-enablement"
  | "shortcodes-mps"
  | "shortcodes-random"
  | "shortcodes-uk"
  | "shortcodes-vanity"
  | "small-group-rooms"
  | "small-group-rooms-data-track"
  | "small-group-rooms-participant-minutes"
  | "sms"
  | "sms-inbound"
  | "sms-inbound-longcode"
  | "sms-inbound-shortcode"
  | "sms-messages-carrierfees"
  | "sms-messages-features"
  | "sms-messages-features-senderid"
  | "sms-outbound"
  | "sms-outbound-content-inspection"
  | "sms-outbound-longcode"
  | "sms-outbound-shortcode"
  | "speech-recognition"
  | "studio-engagements"
  | "sync"
  | "sync-actions"
  | "sync-endpoint-hours"
  | "sync-endpoint-hours-above-daily-cap"
  | "taskrouter-tasks"
  | "totalprice"
  | "transcriptions"
  | "trunking-cps"
  | "trunking-emergency-calls"
  | "trunking-origination"
  | "trunking-origination-local"
  | "trunking-origination-mobile"
  | "trunking-origination-tollfree"
  | "trunking-recordings"
  | "trunking-secure"
  | "trunking-termination"
  | "turnmegabytes"
  | "turnmegabytes-australia"
  | "turnmegabytes-brasil"
  | "turnmegabytes-germany"
  | "turnmegabytes-india"
  | "turnmegabytes-ireland"
  | "turnmegabytes-japan"
  | "turnmegabytes-singapore"
  | "turnmegabytes-useast"
  | "turnmegabytes-uswest"
  | "twilio-interconnect"
  | "verify-push"
  | "verify-totp"
  | "verify-whatsapp-conversations-business-initiated"
  | "video-recordings"
  | "virtual-agent"
  | "voice-insights"
  | "voice-insights-client-insights-on-demand-minute"
  | "voice-insights-ptsn-insights-on-demand-minute"
  | "voice-insights-sip-interface-insights-on-demand-minute"
  | "voice-insights-sip-trunking-insights-on-demand-minute"
  | "wireless"
  | "wireless-orders"
  | "wireless-orders-artwork"
  | "wireless-orders-bulk"
  | "wireless-orders-esim"
  | "wireless-orders-starter"
  | "wireless-usage"
  | "wireless-usage-commands"
  | "wireless-usage-commands-africa"
  | "wireless-usage-commands-asia"
  | "wireless-usage-commands-centralandsouthamerica"
  | "wireless-usage-commands-europe"
  | "wireless-usage-commands-home"
  | "wireless-usage-commands-northamerica"
  | "wireless-usage-commands-oceania"
  | "wireless-usage-commands-roaming"
  | "wireless-usage-data"
  | "wireless-usage-data-africa"
  | "wireless-usage-data-asia"
  | "wireless-usage-data-centralandsouthamerica"
  | "wireless-usage-data-custom-additionalmb"
  | "wireless-usage-data-custom-first5mb"
  | "wireless-usage-data-domestic-roaming"
  | "wireless-usage-data-europe"
  | "wireless-usage-data-individual-additionalgb"
  | "wireless-usage-data-individual-firstgb"
  | "wireless-usage-data-international-roaming-canada"
  | "wireless-usage-data-international-roaming-india"
  | "wireless-usage-data-international-roaming-mexico"
  | "wireless-usage-data-northamerica"
  | "wireless-usage-data-oceania"
  | "wireless-usage-data-pooled"
  | "wireless-usage-data-pooled-downlink"
  | "wireless-usage-data-pooled-uplink"
  | "wireless-usage-mrc"
  | "wireless-usage-mrc-custom"
  | "wireless-usage-mrc-individual"
  | "wireless-usage-mrc-pooled"
  | "wireless-usage-mrc-suspended"
  | "wireless-usage-sms"
  | "wireless-usage-voice";

/**
 * Options to pass to each
 *
 * @property { UsageRecordMonthlyCategory } [category] The [usage category](https://www.twilio.com/docs/usage/api/usage-record#usage-categories) of the UsageRecord resources to read. Only UsageRecord resources in the specified category are retrieved.
 * @property { Date } [startDate] Only include usage that has occurred on or after this date. Specify the date in GMT and format as `YYYY-MM-DD`. You can also specify offsets from the current date, such as: `-30days`, which will set the start date to be 30 days before the current date.
 * @property { Date } [endDate] Only include usage that occurred on or before this date. Specify the date in GMT and format as `YYYY-MM-DD`.  You can also specify offsets from the current date, such as: `+30days`, which will set the end date to 30 days from the current date.
 * @property { boolean } [includeSubaccounts] Whether to include usage from the master account and all its subaccounts. Can be: `true` (the default) to include usage from the master account and all subaccounts or `false` to retrieve usage from only the specified account.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { Function } [callback] -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property { Function } [done] - Function to be called upon completion of streaming
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface MonthlyListInstanceEachOptions {
  category?: UsageRecordMonthlyCategory;
  startDate?: Date;
  endDate?: Date;
  includeSubaccounts?: boolean;
  pageSize?: number;
  callback?: (item: MonthlyInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { UsageRecordMonthlyCategory } [category] The [usage category](https://www.twilio.com/docs/usage/api/usage-record#usage-categories) of the UsageRecord resources to read. Only UsageRecord resources in the specified category are retrieved.
 * @property { Date } [startDate] Only include usage that has occurred on or after this date. Specify the date in GMT and format as `YYYY-MM-DD`. You can also specify offsets from the current date, such as: `-30days`, which will set the start date to be 30 days before the current date.
 * @property { Date } [endDate] Only include usage that occurred on or before this date. Specify the date in GMT and format as `YYYY-MM-DD`.  You can also specify offsets from the current date, such as: `+30days`, which will set the end date to 30 days from the current date.
 * @property { boolean } [includeSubaccounts] Whether to include usage from the master account and all its subaccounts. Can be: `true` (the default) to include usage from the master account and all subaccounts or `false` to retrieve usage from only the specified account.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface MonthlyListInstanceOptions {
  category?: UsageRecordMonthlyCategory;
  startDate?: Date;
  endDate?: Date;
  includeSubaccounts?: boolean;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { UsageRecordMonthlyCategory } [category] The [usage category](https://www.twilio.com/docs/usage/api/usage-record#usage-categories) of the UsageRecord resources to read. Only UsageRecord resources in the specified category are retrieved.
 * @property { Date } [startDate] Only include usage that has occurred on or after this date. Specify the date in GMT and format as `YYYY-MM-DD`. You can also specify offsets from the current date, such as: `-30days`, which will set the start date to be 30 days before the current date.
 * @property { Date } [endDate] Only include usage that occurred on or before this date. Specify the date in GMT and format as `YYYY-MM-DD`.  You can also specify offsets from the current date, such as: `+30days`, which will set the end date to 30 days from the current date.
 * @property { boolean } [includeSubaccounts] Whether to include usage from the master account and all its subaccounts. Can be: `true` (the default) to include usage from the master account and all subaccounts or `false` to retrieve usage from only the specified account.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface MonthlyListInstancePageOptions {
  category?: UsageRecordMonthlyCategory;
  startDate?: Date;
  endDate?: Date;
  includeSubaccounts?: boolean;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface MonthlySolution {
  accountSid?: string;
}

export interface MonthlyListInstance {
  _version: V2010;
  _solution: MonthlySolution;
  _uri: string;

  /**
   * Streams MonthlyInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: MonthlyInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams MonthlyInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MonthlyListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: MonthlyListInstanceEachOptions,
    callback?: (item: MonthlyInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of MonthlyInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: MonthlyPage) => any
  ): Promise<MonthlyPage>;
  /**
   * Retrieve a single target page of MonthlyInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl?: string,
    callback?: (error: Error | null, items: MonthlyPage) => any
  ): Promise<MonthlyPage>;
  getPage(params?: any, callback?: any): Promise<MonthlyPage>;
  /**
   * Lists MonthlyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: MonthlyInstance[]) => any
  ): Promise<MonthlyInstance[]>;
  /**
   * Lists MonthlyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MonthlyListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: MonthlyListInstanceOptions,
    callback?: (error: Error | null, items: MonthlyInstance[]) => any
  ): Promise<MonthlyInstance[]>;
  list(params?: any, callback?: any): Promise<MonthlyInstance[]>;
  /**
   * Retrieve a single page of MonthlyInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: MonthlyPage) => any
  ): Promise<MonthlyPage>;
  /**
   * Retrieve a single page of MonthlyInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MonthlyListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: MonthlyListInstancePageOptions,
    callback?: (error: Error | null, items: MonthlyPage) => any
  ): Promise<MonthlyPage>;
  page(params?: any, callback?: any): Promise<MonthlyPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function MonthlyListInstance(
  version: V2010,
  accountSid: string
): MonthlyListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  const instance = {} as MonthlyListInstance;

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/Usage/Records/Monthly.json`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<MonthlyPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["category"] !== undefined) data["Category"] = params["category"];
    if (params["startDate"] !== undefined)
      data["StartDate"] = serialize.iso8601Date(params["startDate"]);
    if (params["endDate"] !== undefined)
      data["EndDate"] = serialize.iso8601Date(params["endDate"]);
    if (params["includeSubaccounts"] !== undefined)
      data["IncludeSubaccounts"] = serialize.bool(params["includeSubaccounts"]);
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new MonthlyPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl?: any,
    callback?: any
  ): Promise<MonthlyPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new MonthlyPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

interface MonthlyPayload extends TwilioResponsePayload {
  usage_records: MonthlyResource[];
}

interface MonthlyResource {
  account_sid?: string | null;
  api_version?: string | null;
  as_of?: string | null;
  category?: UsageRecordMonthlyCategory;
  count?: string | null;
  count_unit?: string | null;
  description?: string | null;
  end_date?: Date | null;
  price?: number | null;
  price_unit?: string | null;
  start_date?: Date | null;
  subresource_uris?: object | null;
  uri?: string | null;
  usage?: string | null;
  usage_unit?: string | null;
}

export class MonthlyInstance {
  constructor(
    protected _version: V2010,
    payload: MonthlyResource,
    accountSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.apiVersion = payload.api_version;
    this.asOf = payload.as_of;
    this.category = payload.category;
    this.count = payload.count;
    this.countUnit = payload.count_unit;
    this.description = payload.description;
    this.endDate = deserialize.iso8601Date(payload.end_date);
    this.price = payload.price;
    this.priceUnit = payload.price_unit;
    this.startDate = deserialize.iso8601Date(payload.start_date);
    this.subresourceUris = payload.subresource_uris;
    this.uri = payload.uri;
    this.usage = payload.usage;
    this.usageUnit = payload.usage_unit;
  }

  /**
   * The SID of the Account accrued the usage
   */
  accountSid?: string | null;
  /**
   * The API version used to create the resource
   */
  apiVersion?: string | null;
  /**
   * Usage records up to date as of this timestamp
   */
  asOf?: string | null;
  category?: UsageRecordMonthlyCategory;
  /**
   * The number of usage events
   */
  count?: string | null;
  /**
   * The units in which count is measured
   */
  countUnit?: string | null;
  /**
   * A plain-language description of the usage category
   */
  description?: string | null;
  /**
   * The last date for which usage is included in the UsageRecord
   */
  endDate?: Date | null;
  /**
   * The total price of the usage
   */
  price?: number | null;
  /**
   * The currency in which `price` is measured
   */
  priceUnit?: string | null;
  /**
   * The first date for which usage is included in this UsageRecord
   */
  startDate?: Date | null;
  /**
   * A list of related resources identified by their relative URIs
   */
  subresourceUris?: object | null;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`
   */
  uri?: string | null;
  /**
   * The amount of usage
   */
  usage?: string | null;
  /**
   * The units in which usage is measured
   */
  usageUnit?: string | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      apiVersion: this.apiVersion,
      asOf: this.asOf,
      category: this.category,
      count: this.count,
      countUnit: this.countUnit,
      description: this.description,
      endDate: this.endDate,
      price: this.price,
      priceUnit: this.priceUnit,
      startDate: this.startDate,
      subresourceUris: this.subresourceUris,
      uri: this.uri,
      usage: this.usage,
      usageUnit: this.usageUnit,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class MonthlyPage extends Page<
  V2010,
  MonthlyPayload,
  MonthlyResource,
  MonthlyInstance
> {
  /**
   * Initialize the MonthlyPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: MonthlySolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of MonthlyInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MonthlyResource): MonthlyInstance {
    return new MonthlyInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
