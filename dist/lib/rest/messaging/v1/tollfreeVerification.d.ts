/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
declare type TollfreeVerificationOptInType = "VERBAL" | "WEB_FORM" | "PAPER_FORM" | "VIA_TEXT" | "MOBILE_QR_CODE";
declare type TollfreeVerificationStatus = "PENDING_REVIEW" | "IN_REVIEW" | "TWILIO_APPROVED" | "TWILIO_REJECTED";
/**
 * Options to pass to create a TollfreeVerificationInstance
 *
 * @property { string } businessName The name of the business or organization using the Tollfree number.
 * @property { string } businessWebsite The website of the business or organization using the Tollfree number.
 * @property { string } notificationEmail The email address to receive the notification about the verification result. .
 * @property { Array<string> } useCaseCategories The category of the use case for the Tollfree Number. List as many are applicable..
 * @property { string } useCaseSummary Use this to further explain how messaging is used by the business or organization.
 * @property { string } productionMessageSample An example of message content, i.e. a sample message.
 * @property { Array<string> } optInImageUrls Link to an image that shows the opt-in workflow. Multiple images allowed and must be a publicly hosted URL.
 * @property { TollfreeVerificationOptInType } optInType
 * @property { string } messageVolume Estimate monthly volume of messages from the Tollfree Number.
 * @property { string } tollfreePhoneNumberSid The SID of the Phone Number associated with the Tollfree Verification.
 * @property { string } [customerProfileSid] Customer\\\'s Profile Bundle BundleSid.
 * @property { string } [businessStreetAddress] The address of the business or organization using the Tollfree number.
 * @property { string } [businessStreetAddress2] The address of the business or organization using the Tollfree number.
 * @property { string } [businessCity] The city of the business or organization using the Tollfree number.
 * @property { string } [businessStateProvinceRegion] The state/province/region of the business or organization using the Tollfree number.
 * @property { string } [businessPostalCode] The postal code of the business or organization using the Tollfree number.
 * @property { string } [businessCountry] The country of the business or organization using the Tollfree number.
 * @property { string } [additionalInformation] Additional information to be provided for verification.
 * @property { string } [businessContactFirstName] The first name of the contact for the business or organization using the Tollfree number.
 * @property { string } [businessContactLastName] The last name of the contact for the business or organization using the Tollfree number.
 * @property { string } [businessContactEmail] The email address of the contact for the business or organization using the Tollfree number.
 * @property { string } [businessContactPhone] The phone number of the contact for the business or organization using the Tollfree number.
 */
