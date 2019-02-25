/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import serialize = require('../../../../base/serialize');
import { SerializableClass } from '../../../../interfaces';

type NotificationPriority = 'high'|'low';

/**
 * Initialize the NotificationList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - The service_sid
 */
declare function NotificationList(version: V1, serviceSid: string): NotificationListInstance;

interface NotificationListInstance {
  /**
   * create a NotificationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: NotificationListInstanceCreateOptions, callback?: (error: Error | null, item: NotificationInstance) => any): Promise<NotificationInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property action - Specifies the actions to be displayed for the notification.
 * @property alexa - The alexa
 * @property apn - APNS specific payload that overrides corresponding attributes in a generic payload for Bindings with the apn BindingType.
 * @property body - Indicates the notification body text.
 * @property data - This parameter specifies the custom key-value pairs of the notification's payload.
 * @property facebookMessenger - Messenger specific payload that overrides corresponding attributes in generic payload for Bindings with facebook-messenger BindingType.
 * @property fcm - FCM specific payload that overrides corresponding attributes in generic payload for Bindings with fcm BindingType.
 * @property gcm - GCM specific payload that overrides corresponding attributes in generic payload for Bindings with gcm BindingType.
 * @property identity - Delivery will be attempted only to Bindings with an Identity in this list.
 * @property priority - Two priorities defined: low and high.
 * @property segment - The segment
 * @property sms - SMS specific payload that overrides corresponding attributes in generic payload for Bindings with sms BindingType.
 * @property sound - Indicates a sound to be played.
 * @property tag - Delivery will be attempted only to Bindings that have all of the Tags in this list.
 * @property title - Indicates the notification title.
 * @property toBinding - The destination address in a JSON object.
 * @property ttl - This parameter specifies how long the notification is valid.
 */
interface NotificationListInstanceCreateOptions {
  action?: string;
  alexa?: string;
  apn?: string;
  body?: string;
  data?: string;
  facebookMessenger?: string;
  fcm?: string;
  gcm?: string;
  identity?: string[];
  priority?: NotificationPriority;
  segment?: string[];
  sms?: string;
  sound?: string;
  tag?: string[];
  title?: string;
  toBinding?: string[];
  ttl?: number;
}

interface NotificationPayload extends NotificationResource, Page.TwilioResponsePayload {
}

interface NotificationResource {
  account_sid: string;
  action: string;
  alexa: string;
  apn: string;
  body: string;
  data: string;
  date_created: Date;
  facebook_messenger: string;
  fcm: string;
  gcm: string;
  identities: string;
  priority: NotificationPriority;
  segments: string;
  service_sid: string;
  sid: string;
  sms: string;
  sound: string;
  tags: string;
  title: string;
  ttl: number;
}

interface NotificationSolution {
  serviceSid?: string;
}


declare class NotificationInstance extends SerializableClass {
  /**
   * Initialize the NotificationContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   */
  constructor(version: V1, payload: NotificationPayload, serviceSid: string);

  accountSid: string;
  action: string;
  alexa: string;
  apn: string;
  body: string;
  data: string;
  dateCreated: Date;
  facebookMessenger: string;
  fcm: string;
  gcm: string;
  identities: string;
  priority: NotificationPriority;
  segments: string;
  serviceSid: string;
  sid: string;
  sms: string;
  sound: string;
  tags: string;
  title: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  ttl: number;
}


declare class NotificationPage extends Page<V1, NotificationPayload, NotificationResource, NotificationInstance> {
  /**
   * Initialize the NotificationPage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: NotificationSolution);

  /**
   * Build an instance of NotificationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: NotificationPayload): NotificationInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { NotificationInstance, NotificationList, NotificationListInstance, NotificationListInstanceCreateOptions, NotificationPage, NotificationPayload, NotificationResource, NotificationSolution }
