/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2010 from "../../../V2010";
declare type UsageTriggerRecurring = "daily" | "monthly" | "yearly" | "alltime";
declare type UsageTriggerTriggerField = "count" | "usage" | "price";
declare type UsageTriggerUsageCategory = "a2p-registration-fees" | "agent-conference" | "amazon-polly" | "answering-machine-detection" | "authy-authentications" | "authy-calls-outbound" | "authy-monthly-fees" | "authy-phone-intelligence" | "authy-phone-verifications" | "authy-sms-outbound" | "call-progess-events" | "calleridlookups" | "calls" | "calls-client" | "calls-globalconference" | "calls-inbound" | "calls-inbound-local" | "calls-inbound-mobile" | "calls-inbound-tollfree" | "calls-outbound" | "calls-pay-verb-transactions" | "calls-recordings" | "calls-sip" | "calls-sip-inbound" | "calls-sip-outbound" | "calls-transfers" | "carrier-lookups" | "conversations" | "conversations-api-requests" | "conversations-conversation-events" | "conversations-endpoint-connectivity" | "conversations-events" | "conversations-participant-events" | "conversations-participants" | "cps" | "flex-usage" | "fraud-lookups" | "group-rooms" | "group-rooms-data-track" | "group-rooms-encrypted-media-recorded" | "group-rooms-media-downloaded" | "group-rooms-media-recorded" | "group-rooms-media-routed" | "group-rooms-media-stored" | "group-rooms-participant-minutes" | "group-rooms-recorded-minutes" | "imp-v1-usage" | "lookups" | "marketplace" | "marketplace-algorithmia-named-entity-recognition" | "marketplace-cadence-transcription" | "marketplace-cadence-translation" | "marketplace-capio-speech-to-text" | "marketplace-convriza-ababa" | "marketplace-deepgram-phrase-detector" | "marketplace-digital-segment-business-info" | "marketplace-facebook-offline-conversions" | "marketplace-google-speech-to-text" | "marketplace-ibm-watson-message-insights" | "marketplace-ibm-watson-message-sentiment" | "marketplace-ibm-watson-recording-analysis" | "marketplace-ibm-watson-tone-analyzer" | "marketplace-icehook-systems-scout" | "marketplace-infogroup-dataaxle-bizinfo" | "marketplace-keen-io-contact-center-analytics" | "marketplace-marchex-cleancall" | "marketplace-marchex-sentiment-analysis-for-sms" | "marketplace-marketplace-nextcaller-social-id" | "marketplace-mobile-commons-opt-out-classifier" | "marketplace-nexiwave-voicemail-to-text" | "marketplace-nextcaller-advanced-caller-identification" | "marketplace-nomorobo-spam-score" | "marketplace-payfone-tcpa-compliance" | "marketplace-remeeting-automatic-speech-recognition" | "marketplace-tcpa-defense-solutions-blacklist-feed" | "marketplace-telo-opencnam" | "marketplace-truecnam-true-spam" | "marketplace-twilio-caller-name-lookup-us" | "marketplace-twilio-carrier-information-lookup" | "marketplace-voicebase-pci" | "marketplace-voicebase-transcription" | "marketplace-voicebase-transcription-custom-vocabulary" | "marketplace-whitepages-pro-caller-identification" | "marketplace-whitepages-pro-phone-intelligence" | "marketplace-whitepages-pro-phone-reputation" | "marketplace-wolfarm-spoken-results" | "marketplace-wolfram-short-answer" | "marketplace-ytica-contact-center-reporting-analytics" | "mediastorage" | "mms" | "mms-inbound" | "mms-inbound-longcode" | "mms-inbound-shortcode" | "mms-messages-carrierfees" | "mms-outbound" | "mms-outbound-longcode" | "mms-outbound-shortcode" | "monitor-reads" | "monitor-storage" | "monitor-writes" | "notify" | "notify-actions-attempts" | "notify-channels" | "number-format-lookups" | "pchat" | "pchat-users" | "peer-to-peer-rooms-participant-minutes" | "pfax" | "pfax-minutes" | "pfax-minutes-inbound" | "pfax-minutes-outbound" | "pfax-pages" | "phonenumbers" | "phonenumbers-cps" | "phonenumbers-emergency" | "phonenumbers-local" | "phonenumbers-mobile" | "phonenumbers-setups" | "phonenumbers-tollfree" | "premiumsupport" | "proxy" | "proxy-active-sessions" | "pstnconnectivity" | "pv" | "pv-composition-media-downloaded" | "pv-composition-media-encrypted" | "pv-composition-media-stored" | "pv-composition-minutes" | "pv-recording-compositions" | "pv-room-participants" | "pv-room-participants-au1" | "pv-room-participants-br1" | "pv-room-participants-ie1" | "pv-room-participants-jp1" | "pv-room-participants-sg1" | "pv-room-participants-us1" | "pv-room-participants-us2" | "pv-rooms" | "pv-sip-endpoint-registrations" | "recordings" | "recordingstorage" | "rooms-group-bandwidth" | "rooms-group-minutes" | "rooms-peer-to-peer-minutes" | "shortcodes" | "shortcodes-customerowned" | "shortcodes-mms-enablement" | "shortcodes-mps" | "shortcodes-random" | "shortcodes-uk" | "shortcodes-vanity" | "small-group-rooms" | "small-group-rooms-data-track" | "small-group-rooms-participant-minutes" | "sms" | "sms-inbound" | "sms-inbound-longcode" | "sms-inbound-shortcode" | "sms-messages-carrierfees" | "sms-messages-features" | "sms-messages-features-senderid" | "sms-outbound" | "sms-outbound-content-inspection" | "sms-outbound-longcode" | "sms-outbound-shortcode" | "speech-recognition" | "studio-engagements" | "sync" | "sync-actions" | "sync-endpoint-hours" | "sync-endpoint-hours-above-daily-cap" | "taskrouter-tasks" | "totalprice" | "transcriptions" | "trunking-cps" | "trunking-emergency-calls" | "trunking-origination" | "trunking-origination-local" | "trunking-origination-mobile" | "trunking-origination-tollfree" | "trunking-recordings" | "trunking-secure" | "trunking-termination" | "turnmegabytes" | "turnmegabytes-australia" | "turnmegabytes-brasil" | "turnmegabytes-germany" | "turnmegabytes-india" | "turnmegabytes-ireland" | "turnmegabytes-japan" | "turnmegabytes-singapore" | "turnmegabytes-useast" | "turnmegabytes-uswest" | "twilio-interconnect" | "verify-push" | "verify-totp" | "verify-whatsapp-conversations-business-initiated" | "video-recordings" | "virtual-agent" | "voice-insights" | "voice-insights-client-insights-on-demand-minute" | "voice-insights-ptsn-insights-on-demand-minute" | "voice-insights-sip-interface-insights-on-demand-minute" | "voice-insights-sip-trunking-insights-on-demand-minute" | "wireless" | "wireless-orders" | "wireless-orders-artwork" | "wireless-orders-bulk" | "wireless-orders-esim" | "wireless-orders-starter" | "wireless-usage" | "wireless-usage-commands" | "wireless-usage-commands-africa" | "wireless-usage-commands-asia" | "wireless-usage-commands-centralandsouthamerica" | "wireless-usage-commands-europe" | "wireless-usage-commands-home" | "wireless-usage-commands-northamerica" | "wireless-usage-commands-oceania" | "wireless-usage-commands-roaming" | "wireless-usage-data" | "wireless-usage-data-africa" | "wireless-usage-data-asia" | "wireless-usage-data-centralandsouthamerica" | "wireless-usage-data-custom-additionalmb" | "wireless-usage-data-custom-first5mb" | "wireless-usage-data-domestic-roaming" | "wireless-usage-data-europe" | "wireless-usage-data-individual-additionalgb" | "wireless-usage-data-individual-firstgb" | "wireless-usage-data-international-roaming-canada" | "wireless-usage-data-international-roaming-india" | "wireless-usage-data-international-roaming-mexico" | "wireless-usage-data-northamerica" | "wireless-usage-data-oceania" | "wireless-usage-data-pooled" | "wireless-usage-data-pooled-downlink" | "wireless-usage-data-pooled-uplink" | "wireless-usage-mrc" | "wireless-usage-mrc-custom" | "wireless-usage-mrc-individual" | "wireless-usage-mrc-pooled" | "wireless-usage-mrc-suspended" | "wireless-usage-sms" | "wireless-usage-voice";
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
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a TriggerInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TriggerInstance
     */
    fetch(callback?: (error: Error | null, item?: TriggerInstance) => any): Promise<TriggerInstance>;
    /**
     * Update a TriggerInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TriggerInstance
     */
    update(callback?: (error: Error | null, item?: TriggerInstance) => any): Promise<TriggerInstance>;
    /**
     * Update a TriggerInstance
     *
     * @param { TriggerContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TriggerInstance
     */
    update(params: TriggerContextUpdateOptions, callback?: (error: Error | null, item?: TriggerInstance) => any): Promise<TriggerInstance>;
    update(params?: any, callback?: any): Promise<TriggerInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TriggerContextSolution {
    accountSid?: string;
    sid?: string;
}
export declare class TriggerContextImpl implements TriggerContext {
    protected _version: V2010;
    protected _solution: TriggerContextSolution;
    protected _uri: string;
    constructor(_version: V2010, accountSid: string, sid: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<TriggerInstance>;
    update(params?: any, callback?: any): Promise<TriggerInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): TriggerContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare type TriggerCallbackMethod = "HEAD" | "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
interface TriggerPayload extends TwilioResponsePayload {
    usage_triggers: TriggerResource[];
}
interface TriggerResource {
    account_sid?: string | null;
    api_version?: string | null;
    callback_method?: TriggerCallbackMethod;
    callback_url?: string | null;
    current_value?: string | null;
    date_created?: Date | null;
    date_fired?: Date | null;
    date_updated?: Date | null;
    friendly_name?: string | null;
    recurring?: UsageTriggerRecurring;
    sid?: string | null;
    trigger_by?: UsageTriggerTriggerField;
    trigger_value?: string | null;
    uri?: string | null;
    usage_category?: UsageTriggerUsageCategory;
    usage_record_uri?: string | null;
}
export declare class TriggerInstance {
    protected _version: V2010;
    protected _solution: TriggerContextSolution;
    protected _context?: TriggerContext;
    constructor(_version: V2010, payload: TriggerResource, accountSid: string, sid?: string);
    /**
     * The SID of the Account that this trigger monitors
     */
    accountSid?: string | null;
    /**
     * The API version used to create the resource
     */
    apiVersion?: string | null;
    /**
     * The HTTP method we use to call callback_url
     */
    callbackMethod?: TriggerCallbackMethod;
    /**
     * he URL we call when the trigger fires
     */
    callbackUrl?: string | null;
    /**
     * The current value of the field the trigger is watching
     */
    currentValue?: string | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT that the trigger was last fired
     */
    dateFired?: Date | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The string that you assigned to describe the trigger
     */
    friendlyName?: string | null;
    recurring?: UsageTriggerRecurring;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    triggerBy?: UsageTriggerTriggerField;
    /**
     * The value at which the trigger will fire
     */
    triggerValue?: string | null;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`
     */
    uri?: string | null;
    usageCategory?: UsageTriggerUsageCategory;
    /**
     * The URI of the UsageRecord resource this trigger watches
     */
    usageRecordUri?: string | null;
    private get _proxy();
    /**
     * Remove a TriggerInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a TriggerInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TriggerInstance
     */
    fetch(callback?: (error: Error | null, item?: TriggerInstance) => any): Promise<TriggerInstance>;
    /**
     * Update a TriggerInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TriggerInstance
     */
    update(callback?: (error: Error | null, item?: TriggerInstance) => any): Promise<TriggerInstance>;
    /**
     * Update a TriggerInstance
     *
     * @param { TriggerContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TriggerInstance
     */
    update(params: TriggerContextUpdateOptions, callback?: (error: Error | null, item?: TriggerInstance) => any): Promise<TriggerInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        apiVersion: string | null | undefined;
        callbackMethod: TriggerCallbackMethod | undefined;
        callbackUrl: string | null | undefined;
        currentValue: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateFired: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        friendlyName: string | null | undefined;
        recurring: UsageTriggerRecurring | undefined;
        sid: string | null | undefined;
        triggerBy: UsageTriggerTriggerField | undefined;
        triggerValue: string | null | undefined;
        uri: string | null | undefined;
        usageCategory: UsageTriggerUsageCategory | undefined;
        usageRecordUri: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface TriggerListInstance {
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
    create(params: TriggerListInstanceCreateOptions, callback?: (error: Error | null, item?: TriggerInstance) => any): Promise<TriggerInstance>;
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
    each(callback?: (item: TriggerInstance, done: (err?: Error) => void) => void): void;
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
    each(params?: TriggerListInstanceEachOptions, callback?: (item: TriggerInstance, done: (err?: Error) => void) => void): void;
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
    getPage(callback?: (error: Error | null, items: TriggerPage) => any): Promise<TriggerPage>;
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
    getPage(targetUrl?: string, callback?: (error: Error | null, items: TriggerPage) => any): Promise<TriggerPage>;
    getPage(params?: any, callback?: any): Promise<TriggerPage>;
    /**
     * Lists TriggerInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: TriggerInstance[]) => any): Promise<TriggerInstance[]>;
    /**
     * Lists TriggerInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TriggerListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: TriggerListInstanceOptions, callback?: (error: Error | null, items: TriggerInstance[]) => any): Promise<TriggerInstance[]>;
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
    page(callback?: (error: Error | null, items: TriggerPage) => any): Promise<TriggerPage>;
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
    page(params: TriggerListInstancePageOptions, callback?: (error: Error | null, items: TriggerPage) => any): Promise<TriggerPage>;
    page(params?: any, callback?: any): Promise<TriggerPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TriggerSolution {
    accountSid?: string;
}
export declare function TriggerListInstance(version: V2010, accountSid: string): TriggerListInstance;
export declare class TriggerPage extends Page<V2010, TriggerPayload, TriggerResource, TriggerInstance> {
    /**
     * Initialize the TriggerPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: TriggerSolution);
    /**
     * Build an instance of TriggerInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: TriggerResource): TriggerInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
