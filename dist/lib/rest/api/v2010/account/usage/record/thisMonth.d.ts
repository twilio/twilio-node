/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../../base/Page";
import Response from "../../../../../../http/response";
import V2010 from "../../../../V2010";
declare type UsageRecordThisMonthCategory = "a2p-registration-fees" | "agent-conference" | "amazon-polly" | "answering-machine-detection" | "authy-authentications" | "authy-calls-outbound" | "authy-monthly-fees" | "authy-phone-intelligence" | "authy-phone-verifications" | "authy-sms-outbound" | "call-progess-events" | "calleridlookups" | "calls" | "calls-client" | "calls-globalconference" | "calls-inbound" | "calls-inbound-local" | "calls-inbound-mobile" | "calls-inbound-tollfree" | "calls-outbound" | "calls-pay-verb-transactions" | "calls-recordings" | "calls-sip" | "calls-sip-inbound" | "calls-sip-outbound" | "calls-transfers" | "carrier-lookups" | "conversations" | "conversations-api-requests" | "conversations-conversation-events" | "conversations-endpoint-connectivity" | "conversations-events" | "conversations-participant-events" | "conversations-participants" | "cps" | "flex-usage" | "fraud-lookups" | "group-rooms" | "group-rooms-data-track" | "group-rooms-encrypted-media-recorded" | "group-rooms-media-downloaded" | "group-rooms-media-recorded" | "group-rooms-media-routed" | "group-rooms-media-stored" | "group-rooms-participant-minutes" | "group-rooms-recorded-minutes" | "imp-v1-usage" | "lookups" | "marketplace" | "marketplace-algorithmia-named-entity-recognition" | "marketplace-cadence-transcription" | "marketplace-cadence-translation" | "marketplace-capio-speech-to-text" | "marketplace-convriza-ababa" | "marketplace-deepgram-phrase-detector" | "marketplace-digital-segment-business-info" | "marketplace-facebook-offline-conversions" | "marketplace-google-speech-to-text" | "marketplace-ibm-watson-message-insights" | "marketplace-ibm-watson-message-sentiment" | "marketplace-ibm-watson-recording-analysis" | "marketplace-ibm-watson-tone-analyzer" | "marketplace-icehook-systems-scout" | "marketplace-infogroup-dataaxle-bizinfo" | "marketplace-keen-io-contact-center-analytics" | "marketplace-marchex-cleancall" | "marketplace-marchex-sentiment-analysis-for-sms" | "marketplace-marketplace-nextcaller-social-id" | "marketplace-mobile-commons-opt-out-classifier" | "marketplace-nexiwave-voicemail-to-text" | "marketplace-nextcaller-advanced-caller-identification" | "marketplace-nomorobo-spam-score" | "marketplace-payfone-tcpa-compliance" | "marketplace-remeeting-automatic-speech-recognition" | "marketplace-tcpa-defense-solutions-blacklist-feed" | "marketplace-telo-opencnam" | "marketplace-truecnam-true-spam" | "marketplace-twilio-caller-name-lookup-us" | "marketplace-twilio-carrier-information-lookup" | "marketplace-voicebase-pci" | "marketplace-voicebase-transcription" | "marketplace-voicebase-transcription-custom-vocabulary" | "marketplace-whitepages-pro-caller-identification" | "marketplace-whitepages-pro-phone-intelligence" | "marketplace-whitepages-pro-phone-reputation" | "marketplace-wolfarm-spoken-results" | "marketplace-wolfram-short-answer" | "marketplace-ytica-contact-center-reporting-analytics" | "mediastorage" | "mms" | "mms-inbound" | "mms-inbound-longcode" | "mms-inbound-shortcode" | "mms-messages-carrierfees" | "mms-outbound" | "mms-outbound-longcode" | "mms-outbound-shortcode" | "monitor-reads" | "monitor-storage" | "monitor-writes" | "notify" | "notify-actions-attempts" | "notify-channels" | "number-format-lookups" | "pchat" | "pchat-users" | "peer-to-peer-rooms-participant-minutes" | "pfax" | "pfax-minutes" | "pfax-minutes-inbound" | "pfax-minutes-outbound" | "pfax-pages" | "phonenumbers" | "phonenumbers-cps" | "phonenumbers-emergency" | "phonenumbers-local" | "phonenumbers-mobile" | "phonenumbers-setups" | "phonenumbers-tollfree" | "premiumsupport" | "proxy" | "proxy-active-sessions" | "pstnconnectivity" | "pv" | "pv-composition-media-downloaded" | "pv-composition-media-encrypted" | "pv-composition-media-stored" | "pv-composition-minutes" | "pv-recording-compositions" | "pv-room-participants" | "pv-room-participants-au1" | "pv-room-participants-br1" | "pv-room-participants-ie1" | "pv-room-participants-jp1" | "pv-room-participants-sg1" | "pv-room-participants-us1" | "pv-room-participants-us2" | "pv-rooms" | "pv-sip-endpoint-registrations" | "recordings" | "recordingstorage" | "rooms-group-bandwidth" | "rooms-group-minutes" | "rooms-peer-to-peer-minutes" | "shortcodes" | "shortcodes-customerowned" | "shortcodes-mms-enablement" | "shortcodes-mps" | "shortcodes-random" | "shortcodes-uk" | "shortcodes-vanity" | "small-group-rooms" | "small-group-rooms-data-track" | "small-group-rooms-participant-minutes" | "sms" | "sms-inbound" | "sms-inbound-longcode" | "sms-inbound-shortcode" | "sms-messages-carrierfees" | "sms-messages-features" | "sms-messages-features-senderid" | "sms-outbound" | "sms-outbound-content-inspection" | "sms-outbound-longcode" | "sms-outbound-shortcode" | "speech-recognition" | "studio-engagements" | "sync" | "sync-actions" | "sync-endpoint-hours" | "sync-endpoint-hours-above-daily-cap" | "taskrouter-tasks" | "totalprice" | "transcriptions" | "trunking-cps" | "trunking-emergency-calls" | "trunking-origination" | "trunking-origination-local" | "trunking-origination-mobile" | "trunking-origination-tollfree" | "trunking-recordings" | "trunking-secure" | "trunking-termination" | "turnmegabytes" | "turnmegabytes-australia" | "turnmegabytes-brasil" | "turnmegabytes-germany" | "turnmegabytes-india" | "turnmegabytes-ireland" | "turnmegabytes-japan" | "turnmegabytes-singapore" | "turnmegabytes-useast" | "turnmegabytes-uswest" | "twilio-interconnect" | "verify-push" | "verify-totp" | "verify-whatsapp-conversations-business-initiated" | "video-recordings" | "virtual-agent" | "voice-insights" | "voice-insights-client-insights-on-demand-minute" | "voice-insights-ptsn-insights-on-demand-minute" | "voice-insights-sip-interface-insights-on-demand-minute" | "voice-insights-sip-trunking-insights-on-demand-minute" | "wireless" | "wireless-orders" | "wireless-orders-artwork" | "wireless-orders-bulk" | "wireless-orders-esim" | "wireless-orders-starter" | "wireless-usage" | "wireless-usage-commands" | "wireless-usage-commands-africa" | "wireless-usage-commands-asia" | "wireless-usage-commands-centralandsouthamerica" | "wireless-usage-commands-europe" | "wireless-usage-commands-home" | "wireless-usage-commands-northamerica" | "wireless-usage-commands-oceania" | "wireless-usage-commands-roaming" | "wireless-usage-data" | "wireless-usage-data-africa" | "wireless-usage-data-asia" | "wireless-usage-data-centralandsouthamerica" | "wireless-usage-data-custom-additionalmb" | "wireless-usage-data-custom-first5mb" | "wireless-usage-data-domestic-roaming" | "wireless-usage-data-europe" | "wireless-usage-data-individual-additionalgb" | "wireless-usage-data-individual-firstgb" | "wireless-usage-data-international-roaming-canada" | "wireless-usage-data-international-roaming-india" | "wireless-usage-data-international-roaming-mexico" | "wireless-usage-data-northamerica" | "wireless-usage-data-oceania" | "wireless-usage-data-pooled" | "wireless-usage-data-pooled-downlink" | "wireless-usage-data-pooled-uplink" | "wireless-usage-mrc" | "wireless-usage-mrc-custom" | "wireless-usage-mrc-individual" | "wireless-usage-mrc-pooled" | "wireless-usage-mrc-suspended" | "wireless-usage-sms" | "wireless-usage-voice";
/**
 * Options to pass to each
 *
 * @property { UsageRecordThisMonthCategory } [category] The [usage category](https://www.twilio.com/docs/usage/api/usage-record#usage-categories) of the UsageRecord resources to read. Only UsageRecord resources in the specified category are retrieved.
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
export interface ThisMonthListInstanceEachOptions {
    category?: UsageRecordThisMonthCategory;
    startDate?: Date;
    endDate?: Date;
    includeSubaccounts?: boolean;
    pageSize?: number;
    callback?: (item: ThisMonthInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { UsageRecordThisMonthCategory } [category] The [usage category](https://www.twilio.com/docs/usage/api/usage-record#usage-categories) of the UsageRecord resources to read. Only UsageRecord resources in the specified category are retrieved.
 * @property { Date } [startDate] Only include usage that has occurred on or after this date. Specify the date in GMT and format as `YYYY-MM-DD`. You can also specify offsets from the current date, such as: `-30days`, which will set the start date to be 30 days before the current date.
 * @property { Date } [endDate] Only include usage that occurred on or before this date. Specify the date in GMT and format as `YYYY-MM-DD`.  You can also specify offsets from the current date, such as: `+30days`, which will set the end date to 30 days from the current date.
 * @property { boolean } [includeSubaccounts] Whether to include usage from the master account and all its subaccounts. Can be: `true` (the default) to include usage from the master account and all subaccounts or `false` to retrieve usage from only the specified account.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ThisMonthListInstanceOptions {
    category?: UsageRecordThisMonthCategory;
    startDate?: Date;
    endDate?: Date;
    includeSubaccounts?: boolean;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { UsageRecordThisMonthCategory } [category] The [usage category](https://www.twilio.com/docs/usage/api/usage-record#usage-categories) of the UsageRecord resources to read. Only UsageRecord resources in the specified category are retrieved.
 * @property { Date } [startDate] Only include usage that has occurred on or after this date. Specify the date in GMT and format as `YYYY-MM-DD`. You can also specify offsets from the current date, such as: `-30days`, which will set the start date to be 30 days before the current date.
 * @property { Date } [endDate] Only include usage that occurred on or before this date. Specify the date in GMT and format as `YYYY-MM-DD`.  You can also specify offsets from the current date, such as: `+30days`, which will set the end date to 30 days from the current date.
 * @property { boolean } [includeSubaccounts] Whether to include usage from the master account and all its subaccounts. Can be: `true` (the default) to include usage from the master account and all subaccounts or `false` to retrieve usage from only the specified account.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface ThisMonthListInstancePageOptions {
    category?: UsageRecordThisMonthCategory;
    startDate?: Date;
    endDate?: Date;
    includeSubaccounts?: boolean;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface ThisMonthListInstance {
    /**
     * Streams ThisMonthInstance records from the API.
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
    each(callback?: (item: ThisMonthInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams ThisMonthInstance records from the API.
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
     * @param { ThisMonthListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: ThisMonthListInstanceEachOptions, callback?: (item: ThisMonthInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of ThisMonthInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: ThisMonthPage) => any): Promise<ThisMonthPage>;
    /**
     * Retrieve a single target page of ThisMonthInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: ThisMonthPage) => any): Promise<ThisMonthPage>;
    getPage(params?: any, callback?: any): Promise<ThisMonthPage>;
    /**
     * Lists ThisMonthInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ThisMonthInstance[]) => any): Promise<ThisMonthInstance[]>;
    /**
     * Lists ThisMonthInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ThisMonthListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: ThisMonthListInstanceOptions, callback?: (error: Error | null, items: ThisMonthInstance[]) => any): Promise<ThisMonthInstance[]>;
    list(params?: any, callback?: any): Promise<ThisMonthInstance[]>;
    /**
     * Retrieve a single page of ThisMonthInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ThisMonthPage) => any): Promise<ThisMonthPage>;
    /**
     * Retrieve a single page of ThisMonthInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ThisMonthListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: ThisMonthListInstancePageOptions, callback?: (error: Error | null, items: ThisMonthPage) => any): Promise<ThisMonthPage>;
    page(params?: any, callback?: any): Promise<ThisMonthPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ThisMonthSolution {
    accountSid?: string;
}
export declare function ThisMonthListInstance(version: V2010, accountSid: string): ThisMonthListInstance;
interface ThisMonthPayload extends TwilioResponsePayload {
    usage_records: ThisMonthResource[];
}
interface ThisMonthResource {
    account_sid?: string | null;
    api_version?: string | null;
    as_of?: string | null;
    category?: UsageRecordThisMonthCategory;
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
export declare class ThisMonthInstance {
    protected _version: V2010;
    constructor(_version: V2010, payload: ThisMonthResource, accountSid: string);
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
    category?: UsageRecordThisMonthCategory;
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
    toJSON(): {
        accountSid: string | null | undefined;
        apiVersion: string | null | undefined;
        asOf: string | null | undefined;
        category: UsageRecordThisMonthCategory | undefined;
        count: string | null | undefined;
        countUnit: string | null | undefined;
        description: string | null | undefined;
        endDate: Date | null | undefined;
        price: number | null | undefined;
        priceUnit: string | null | undefined;
        startDate: Date | null | undefined;
        subresourceUris: object | null | undefined;
        uri: string | null | undefined;
        usage: string | null | undefined;
        usageUnit: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class ThisMonthPage extends Page<V2010, ThisMonthPayload, ThisMonthResource, ThisMonthInstance> {
    /**
     * Initialize the ThisMonthPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: ThisMonthSolution);
    /**
     * Build an instance of ThisMonthInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ThisMonthResource): ThisMonthInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
