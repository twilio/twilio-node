/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V2010 = require('../../V2010');
import deserialize = require('../../../../base/deserialize');
import values = require('../../../../base/values');

/**
 * @description Initialize the ShortCodeList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 */
declare function ShortCodeList(version: V2010, accountSid: string): ShortCodeListInstance;

/**
 * Options to pass to update
 *
 * @property friendlyName - A human readable description of this resource
 * @property apiVersion - The API version to use
 * @property smsUrl - URL Twilio will request when receiving an SMS
 * @property smsMethod - HTTP method to use when requesting the sms url
 * @property smsFallbackUrl - URL Twilio will request if an error occurs in executing TwiML
 * @property smsFallbackMethod - HTTP method Twilio will use with sms fallback url
 */
export interface UpdateOptions {
  apiVersion?: string;
  friendlyName?: string;
  smsFallbackMethod?: string;
  smsFallbackUrl?: string;
  smsMethod?: string;
  smsUrl?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - A human readable description of this resource
 * @property apiVersion - The API version to use
 * @property smsUrl - URL Twilio will request when receiving an SMS
 * @property smsMethod - HTTP method to use when requesting the sms url
 * @property smsFallbackUrl - URL Twilio will request if an error occurs in executing TwiML
 * @property smsFallbackMethod - HTTP method Twilio will use with sms fallback url
 */
export interface UpdateOptions {
  apiVersion?: string;
  friendlyName?: string;
  smsFallbackMethod?: string;
  smsFallbackUrl?: string;
  smsMethod?: string;
  smsUrl?: string;
}


declare class ShortCodePage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.ShortCodePage
   * @augments Page
   * @description Initialize the ShortCodePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of ShortCodeInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.ShortCodePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ShortCodeInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.ShortCodeInstance
   * @description Initialize the ShortCodeContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property apiVersion - The API version to use
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property friendlyName - A human readable description of this resource
   * @property shortCode - The short code. e.g., 894546.
   * @property sid - A string that uniquely identifies this short-codes
   * @property smsFallbackMethod - HTTP method Twilio will use with sms fallback url
   * @property smsFallbackUrl - URL Twilio will request if an error occurs in executing TwiML
   * @property smsMethod - HTTP method to use when requesting the sms url
   * @property smsUrl - URL Twilio will request when receiving an SMS
   * @property uri - The URI for this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param sid - Fetch by unique short-code Sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, sid: sid);

  _proxy?: ShortCodeContext;
  /**
   * fetch a ShortCodeInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.ShortCodeInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the ShortCodeInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.ShortCodeInstance
   * @instance
   */
  toJSON();
  /**
   * update a ShortCodeInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.ShortCodeInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class ShortCodeContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.ShortCodeContext
   * @description Initialize the ShortCodeContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique short-code Sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, sid: sid);

  /**
   * fetch a ShortCodeInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.ShortCodeContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * update a ShortCodeInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.ShortCodeContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { ShortCodeContext, ShortCodeInstance, ShortCodeList, ShortCodePage }
