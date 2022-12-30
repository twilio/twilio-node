/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
import { FeedbackListInstance } from "./message/feedback";
import { MediaListInstance } from "./message/media";
declare type MessageAddressRetention = "retain";
declare type MessageContentRetention = "retain";
declare type MessageDirection = "inbound" | "outbound-api" | "outbound-call" | "outbound-reply";
declare type MessageScheduleType = "fixed";
declare type MessageStatus = "queued" | "sending" | "sent" | "failed" | "delivered" | "undelivered" | "receiving" | "received" | "accepted" | "scheduled" | "read" | "partially_delivered" | "canceled";
declare type MessageUpdateStatus = "canceled";
/**
 * Options to pass to update a MessageInstance
 *
 * @property { string } [body] The text of the message you want to send. Can be up to 1,600 characters long.
 * @property { MessageUpdateStatus } [status]
 */
export interface MessageContextUpdateOptions {
    body?: string;
    status?: MessageUpdateStatus;
}
/**
 * Options to pass to create a MessageInstance
 *
 * @property { string } to The destination phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format for SMS/MMS or [Channel user address](https://www.twilio.com/docs/sms/channels#channel-addresses) for other 3rd-party channels.
 * @property { string } [statusCallback] The URL we should call using the `status_callback_method` to send status information to your application. If specified, we POST these message status changes to the URL: `queued`, `failed`, `sent`, `delivered`, or `undelivered`. Twilio will POST its [standard request parameters](https://www.twilio.com/docs/sms/twiml#request-parameters) as well as some additional parameters including `MessageSid`, `MessageStatus`, and `ErrorCode`. If you include this parameter with the `messaging_service_sid`, we use this URL instead of the Status Callback URL of the [Messaging Service](https://www.twilio.com/docs/sms/services/api). URLs must contain a valid hostname and underscores are not allowed.
 * @property { string } [applicationSid] The SID of the application that should receive message status. We POST a `message_sid` parameter and a `message_status` parameter with a value of `sent` or `failed` to the [application](https://www.twilio.com/docs/usage/api/applications)\\\'s `message_status_callback`. If a `status_callback` parameter is also passed, it will be ignored and the application\\\'s `message_status_callback` parameter will be used.
 * @property { number } [maxPrice] The maximum total price in US dollars that you will pay for the message to be delivered. Can be a decimal value that has up to 4 decimal places. All messages are queued for delivery and the message cost is checked before the message is sent. If the cost exceeds `max_price`, the message will fail and a status of `Failed` is sent to the status callback. If `MaxPrice` is not set, the message cost is not checked.
 * @property { boolean } [provideFeedback] Whether to confirm delivery of the message. Set this value to `true` if you are sending messages that have a trackable user action and you intend to confirm delivery of the message using the [Message Feedback API](https://www.twilio.com/docs/sms/api/message-feedback-resource). This parameter is `false` by default.
 * @property { number } [attempt] Total number of attempts made ( including this ) to send out the message regardless of the provider used
 * @property { number } [validityPeriod] How long in seconds the message can remain in our outgoing message queue. After this period elapses, the message fails and we call your status callback. Can be between 1 and the default value of 14,400 seconds. After a message has been accepted by a carrier, however, we cannot guarantee that the message will not be queued after this period. We recommend that this value be at least 5 seconds.
 * @property { boolean } [forceDelivery] Reserved
 * @property { MessageContentRetention } [contentRetention]
 * @property { MessageAddressRetention } [addressRetention]
 * @property { boolean } [smartEncoded] Whether to detect Unicode characters that have a similar GSM-7 character and replace them. Can be: `true` or `false`.
 * @property { Array<string> } [persistentAction] Rich actions for Channels Messages.
 * @property { boolean } [shortenUrls] Determines the usage of Click Tracking. Setting it to `true` will instruct Twilio to replace all links in the Message with a shortened version based on the associated Domain Sid and track clicks on them. If this parameter is not set on an API call, we will use the value set on the Messaging Service. If this parameter is not set and the value is not configured on the Messaging Service used this will default to `false`.
 * @property { MessageScheduleType } [scheduleType]
 * @property { Date } [sendAt] The time that Twilio will send the message. Must be in ISO 8601 format.
 * @property { boolean } [sendAsMms] If set to True, Twilio will deliver the message as a single MMS message, regardless of the presence of media.
 * @property { string } [contentSid] The SID of the Content object returned at Content API content create time (https://www.twilio.com/docs/content-api/create-and-send-your-first-content-api-template#create-a-template). If this parameter is not specified, then the Content API will not be utilized.
 * @property { string } [contentVariables] Key-value pairs of variable names to substitution values, used alongside a content_sid. If not specified, Content API will default to the default variables defined at create time.
 * @property { string } [from] A Twilio phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, an [alphanumeric sender ID](https://www.twilio.com/docs/sms/send-messages#use-an-alphanumeric-sender-id), or a [Channel Endpoint address](https://www.twilio.com/docs/sms/channels#channel-addresses) that is enabled for the type of message you want to send. Phone numbers or [short codes](https://www.twilio.com/docs/sms/api/short-code) purchased from Twilio also work here. You cannot, for example, spoof messages from a private cell phone number. If you are using `messaging_service_sid`, this parameter must be empty.
 * @property { string } [messagingServiceSid] The SID of the [Messaging Service](https://www.twilio.com/docs/sms/services#send-a-message-with-copilot) you want to associate with the Message. Set this parameter to use the [Messaging Service Settings and Copilot Features](https://www.twilio.com/console/sms/services) you have configured and leave the `from` parameter empty. When only this parameter is set, Twilio will use your enabled Copilot Features to select the `from` phone number for delivery.
 * @property { string } [body] The text of the message you want to send. Can be up to 1,600 characters in length.
 * @property { Array<string> } [mediaUrl] The URL of the media to send with the message. The media can be of type `gif`, `png`, and `jpeg` and will be formatted correctly on the recipient\\\'s device. The media size limit is 5MB for supported file types (JPEG, PNG, GIF) and 500KB for [other types](https://www.twilio.com/docs/sms/accepted-mime-types) of accepted media. To send more than one image in the message body, provide multiple `media_url` parameters in the POST request. You can include up to 10 `media_url` parameters per message. You can send images in an SMS message in only the US and Canada.
 */
