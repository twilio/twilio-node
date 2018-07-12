/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import V1 = require('../V1');
import deserialize = require('../../../base/deserialize');
import serialize = require('../../../base/serialize');
import values = require('../../../base/values');

/**
 * @constructor Twilio.Notify.V1.CredentialList
 * @description Initialize the CredentialList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 */
declare function CredentialList(version: V1): CredentialListInstance;

/**
 * Options to pass to update
 *
 * @property friendlyName - Friendly name for stored credential
 * @property certificate - [APN only] URL encoded representation of the certificate.
 * @property privateKey - [APN only] URL encoded representation of the private key.
 * @property sandbox - [APN only] use this credential for sending to production or sandbox APNs
 * @property apiKey - [GCM only] This is the "Server key" of your project from Firebase console under Settings / Cloud messaging.
 * @property secret - [FCM only] This is the "Server key" of your project from Firebase console under Settings / Cloud messaging.
 */
export interface UpdateOptions {
  apiKey?: string;
  certificate?: string;
  friendlyName?: string;
  privateKey?: string;
  sandbox?: boolean;
  secret?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - Friendly name for stored credential
 * @property certificate - [APN only] URL encoded representation of the certificate.
 * @property privateKey - [APN only] URL encoded representation of the private key.
 * @property sandbox - [APN only] use this credential for sending to production or sandbox APNs
 * @property apiKey - [GCM only] This is the "Server key" of your project from Firebase console under Settings / Cloud messaging.
 * @property secret - [FCM only] This is the "Server key" of your project from Firebase console under Settings / Cloud messaging.
 */
export interface UpdateOptions {
  apiKey?: string;
  certificate?: string;
  friendlyName?: string;
  privateKey?: string;
  sandbox?: boolean;
  secret?: string;
}


declare class CredentialPage extends Page {
  /**
   * @constructor Twilio.Notify.V1.CredentialPage
   * @augments Page
   * @description Initialize the CredentialPage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Notify.V1, response: object, solution: object);

  /**
   * Build an instance of CredentialInstance
   *
   * @function getInstance
   * @memberof Twilio.Notify.V1.CredentialPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class CredentialInstance {
  /**
   * @constructor Twilio.Notify.V1.CredentialInstance
   * @description Initialize the CredentialContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - The sid
   * @property accountSid - The account_sid
   * @property friendlyName - Friendly name for stored credential
   * @property type - Credential type, one of "gcm", "fcm", or "apn"
   * @property sandbox - [APN only] use this credential for sending to production or sandbox APNs
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Notify.V1, payload: object, sid: sid);

  _proxy?: CredentialContext;
  /**
   * fetch a CredentialInstance
   *
   * @function fetch
   * @memberof Twilio.Notify.V1.CredentialInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a CredentialInstance
   *
   * @function remove
   * @memberof Twilio.Notify.V1.CredentialInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the CredentialInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Notify.V1.CredentialInstance
   * @instance
   */
  toJSON();
  /**
   * update a CredentialInstance
   *
   * @function update
   * @memberof Twilio.Notify.V1.CredentialInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class CredentialContext {
  /**
   * @constructor Twilio.Notify.V1.CredentialContext
   * @description Initialize the CredentialContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Notify.V1, sid: sid);

  /**
   * fetch a CredentialInstance
   *
   * @function fetch
   * @memberof Twilio.Notify.V1.CredentialContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a CredentialInstance
   *
   * @function remove
   * @memberof Twilio.Notify.V1.CredentialContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a CredentialInstance
   *
   * @function update
   * @memberof Twilio.Notify.V1.CredentialContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { CredentialContext, CredentialInstance, CredentialList, CredentialPage }
