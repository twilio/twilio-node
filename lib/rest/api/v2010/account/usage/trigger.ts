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
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2010 from "../../../V2010";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

type UsageTriggerRecurring = "daily" | "monthly" | "yearly" | "alltime";

type UsageTriggerTriggerField = "count" | "usage" | "price";

type UsageTriggerUsageCategory =
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
 * Options to pass to update a TriggerInstance
 *
 * @property { string } [callbackMethod] The HTTP method we should use to call `callback_url`. Can be: `GET` or `POST` and the default is `POST`.
 * @property { string } [callbackUrl] The URL we should call using `callback_method` when the trigger fires.
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 */
export interface TriggerContextUpdateOptions {
  callbackMethod?: string;
  callbackUrl?: string;
  friendlyName?: string;
}

/**
 * Options to pass to create a TriggerInstance
 *
 * @property { string } callbackUrl The URL we should call using `callback_method` when the trigger fires.
 * @property { string } triggerValue The usage value at which the trigger should fire.  For convenience, you can use an offset value such as `+30` to specify a trigger_value that is 30 units more than the current usage value. Be sure to urlencode a `+` as `%2B`.
 * @property { UsageTriggerUsageCategory } usageCategory
 * @property { string } [callbackMethod] The HTTP method we should use to call `callback_url`. Can be: `GET` or `POST` and the default is `POST`.
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 * @property { UsageTriggerRecurring } [recurring]
 * @property { UsageTriggerTriggerField } [triggerBy]
 */
export interface TriggerListInstanceCreateOptions {
  callbackUrl: string;
  triggerValue: string;
  usageCategory: UsageTriggerUsageCategory;
  callbackMethod?: string;
  friendlyName?: string;
  recurring?: UsageTriggerRecurring;
  triggerBy?: UsageTriggerTriggerField;
}
/**
 * Options to pass to each
 *
 * @property { UsageTriggerRecurring } [recurring] The frequency of recurring UsageTriggers to read. Can be: `daily`, `monthly`, or `yearly` to read recurring UsageTriggers. An empty value or a value of `alltime` reads non-recurring UsageTriggers.
 * @property { UsageTriggerTriggerField } [triggerBy] The trigger field of the UsageTriggers to read.  Can be: `count`, `usage`, or `price` as described in the [UsageRecords documentation](https://www.twilio.com/docs/usage/api/usage-record#usage-count-price).
 * @property { UsageTriggerUsageCategory } [usageCategory] The usage category of the UsageTriggers to read. Must be a supported [usage categories](https://www.twilio.com/docs/usage/api/usage-record#usage-categories).
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
export interface TriggerListInstanceEachOptions {
  recurring?: UsageTriggerRecurring;
  triggerBy?: UsageTriggerTriggerField;
  usageCategory?: UsageTriggerUsageCategory;
  pageSize?: number;
  callback?: (item: TriggerInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { UsageTriggerRecurring } [recurring] The frequency of recurring UsageTriggers to read. Can be: `daily`, `monthly`, or `yearly` to read recurring UsageTriggers. An empty value or a value of `alltime` reads non-recurring UsageTriggers.
 * @property { UsageTriggerTriggerField } [triggerBy] The trigger field of the UsageTriggers to read.  Can be: `count`, `usage`, or `price` as described in the [UsageRecords documentation](https://www.twilio.com/docs/usage/api/usage-record#usage-count-price).
 * @property { UsageTriggerUsageCategory } [usageCategory] The usage category of the UsageTriggers to read. Must be a supported [usage categories](https://www.twilio.com/docs/usage/api/usage-record#usage-categories).
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface TriggerListInstanceOptions {
  recurring?: UsageTriggerRecurring;
  triggerBy?: UsageTriggerTriggerField;
  usageCategory?: UsageTriggerUsageCategory;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { UsageTriggerRecurring } [recurring] The frequency of recurring UsageTriggers to read. Can be: `daily`, `monthly`, or `yearly` to read recurring UsageTriggers. An empty value or a value of `alltime` reads non-recurring UsageTriggers.
 * @property { UsageTriggerTriggerField } [triggerBy] The trigger field of the UsageTriggers to read.  Can be: `count`, `usage`, or `price` as described in the [UsageRecords documentation](https://www.twilio.com/docs/usage/api/usage-record#usage-count-price).
 * @property { UsageTriggerUsageCategory } [usageCategory] The usage category of the UsageTriggers to read. Must be a supported [usage categories](https://www.twilio.com/docs/usage/api/usage-record#usage-categories).
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface TriggerListInstancePageOptions {
  recurring?: UsageTriggerRecurring;
  triggerBy?: UsageTriggerTriggerField;
  usageCategory?: UsageTriggerUsageCategory;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface TriggerContext {
  /**
   * Remove a TriggerInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a TriggerInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TriggerInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TriggerInstance) => any
  ): Promise<TriggerInstance>;

  /**
   * Update a TriggerInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TriggerInstance
   */
  update(
    callback?: (error: Error | null, item?: TriggerInstance) => any
  ): Promise<TriggerInstance>;
  /**
   * Update a TriggerInstance
   *
   * @param { TriggerContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TriggerInstance
   */
  update(
    params: TriggerContextUpdateOptions,
    callback?: (error: Error | null, item?: TriggerInstance) => any
  ): Promise<TriggerInstance>;
  update(params?: any, callback?: any): Promise<TriggerInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TriggerContextSolution {
  accountSid: string;
  sid: string;
}

