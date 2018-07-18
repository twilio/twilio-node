/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the ValidationRequestList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique ID of the Account responsible for this Caller Id.
 */
declare function ValidationRequestList(version: V2010, accountSid: string): ValidationRequestListInstance;

interface ValidationRequestResource {
  account_sid: string;
  call_sid: string;
  friendly_name: string;
  phone_number: string;
  validation_code: number;
}

interface ValidationRequestPayload extends ValidationRequestResource, Page.TwilioResponsePayload {
}

interface ValidationRequestSolution {
  accountSid?: string;
}

interface ValidationRequestListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ValidationRequestContext;
  /**
   * create a ValidationRequestInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.ValidationRequestList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts: object, callback?: function);
}


declare class ValidationRequestPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.ValidationRequestPage
   * @augments Page
   * @description Initialize the ValidationRequestPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: Response<string>, solution: object);

  /**
   * Build an instance of ValidationRequestInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.ValidationRequestPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ValidationRequestInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.ValidationRequestInstance
   * @description Initialize the ValidationRequestContext
   *
   * @property accountSid - The unique ID of the Account responsible for this Caller Id.
   * @property phoneNumber - The incoming phone number.
   * @property friendlyName - A human readable descriptive text for this resource, up to 64 characters long.
   * @property validationCode - The 6 digit validation code that must be entered via the phone to validate this phone number for Caller ID.
   * @property callSid - The unique id of the Call created for this validation attempt.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique ID of the Account responsible for this Caller Id.
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid);

  /**
   * Produce a plain JSON object version of the ValidationRequestInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.ValidationRequestInstance
   * @instance
   */
  toJSON();
}

export { ValidationRequestInstance, ValidationRequestList, ValidationRequestListInstance, ValidationRequestPage, ValidationRequestPayload, ValidationRequestResource, ValidationRequestSolution }