export interface TollfreeVerificationListInstanceCreateOptions {
    businessName: string;
    businessWebsite: string;
    notificationEmail: string;
    useCaseCategories: Array<string>;
    useCaseSummary: string;
    productionMessageSample: string;
    optInImageUrls: Array<string>;
    optInType: TollfreeVerificationOptInType;
    messageVolume: string;
    tollfreePhoneNumberSid: string;
    customerProfileSid?: string;
    businessStreetAddress?: string;
    businessStreetAddress2?: string;
    businessCity?: string;
    businessStateProvinceRegion?: string;
    businessPostalCode?: string;
    businessCountry?: string;
    additionalInformation?: string;
    businessContactFirstName?: string;
    businessContactLastName?: string;
    businessContactEmail?: string;
    businessContactPhone?: string;
}
/**
 * Options to pass to each
 *
 * @property { string } [tollfreePhoneNumberSid] The SID of the Phone Number associated with the Tollfree Verification.
 * @property { TollfreeVerificationStatus } [status] The compliance status of the Tollfree Verification record.
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
export interface TollfreeVerificationListInstanceEachOptions {
    tollfreePhoneNumberSid?: string;
    status?: TollfreeVerificationStatus;
    pageSize?: number;
    callback?: (item: TollfreeVerificationInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [tollfreePhoneNumberSid] The SID of the Phone Number associated with the Tollfree Verification.
 * @property { TollfreeVerificationStatus } [status] The compliance status of the Tollfree Verification record.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface TollfreeVerificationListInstanceOptions {
    tollfreePhoneNumberSid?: string;
    status?: TollfreeVerificationStatus;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [tollfreePhoneNumberSid] The SID of the Phone Number associated with the Tollfree Verification.
 * @property { TollfreeVerificationStatus } [status] The compliance status of the Tollfree Verification record.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface TollfreeVerificationListInstancePageOptions {
    tollfreePhoneNumberSid?: string;
    status?: TollfreeVerificationStatus;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface TollfreeVerificationContext {
    /**
     * Fetch a TollfreeVerificationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TollfreeVerificationInstance
     */
    fetch(callback?: (error: Error | null, item?: TollfreeVerificationInstance) => any): Promise<TollfreeVerificationInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TollfreeVerificationContextSolution {
    sid?: string;
}
export declare class TollfreeVerificationContextImpl implements TollfreeVerificationContext {
    protected _version: V1;
    protected _solution: TollfreeVerificationContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    fetch(callback?: any): Promise<TollfreeVerificationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): TollfreeVerificationContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface TollfreeVerificationPayload extends TwilioResponsePayload {
    verifications: TollfreeVerificationResource[];
}
interface TollfreeVerificationResource {
    sid?: string | null;
    account_sid?: string | null;
    customer_profile_sid?: string | null;
    trust_product_sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    regulated_item_sid?: string | null;
    business_name?: string | null;
    business_street_address?: string | null;
    business_street_address2?: string | null;
    business_city?: string | null;
    business_state_province_region?: string | null;
    business_postal_code?: string | null;
    business_country?: string | null;
    business_website?: string | null;
    business_contact_first_name?: string | null;
    business_contact_last_name?: string | null;
    business_contact_email?: string | null;
    business_contact_phone?: string | null;
    notification_email?: string | null;
    use_case_categories?: Array<string> | null;
    use_case_summary?: string | null;
    production_message_sample?: string | null;
    opt_in_image_urls?: Array<string> | null;
    opt_in_type?: TollfreeVerificationOptInType;
    message_volume?: string | null;
    additional_information?: string | null;
    tollfree_phone_number_sid?: string | null;
    status?: TollfreeVerificationStatus;
    url?: string | null;
    resource_links?: any | null;
}
export declare class TollfreeVerificationInstance {
    protected _version: V1;
    protected _solution: TollfreeVerificationContextSolution;
    protected _context?: TollfreeVerificationContext;
    constructor(_version: V1, payload: TollfreeVerificationResource, sid?: string);
    /**
     * Tollfree Verification Sid
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * Customer\'s Profile Bundle BundleSid
     */
    customerProfileSid?: string | null;
    /**
     * Tollfree TrustProduct Bundle BundleSid
     */
    trustProductSid?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The SID of the Regulated Item
     */
    regulatedItemSid?: string | null;
    /**
     * The name of the business or organization using the Tollfree number
     */
    businessName?: string | null;
    /**
     * The address of the business or organization using the Tollfree number
     */
    businessStreetAddress?: string | null;
    /**
     * The address of the business or organization using the Tollfree number
     */
    businessStreetAddress2?: string | null;
    /**
     * The city of the business or organization using the Tollfree number
     */
    businessCity?: string | null;
    /**
     * The state/province/region of the business or organization using the Tollfree number
     */
    businessStateProvinceRegion?: string | null;
    /**
     * The postal code of the business or organization using the Tollfree number
     */
    businessPostalCode?: string | null;
    /**
     * The country of the business or organization using the Tollfree number
     */
    businessCountry?: string | null;
    /**
     * The website of the business or organization using the Tollfree number
     */
    businessWebsite?: string | null;
    /**
     * The first name of the contact for the business or organization using the Tollfree number
     */
    businessContactFirstName?: string | null;
    /**
     * The last name of the contact for the business or organization using the Tollfree number
     */
    businessContactLastName?: string | null;
    /**
     * The email address of the contact for the business or organization using the Tollfree number
     */
    businessContactEmail?: string | null;
    /**
     * The phone number of the contact for the business or organization using the Tollfree number
     */
    businessContactPhone?: string | null;
    /**
     * The email address to receive the notification about the verification result.
     */
    notificationEmail?: string | null;
    /**
     * The category of the use case for the Tollfree Number. List as many are applicable.
     */
    useCaseCategories?: Array<string> | null;
    /**
     * Further explaination on how messaging is used by the business or organization
     */
    useCaseSummary?: string | null;
    /**
     * An example of message content, i.e. a sample message
     */
    productionMessageSample?: string | null;
    /**
     * Link to an image that shows the opt-in workflow. Multiple images allowed and must be a publicly hosted URL
     */
    optInImageUrls?: Array<string> | null;
    optInType?: TollfreeVerificationOptInType;
    /**
     * Estimate monthly volume of messages from the Tollfree Number
     */
    messageVolume?: string | null;
    /**
     * Additional information to be provided for verification
     */
    additionalInformation?: string | null;
    /**
     * The SID of the Phone Number associated with the Tollfree Verification
     */
    tollfreePhoneNumberSid?: string | null;
    status?: TollfreeVerificationStatus;
    /**
     * The absolute URL of the Tollfree Verification
     */
    url?: string | null;
    /**
     * The URLs of the documents associated with the Tollfree Verification resource
     */
    resourceLinks?: any | null;
    private get _proxy();
    /**
     * Fetch a TollfreeVerificationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TollfreeVerificationInstance
     */
    fetch(callback?: (error: Error | null, item?: TollfreeVerificationInstance) => any): Promise<TollfreeVerificationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        customerProfileSid: string | null | undefined;
        trustProductSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        regulatedItemSid: string | null | undefined;
        businessName: string | null | undefined;
        businessStreetAddress: string | null | undefined;
        businessStreetAddress2: string | null | undefined;
        businessCity: string | null | undefined;
        businessStateProvinceRegion: string | null | undefined;
        businessPostalCode: string | null | undefined;
        businessCountry: string | null | undefined;
        businessWebsite: string | null | undefined;
        businessContactFirstName: string | null | undefined;
        businessContactLastName: string | null | undefined;
        businessContactEmail: string | null | undefined;
        businessContactPhone: string | null | undefined;
        notificationEmail: string | null | undefined;
        useCaseCategories: string[] | null | undefined;
        useCaseSummary: string | null | undefined;
        productionMessageSample: string | null | undefined;
        optInImageUrls: string[] | null | undefined;
        optInType: TollfreeVerificationOptInType | undefined;
        messageVolume: string | null | undefined;
        additionalInformation: string | null | undefined;
        tollfreePhoneNumberSid: string | null | undefined;
        status: TollfreeVerificationStatus | undefined;
        url: string | null | undefined;
        resourceLinks: any;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface TollfreeVerificationListInstance {
    (sid: string): TollfreeVerificationContext;
    get(sid: string): TollfreeVerificationContext;
    /**
     * Create a TollfreeVerificationInstance
     *
     * @param { TollfreeVerificationListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TollfreeVerificationInstance
     */
    create(params: TollfreeVerificationListInstanceCreateOptions, callback?: (error: Error | null, item?: TollfreeVerificationInstance) => any): Promise<TollfreeVerificationInstance>;
    create(params: any, callback?: any): Promise<TollfreeVerificationInstance>;
    /**
     * Streams TollfreeVerificationInstance records from the API.
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
    each(callback?: (item: TollfreeVerificationInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams TollfreeVerificationInstance records from the API.
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
     * @param { TollfreeVerificationListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: TollfreeVerificationListInstanceEachOptions, callback?: (item: TollfreeVerificationInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of TollfreeVerificationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: TollfreeVerificationPage) => any): Promise<TollfreeVerificationPage>;
    /**
     * Retrieve a single target page of TollfreeVerificationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: TollfreeVerificationPage) => any): Promise<TollfreeVerificationPage>;
    getPage(params?: any, callback?: any): Promise<TollfreeVerificationPage>;
    /**
     * Lists TollfreeVerificationInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: TollfreeVerificationInstance[]) => any): Promise<TollfreeVerificationInstance[]>;
    /**
     * Lists TollfreeVerificationInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TollfreeVerificationListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: TollfreeVerificationListInstanceOptions, callback?: (error: Error | null, items: TollfreeVerificationInstance[]) => any): Promise<TollfreeVerificationInstance[]>;
    list(params?: any, callback?: any): Promise<TollfreeVerificationInstance[]>;
    /**
     * Retrieve a single page of TollfreeVerificationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: TollfreeVerificationPage) => any): Promise<TollfreeVerificationPage>;
    /**
     * Retrieve a single page of TollfreeVerificationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TollfreeVerificationListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: TollfreeVerificationListInstancePageOptions, callback?: (error: Error | null, items: TollfreeVerificationPage) => any): Promise<TollfreeVerificationPage>;
    page(params?: any, callback?: any): Promise<TollfreeVerificationPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TollfreeVerificationSolution {
}
export declare function TollfreeVerificationListInstance(version: V1): TollfreeVerificationListInstance;
export declare class TollfreeVerificationPage extends Page<V1, TollfreeVerificationPayload, TollfreeVerificationResource, TollfreeVerificationInstance> {
    /**
     * Initialize the TollfreeVerificationPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: TollfreeVerificationSolution);
    /**
     * Build an instance of TollfreeVerificationInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: TollfreeVerificationResource): TollfreeVerificationInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
