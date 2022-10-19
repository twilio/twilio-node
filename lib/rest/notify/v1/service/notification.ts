/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Notify
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");

type NotificationPriority = 'high'|'low';


/**
 * Options to pass to create a NotificationInstance
 *
 * @property { string } [body] The notification text. For FCM and GCM, translates to &#x60;data.twi_body&#x60;. For APNS, translates to &#x60;aps.alert.body&#x60;. For SMS, translates to &#x60;body&#x60;. SMS requires either this &#x60;body&#x60; value, or &#x60;media_urls&#x60; attribute defined in the &#x60;sms&#x60; parameter of the notification.
 * @property { NotificationPriority } [priority] 
 * @property { number } [ttl] How long, in seconds, the notification is valid. Can be an integer between 0 and 2,419,200, which is 4 weeks, the default and the maximum supported time to live (TTL). Delivery should be attempted if the device is offline until the TTL elapses. Zero means that the notification delivery is attempted immediately, only once, and is not stored for future delivery. SMS does not support this property.
 * @property { string } [title] The notification title. For FCM and GCM, this translates to the &#x60;data.twi_title&#x60; value. For APNS, this translates to the &#x60;aps.alert.title&#x60; value. SMS does not support this property. This field is not visible on iOS phones and tablets but appears on Apple Watch and Android devices.
 * @property { string } [sound] The name of the sound to be played for the notification. For FCM and GCM, this Translates to &#x60;data.twi_sound&#x60;.  For APNS, this translates to &#x60;aps.sound&#x60;.  SMS does not support this property.
 * @property { string } [action] The actions to display for the notification. For APNS, translates to the &#x60;aps.category&#x60; value. For GCM, translates to the &#x60;data.twi_action&#x60; value. For SMS, this parameter is not supported and is omitted from deliveries to those channels.
 * @property { any } [data] The custom key-value pairs of the notification\\\&#39;s payload. For FCM and GCM, this value translates to &#x60;data&#x60; in the FCM and GCM payloads. FCM and GCM [reserve certain keys](https://firebase.google.com/docs/cloud-messaging/http-server-ref) that cannot be used in those channels. For APNS, attributes of &#x60;data&#x60; are inserted into the APNS payload as custom properties outside of the &#x60;aps&#x60; dictionary. In all channels, we reserve keys that start with &#x60;twi_&#x60; for future use. Custom keys that start with &#x60;twi_&#x60; are not allowed and are rejected as 400 Bad request with no delivery attempted. For SMS, this parameter is not supported and is omitted from deliveries to those channels.
 * @property { any } [apn] The APNS-specific payload that overrides corresponding attributes in the generic payload for APNS Bindings. This property maps to the APNS &#x60;Payload&#x60; item, therefore the &#x60;aps&#x60; key must be used to change standard attributes. Adds custom key-value pairs to the root of the dictionary. See the [APNS documentation](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CommunicatingwithAPNs.html) for more details. We reserve keys that start with &#x60;twi_&#x60; for future use. Custom keys that start with &#x60;twi_&#x60; are not allowed.
 * @property { any } [gcm] The GCM-specific payload that overrides corresponding attributes in the generic payload for GCM Bindings.  This property maps to the root JSON dictionary. See the [GCM documentation](https://firebase.google.com/docs/cloud-messaging/http-server-ref) for more details. Target parameters &#x60;to&#x60;, &#x60;registration_ids&#x60;, and &#x60;notification_key&#x60; are not allowed. We reserve keys that start with &#x60;twi_&#x60; for future use. Custom keys that start with &#x60;twi_&#x60; are not allowed. GCM also [reserves certain keys](https://firebase.google.com/docs/cloud-messaging/http-server-ref).
 * @property { any } [sms] The SMS-specific payload that overrides corresponding attributes in the generic payload for SMS Bindings.  Each attribute in this value maps to the corresponding &#x60;form&#x60; parameter of the Twilio [Message](https://www.twilio.com/docs/sms/send-messages) resource.  These parameters of the Message resource are supported in snake case format: &#x60;body&#x60;, &#x60;media_urls&#x60;, &#x60;status_callback&#x60;, and &#x60;max_price&#x60;.  The &#x60;status_callback&#x60; parameter overrides the corresponding parameter in the messaging service, if configured. The &#x60;media_urls&#x60; property expects a JSON array.
 * @property { any } [facebookMessenger] Deprecated.
 * @property { any } [fcm] The FCM-specific payload that overrides corresponding attributes in the generic payload for FCM Bindings. This property maps to the root JSON dictionary. See the [FCM documentation](https://firebase.google.com/docs/cloud-messaging/http-server-ref#downstream) for more details. Target parameters &#x60;to&#x60;, &#x60;registration_ids&#x60;, &#x60;condition&#x60;, and &#x60;notification_key&#x60; are not allowed in this parameter. We reserve keys that start with &#x60;twi_&#x60; for future use. Custom keys that start with &#x60;twi_&#x60; are not allowed. FCM also [reserves certain keys](https://firebase.google.com/docs/cloud-messaging/http-server-ref), which cannot be used in that channel.
 * @property { Array<string> } [segment] The Segment resource is deprecated. Use the &#x60;tag&#x60; parameter, instead.
 * @property { any } [alexa] Deprecated.
 * @property { Array<string> } [toBinding] The destination address specified as a JSON string.  Multiple &#x60;to_binding&#x60; parameters can be included but the total size of the request entity should not exceed 1MB. This is typically sufficient for 10,000 phone numbers.
 * @property { string } [deliveryCallbackUrl] URL to send webhooks.
 * @property { Array<string> } [identity] The &#x60;identity&#x60; value that uniquely identifies the new resource\\\&#39;s [User](https://www.twilio.com/docs/chat/rest/user-resource) within the [Service](https://www.twilio.com/docs/notify/api/service-resource). Delivery will be attempted only to Bindings with an Identity in this list. No more than 20 items are allowed in this list.
 * @property { Array<string> } [tag] A tag that selects the Bindings to notify. Repeat this parameter to specify more than one tag, up to a total of 5 tags. The implicit tag &#x60;all&#x60; is available to notify all Bindings in a Service instance. Similarly, the implicit tags &#x60;apn&#x60;, &#x60;fcm&#x60;, &#x60;gcm&#x60;, &#x60;sms&#x60; and &#x60;facebook-messenger&#x60; are available to notify all Bindings in a specific channel.
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
  create(params?: any, callback?: any): Promise<NotificationInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface NotificationSolution {
  serviceSid?: string;
}

interface NotificationListInstanceImpl extends NotificationListInstance {}
class NotificationListInstanceImpl implements NotificationListInstance {
  _version?: V1;
  _solution?: NotificationSolution;
  _uri?: string;

}

export function NotificationListInstance(version: V1, serviceSid: string): NotificationListInstance {
  const instance = {} as NotificationListInstanceImpl;

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/Notifications`;

  instance.create = function create(params?: any, callback?: any): Promise<NotificationInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params.body !== undefined) data['Body'] = params.body;
    if (params.priority !== undefined) data['Priority'] = params.priority;
    if (params.ttl !== undefined) data['Ttl'] = params.ttl;
    if (params.title !== undefined) data['Title'] = params.title;
    if (params.sound !== undefined) data['Sound'] = params.sound;
    if (params.action !== undefined) data['Action'] = params.action;
    if (params.data !== undefined) data['Data'] = params.data;
    if (params.apn !== undefined) data['Apn'] = params.apn;
    if (params.gcm !== undefined) data['Gcm'] = params.gcm;
    if (params.sms !== undefined) data['Sms'] = params.sms;
    if (params.facebookMessenger !== undefined) data['FacebookMessenger'] = params.facebookMessenger;
    if (params.fcm !== undefined) data['Fcm'] = params.fcm;
    if (params.segment !== undefined) data['Segment'] = serialize.map(params.segment, ((e) => e));
    if (params.alexa !== undefined) data['Alexa'] = params.alexa;
    if (params.toBinding !== undefined) data['ToBinding'] = serialize.map(params.toBinding, ((e) => e));
    if (params.deliveryCallbackUrl !== undefined) data['DeliveryCallbackUrl'] = params.deliveryCallbackUrl;
    if (params.identity !== undefined) data['Identity'] = serialize.map(params.identity, ((e) => e));
    if (params.tag !== undefined) data['Tag'] = serialize.map(params.tag, ((e) => e));

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new NotificationInstance(operationVersion, payload, this._solution.serviceSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



    }

  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}

interface NotificationPayload extends NotificationResource, Page.TwilioResponsePayload {
}

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

export class NotificationInstance {

  constructor(protected _version: V1, payload: NotificationPayload, serviceSid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.identities = payload.identities;
    this.tags = payload.tags;
    this.segments = payload.segments;
    this.priority = payload.priority;
    this.ttl = deserialize.integer(payload.ttl);
    this.title = payload.title;
    this.body = payload.body;
    this.sound = payload.sound;
    this.action = payload.action;
    this.data = payload.data;
    this.apn = payload.apn;
    this.gcm = payload.gcm;
    this.fcm = payload.fcm;
    this.sms = payload.sms;
    this.facebookMessenger = payload.facebook_messenger;
    this.alexa = payload.alexa;

  }

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
  toJSON() {
    return {
      sid: this.sid, 
      accountSid: this.accountSid, 
      serviceSid: this.serviceSid, 
      dateCreated: this.dateCreated, 
      identities: this.identities, 
      tags: this.tags, 
      segments: this.segments, 
      priority: this.priority, 
      ttl: this.ttl, 
      title: this.title, 
      body: this.body, 
      sound: this.sound, 
      action: this.action, 
      data: this.data, 
      apn: this.apn, 
      gcm: this.gcm, 
      fcm: this.fcm, 
      sms: this.sms, 
      facebookMessenger: this.facebookMessenger, 
      alexa: this.alexa
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class NotificationPage extends Page<V1, NotificationPayload, NotificationResource, NotificationInstance> {
  /**
   * Initialize the NotificationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: NotificationSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of NotificationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: NotificationPayload): NotificationInstance {
    return new NotificationInstance(
      this._version,
      payload,
      this._solution.serviceSid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

