/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
declare type NotificationPriority = "high" | "low";
/**
 * Options to pass to create a NotificationInstance
 *
 * @property { string } [body] The notification text. For FCM and GCM, translates to `data.twi_body`. For APNS, translates to `aps.alert.body`. For SMS, translates to `body`. SMS requires either this `body` value, or `media_urls` attribute defined in the `sms` parameter of the notification.
 * @property { NotificationPriority } [priority]
 * @property { number } [ttl] How long, in seconds, the notification is valid. Can be an integer between 0 and 2,419,200, which is 4 weeks, the default and the maximum supported time to live (TTL). Delivery should be attempted if the device is offline until the TTL elapses. Zero means that the notification delivery is attempted immediately, only once, and is not stored for future delivery. SMS does not support this property.
 * @property { string } [title] The notification title. For FCM and GCM, this translates to the `data.twi_title` value. For APNS, this translates to the `aps.alert.title` value. SMS does not support this property. This field is not visible on iOS phones and tablets but appears on Apple Watch and Android devices.
 * @property { string } [sound] The name of the sound to be played for the notification. For FCM and GCM, this Translates to `data.twi_sound`.  For APNS, this translates to `aps.sound`.  SMS does not support this property.
 * @property { string } [action] The actions to display for the notification. For APNS, translates to the `aps.category` value. For GCM, translates to the `data.twi_action` value. For SMS, this parameter is not supported and is omitted from deliveries to those channels.
 * @property { any } [data] The custom key-value pairs of the notification\\\'s payload. For FCM and GCM, this value translates to `data` in the FCM and GCM payloads. FCM and GCM [reserve certain keys](https://firebase.google.com/docs/cloud-messaging/http-server-ref) that cannot be used in those channels. For APNS, attributes of `data` are inserted into the APNS payload as custom properties outside of the `aps` dictionary. In all channels, we reserve keys that start with `twi_` for future use. Custom keys that start with `twi_` are not allowed and are rejected as 400 Bad request with no delivery attempted. For SMS, this parameter is not supported and is omitted from deliveries to those channels.
 * @property { any } [apn] The APNS-specific payload that overrides corresponding attributes in the generic payload for APNS Bindings. This property maps to the APNS `Payload` item, therefore the `aps` key must be used to change standard attributes. Adds custom key-value pairs to the root of the dictionary. See the [APNS documentation](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CommunicatingwithAPNs.html) for more details. We reserve keys that start with `twi_` for future use. Custom keys that start with `twi_` are not allowed.
 * @property { any } [gcm] The GCM-specific payload that overrides corresponding attributes in the generic payload for GCM Bindings.  This property maps to the root JSON dictionary. See the [GCM documentation](https://firebase.google.com/docs/cloud-messaging/http-server-ref) for more details. Target parameters `to`, `registration_ids`, and `notification_key` are not allowed. We reserve keys that start with `twi_` for future use. Custom keys that start with `twi_` are not allowed. GCM also [reserves certain keys](https://firebase.google.com/docs/cloud-messaging/http-server-ref).
 * @property { any } [sms] The SMS-specific payload that overrides corresponding attributes in the generic payload for SMS Bindings.  Each attribute in this value maps to the corresponding `form` parameter of the Twilio [Message](https://www.twilio.com/docs/sms/send-messages) resource.  These parameters of the Message resource are supported in snake case format: `body`, `media_urls`, `status_callback`, and `max_price`.  The `status_callback` parameter overrides the corresponding parameter in the messaging service, if configured. The `media_urls` property expects a JSON array.
 * @property { any } [facebookMessenger] Deprecated.
 * @property { any } [fcm] The FCM-specific payload that overrides corresponding attributes in the generic payload for FCM Bindings. This property maps to the root JSON dictionary. See the [FCM documentation](https://firebase.google.com/docs/cloud-messaging/http-server-ref#downstream) for more details. Target parameters `to`, `registration_ids`, `condition`, and `notification_key` are not allowed in this parameter. We reserve keys that start with `twi_` for future use. Custom keys that start with `twi_` are not allowed. FCM also [reserves certain keys](https://firebase.google.com/docs/cloud-messaging/http-server-ref), which cannot be used in that channel.
 * @property { Array<string> } [segment] The Segment resource is deprecated. Use the `tag` parameter, instead.
 * @property { any } [alexa] Deprecated.
 * @property { Array<string> } [toBinding] The destination address specified as a JSON string.  Multiple `to_binding` parameters can be included but the total size of the request entity should not exceed 1MB. This is typically sufficient for 10,000 phone numbers.
 * @property { string } [deliveryCallbackUrl] URL to send webhooks.
 * @property { Array<string> } [identity] The `identity` value that uniquely identifies the new resource\\\'s [User](https://www.twilio.com/docs/chat/rest/user-resource) within the [Service](https://www.twilio.com/docs/notify/api/service-resource). Delivery will be attempted only to Bindings with an Identity in this list. No more than 20 items are allowed in this list.
 * @property { Array<string> } [tag] A tag that selects the Bindings to notify. Repeat this parameter to specify more than one tag, up to a total of 5 tags. The implicit tag `all` is available to notify all Bindings in a Service instance. Similarly, the implicit tags `apn`, `fcm`, `gcm`, `sms` and `facebook-messenger` are available to notify all Bindings in a specific channel.
 */
