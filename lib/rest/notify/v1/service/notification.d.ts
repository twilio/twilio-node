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
 * @param serviceSid - The SID of the Service that the resource is associated with
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
 * @property action - The actions to display for the notification
 * @property alexa - Deprecated
 * @property apn - The APNS-specific payload that overrides corresponding attributes in a generic payload for APNS Bindings
 * @property body - The notification body text
 * @property data - The custom key-value pairs of the notification's payload
 * @property facebookMessenger - Deprecated
 * @property fcm - The FCM-specific payload that overrides corresponding attributes in generic payload for FCM Bindings
 * @property gcm - The GCM-specific payload that overrides corresponding attributes in generic payload for GCM Bindings
 * @property identity - The `identity` value that identifies the new resource's User
 * @property priority - The priority of the notification
 * @property segment - A Segment to notify
 * @property sms - The SMS-specific payload that overrides corresponding attributes in generic payload for SMS Bindings
 * @property sound - The name of the sound to be played for the notification
 * @property tag - A tag that selects the Bindings to notify
 * @property title - The notification title
 * @property toBinding - The destination address specified as a JSON string
 * @property ttl - How long, in seconds, the notification is valid
 */
interface NotificationListInstanceCreateOptions {
  action?: string;
  alexa?: object;
  apn?: object;
  body?: string;
  data?: object;
  facebookMessenger?: object;
  fcm?: object;
  gcm?: object;
  identity?: string[];
  priority?: NotificationPriority;
  segment?: string[];
  sms?: object;
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
  alexa: object;
  apn: object;
  body: string;
  data: object;
  date_created: Date;
  facebook_messenger: object;
  fcm: object;
  gcm: object;
  identities: string;
  priority: NotificationPriority;
  segments: string;
  service_sid: string;
  sid: string;
  sms: object;
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
   * @param serviceSid - The SID of the Service that the resource is associated with
   */
  constructor(version: V1, payload: NotificationPayload, serviceSid: string);

  accountSid: string;
  action: string;
  alexa: object;
  apn: object;
  body: string;
  data: object;
  dateCreated: Date;
  facebookMessenger: object;
  fcm: object;
  gcm: object;
  identities: string;
  priority: NotificationPriority;
  segments: string;
  serviceSid: string;
  sid: string;
  sms: object;
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