export class TriggerContextImpl implements TriggerContext {
  protected _solution: TriggerContextSolution;
  protected _uri: string;

  constructor(protected _version: V2010, accountSid: string, sid: string) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { accountSid, sid };
    this._uri = `/Accounts/${accountSid}/Usage/Triggers/${sid}.json`;
  }

  remove(callback?: any): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(callback?: any): Promise<TriggerInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TriggerInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<TriggerInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["callbackMethod"] !== undefined)
      data["CallbackMethod"] = params["callbackMethod"];
    if (params["callbackUrl"] !== undefined)
      data["CallbackUrl"] = params["callbackUrl"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TriggerInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export type TriggerCallbackMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";

interface TriggerPayload extends TwilioResponsePayload {
  usage_triggers: TriggerResource[];
}

interface TriggerResource {
  account_sid: string;
  api_version: string;
  callback_method: TriggerCallbackMethod;
  callback_url: string;
  current_value: string;
  date_created: Date;
  date_fired: Date;
  date_updated: Date;
  friendly_name: string;
  recurring: UsageTriggerRecurring;
  sid: string;
  trigger_by: UsageTriggerTriggerField;
  trigger_value: string;
  uri: string;
  usage_category: UsageTriggerUsageCategory;
  usage_record_uri: string;
}

export class TriggerInstance {
  protected _solution: TriggerContextSolution;
  protected _context?: TriggerContext;

  constructor(
    protected _version: V2010,
    payload: TriggerResource,
    accountSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.apiVersion = payload.api_version;
    this.callbackMethod = payload.callback_method;
    this.callbackUrl = payload.callback_url;
    this.currentValue = payload.current_value;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateFired = deserialize.rfc2822DateTime(payload.date_fired);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.friendlyName = payload.friendly_name;
    this.recurring = payload.recurring;
    this.sid = payload.sid;
    this.triggerBy = payload.trigger_by;
    this.triggerValue = payload.trigger_value;
    this.uri = payload.uri;
    this.usageCategory = payload.usage_category;
    this.usageRecordUri = payload.usage_record_uri;

    this._solution = { accountSid, sid: sid || this.sid };
  }

  /**
   * The SID of the Account that this trigger monitors
   */
  accountSid: string;
  /**
   * The API version used to create the resource
   */
  apiVersion: string;
  /**
   * The HTTP method we use to call callback_url
   */
  callbackMethod: TriggerCallbackMethod;
  /**
   * he URL we call when the trigger fires
   */
  callbackUrl: string;
  /**
   * The current value of the field the trigger is watching
   */
  currentValue: string;
  /**
   * The RFC 2822 date and time in GMT that the resource was created
   */
  dateCreated: Date;
  /**
   * The RFC 2822 date and time in GMT that the trigger was last fired
   */
  dateFired: Date;
  /**
   * The RFC 2822 date and time in GMT that the resource was last updated
   */
  dateUpdated: Date;
  /**
   * The string that you assigned to describe the trigger
   */
  friendlyName: string;
  recurring: UsageTriggerRecurring;
  /**
   * The unique string that identifies the resource
   */
  sid: string;
  triggerBy: UsageTriggerTriggerField;
  /**
   * The value at which the trigger will fire
   */
  triggerValue: string;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`
   */
  uri: string;
  usageCategory: UsageTriggerUsageCategory;
  /**
   * The URI of the UsageRecord resource this trigger watches
   */
  usageRecordUri: string;

  private get _proxy(): TriggerContext {
    this._context =
      this._context ||
      new TriggerContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a TriggerInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a TriggerInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TriggerInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TriggerInstance) => any
  ): Promise<TriggerInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a TriggerInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TriggerInstance
   */
  update(
    callback?: (error: Error | null, item?: TriggerInstance) => any
  ): Promise<TriggerInstance>;
  /**
   * Update a TriggerInstance
   *
   * @param { TriggerContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TriggerInstance
   */
  update(
    params: TriggerContextUpdateOptions,
    callback?: (error: Error | null, item?: TriggerInstance) => any
  ): Promise<TriggerInstance>;
  update(params?: any, callback?: any): Promise<TriggerInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      apiVersion: this.apiVersion,
      callbackMethod: this.callbackMethod,
      callbackUrl: this.callbackUrl,
      currentValue: this.currentValue,
      dateCreated: this.dateCreated,
      dateFired: this.dateFired,
      dateUpdated: this.dateUpdated,
      friendlyName: this.friendlyName,
      recurring: this.recurring,
      sid: this.sid,
      triggerBy: this.triggerBy,
      triggerValue: this.triggerValue,
      uri: this.uri,
      usageCategory: this.usageCategory,
      usageRecordUri: this.usageRecordUri,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface TriggerSolution {
  accountSid: string;
}

export interface TriggerListInstance {
  _version: V2010;
  _solution: TriggerSolution;
  _uri: string;

  (sid: string): TriggerContext;
  get(sid: string): TriggerContext;

  /**
   * Create a TriggerInstance
   *
   * @param { TriggerListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TriggerInstance
   */
  create(
    params: TriggerListInstanceCreateOptions,
    callback?: (error: Error | null, item?: TriggerInstance) => any
  ): Promise<TriggerInstance>;
  create(params: any, callback?: any): Promise<TriggerInstance>;

  /**
   * Streams TriggerInstance records from the API.
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
    callback?: (item: TriggerInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams TriggerInstance records from the API.
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
   * @param { TriggerListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: TriggerListInstanceEachOptions,
    callback?: (item: TriggerInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of TriggerInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: TriggerPage) => any
  ): Promise<TriggerPage>;
  /**
   * Retrieve a single target page of TriggerInstance records from the API.
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
    callback?: (error: Error | null, items: TriggerPage) => any
  ): Promise<TriggerPage>;
  getPage(params?: any, callback?: any): Promise<TriggerPage>;
  /**
   * Lists TriggerInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: TriggerInstance[]) => any
  ): Promise<TriggerInstance[]>;
  /**
   * Lists TriggerInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TriggerListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: TriggerListInstanceOptions,
    callback?: (error: Error | null, items: TriggerInstance[]) => any
  ): Promise<TriggerInstance[]>;
  list(params?: any, callback?: any): Promise<TriggerInstance[]>;
  /**
   * Retrieve a single page of TriggerInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: TriggerPage) => any
  ): Promise<TriggerPage>;
  /**
   * Retrieve a single page of TriggerInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TriggerListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: TriggerListInstancePageOptions,
    callback?: (error: Error | null, items: TriggerPage) => any
  ): Promise<TriggerPage>;
  page(params?: any, callback?: any): Promise<TriggerPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function TriggerListInstance(
  version: V2010,
  accountSid: string
): TriggerListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as TriggerListInstance;

  instance.get = function get(sid): TriggerContext {
    return new TriggerContextImpl(version, accountSid, sid);
  };

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/Usage/Triggers.json`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<TriggerInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["callbackUrl"] === null || params["callbackUrl"] === undefined) {
      throw new Error("Required parameter \"params['callbackUrl']\" missing.");
    }

    if (
      params["triggerValue"] === null ||
      params["triggerValue"] === undefined
    ) {
      throw new Error("Required parameter \"params['triggerValue']\" missing.");
    }

    if (
      params["usageCategory"] === null ||
      params["usageCategory"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['usageCategory']\" missing."
      );
    }

    let data: any = {};

    data["CallbackUrl"] = params["callbackUrl"];

    data["TriggerValue"] = params["triggerValue"];

    data["UsageCategory"] = params["usageCategory"];
    if (params["callbackMethod"] !== undefined)
      data["CallbackMethod"] = params["callbackMethod"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["recurring"] !== undefined)
      data["Recurring"] = params["recurring"];
    if (params["triggerBy"] !== undefined)
      data["TriggerBy"] = params["triggerBy"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TriggerInstance(
          operationVersion,
          payload,
          instance._solution.accountSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<TriggerPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["recurring"] !== undefined)
      data["Recurring"] = params["recurring"];
    if (params["triggerBy"] !== undefined)
      data["TriggerBy"] = params["triggerBy"];
    if (params["usageCategory"] !== undefined)
      data["UsageCategory"] = params["usageCategory"];
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
        new TriggerPage(operationVersion, payload, instance._solution)
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
  ): Promise<TriggerPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new TriggerPage(instance._version, payload, instance._solution)
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

export class TriggerPage extends Page<
  V2010,
  TriggerPayload,
  TriggerResource,
  TriggerInstance
> {
  /**
   * Initialize the TriggerPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: TriggerSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of TriggerInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TriggerResource): TriggerInstance {
    return new TriggerInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