export interface NotificationListInstanceCreateOptions {
    body?: string;
    priority?: NotificationPriority;
    ttl?: number;
    title?: string;
    sound?: string;
    action?: string;
    data?: any;
    apn?: any;
    gcm?: any;
    sms?: any;
    facebookMessenger?: any;
    fcm?: any;
    segment?: Array<string>;
    alexa?: any;
    toBinding?: Array<string>;
    deliveryCallbackUrl?: string;
    identity?: Array<string>;
    tag?: Array<string>;
}
export interface NotificationListInstance {
    /**
     * Create a NotificationInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NotificationInstance
     */
    create(callback?: (error: Error | null, item?: NotificationInstance) => any): Promise<NotificationInstance>;
    /**
     * Create a NotificationInstance
     *
     * @param { NotificationListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NotificationInstance
     */
    create(params: NotificationListInstanceCreateOptions, callback?: (error: Error | null, item?: NotificationInstance) => any): Promise<NotificationInstance>;
    create(params?: any, callback?: any): Promise<NotificationInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface NotificationSolution {
    serviceSid?: string;
}
export declare function NotificationListInstance(version: V1, serviceSid: string): NotificationListInstance;
interface NotificationResource {
    sid?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    date_created?: Date | null;
    identities?: Array<string> | null;
    tags?: Array<string> | null;
    segments?: Array<string> | null;
    priority?: NotificationPriority;
    ttl?: number | null;
    title?: string | null;
    body?: string | null;
    sound?: string | null;
    action?: string | null;
    data?: any | null;
    apn?: any | null;
    gcm?: any | null;
    fcm?: any | null;
    sms?: any | null;
    facebook_messenger?: any | null;
    alexa?: any | null;
}
export declare class NotificationInstance {
    protected _version: V1;
    constructor(_version: V1, payload: NotificationResource, serviceSid: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Service that the resource is associated with
     */
    serviceSid?: string | null;
    /**
     * The RFC 2822 date and time in GMT when the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The list of identity values of the Users to notify
     */
    identities?: Array<string> | null;
    /**
     * The tags that select the Bindings to notify
     */
    tags?: Array<string> | null;
    /**
     * The list of Segments to notify
     */
    segments?: Array<string> | null;
    priority?: NotificationPriority;
    /**
     * How long, in seconds, the notification is valid
     */
    ttl?: number | null;
    /**
     * The notification title
     */
    title?: string | null;
    /**
     * The notification body text
     */
    body?: string | null;
    /**
     * The name of the sound to be played for the notification
     */
    sound?: string | null;
    /**
     * The actions to display for the notification
     */
    action?: string | null;
    /**
     * The custom key-value pairs of the notification\'s payload
     */
    data?: any | null;
    /**
     * The APNS-specific payload that overrides corresponding attributes in a generic payload for APNS Bindings
     */
    apn?: any | null;
    /**
     * The GCM-specific payload that overrides corresponding attributes in generic payload for GCM Bindings
     */
    gcm?: any | null;
    /**
     * The FCM-specific payload that overrides corresponding attributes in generic payload for FCM Bindings
     */
    fcm?: any | null;
    /**
     * The SMS-specific payload that overrides corresponding attributes in generic payload for SMS Bindings
     */
    sms?: any | null;
    /**
     * Deprecated
     */
    facebookMessenger?: any | null;
    /**
     * Deprecated
     */
    alexa?: any | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        dateCreated: Date | null | undefined;
        identities: string[] | null | undefined;
        tags: string[] | null | undefined;
        segments: string[] | null | undefined;
        priority: NotificationPriority | undefined;
        ttl: number | null | undefined;
        title: string | null | undefined;
        body: string | null | undefined;
        sound: string | null | undefined;
        action: string | null | undefined;
        data: any;
        apn: any;
        gcm: any;
        fcm: any;
        sms: any;
        facebookMessenger: any;
        alexa: any;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
