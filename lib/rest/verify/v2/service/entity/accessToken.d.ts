/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2 = require('../../../V2');
import { SerializableClass } from '../../../../../interfaces';

type AccessTokenFactorTypes = 'push';

/**
 * Initialize the AccessTokenList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Sid.
 * @param identity - Unique identity of the Entity
 */
declare function AccessTokenList(version: V2, serviceSid: string, identity: string): AccessTokenListInstance;

interface AccessTokenListInstance {
  /**
   * create a AccessTokenInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: AccessTokenListInstanceCreateOptions, callback?: (error: Error | null, item: AccessTokenInstance) => any): Promise<AccessTokenInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property factorType - The Type of this Factor
 */
interface AccessTokenListInstanceCreateOptions {
  factorType: AccessTokenFactorTypes;
}

interface AccessTokenPayload extends AccessTokenResource, Page.TwilioResponsePayload {
}

interface AccessTokenResource {
  token: string;
}

interface AccessTokenSolution {
  identity?: string;
  serviceSid?: string;
}


declare class AccessTokenInstance extends SerializableClass {
  /**
   * Initialize the AccessTokenContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param identity - Unique identity of the Entity
   */
  constructor(version: V2, payload: AccessTokenPayload, serviceSid: string, identity: string);

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  token: string;
}


declare class AccessTokenPage extends Page<V2, AccessTokenPayload, AccessTokenResource, AccessTokenInstance> {
  /**
   * Initialize the AccessTokenPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: AccessTokenSolution);

  /**
   * Build an instance of AccessTokenInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AccessTokenPayload): AccessTokenInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { AccessTokenFactorTypes, AccessTokenInstance, AccessTokenList, AccessTokenListInstance, AccessTokenListInstanceCreateOptions, AccessTokenPage, AccessTokenPayload, AccessTokenResource, AccessTokenSolution }