export interface MessageListInstanceCreateOptions {
    to: string;
    statusCallback?: string;
    applicationSid?: string;
    maxPrice?: number;
    provideFeedback?: boolean;
    attempt?: number;
    validityPeriod?: number;
    forceDelivery?: boolean;
    contentRetention?: MessageContentRetention;
    addressRetention?: MessageAddressRetention;
    smartEncoded?: boolean;
    persistentAction?: Array<string>;
    shortenUrls?: boolean;
    scheduleType?: MessageScheduleType;
    sendAt?: Date;
    sendAsMms?: boolean;
    contentSid?: string;
    contentVariables?: string;
    from?: string;
    messagingServiceSid?: string;
    body?: string;
    mediaUrl?: Array<string>;
}
/**
 * Options to pass to each
 *
 * @property { string } [to] Read messages sent to only this phone number.
 * @property { string } [from] Read messages sent from only this phone number or alphanumeric sender ID.
 * @property { Date } [dateSent] The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date.
 * @property { Date } [dateSentBefore] The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date.
 * @property { Date } [dateSentAfter] The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date.
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
export interface MessageListInstanceEachOptions {
    to?: string;
    from?: string;
    dateSent?: Date;
    dateSentBefore?: Date;
    dateSentAfter?: Date;
    pageSize?: number;
    callback?: (item: MessageInstance, done: (err?: Error) => void) => void;
    done?: Function;
    limit?: number;
}
/**
 * Options to pass to list
 *
 * @property { string } [to] Read messages sent to only this phone number.
 * @property { string } [from] Read messages sent from only this phone number or alphanumeric sender ID.
 * @property { Date } [dateSent] The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date.
 * @property { Date } [dateSentBefore] The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date.
 * @property { Date } [dateSentAfter] The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface MessageListInstanceOptions {
    to?: string;
    from?: string;
    dateSent?: Date;
    dateSentBefore?: Date;
    dateSentAfter?: Date;
    pageSize?: number;
    limit?: number;
}
/**
 * Options to pass to page
 *
 * @property { string } [to] Read messages sent to only this phone number.
 * @property { string } [from] Read messages sent from only this phone number or alphanumeric sender ID.
 * @property { Date } [dateSent] The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date.
 * @property { Date } [dateSentBefore] The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date.
 * @property { Date } [dateSentAfter] The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface MessageListInstancePageOptions {
    to?: string;
    from?: string;
    dateSent?: Date;
    dateSentBefore?: Date;
    dateSentAfter?: Date;
    pageSize?: number;
    pageNumber?: number;
    pageToken?: string;
}
export interface MessageContext {
    feedback: FeedbackListInstance;
    media: MediaListInstance;
    /**
     * Remove a MessageInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a MessageInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MessageInstance
     */
    fetch(callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
    /**
     * Update a MessageInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MessageInstance
     */
    update(callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
    /**
     * Update a MessageInstance
     *
     * @param { MessageContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MessageInstance
     */
    update(params: MessageContextUpdateOptions, callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
    update(params?: any, callback?: any): Promise<MessageInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface MessageContextSolution {
    accountSid?: string;
    sid?: string;
}
export declare class MessageContextImpl implements MessageContext {
    protected _version: V2010;
    protected _solution: MessageContextSolution;
    protected _uri: string;
    protected _feedback?: FeedbackListInstance;
    protected _media?: MediaListInstance;
    constructor(_version: V2010, accountSid: string, sid: string);
    get feedback(): FeedbackListInstance;
    get media(): MediaListInstance;
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<MessageInstance>;
    update(params?: any, callback?: any): Promise<MessageInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): MessageContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface MessagePayload extends TwilioResponsePayload {
    messages: MessageResource[];
}
interface MessageResource {
    body?: string | null;
    num_segments?: string | null;
    direction?: MessageDirection;
    from?: string | null;
    to?: string | null;
    date_updated?: Date | null;
    price?: string | null;
    error_message?: string | null;
    uri?: string | null;
    account_sid?: string | null;
    num_media?: string | null;
    status?: MessageStatus;
    messaging_service_sid?: string | null;
    sid?: string | null;
    date_sent?: Date | null;
    date_created?: Date | null;
    error_code?: number | null;
    price_unit?: string | null;
    api_version?: string | null;
    subresource_uris?: object | null;
}
export declare class MessageInstance {
    protected _version: V2010;
    protected _solution: MessageContextSolution;
    protected _context?: MessageContext;
    constructor(_version: V2010, payload: MessageResource, accountSid: string, sid?: string);
    /**
     * The message text
     */
    body?: string | null;
    /**
     * The number of messages used to deliver the message body
     */
    numSegments?: string | null;
    direction?: MessageDirection;
    /**
     * The phone number that initiated the message
     */
    from?: string | null;
    /**
     * The phone number that received the message
     */
    to?: string | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The amount billed for the message
     */
    price?: string | null;
    /**
     * The description of the error_code
     */
    errorMessage?: string | null;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`
     */
    uri?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The number of media files associated with the message
     */
    numMedia?: string | null;
    status?: MessageStatus;
    /**
     * The SID of the Messaging Service used with the message.
     */
    messagingServiceSid?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The RFC 2822 date and time in GMT when the message was sent
     */
    dateSent?: Date | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The error code associated with the message
     */
    errorCode?: number | null;
    /**
     * The currency in which price is measured
     */
    priceUnit?: string | null;
    /**
     * The API version used to process the message
     */
    apiVersion?: string | null;
    /**
     * A list of related resources identified by their relative URIs
     */
    subresourceUris?: object | null;
    private get _proxy();
    /**
     * Remove a MessageInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a MessageInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MessageInstance
     */
    fetch(callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
    /**
     * Update a MessageInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MessageInstance
     */
    update(callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
    /**
     * Update a MessageInstance
     *
     * @param { MessageContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MessageInstance
     */
    update(params: MessageContextUpdateOptions, callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
    /**
     * Access the feedback.
     */
    feedback(): FeedbackListInstance;
    /**
     * Access the media.
     */
    media(): MediaListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        body: string | null | undefined;
        numSegments: string | null | undefined;
        direction: MessageDirection | undefined;
        from: string | null | undefined;
        to: string | null | undefined;
        dateUpdated: Date | null | undefined;
        price: string | null | undefined;
        errorMessage: string | null | undefined;
        uri: string | null | undefined;
        accountSid: string | null | undefined;
        numMedia: string | null | undefined;
        status: MessageStatus | undefined;
        messagingServiceSid: string | null | undefined;
        sid: string | null | undefined;
        dateSent: Date | null | undefined;
        dateCreated: Date | null | undefined;
        errorCode: number | null | undefined;
        priceUnit: string | null | undefined;
        apiVersion: string | null | undefined;
        subresourceUris: object | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface MessageListInstance {
    (sid: string): MessageContext;
    get(sid: string): MessageContext;
    /**
     * Create a MessageInstance
     *
     * @param { MessageListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed MessageInstance
     */
    create(params: MessageListInstanceCreateOptions, callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
    create(params: any, callback?: any): Promise<MessageInstance>;
    /**
     * Streams MessageInstance records from the API.
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
    each(callback?: (item: MessageInstance, done: (err?: Error) => void) => void): void;
    /**
     * Streams MessageInstance records from the API.
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
     * @param { MessageListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params?: MessageListInstanceEachOptions, callback?: (item: MessageInstance, done: (err?: Error) => void) => void): void;
    each(params?: any, callback?: any): void;
    /**
     * Retrieve a single target page of MessageInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(callback?: (error: Error | null, items: MessagePage) => any): Promise<MessagePage>;
    /**
     * Retrieve a single target page of MessageInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl?: string, callback?: (error: Error | null, items: MessagePage) => any): Promise<MessagePage>;
    getPage(params?: any, callback?: any): Promise<MessagePage>;
    /**
     * Lists MessageInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: MessageInstance[]) => any): Promise<MessageInstance[]>;
    /**
     * Lists MessageInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { MessageListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params?: MessageListInstanceOptions, callback?: (error: Error | null, items: MessageInstance[]) => any): Promise<MessageInstance[]>;
    list(params?: any, callback?: any): Promise<MessageInstance[]>;
    /**
     * Retrieve a single page of MessageInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: MessagePage) => any): Promise<MessagePage>;
    /**
     * Retrieve a single page of MessageInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { MessageListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: MessageListInstancePageOptions, callback?: (error: Error | null, items: MessagePage) => any): Promise<MessagePage>;
    page(params?: any, callback?: any): Promise<MessagePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface MessageSolution {
    accountSid?: string;
}
export declare function MessageListInstance(version: V2010, accountSid: string): MessageListInstance;
export declare class MessagePage extends Page<V2010, MessagePayload, MessageResource, MessageInstance> {
    /**
     * Initialize the MessagePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2010, response: Response<string>, solution: MessageSolution);
    /**
     * Build an instance of MessageInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: MessageResource): MessageInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
