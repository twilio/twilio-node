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
 * @description Initialize the CredentialList
 *
 * @param version - Version of the resource
 */
declare function CredentialList(version: V1): CredentialListInstance;

/**
 * Options to pass to update
 *
 * @property friendlyName - Friendly name for stored credential
 * @property certificate - [APN only] URL encoded representation of the certificate, e.
 * @property privateKey - [APN only] URL encoded representation of the private key, e.
 * @property sandbox - [APN only] use this credential for sending to production or sandbox APNs
 * @property apiKey - [GCM only] This is the "API key" for project from Google Developer console for your GCM Service application credential
 * @property secret - The secret
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
 * @property certificate - [APN only] URL encoded representation of the certificate, e.
 * @property privateKey - [APN only] URL encoded representation of the private key, e.
 * @property sandbox - [APN only] use this credential for sending to production or sandbox APNs
 * @property apiKey - [GCM only] This is the "API key" for project from Google Developer console for your GCM Service application credential
 * @property secret - The secret
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
   * @constructor Twilio.IpMessaging.V1.CredentialPage
   * @augments Page
   * @description Initialize the CredentialPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.IpMessaging.V1, response: object, solution: object);

  /**
   * Build an instance of CredentialInstance
   *
   * @function getInstance
   * @memberof Twilio.IpMessaging.V1.CredentialPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class CredentialInstance {
  /**
   * @constructor Twilio.IpMessaging.V1.CredentialInstance
   * @description Initialize the CredentialContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account[/console] responsible for this resource.
   * @property friendlyName - The human-readable name of this resource.
   * @property type - Indicates which push notifications service this credential is for - either gcm or apn
   * @property sandbox - [APN only] true when this resource should use the sandbox APN service.
   * @property dateCreated - The date that this resource was created.
   * @property dateUpdated - The date that this resource was last updated.
   * @property url - An absolute URL for this credential resource.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.IpMessaging.V1, payload: object, sid: sid);

  _proxy?: CredentialContext;
  /**
   * fetch a CredentialInstance
   *
   * @function fetch
   * @memberof Twilio.IpMessaging.V1.CredentialInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a CredentialInstance
   *
   * @function remove
   * @memberof Twilio.IpMessaging.V1.CredentialInstance
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
   * @memberof Twilio.IpMessaging.V1.CredentialInstance
   * @instance
   */
  toJSON();
  /**
   * update a CredentialInstance
   *
   * @function update
   * @memberof Twilio.IpMessaging.V1.CredentialInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class CredentialContext {
  /**
   * @constructor Twilio.IpMessaging.V1.CredentialContext
   * @description Initialize the CredentialContext
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.IpMessaging.V1, sid: sid);

  /**
   * fetch a CredentialInstance
   *
   * @function fetch
   * @memberof Twilio.IpMessaging.V1.CredentialContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a CredentialInstance
   *
   * @function remove
   * @memberof Twilio.IpMessaging.V1.CredentialContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a CredentialInstance
   *
   * @function update
   * @memberof Twilio.IpMessaging.V1.CredentialContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { CredentialContext, CredentialInstance, CredentialList, CredentialPage }
