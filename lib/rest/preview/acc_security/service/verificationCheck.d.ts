/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import AccSecurity = require('../../AccSecurity');
import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the VerificationCheckList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Sid.
 */
declare function VerificationCheckList(version: AccSecurity, serviceSid: string): VerificationCheckListInstance;

interface VerificationCheckResource {
  account_sid: string;
  channel: VerificationCheckChannel;
  date_created: Date;
  date_updated: Date;
  service_sid: string;
  sid: string;
  status: string;
  to: string;
  valid: boolean;
}

interface VerificationCheckPayload extends VerificationCheckResource, Page.TwilioResponsePayload {
}

interface VerificationCheckSolution {
  serviceSid?: string;
}

interface VerificationCheckListInstance {
  /**
   * create a VerificationCheckInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: VerificationCheckListInstanceCreateOptions, callback?: (error: Error | null, items: VerificationCheckListInstance) => any): Promise<VerificationCheckInstance>;
}


declare class VerificationCheckPage extends Page<AccSecurity, VerificationCheckPayload, VerificationCheckResource, VerificationCheckInstance> {
  /**
   * Initialize the VerificationCheckPagePLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: AccSecurity, response: Response<string>, solution: VerificationCheckSolution);

  /**
   * Build an instance of VerificationCheckInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: VerificationCheckPayload): VerificationCheckInstance;
}


declare class VerificationCheckInstance extends SerializableClass {
  /**
   * Initialize the VerificationCheckContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Verification Check.
   * @property serviceSid - Service Sid.
   * @property accountSid - Account Sid.
   * @property to - To phonenumber
   * @property channel - sms or call
   * @property status - pending, approved, denied or expired
   * @property valid - successful verification
   * @property dateCreated - The date this Verification Check was created
   * @property dateUpdated - The date this Verification Check was updated
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   */
  constructor(version: AccSecurity, payload: VerificationCheckPayload, serviceSid: string);

  accountSid: string;
  channel: verification_check.channel;
  dateCreated: Date;
  dateUpdated: Date;
  serviceSid: string;
  sid: string;
  status: string;
  to: string;
  /**
   * Produce a plain JSON object version of the VerificationCheckInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  valid: boolean;
}

export { VerificationCheckInstance, VerificationCheckList, VerificationCheckListInstance, VerificationCheckListInstanceCreateOptions, VerificationCheckPage, VerificationCheckPayload, VerificationCheckResource, VerificationCheckSolution }
